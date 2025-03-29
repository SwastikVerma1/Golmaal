import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { trackRickroll, getStats } from '../../services/api';

const Rickroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatsAndTrack = async () => {
      try {
        setLoading(true);
        
        // Check if this is a direct visit and if it's from tutorial
        const isDirectVisit = location.state?.isDirectVisit;
        const fromTutorial = location.state?.fromTutorial;
        
        // Get the current session state
        const hasBeenRickrolled = sessionStorage.getItem('hasBeenRickrolled');
        const hasReached300s = sessionStorage.getItem('hasReached300s');
        
        // Only track rickroll if:
        // 1. It's a direct visit (not a refresh)
        // 2. User hasn't been rickrolled in this session
        // 3. User hasn't reached 300s in this session
        if (isDirectVisit && !hasBeenRickrolled && !hasReached300s) {
          await trackRickroll();
          // Mark this session as rickrolled
          sessionStorage.setItem('hasBeenRickrolled', 'true');
          // Dispatch event to stop clocks
          window.dispatchEvent(new CustomEvent('stopClocks'));
        }
        
        // Always fetch updated stats
        const statsData = await getStats();
        setStats(statsData);
        
        // Check if this is the first visit ever
        const hasVisited = localStorage.getItem('hasVisitedRickroll');
        if (!hasVisited) {
          localStorage.setItem('hasVisitedRickroll', 'true');
          window.dispatchEvent(new CustomEvent('firstRickrollVisit'));
        }
      } catch (error) {
        console.error('Failed to fetch stats or track rickroll:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatsAndTrack();
  }, [location.state]);

  const handleBackClick = async () => {
    try {
      await navigate('/');
    } catch (error) {
      console.error('Failed to navigate back:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black relative py-4 sm:py-0">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-2 sm:top-4 left-2 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#e8984a] text-black font-semibold rounded-lg hover:bg-[#ec625d] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#ec625d7e] flex items-center space-x-2 text-sm sm:text-base"
      >
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5" 
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

      {/* Stats Display */}
      {stats && (
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gray-800/90 backdrop-blur-md p-3 sm:p-6 rounded-xl text-white shadow-2xl transform transition-all duration-300 hover:scale-105 border border-gray-700/50 w-[280px] sm:w-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-[#e8984a] flex items-center space-x-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Rickroll Stats</span>
          </h3>
          <div className="space-y-2 sm:space-y-3">
            {/* <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm sm:text-base">Total Visits:</span>
              <span className="font-semibold text-base sm:text-lg">{stats.totalVisits}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm sm:text-base">Total Rickrolls:</span>
              <span className="font-semibold text-base sm:text-lg">{stats.totalRickrolls}</span>
            </div> */}
            <div className="flex justify-between items-center">
              <span className="text-[#e8984a] text-sm sm:text-base">Percentage of people Rickrolled: </span>
              <span className="font-semibold text-base mx-1 sm:mx-2 sm:text-lg text-[#ec625d]">{(stats.ratio * 100).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Link Heading */}
      <div className="mb-4 sm:mb-8 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Got Rickrolled?</h2>
        <Link 
          to="/tutorial" 
          className="text-[#e8984a] hover:text-[#ec625d] transition-colors duration-300 text-base sm:text-lg font-medium"
        >
          Click here to go to Tutorial (Not Kidding this time!😉) →
        </Link>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-[95%] sm:max-w-4xl aspect-video rounded-lg mx-2 sm:mx-0">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Rickroll"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Rickroll;
