import { useState } from 'react';
import { Heart, Star, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import swissCuisine from '@/assets/swiss-cuisine.jpg';
import mountainRailway from '@/assets/mountain-railway.jpg';
import alpsDestination from '@/assets/alps-destination.jpg';

const experiences = [
  {
    id: 1,
    title: 'Alpine Cheese & Fondue Experience',
    category: 'Culinary',
    duration: '4 hours',
    groupSize: '2-12 people',
    rating: 4.9,
    reviews: 342,
    price: 'From CHF 89',
    image: swissCuisine,
    description: 'Discover authentic Swiss cheese-making traditions and enjoy a cozy fondue dinner in an Alpine setting.',
    highlights: ['Traditional cheese tasting', 'Fondue masterclass', 'Local wine pairing']
  },
  {
    id: 2,
    title: 'Scenic Mountain Railway Journey',
    category: 'Adventure',
    duration: 'Full day',
    groupSize: '1-50 people',
    rating: 4.8,
    reviews: 1247,
    price: 'From CHF 156',
    image: mountainRailway,
    description: 'Travel through breathtaking Alpine landscapes on Switzerland\'s most spectacular train routes.',
    highlights: ['Panoramic train windows', 'UNESCO World Heritage route', 'Mountain summit visit']
  },
  {
    id: 3,
    title: 'Matterhorn Hiking Adventure',
    category: 'Outdoor',
    duration: '6-8 hours',
    groupSize: '4-16 people', 
    rating: 4.7,
    reviews: 689,
    price: 'From CHF 125',
    image: alpsDestination,
    description: 'Hike through pristine Alpine trails with stunning views of the iconic Matterhorn peak.',
    highlights: ['Professional guide', 'Mountain photography', 'Alpine lunch included']
  }
];

const categories = ['All', 'Culinary', 'Adventure', 'Outdoor', 'Cultural', 'Relaxation'];

export const ExperiencesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Unforgettable Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Immerse yourself in Swiss culture, adventure, and natural beauty through 
            carefully curated experiences that capture the essence of Switzerland.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'border-border hover:bg-secondary'
                } transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience) => (
            <Card 
              key={experience.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-golden text-golden-foreground">
                  {experience.category}
                </Badge>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(experience.id)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 p-2 rounded-full"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      favorites.includes(experience.id) 
                        ? 'fill-primary text-primary' 
                        : 'text-white'
                    } transition-colors`}
                  />
                </Button>

                {/* Price */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {experience.price}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title & Rating */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-golden text-golden mr-1" />
                      <span className="font-semibold">{experience.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({experience.reviews} reviews)</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {experience.groupSize}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {experience.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <ul className="space-y-1">
                    {experience.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white group">
                  Book Experience
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Experiences Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
          >
            View All Experiences
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};