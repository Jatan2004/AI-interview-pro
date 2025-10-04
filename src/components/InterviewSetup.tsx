import { useState } from 'react';
import { ArrowLeft, Briefcase, Users, Target, Zap, ChevronRight, Building2 } from 'lucide-react';

interface InterviewSetupProps {
  onStart: (config: any) => void;
  onBack: () => void;
}

export function InterviewSetup({ onStart, onBack }: InterviewSetupProps) {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [numQuestions, setNumQuestions] = useState(5);

  const interviewTypes = [
    {
      id: 'technical',
      name: 'Technical',
      icon: Briefcase,
      description: 'Algorithms, data structures, system design',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'behavioral',
      name: 'Behavioral',
      icon: Users,
      description: 'Leadership, teamwork, problem-solving',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'case_study',
      name: 'Case Study',
      icon: Target,
      description: 'Business analysis, strategic thinking',
      color: 'from-orange-500 to-amber-500',
    },
    {
      id: 'industry',
      name: 'Industry-Specific',
      icon: Zap,
      description: 'Domain expertise and knowledge',
      color: 'from-violet-500 to-pink-500',
    },
  ];

  const companies = [
    { id: 'google', name: 'Google', logo: '🔍' },
    { id: 'meta', name: 'Meta', logo: '👥' },
    { id: 'amazon', name: 'Amazon', logo: '📦' },
    { id: 'apple', name: 'Apple', logo: '🍎' },
    { id: 'microsoft', name: 'Microsoft', logo: '🪟' },
    { id: 'netflix', name: 'Netflix', logo: '🎬' },
    { id: 'general', name: 'General (No Specific Company)', logo: '🌐' },
  ];

  const handleStart = () => {
    if (!selectedType) return;

    onStart({
      type: selectedType,
      company: selectedCompany || null,
      difficulty,
      numQuestions,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Setup Interview</h1>
          <p className="text-slate-600">Configure your practice session</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Select Interview Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interviewTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                selectedType === type.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className={`bg-gradient-to-r ${type.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{type.name}</h3>
              <p className="text-sm text-slate-600">{type.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Company (Optional)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => setSelectedCompany(company.id)}
              className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                selectedCompany === company.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="text-3xl">{company.logo}</div>
              <div className="text-sm font-medium text-slate-900 text-center">{company.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Difficulty Level</h2>
          <div className="space-y-2">
            {['easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  difficulty === level
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="font-semibold text-slate-900 capitalize">{level}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Number of Questions</h2>
          <div className="space-y-4">
            <input
              type="range"
              min="3"
              max="15"
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">{numQuestions}</div>
              <div className="text-sm text-slate-600">questions</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleStart}
        disabled={!selectedType}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        Start Interview
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
