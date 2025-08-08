import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-dark-800 rounded-xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              <strong>Last updated:</strong> January 2024
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using our platform, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  Our platform is an AI-powered educational platform designed for Grade 8-12 CAPS students. 
                  Our service includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Interactive learning content aligned with CAPS curriculum</li>
                  <li>AI tutoring and personalized learning experiences</li>
                  <li>Progress tracking and analytics dashboards</li>
                  <li>Gamified learning with badges and achievements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
                <p className="text-gray-300 mb-4">
                  To access certain features of our service, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Subscription and Payment</h2>
                <p className="text-gray-300 mb-4">
                  Our platform offers both free and premium subscription plans:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Freemium accounts include limited access with a 7-day trial</li>
                  <li>Premium subscriptions are billed monthly per seat</li>
                  <li>Payment is required in advance for premium features</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
                <p className="text-gray-300 mb-4">
                  You agree not to use the service to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Share account credentials with unauthorized users</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Upload malicious content or spam</li>
                  <li>Interfere with the proper functioning of the service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300">
                  All content, features, and functionality of our platform are owned by us and are protected 
                  by copyright, trademark, and other intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300">
                  Our platform shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of the service. Our total liability shall 
                  not exceed the amount paid by you for the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
                <p className="text-gray-300">
                  We reserve the right to terminate or suspend your account at any time for violation 
                  of these terms. You may also terminate your account at any time by contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
                <p className="text-gray-300">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-dark-700 rounded-lg">
                  <p className="text-gray-300">
                    <strong>Email:</strong> legal@example.com<br />
                    <strong>Phone:</strong> +27 123 456 7890<br />
                    <strong>Address:</strong> Cape Town, South Africa
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;