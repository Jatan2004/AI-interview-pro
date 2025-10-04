import { useState, useEffect } from 'react';
import {
  Brain,
  LogOut,
  TrendingUp,
  Calendar,
  Award,
  Target,
  BookOpen,
  BarChart3,
  Settings,
  Plus,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { InterviewSetup } from './InterviewSetup';
import { InterviewSession } from './InterviewSession';
import { QuestionBank } from './QuestionBank';
import { Analytics } from './Analytics';
import { Profile } from './Profile';

type View = 'dashboard' | 'interview-setup' | 'interview-session' | 'questions' | 'analytics' | 'profile';

interface Interview {
  id: string;
  type: string;
  company?: string;
  score: number;
  date: string;
  status: 'completed' | 'in_progress';
}

export function Dashboard() {
  const { user, signOut } = useAuth();
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedInterview, setSelectedInterview] = useState<any>(null);

  const [recentInterviews] = useState<Interview[]>([
    {
      id: '1',
      type: 'Technical',
      company: 'Google',
      score: 85,
      date: '2025-10-03',
      status: 'completed',
    },
    {
      id: '2',
      type: 'Behavioral',
      company: 'Meta',
      score: 92,
      date: '2025-10-02',
      status: 'completed',
    },
    {
      id: '3',
      type: 'Case Study',
      score: 78,
      date: '2025-10-01',
      status: 'completed',
    },
  ]);

  const stats = [
    { label: 'Total Interviews', value: '24', icon: Target, color: 'from-blue-500 to-cyan-500' },
    { label: 'Average Score', value: '85%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Current Streak', value: '7 days', icon: Calendar, color: 'from-orange-500 to-amber-500' },
    { label: 'Achievements', value: '12', icon: Award, color: 'from-violet-500 to-pink-500' },
  ];

  const handleStartInterview = (config: any) => {
    setSelectedInterview(config);
    setCurrentView('interview-session');
  };

  const handleCompleteInterview = () => {
    setSelectedInterview(null);
    setCurrentView('dashboard');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'interview-setup':
        return <InterviewSetup onStart={handleStartInterview} onBack={() => setCurrentView('dashboard')} />;
      case 'interview-session':
        return <InterviewSession config={selectedInterview} onComplete={handleCompleteInterview} />;
      case 'questions':
        return <QuestionBank />;
      case 'analytics':
        return <Analytics />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Welcome back, {user?.user_metadata?.full_name || 'there'}!
              </h1>
              <p className="text-slate-600">Ready to practice your interview skills?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Start a New Interview</h2>
              <p className="mb-6 text-blue-100">Choose your interview type and start practicing</p>
              <button
                onClick={() => setCurrentView('interview-setup')}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Interview
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Interviews</h2>
              <div className="space-y-4">
                {recentInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center border border-slate-200">
                        {interview.status === 'completed' ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : (
                          <Clock className="w-6 h-6 text-orange-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {interview.type} Interview
                          {interview.company && ` - ${interview.company}`}
                        </div>
                        <div className="text-sm text-slate-600">{interview.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{interview.score}%</div>
                      <div className="text-sm text-slate-600">Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI Interview Pro
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === 'dashboard'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Dashboard</span>
                </button>
                <button
                  onClick={() => setCurrentView('interview-setup')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === 'interview-setup'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">New Interview</span>
                </button>
                <button
                  onClick={() => setCurrentView('questions')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === 'questions'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">Question Bank</span>
                </button>
                <button
                  onClick={() => setCurrentView('analytics')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === 'analytics'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span className="font-medium">Analytics</span>
                </button>
                <button
                  onClick={() => setCurrentView('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === 'profile'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </button>
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
