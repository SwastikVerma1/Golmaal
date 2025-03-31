import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 px-4 py-2 bg-[#e8984a] text-black font-semibold rounded-lg hover:bg-[#ec625d] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#ec625d7e] flex items-center space-x-2 z-10"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className='hover:cursor-pointer'>Back to Home</span>
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Golmaal Tutorial</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-3">DATA TYPES</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-green-400">Integers:</span> 10, 20, -10</p>
                <p><span className="text-green-400">Booleans:</span> true, false</p>
                <p><span className="text-green-400">Strings:</span> "golmaal", "is fun"</p>
                <p><span className="text-green-400">Arrays:</span> [1, false, "golmaal"]</p>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-3">VARIABLE DECLARATION</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-green-400">variables are declared using the <span className='text-[#ec625d]'>maan_le</span> keyword</span></p>
                <p><span className="text-green-400">maan_le a = 10;</span></p>
                <p><span className="text-green-400">a = false;</span> // Re-assignment is allowed if the variable is already declared</p>
                <p><span className="text-green-400">maan_le b = [1, false, golmaal(a){"{ ye_lo a * 2 }"}];</span></p>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-3">BUILT-IN FUNCTIONS</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-green-400">print(2, 3, false):</span> Prints multiple arguments line by line.</p>
                <p><span className="text-green-400">len("Golmaal") → 7</span></p>
                <p><span className="text-green-400">len([1, 2, 3]) → 3</span></p>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-3">CONDITIONAL STATEMENTS (IF-ELSE)</h3>
              <p className="text-gray-300 mb-2">Truthy values can be extracted from integers and booleans:</p>
              <p className="text-gray-300 mb-4">All positive numbers and true yield true. All non-positive numbers and false yield false.</p>
              <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto">
                <code>{`if (3) {
  print("fuzz");
} else {
  print("buzz");
}`}</code>
              </pre>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-3">LOOPS</h3>
              <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto">
                <code>{`maan_le a = 10;
while (a) {
  if(a == 5) {
    a = a-1;
    print("5 found...");
    continue;
  }
  if(a == 1){
    break;
  }
  print("a");
  a = a - 1;
}`}</code>
              </pre>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-3">FUNCTIONS</h3>
              <p className="text-gray-300 mb-2">Functions are also expressions in Golmaal and are declared using <span className='text-[#ec625d]'>golmaal</span> keyword</p>
              <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto">
                <code>{`maan_le a = golmaal(a, b) {
  ye_lo a + b * 2;
};`}</code>
              </pre>
              <p className="text-gray-300 mt-2">Note: The ye_lo keyword is optional.</p>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-[#e8984a]/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e8984a] mb-1">CLOSURES</h3>
              <a className="text-sm font-semibold text-[#ec625d] mb-2" href="https://stackoverflow.com/questions/36636/what-is-a-closure">What is a closure?</a>
              <pre className="bg-gray-800 p-4 mt-2 rounded-lg text-gray-300 overflow-x-auto">
                <code>{`maan_le a = golmaal(a, b) {
  ye_lo a + b * 2;
};

maan_le b = golmaal(a, b) {
  a = a + 1;
  ye_lo a * b(a, 2);
};

print(b(2, a)); // Prints 21`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial; 
