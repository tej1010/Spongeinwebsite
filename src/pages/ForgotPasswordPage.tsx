import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Check } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate API call
    setError('');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
              <img 
                src="/image.png" 
                alt="Spongein 2.0" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-primary-400">Spongein 2.0</span>
            </Link>
          </div>

          {/* Success Message */}
          <div className="bg-dark-800 rounded-xl p-8 border border-dark-700 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Check Your Email
            </h2>
            <p className="text-gray-400 mb-6">
              If an account with <span className="text-primary-400">{email}</span> exists, 
              we've sent you a password reset link.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Try Different Email
              </button>
              <Link 
                to="/login" 
                className="block w-full bg-dark-600 hover:bg-dark-500 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-center"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <img 
              src="/public/image.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Forgot Password?
          </h2>
          <p className="mt-2 text-gray-400">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-dark-800 rounded-xl p-8 border border-dark-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    error ? 'border-red-500' : 'border-dark-600'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {error && (
                <p className="mt-1 text-sm text-red-400">{error}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-secondary-600 hover:bg-secondary-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-dark-800"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6">
            <Link 
              to="/login" 
              className="flex items-center justify-center text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;