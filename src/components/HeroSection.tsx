import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MonthlyCalendar } from './MonthlyCalendar';
import genevaHero from '@/assets/geneva-hero.jpg';

const destinations = [
  {
    name: 'Geneva',
    description: 'With its humanitarian tradition and cosmopolitan flair, the European seat of the UNO and headquarters of the Red Cross is known as the "capital of peace".',
    highlight: 'Jet d\'Eau',
    highlightDescription: 'In Geneva harbour, known as "La Rade", this water jet up to 140 metres high is a real eye-catcher.',
    image: genevaHero
  }
];

export const HeroSection = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={destinations[currentDestination].image}
          alt={destinations[currentDestination].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
              We need Switzerland.
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light drop-shadow">
              Get inspired now!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start
            </Button>
          </div>
        </div>

        {/* Destination Info - Bottom Left */}
        <div className="absolute bottom-20 left-6 md:left-12 max-w-md">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h2 className="text-white text-2xl font-bold mb-2">
              {destinations[currentDestination].name}
            </h2>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              {destinations[currentDestination].description}
            </p>
            
            {destinations[currentDestination].highlight && (
              <div className="border-t border-white/20 pt-4">
                <h3 className="text-golden font-semibold mb-2">
                  {destinations[currentDestination].highlight}
                </h3>
                <p className="text-white/80 text-sm">
                  {destinations[currentDestination].highlightDescription}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Switzerland Map Icon - Bottom Right */}
        <div className="absolute bottom-20 right-6 md:right-12">
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">🇨🇭</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Calendar Navigation */}
      <MonthlyCalendar />

      {/* Action Buttons - Bottom Center */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            ✈️ Flights
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            🚂 Public Transport
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            🏨 Hotels
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            🎿 Adventures
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            📱 STC App
          </Button>
        </div>
      </div>
    </section>
  );
};