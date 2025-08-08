import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Privacy",
      description: "We prioritize the security and privacy of all user data with industry-leading protection measures."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of educational technology to create better learning experiences."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making quality education accessible to all students, regardless of their background or circumstances."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Student Success",
      description: "Every decision we make is focused on improving student outcomes and academic achievement."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to revolutionize education for Grade 8-12 CAPS students through 
              innovative AI technology and personalized learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-secondary-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our core mission is to transform the educational landscape for 
                Grade 8-12 CAPS students by providing innovative, AI-powered learning solutions 
                that make education more engaging, accessible, and effective. We believe every 
                student deserves personalized attention and the tools they need to succeed 
                academically and beyond.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-600/20 to-secondary-800/20 p-8 rounded-xl border border-secondary-600/30">
              <h3 className="text-xl font-semibold text-secondary-400 mb-4">
                Transforming Education Through Technology
              </h3>
              <p className="text-gray-300">
                We combine cutting-edge artificial intelligence with proven pedagogical methods 
                to create learning experiences that adapt to each student's unique needs, 
                learning style, and pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary-600/20 to-secondary-800/20 p-8 rounded-xl border border-secondary-600/30">
                <h3 className="text-xl font-semibold text-secondary-400 mb-4">
                  A Future Where Every Student Thrives
                </h3>
                <p className="text-gray-300">
                  We envision a world where geographical location, economic background, or 
                  learning differences don't limit a student's potential for academic success 
                  and personal growth.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-secondary-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our long-term vision is to become the leading educational platform in South Africa 
                and beyond, empowering millions of students to achieve their full potential through 
                personalized, AI-driven learning experiences. We aim to bridge educational gaps 
                and create equal opportunities for all learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-700 p-8 rounded-xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our platform was born from a simple yet powerful observation: traditional 
                educational methods weren't meeting the diverse needs of modern students. 
                Our founders, a team of educators, technologists, and data scientists, 
                recognized that the one-size-fits-all approach to education was leaving 
                many students behind.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The journey began with extensive research into learning patterns, student 
                engagement, and the potential of artificial intelligence in education. 
                We discovered that when learning is personalized, gamified, and supported 
                by intelligent tutoring systems, students not only perform better but also 
                develop a genuine love for learning.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, our platform represents years of development, testing, and refinement. 
                We've created a platform that doesn't just deliver content—it understands 
                each learner and adapts to help them succeed. Our milestone achievements 
                include successful pilot programs in multiple schools and consistently 
                positive feedback from students, parents, and educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-dark-700 p-6 rounded-xl text-center hover:bg-dark-600 transition-colors">
                <div className="text-secondary-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            Join thousands of students who are already experiencing the future of education with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/onboarding" 
              className="bg-white hover:bg-gray-100 text-secondary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/#features" 
              className="border border-white text-white hover:bg-white hover:text-secondary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;