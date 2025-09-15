import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-alpine text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Inspired</h3>
            <p className="text-white/80 mb-8 text-lg">
              Get the latest travel inspiration, exclusive offers, and insider tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold">SWI</span>
              </div>
              <span className="text-white font-bold text-xl">Switzerland</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Discover the natural beauty, rich culture, and unforgettable experiences 
              that make Switzerland one of the world's most beloved destinations.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-golden hover:bg-white/10 p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-golden hover:bg-white/10 p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-golden hover:bg-white/10 p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-golden hover:bg-white/10 p-2">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Destinations</h4>
            <ul className="space-y-3">
              {['Geneva', 'Zurich', 'Swiss Alps', 'Lucerne', 'Basel', 'Interlaken'].map((destination) => (
                <li key={destination}>
                  <a href="#" className="text-white/80 hover:text-golden transition-colors">
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Experiences</h4>
            <ul className="space-y-3">
              {['Alpine Adventures', 'Culinary Tours', 'Cultural Heritage', 'Wellness & Spa', 'Winter Sports', 'Train Journeys'].map((experience) => (
                <li key={experience}>
                  <a href="#" className="text-white/80 hover:text-golden transition-colors">
                    {experience}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Switzerland Tourism</p>
                  <p className="text-white/80">Tödistrasse 7, 8027 Zürich</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-golden flex-shrink-0" />
                <p className="text-white/80">+41 44 288 11 11</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-golden flex-shrink-0" />
                <p className="text-white/80">info@switzerland.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Quick Links</h5>
              <ul className="space-y-2">
                {['Travel Planning', 'Accommodation', 'Transportation', 'Weather & Climate'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/80 hover:text-golden transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2024 Switzerland Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-golden transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors text-sm">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};