import React, { useState } from 'react';
import { Calendar, Sparkles, Rocket } from 'lucide-react';

export default function DayPredictor() {
  const [selectedDay, setSelectedDay] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [loadingText, setLoadingText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    'Friday', 'Saturday', 'Sunday'
  ];

  const funnyLoadingTexts = [
    "🔮 Consulting ancient astrologers...",
    "🤖 Deploying AI neural networks...",
    "⚛️ Using quantum computing algorithms...",
    "🔗 Scanning via blockchain technology...",
    "🛸 Contacting NASA satellites...",
    "🧠 Analyzing with machine learning...",
    "🌌 Accessing space-time continuum...",
    "💎 Decrypting cosmic algorithms...",
    "🔬 Running DNA sequence analysis...",
    "🎯 Applying deep learning models...",
    "🌊 Surfing through data ocean...",
    "⚡ Charging flux capacitor...",
    "🎪 Performing complex calculations...",
    "🔐 Breaking encryption codes...",
    "🌟 Consulting Elon Musk's AI...",
    "📡 Establishing satellite connection...",
    "🧬 Sequencing temporal DNA...",
    "🎨 Rendering 4D visualizations..."
  ];

  const getNextDay = (day) => {
    const index = days.indexOf(day);
    return days[(index + 1) % 7];
  };

  const handlePredict = () => {
    if (!selectedDay) return;
    
    setIsLoading(true);
    setShowSuccess(false);
    setResult('');
    
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(funnyLoadingTexts[index % funnyLoadingTexts.length]);
      index++;
    }, 800);

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
      setShowSuccess(true);
      const nextDay = getNextDay(selectedDay);
      setResult(nextDay);
      
      // Confetti effect
      setTimeout(() => setShowSuccess(false), 3000);
    }, 14400); // 18 loading texts × 800ms
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
              <Calendar className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Day Predictor Pro™
          </h1>
          <p className="text-gray-600 text-lg">
            🎓 Final Year Project by Irfan Shaha
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Powered by Advanced AI & Quantum Computing 🚀
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Day Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              Select Today's Day:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3 px-4 rounded-xl font-medium transition-all transform hover:scale-105 ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Predict Button */}
          <button
            onClick={handlePredict}
            disabled={!selectedDay || isLoading}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                <Rocket className="w-6 h-6" />
                Predict Next Day
              </>
            )}
          </button>

          {/* Loading Animation */}
          {isLoading && (
            <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-xl p-8 text-center border-4 border-yellow-400 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-b-8 border-yellow-400"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="bg-yellow-400 rounded-lg p-4 shadow-lg">
                <p className="text-black font-black text-2xl tracking-wide uppercase animate-pulse">
                  {loadingText}
                </p>
              </div>
            </div>
          )}

          {/* Success Result */}
          {showSuccess && result && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 text-center animate-bounce">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-white text-3xl font-bold mb-2">
                SUCCESS!
              </h2>
              <p className="text-white text-xl mb-1">
                Next day will be:
              </p>
              <p className="text-white text-5xl font-bold animate-pulse">
                {result}
              </p>
              <div className="flex justify-center gap-4 mt-4 text-4xl">
                <span className="animate-bounce">🎊</span>
                <span className="animate-bounce delay-100">🎈</span>
                <span className="animate-bounce delay-200">🎁</span>
              </div>
            </div>
          )}

          {/* Static Result Display */}
          {result && !showSuccess && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
              <p className="text-gray-700 text-lg mb-2">
                Prediction Complete! ✅
              </p>
              <p className="text-gray-600">Next day is:</p>
              <p className="text-green-600 text-4xl font-bold mt-2">
                {result}
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>⚠️ Accuracy: 100% Guaranteed*</p>
          <p className="text-xs mt-1">*May use advanced algorithms beyond human understanding</p>
        </div>

      </div>
    </div>
  );
}