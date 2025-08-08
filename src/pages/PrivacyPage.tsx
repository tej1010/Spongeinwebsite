import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-dark-800 rounded-xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              <strong>Last updated:</strong> January 2024
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information that you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Educational information (grade level, subjects, learning preferences)</li>
                  <li>Usage data (learning progress, time spent on platform, interaction patterns)</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and improve our educational services</li>
                  <li>Personalize your learning experience</li>
                  <li>Track your progress and provide analytics</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Ensure the security and integrity of our platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and the safety of our users</li>
                  <li>With trusted service providers who assist in operating our platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                  secure servers, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of certain communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-dark-700 rounded-lg">
                  <p className="text-gray-300">
                    <strong>Email:</strong> privacy@example.com<br />
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

export default PrivacyPage;