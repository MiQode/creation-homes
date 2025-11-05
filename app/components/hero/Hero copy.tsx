'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Play,
  X,
  Calendar,
  Users,
  MapPin,
  Search,
  Menu,
  Phone,
  Mail,
} from 'lucide-react';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [location, setLocation] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSource = '/videos/intro-hero.mp4';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when video opens
  useEffect(() => {
    if (isVideoOpen) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoOpen]);

  const handleSearch = () => {
    console.log({ checkIn, checkOut, guests, location });
    // Handle search logic here
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Hotels', href: '#hotels' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="shrink-0">
              <a href="#home" className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center transition-all duration-300 ${
                    isScrolled ? 'shadow-lg' : ''
                  }`}
                >
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  CreationHomes
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+1234567890"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+123 456 7890</span>
              </a>
              <button
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          } ${isScrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'}`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+1234567890"
                className={`flex items-center gap-2 text-sm font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                +123 456 7890
              </a>
              <button className="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-20">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium animate-fade-in-up">
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Luxury Is Defined By Us
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
              Discover Your Perfect
              <span className="block mt-2 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Luxury Escape
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-400">
              Experience world-class hospitality in breathtaking destinations.
              From the confortable countryside, find your ideal sanctuary.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-600">
              {/* <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Hotels
                  <Search className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button> */}

              {/* Video Play Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <Play className="w-5 h-5 ml-0.5 fill-white" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Location */}
                <div className="lg:col-span-2 relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Where are you going?"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Check In */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check In
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check Out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search Hotels
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Hotels' },
              { number: '50+', label: 'Countries' },
              { number: '10K+', label: 'Happy Guests' },
              { number: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div> */}
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-14 right-0 p-2 text-white hover:text-gray-300 transition-colors hover:scale-110 duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            {/* YouTube embed with controls enabled */}
            <video
              ref={videoRef}
              className="w-full h-full rounded-2xl shadow-2xl"
              src={videoSource}
              autoPlay
              muted
              controls
              playsInline
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
