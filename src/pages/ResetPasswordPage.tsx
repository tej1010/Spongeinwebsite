import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, Check } from 'lucide-react';

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
              <img 
                src="/public/image.png" 
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
              Password Reset Successfully
            </h2>
            <p className="text-gray-400 mb-8">
              Your password has been reset successfully. You can now sign in with your new password.
            </p>
            
            <Link 
              to="/login" 
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
            >
              Sign In Now
            </Link>
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
              src="/image.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary-400">Spongein 2.0</span>
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Reset Your Password
          </h2>
          <p className="mt-2 text-gray-400">
            Enter your new password below
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-dark-800 rounded-xl p-8 border border-dark-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                 className={`block w-full pl-10 pr-10 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                    errors.password ? 'border-red-500' : 'border-dark-600'
                  }`}
                  placeholder="Enter your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                 className={`block w-full pl-10 pr-10 py-3 border rounded-lg bg-dark-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                    errors.confirmPassword ? 'border-red-500' : 'border-dark-600'
                  }`}
                  placeholder="Confirm your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="bg-dark-700 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Password requirements:</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    formData.password.length >= 8 ? 'bg-green-400' : 'bg-gray-600'
                  }`} />
                  At least 8 characters
                </li>
                <li className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    /[A-Z]/.test(formData.password) ? 'bg-green-400' : 'bg-gray-600'
                  }`} />
                  One uppercase letter
                </li>
                <li className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    /[a-z]/.test(formData.password) ? 'bg-green-400' : 'bg-gray-600'
                  }`} />
                  One lowercase letter
                </li>
                <li className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    /\d/.test(formData.password) ? 'bg-green-400' : 'bg-gray-600'
                  }`} />
                  One number
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
            className="w-full bg-secondary-600 hover:bg-secondary-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-dark-800"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;