import { useState } from 'react';
import { Search, Filter, BookOpen, ChevronRight, Clock } from 'lucide-react';

export function QuestionBank() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', 'Technical', 'Behavioral', 'Case Study', 'System Design', 'Leadership'];
  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const questions = [
    {
      id: '1',
      text: 'Describe a time when you had to work under pressure. How did you handle it?',
      category: 'Behavioral',
      difficulty: 'medium',
      suggestedTime: 300,
      company: 'Google',
    },
    {
      id: '2',
      text: 'Explain how you would design a URL shortening service like bit.ly',
      category: 'System Design',
      difficulty: 'hard',
      suggestedTime: 600,
      company: 'Meta',
    },
    {
      id: '3',
      text: 'Write a function to find the longest palindromic substring',
      category: 'Technical',
      difficulty: 'medium',
      suggestedTime: 450,
      company: 'Amazon',
    },
    {
      id: '4',
      text: 'How would you improve team collaboration in a remote setting?',
      category: 'Leadership',
      difficulty: 'easy',
      suggestedTime: 300,
      company: 'General',
    },
    {
      id: '5',
      text: 'Analyze the case: A startup wants to enter a saturated market',
      category: 'Case Study',
      difficulty: 'hard',
      suggestedTime: 900,
      company: 'McKinsey',
    },
    {
      id: '6',
      text: 'Tell me about a time you failed and what you learned from it',
      category: 'Behavioral',
      difficulty: 'easy',
      suggestedTime: 300,
      company: 'General',
    },
  ];

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'medium':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'hard':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Question Bank</h1>
        <p className="text-slate-600">Browse and practice interview questions by category</p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff === 'all' ? 'All Difficulties' : diff.charAt(0).toUpperCase() + diff.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
          <span>{filteredQuestions.length} questions found</span>
        </div>

        <div className="space-y-3">
          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                        question.difficulty
                      )}`}
                    >
                      {question.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                      {question.category}
                    </span>
                    <span className="text-xs text-slate-500">{question.company}</span>
                  </div>
                  <p className="text-slate-900 font-medium mb-2 group-hover:text-blue-600 transition-colors">
                    {question.text}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Suggested time: {formatTime(question.suggestedTime)}</span>
                  </div>
                </div>
                <button className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
