import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  BookOpen, 
  Bot, 
  Trophy, 
  BarChart3, 
  Users, 
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  Play,
  UserCheck,
  Zap
} from 'lucide-react';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expanded Learning Library",
      description: "Comprehensive CAPS-aligned content for Grade 8-12 students with interactive lessons and resources.",
      backgroundImage: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Realistic AI Avatar Tutor",
      description: "Personalized AI tutoring with realistic avatars that adapt to each student's learning style and pace.",
      backgroundImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamified Progress & Badges",
      description: "Engaging gamification system with achievements, badges, and progress tracking to motivate learning.",
      backgroundImage: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comprehensive Dashboards",
      description: "Detailed dashboards for students, parents, and schools to track progress and performance.",
      backgroundImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Grade 11 Student",
      content: "This platform has completely transformed how I study. The AI tutor explains concepts in ways I actually understand!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Parent",
      content: "As a parent, I love being able to track my daughter's progress. The dashboard gives me real insights into her learning.",
      rating: 5
    },
    {
      name: "Dr. Amanda Smith",
      role: "High School Teacher",
      content: "This platform has revolutionized my classroom. Students are more engaged and their performance has improved significantly.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is Spongein 2.0?",
      answer: "Our platform is an AI-powered educational platform designed specifically for Grade 8-12 CAPS students, featuring interactive learning, AI tutoring, and comprehensive progress tracking."
    },
    {
      question: "How does the AI tutor work?",
      answer: "Our AI tutor uses advanced algorithms to understand each student's learning style and provides personalized explanations, practice problems, and feedback to optimize learning outcomes."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day free trial for all new users. You can explore our features and see how our platform can benefit your learning journey."
    },
    {
      question: "Can parents track their child's progress?",
      answer: "Absolutely! Parents have access to a comprehensive dashboard that shows their child's learning progress, achievements, time spent studying, and areas that need attention."
    },
    {
      question: "Is the content aligned with CAPS curriculum?",
      answer: "Yes, all our content is carefully aligned with the South African CAPS curriculum for grades 8-12, ensuring students learn exactly what they need for their exams."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Learning with
              <span className="text-secondary-400 block">AI-Powered Education</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of education with our platform. Our AI tutors, gamified learning, 
              and comprehensive dashboards make studying engaging and effective for Grade 8-12 CAPS students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/onboarding" 
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning Now
              </Link>
              <Link 
                to="#features" 
                className="border border-secondary-600 text-secondary-400 hover:bg-secondary-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Learning
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how Spongein 2.0 revolutionizes education with cutting-edge technology and proven pedagogical methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative bg-dark-700 p-6 rounded-xl hover:bg-dark-600 transition-all duration-300 overflow-hidden group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${feature.backgroundImage})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-dark-700/60" />
                
                {/* Content */}
                <div className="relative z-10">
                <div className="text-secondary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Sign Up</h3>
              <p className="text-gray-400">
                Create your account and verify your email to get started with Spongein 2.0.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Choose Role</h3>
              <p className="text-gray-400">
                Select whether you're a student, parent, or school administrator to customize your experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Start Learning</h3>
              <p className="text-gray-400">
                Begin your personalized learning journey with AI tutors and gamified progress tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400">
              Hear from students, parents, and teachers who love Spongein 2.0
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-dark-700 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              Flexible pricing options to suit every learner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Freemium Plan */}
            <div className="bg-dark-700 p-8 rounded-xl border border-dark-600">
              <h3 className="text-2xl font-bold text-white mb-4">Freemium</h3>
              <p className="text-3xl font-bold text-primary-400 mb-6">
                Free
                <span className="text-lg text-gray-400 font-normal"> / 7 days trial</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Access to first video of each topic</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Basic progress tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Limited AI tutor interactions</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">7-day trial period</span>
                </li>
              </ul>
              <Link 
                to="/onboarding" 
                className="w-full bg-dark-600 hover:bg-dark-500 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 p-8 rounded-xl relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-dark-900 px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
              <p className="text-3xl font-bold text-white mb-6">
                R299
                <span className="text-lg text-secondary-100 font-normal"> / month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-secondary-100">Full access to all content</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-secondary-100">Unlimited AI tutor sessions</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-secondary-100">Advanced progress analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-secondary-100">Gamified badges & achievements</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-secondary-100">Parent/School dashboards</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-secondary-100">Priority support</span>
                </li>
              </ul>
              <Link 
                to="/onboarding" 
                className="w-full bg-white hover:bg-gray-100 text-secondary-700 py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Find answers to common questions about Spongein 2.0
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-dark-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-dark-600 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-secondary-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-secondary-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;