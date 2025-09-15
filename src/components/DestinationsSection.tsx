import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import alpsDestination from '@/assets/alps-destination.jpg';
import zurichCity from '@/assets/zurich-city.jpg';

const destinations = [
  {
    id: 1,
    name: 'Swiss Alps',
    region: 'Central Switzerland',
    description: 'Majestic peaks, pristine snow, and breathtaking vistas await in the heart of the Alps.',
    image: alpsDestination,
    duration: '3-7 days',
    highlights: ['Jungfraujoch', 'Matterhorn', 'Alpine hiking']
  },
  {
    id: 2,
    name: 'Zurich',
    region: 'German-speaking Switzerland',
    description: 'Switzerland\'s largest city combines urban sophistication with stunning lake views.',
    image: zurichCity,
    duration: '2-4 days',
    highlights: ['Old Town', 'Lake Zurich', 'Museums']
  },
  {
    id: 3,
    name: 'Geneva',
    region: 'French-speaking Switzerland',
    description: 'International hub with humanitarian heritage and cosmopolitan charm.',
    image: alpsDestination, // Will be replaced with Geneva image
    duration: '2-3 days',
    highlights: ['Jet d\'Eau', 'UN Headquarters', 'Lake Geneva']
  }
];

export const DestinationsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Discover Switzerland
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From snow-capped Alpine peaks to pristine lakes and charming cities, 
            Switzerland offers unforgettable experiences in every region.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card 
              key={destination.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Region Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.region}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-alpine hover:bg-alpine/90 text-white group-hover:bg-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Destination
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
          >
            View All Destinations
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};