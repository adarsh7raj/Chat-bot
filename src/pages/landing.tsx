import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[url('')] bg-cover bg-center relative min-h-screen text-gray-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75"></div>

      {/* Navigation Bar */}
      <nav className="relative z-10 bg-transparent py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">ChatBot AI</div>
          <Link to="/login">
            <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-indigo-500 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to <span className='text-yellow-300'>ChatBot AI</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience seamless conversations with our intelligent AI-powered chatbot.
          </p>
          <Link to="/signup">
            <button className="bg-white text-indigo-500 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section with Light Background */}
      <section className="relative z-10 py-12 bg-white"> {/* Light pastel purple background */}
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl text-indigo-500 mb-4 mx-auto">🤖</div>
                <h3 className="text-2xl font-semibold mb-2">AI-Powered</h3>
                <p>Leverage advanced AI to provide human-like conversations.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl text-indigo-500 mb-4 mx-auto">🔒</div>
                <h3 className="text-2xl font-semibold mb-2">Secure</h3>
                <p>Your data is protected with top-notch security measures.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl text-indigo-500 mb-4 mx-auto">⚡</div>
                <h3 className="text-2xl font-semibold mb-2">Fast Integration</h3>
                <p>Seamlessly integrate our ChatBot into your existing platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-12 bg-[#AED6E8]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <p className="italic mb-4">"ChatBot AI has transformed the way we interact with our customers. It's intuitive and efficient!"</p>
                <div className="font-semibold">- Jane Doe, Company ABC</div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <p className="italic mb-4">"The seamless integration and AI capabilities are top-notch. Highly recommend ChatBot AI."</p>
                <div className="font-semibold">- John Smith, Company XYZ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">&copy; 2025 ChatBot AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


