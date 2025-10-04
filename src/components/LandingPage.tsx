import { useState } from 'react';
import { Briefcase, Brain, TrendingUp, Users, Zap, Award, Target, Video, FileText, Building2, ChevronRight, Star } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Feedback',
      description: 'Get instant, detailed feedback on your answers from our advanced AI system',
    },
    {
      icon: Video,
      title: 'Video & Voice Practice',
      description: 'Practice with audio and video responses, just like a real interview',
    },
    {
      icon: Building2,
      title: 'Company-Specific Prep',
      description: 'Prepare for interviews at specific companies with tailored questions',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed analytics and improvement insights',
    },
    {
      icon: FileText,
      title: 'Resume Analysis',
      description: 'Upload your resume to get personalized questions based on your experience',
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Earn badges and achievements as you improve your interview skills',
    },
  ];

  const interviewTypes = [
    {
      icon: Briefcase,
      name: 'Technical',
      description: 'Algorithms, data structures, system design',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      name: 'Behavioral',
      description: 'Leadership, teamwork, problem-solving',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Target,
      name: 'Case Study',
      description: 'Business analysis, strategic thinking',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Zap,
      name: 'Industry-Specific',
      description: 'Domain expertise and knowledge',
      color: 'from-violet-500 to-pink-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      content: 'This platform helped me land my dream job at Google. The AI feedback was incredibly detailed and helped me improve my technical communication.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager at Meta',
      content: 'The company-specific interview prep was game-changing. I felt so prepared for my Meta interviews that I aced every round.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Data Scientist at Amazon',
      content: 'The performance analytics showed me exactly where I needed to improve. Within 2 weeks, my interview scores increased by 40%.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '50K+', label: 'Interviews Completed' },
    { value: '95%', label: 'Success Rate' },
    { value: '4.9/5', label: 'User Rating' },
    { value: '200+', label: 'Companies' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
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
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Master Your Next Interview
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              With AI-Powered Practice
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Practice job interviews with our advanced AI system. Get real-time feedback,
            track your progress, and land your dream job with confidence.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              Start Practicing Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
          Interview Types We Cover
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Practice across multiple interview formats to be ready for anything
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interviewTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer group"
            >
              <div className={`bg-gradient-to-r ${type.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{type.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Everything you need to ace your interviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
          Success Stories
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Join thousands of professionals who landed their dream jobs
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
              "{testimonials[activeTestimonial].content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold">
                {testimonials[activeTestimonial].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-slate-600 text-sm">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  activeTestimonial === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of successful candidates who prepared with AI Interview Pro
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Get Started for Free
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">AI Interview Pro</span>
              </div>
              <p className="text-sm leading-relaxed">
                Master your interviews with AI-powered practice and feedback.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 AI Interview Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
