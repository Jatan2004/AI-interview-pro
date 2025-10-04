import { TrendingUp, Target, Award, Calendar, BarChart3 } from 'lucide-react';

export function Analytics() {
  const performanceData = [
    { date: '2025-09-28', score: 72, interviews: 2 },
    { date: '2025-09-29', score: 75, interviews: 1 },
    { date: '2025-09-30', score: 80, interviews: 3 },
    { date: '2025-10-01', score: 78, interviews: 2 },
    { date: '2025-10-02', score: 85, interviews: 1 },
    { date: '2025-10-03', score: 88, interviews: 2 },
    { date: '2025-10-04', score: 90, interviews: 1 },
  ];

  const categoryScores = [
    { category: 'Technical', score: 85, total: 12 },
    { category: 'Behavioral', score: 92, total: 8 },
    { category: 'Case Study', score: 78, total: 4 },
    { category: 'System Design', score: 80, total: 6 },
  ];

  const recentAchievements = [
    {
      title: 'First Interview',
      description: 'Completed your first mock interview',
      icon: '🎯',
      date: '2025-09-28',
    },
    {
      title: '7-Day Streak',
      description: 'Practiced for 7 consecutive days',
      icon: '🔥',
      date: '2025-10-04',
    },
    {
      title: 'Perfect Score',
      description: 'Achieved a score of 100% on a question',
      icon: '⭐',
      date: '2025-10-03',
    },
  ];

  const maxScore = Math.max(...performanceData.map((d) => d.score));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Performance Analytics</h1>
        <p className="text-slate-600">Track your progress and identify areas for improvement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">24</div>
          <div className="text-sm text-slate-600">Total Interviews</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">85%</div>
          <div className="text-sm text-slate-600">Avg Score</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">7</div>
          <div className="text-sm text-slate-600">Day Streak</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-gradient-to-r from-violet-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
          <div className="text-sm text-slate-600">Achievements</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Performance Trend</h2>
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-2 h-64">
            {performanceData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col justify-end h-full">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-cyan-600 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
                    style={{ height: `${(data.score / maxScore) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.score}%
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 rotate-45 origin-left mt-4">
                  {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Performance by Category</h2>
          <div className="space-y-4">
            {categoryScores.map((cat, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-medium text-slate-900">{cat.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">{cat.total} interviews</span>
                    <span className="text-sm font-bold text-slate-900">{cat.score}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all"
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg border border-slate-200"
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-slate-600 mb-1">{achievement.description}</p>
                  <p className="text-xs text-slate-500">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Improvement Insights</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700">
              Your average score has improved by <strong>18%</strong> over the last 7 days
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700">
              You perform best in <strong>Behavioral</strong> interviews (92% average)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <BarChart3 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700">
              Focus on <strong>Case Study</strong> questions to boost your overall performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
