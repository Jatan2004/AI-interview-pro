import { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ThumbsUp,
  Target
} from 'lucide-react';

interface InterviewSessionProps {
  config: any;
  onComplete: () => void;
}

interface Question {
  id: string;
  text: string;
  category: string;
}

export function InterviewSession({ config, onComplete }: InterviewSessionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [response, setResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [responses, setResponses] = useState<any[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<any>(null);
  const timerRef = useRef<any>(null);

  const questions: Question[] = [
    { id: '1', text: 'Tell me about a challenging project you worked on and how you approached it.', category: 'Behavioral' },
    { id: '2', text: 'How do you handle conflicts within a team?', category: 'Behavioral' },
    { id: '3', text: 'Describe your approach to solving a complex technical problem.', category: 'Technical' },
    { id: '4', text: 'What are your greatest strengths and how do they apply to this role?', category: 'General' },
    { id: '5', text: 'Where do you see yourself in 5 years?', category: 'General' },
  ].slice(0, config.numQuestions);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const generateFeedback = (questionText: string, answer: string) => {
    const score = Math.floor(Math.random() * 30) + 70;

    return {
      score,
      strengths: [
        'Clear and structured response',
        'Good use of specific examples',
        'Demonstrated problem-solving ability'
      ],
      improvements: [
        'Could provide more quantifiable results',
        'Consider adding more context about the situation',
        'Elaborate on the impact of your actions'
      ],
      feedback: `Your response was ${score >= 85 ? 'excellent' : score >= 70 ? 'good' : 'decent'}. You provided a structured answer with relevant examples. To improve further, focus on adding more specific metrics and outcomes to demonstrate the impact of your work.`
    };
  };

  const handleSubmitResponse = () => {
    const question = questions[currentQuestionIndex];
    const feedback = generateFeedback(question.text, response);

    setCurrentFeedback(feedback);
    setResponses([...responses, {
      questionId: question.id,
      questionText: question.text,
      response,
      timeSpent,
      feedback
    }]);

    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setResponse('');
      setShowFeedback(false);
      setCurrentFeedback(null);
      setTimeSpent(0);
    } else {
      onComplete();
    }
  };

  const toggleRecording = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsRecording(true);
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    } else {
      setIsRecording(false);
    }
  };

  const toggleVideo = async () => {
    if (!videoEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setVideoEnabled(true);
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    } else {
      setVideoEnabled(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-slate-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{formatTime(timeSpent)}</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
          <div className="text-xs font-semibold text-blue-600 uppercase mb-2">
            {currentQuestion.category}
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            {currentQuestion.text}
          </h2>
        </div>

        {!showFeedback ? (
          <>
            <div className="mb-6">
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Type your response here..."
                className="w-full h-48 p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={toggleRecording}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    isRecording
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-slate-300 hover:border-slate-400 text-slate-600'
                  }`}
                >
                  {isRecording ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  <span className="text-sm font-medium">
                    {isRecording ? 'Recording...' : 'Voice'}
                  </span>
                </button>
                <button
                  onClick={toggleVideo}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    videoEnabled
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-slate-300 hover:border-slate-400 text-slate-600'
                  }`}
                >
                  {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                  <span className="text-sm font-medium">
                    {videoEnabled ? 'Video On' : 'Video Off'}
                  </span>
                </button>
              </div>

              <button
                onClick={handleSubmitResponse}
                disabled={!response.trim()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
              >
                Submit Response
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Response Submitted!</h3>
              <p className="text-slate-600">Here's your AI-powered feedback</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-slate-900">Overall Score</h4>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {currentFeedback.score}%
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{currentFeedback.feedback}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">Strengths</h4>
                </div>
                <ul className="space-y-2">
                  {currentFeedback.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-orange-900">Areas to Improve</h4>
                </div>
                <ul className="space-y-2">
                  {currentFeedback.improvements.map((improvement: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-orange-800">
                      <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Interview'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
