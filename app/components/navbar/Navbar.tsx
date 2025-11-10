'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  Phone,
  X,
  User,
  Heart,
  Calendar,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
} from 'lucide-react';

import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';
import Link from 'next/link';

import Avatar from '../Avatar';
import Logo from './Logo';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const handleSignOut = () => {
    signOut();
    setIsUserMenuOpen(false);
  };

  const handleLogin = () => {
    loginModal.onOpen();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleRegister = () => {
    registerModal.onOpen();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-linear-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Logo />
              <div className="flex flex-col items-center">
                <span
                  // className={`text-xl font-bold transition-colors duration-300 hidden sm:block ${
                  //   isScrolled
                  //     ? 'text-blue-950 font-extrabold text-3xl font-sans uppercase'
                  //     : 'text-white'
                  // }`}
                  className={`text-2xl md:text-3xl font-extrabold font-sans tracking-widest transition-colors duration-300 ${
                    isScrolled ? 'text-blue-950' : 'text-white'
                  }`}
                >
                  CREATION
                </span>

                <div className="flex items-center">
                  <div className="w-8 md:w-12 border-t-2 border-red-600"></div>
                  <span className="text-lg md:text-xl font-bold tracking-tight text-red-600">
                    HOMES
                  </span>
                  <div className="w-8 md:w-12 border-t-2 border-red-600"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-rose-600'
                      : 'text-white hover:text-rose-300'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Number */}
              <a
                href="tel:+256784971942"
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-rose-600'
                    : 'text-white hover:text-rose-300'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+256 784 971942</span>
              </a>

              {/* User Menu Desktop */}
              <div className="relative">
                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                  {currentUser?.image ? (
                    <div className="hidden md:block">
                      <Avatar src={currentUser?.image} />
                    </div>
                  ) : (
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isScrolled ? 'bg-gray-200' : 'bg-white/20'
                      }`}
                    >
                      <User
                        className={`w-5 h-5 ${
                          isScrolled ? 'text-gray-600' : 'text-white'
                        }`}
                      />
                    </div>
                  )}
                </button>
                {/* <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                    isScrolled
                      ? 'border-gray-300 bg-white hover:shadow-md'
                      : 'border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  }`}
                >
                  <Menu
                    className={`w-5 h-5 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  />
                  {currentUser?.image ? (
                    // <img
                    //   src={currentUser.image}
                    //   alt={currentUser.name || 'User'}
                    //   className="w-8 h-8 rounded-full object-cover"
                    // />
                    <div className="hidden md:block">
                      <Avatar src={currentUser?.image} />
                    </div>
                  ) : (
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isScrolled ? 'bg-gray-200' : 'bg-white/20'
                      }`}
                    >
                      <User
                        className={`w-5 h-5 ${
                          isScrolled ? 'text-gray-600' : 'text-white'
                        }`}
                      />
                    </div>
                  )}
                </button> */}

                {/* Desktop Dropdown */}
                {isUserMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsUserMenuOpen(false)}
                    />

                    {/* Menu */}
                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                      {currentUser ? (
                        <>
                          {/* User Info */}
                          <div className="px-4 py-4 bg-linear-to-br from-rose-50 to-pink-50 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                              {currentUser.image ? (
                                <img
                                  src={currentUser.image}
                                  alt={currentUser.name || 'User'}
                                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                                  <User className="w-6 h-6 text-white" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate">
                                  {currentUser.name || 'User'}
                                </p>
                                <p className="text-xs text-gray-600 truncate">
                                  {currentUser.email || ''}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Menu Items */}
                          <div className="py-2">
                            <a
                              href="/trips"
                              onClick={() => setIsUserMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <Calendar className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-medium">
                                My Trips
                              </span>
                            </a>
                            <a
                              href="/favorites"
                              onClick={() => setIsUserMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <Heart className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-medium">
                                My Favorites
                              </span>
                            </a>

                            {currentUser.isAdmin && (
                              <>
                                <div className="my-2 border-t border-gray-100" />
                                <a
                                  href="/admin"
                                  onClick={() => setIsUserMenuOpen(false)}
                                  className="flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 transition-colors"
                                >
                                  <LayoutDashboard className="w-5 h-5" />
                                  <span className="text-sm font-semibold">
                                    Admin Dashboard
                                  </span>
                                </a>
                              </>
                            )}

                            <div className="my-2 border-t border-gray-100" />
                            <button
                              onClick={() => {
                                signOut();
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <LogOut className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-medium">
                                Logout
                              </span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="py-2">
                          <button
                            onClick={handleLogin}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <LogIn className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-medium">Login</span>
                          </button>
                          <button
                            onClick={handleRegister}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <UserPlus className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-medium">Sign Up</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto">
            <div className="px-6 py-6 space-y-6">
              {/* User Section */}
              <div className="pb-6 border-b border-gray-200">
                {currentUser ? (
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                    {currentUser.image ? (
                      <img
                        src={currentUser.image}
                        alt={currentUser.name || 'User'}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg">
                        <User className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-gray-900 truncate">
                        {currentUser.name || 'User'}
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        {currentUser.email || ''}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={handleLogin}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <LogIn className="w-5 h-5" />
                      Login
                    </button>
                    <button
                      onClick={handleRegister}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-rose-500 text-rose-600 rounded-xl font-semibold hover:bg-rose-50 transition-all"
                    >
                      <UserPlus className="w-5 h-5" />
                      Sign Up
                    </button>
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">
                  Navigation
                </p>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* User Actions */}
              {currentUser && (
                <div className="space-y-2 pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">
                    My Account
                  </p>
                  <a
                    href="/trips"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">My Trips</span>
                  </a>
                  <a
                    href="/favorites"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">My Favorites</span>
                  </a>

                  {currentUser.isAdmin && (
                    <a
                      href="/admin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-rose-600 bg-rose-50 rounded-xl transition-colors"
                    >
                      <LayoutDashboard className="w-5 h-5" />
                      <span className="font-semibold">Admin Dashboard</span>
                    </a>
                  )}
                </div>
              )}

              {/* Contact */}
              <div className="pt-6 border-t border-gray-200">
                <a
                  href="tel:+256784971942"
                  className="flex items-center gap-3 px-4 py-3 text-gray-900 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-600">Call us</p>
                    <p className="font-semibold">+256 784 971942</p>
                  </div>
                </a>
              </div>

              {/* Logout */}
              {currentUser && (
                <div className="pt-6">
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 text-red-600 border-2 border-red-200 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
