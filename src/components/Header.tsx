import { useState } from 'react';
import { Search, Menu, X, Globe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <nav className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">SWI</span>
            </div>
            <span className="text-white font-semibold text-lg">Switzerland</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-golden transition-colors font-medium">
              Destinations
            </a>
            <a href="#" className="text-white hover:text-golden transition-colors font-medium">
              Experiences
            </a>
            <a href="#" className="text-white hover:text-golden transition-colors font-medium">
              Accommodation
            </a>
            <a href="#" className="text-white hover:text-golden transition-colors font-medium">
              Planning
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white hover:text-golden hover:bg-white/10 border-none"
              >
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">Search</span>
              </Button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 p-4 bg-white rounded-lg shadow-xl border">
                  <Input
                    placeholder="Search destinations, experiences..."
                    className="w-full"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Language & Additional Options */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost" 
                size="sm"
                className="text-white hover:text-golden hover:bg-white/10 border-none"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Meetings
              </Button>
              <Button
                variant="ghost"
                size="sm" 
                className="text-white hover:text-golden hover:bg-white/10 border-none"
              >
                <Globe className="h-4 w-4 mr-2" />
                Language
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-golden hover:bg-white/10 border-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur rounded-lg">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-foreground hover:text-primary font-medium py-2">
                Destinations
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium py-2">
                Experiences  
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium py-2">
                Accommodation
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium py-2">
                Planning
              </a>
              <div className="flex items-center justify-between pt-2 border-t">
                <Button variant="ghost" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Meetings
                </Button>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Language
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};