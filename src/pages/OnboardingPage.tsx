import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Users, 
  GraduationCap, 
  Mail, 
  Lock, 
  Phone, 
  Building,
  Eye,
  EyeOff,
  Check,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

type UserRole = 'student' | 'parent' | 'school';
type Step = 'role' | 'registration' | 'verification' | 'subscription' | 'payment' | 'complete';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>('role');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    schoolName: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [selectedPlan, setSelectedPlan] = useState<'freemium' | 'premium' | null>(null);

  const roles = [
    {
      id: 'student' as UserRole,
      title: 'Student',
      description: 'I want to learn and improve my grades',
      icon: <User className="w-8 h-8" />
    },
    {
      id: 'parent' as UserRole,
      title: 'Parent',
      description: 'I want to track my child\'s progress',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'school' as UserRole,
      title: 'School Admin / Teacher',
      description: 'I want to manage students and track their progress',
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateRegistration = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    if (selectedRole === 'school' && !formData.schoolName.trim()) {
      newErrors.schoolName = 'School/Organization name is required';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 'role' && selectedRole) {
      setCurrentStep('registration');
    } else if (currentStep === 'registration' && validateRegistration()) {
      setCurrentStep('verification');
    } else if (currentStep === 'verification') {
      setCurrentStep('subscription');
    } else if (currentStep === 'subscription' && selectedPlan) {
      if (selectedPlan === 'premium') {
        setCurrentStep('payment');
      } else {
        setCurrentStep('complete');
      }
    } else if (currentStep === 'payment') {
      setCurrentStep('complete');
    }
  };

  const handleBack = () => {
    if (currentStep === 'registration') {
      setCurrentStep('role');
    } else if (currentStep === 'verification') {
      setCurrentStep('registration');
    } else if (currentStep === 'subscription') {
      setCurrentStep('verification');
    } else if (currentStep === 'payment') {
      setCurrentStep('subscription');
    }
  };

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Choose Your Role</h2>
        <p className="text-gray-400">Select the option that best describes you</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.id)}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedRole === role.id
                ? 'border-secondary-500 bg-secondary-500/10'
                : 'border-dark-600 bg-dark-700 hover:border-dark-500'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`${selectedRole === role.id ? 'text-secondary-400' : 'text-gray-400'}`}>
                {role.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                <p className="text-gray-400 text-sm">{role.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderRegistration = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
        <p className="text-gray-400">Fill in your details to get started</p>
      </div>

      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 ${
              errors.name ? 'border-red-500' : 'border-dark-600'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 ${
              errors.email ? 'border-red-500' : 'border-dark-600'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-3 py-3 pr-10 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 ${
                errors.password ? 'border-red-500' : 'border-dark-600'
              }`}
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 ${
              errors.phone ? 'border-red-500' : 'border-dark-600'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>

        {/* School Name (for school role) */}
        {selectedRole === 'school' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              School/Organization Name
            </label>
            <input
              name="schoolName"
              type="text"
              value={formData.schoolName}
              onChange={handleInputChange}
              className={`w-full px-3 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 ${
                errors.schoolName ? 'border-red-500' : 'border-dark-600'
              }`}
              placeholder="Enter school/organization name"
            />
            {errors.schoolName && <p className="mt-1 text-sm text-red-400">{errors.schoolName}</p>}
          </div>
        )}

        {/* Terms Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            name="acceptTerms"
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-dark-600 rounded bg-dark-700"
          />
          <label className="text-sm text-gray-300">
            I accept the{' '}
            <Link to="/terms" className="text-secondary-400 hover:text-secondary-300">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-secondary-400 hover:text-secondary-300">
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.acceptTerms && <p className="text-sm text-red-400">{errors.acceptTerms}</p>}
      </form>
    </div>
  );

  const renderVerification = () => (
    <div className="space-y-6 text-center">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Verify Your Email</h2>
        <p className="text-gray-400">
          We've sent a verification code to <span className="text-secondary-400">{formData.email}</span>
        </p>
      </div>

      <div className="bg-dark-700 p-6 rounded-xl">
        <Mail className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
        <p className="text-gray-300 mb-4">
          Enter the 6-digit code we sent to your email
        </p>
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border rounded-lg bg-dark-600 text-white border-dark-500 focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
          ))}
        </div>
        <button className="text-secondary-400 hover:text-secondary-300 text-sm">
          Resend code
        </button>
      </div>
    </div>
  );

  const renderSubscription = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Choose Your Plan</h2>
        <p className="text-gray-400">Select the plan that works best for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Freemium Plan */}
        <div 
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
            selectedPlan === 'freemium' 
              ? 'border-secondary-500 bg-secondary-500/10' 
              : 'border-dark-600 bg-dark-700 hover:border-dark-500'
          }`}
          onClick={() => setSelectedPlan('freemium')}
        >
          <h3 className="text-xl font-bold text-white mb-2">Freemium</h3>
          <p className="text-2xl font-bold text-secondary-400 mb-4">
            Free <span className="text-sm text-gray-400">7-day trial</span>
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              First video of each topic
            </li>
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Basic progress tracking
            </li>
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Limited AI tutor access
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div 
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all relative ${
            selectedPlan === 'premium' 
              ? 'border-secondary-500 bg-secondary-500/10' 
              : 'border-dark-600 bg-dark-700 hover:border-dark-500'
          }`}
          onClick={() => setSelectedPlan('premium')}
        >
          <div className="absolute top-4 right-4 bg-secondary-600 text-white px-2 py-1 rounded text-xs">
            Popular
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
          <p className="text-2xl font-bold text-secondary-400 mb-4">
            R299 <span className="text-sm text-gray-400">/ month</span>
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Full access to all content
            </li>
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Unlimited AI tutor sessions
            </li>
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Advanced progress analytics
            </li>
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Gamified badges & achievements
            </li>
            <li className="flex items-center text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Parent/School dashboards
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Payment Details</h2>
        <p className="text-gray-400">Complete your subscription to Premium</p>
      </div>

      <div className="bg-dark-700 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-300">Premium Plan (Monthly)</span>
          <span className="text-white font-semibold">R299.00</span>
        </div>
        <div className="border-t border-dark-600 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-white">Total</span>
            <span className="text-lg font-semibold text-secondary-400">R299.00</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Payment Method</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border border-dark-600 rounded-lg bg-dark-700">
            <p className="text-gray-300">Credit/Debit Card</p>
            <p className="text-sm text-gray-400">Secure payment processing</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderComplete = () => (
    <div className="space-y-6 text-center">
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Welcome to Spongein 2.0!</h2>
        <p className="text-gray-400 mb-6">
          Your account has been created successfully. You can now start your learning journey.
        </p>
        <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Go to Dashboard
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <img 
              src="/image.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {['role', 'registration', 'verification', 'subscription', 'complete'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === step ? 'bg-secondary-600 text-white' : 
                  ['role', 'registration', 'verification', 'subscription', 'complete'].indexOf(currentStep) > index ? 
                  'bg-green-500 text-white' : 'bg-dark-600 text-gray-400'
                }`}>
                  {['role', 'registration', 'verification', 'subscription', 'complete'].indexOf(currentStep) > index ? 
                    <Check className="w-4 h-4" /> : index + 1}
                </div>
                {index < 4 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    ['role', 'registration', 'verification', 'subscription', 'complete'].indexOf(currentStep) > index ? 
                    'bg-green-500' : 'bg-dark-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-dark-800 rounded-xl p-8 border border-dark-700">
          {currentStep === 'role' && renderRoleSelection()}
          {currentStep === 'registration' && renderRegistration()}
          {currentStep === 'verification' && renderVerification()}
          {currentStep === 'subscription' && renderSubscription()}
          {currentStep === 'payment' && renderPayment()}
          {currentStep === 'complete' && renderComplete()}

          {/* Navigation Buttons */}
          {currentStep !== 'complete' && (
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={currentStep === 'role'}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 'role' 
                    ? 'bg-dark-600 text-gray-500 cursor-not-allowed' 
                    : 'bg-dark-600 hover:bg-dark-500 text-white'
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              
              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 'role' && !selectedRole) ||
                  (currentStep === 'subscription' && !selectedPlan)
                }
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                  (currentStep === 'role' && !selectedRole) ||
                  (currentStep === 'subscription' && !selectedPlan)
                    ? 'bg-dark-600 text-gray-500 cursor-not-allowed'
                    : 'bg-secondary-600 hover:bg-secondary-700 text-white'
                }`}
              >
                {currentStep === 'payment' ? 'Complete Payment' : 'Continue'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>

        {/* Sign In Link */}
        {currentStep === 'role' && (
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage;