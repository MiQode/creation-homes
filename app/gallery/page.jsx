'use client';

import { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
  Heart,
  Grid3x3,
  Home,
  Palmtree,
  Utensils,
  Bed,
  Bath,
  Wifi,
  Tv,
  Coffee,
  Wind,
  Dumbbell,
  Car,
  Search,
  Filter,
  MapPin,
  Star,
} from 'lucide-react';

// Mock Gallery Data
const galleryData = {
  propertyInfo: {
    name: 'Luxurious Creation Homes Gallery',
    location: 'Tororo, Uganda',
    rating: 4.9,
    reviews: 248,
    host: 'Creation Homes',
  },
  categories: [
    { id: 'all', label: 'All Photos', count: 48, icon: Grid3x3 },
    { id: 'exterior', label: 'Exterior', count: 12, icon: Home },
    { id: 'interior', label: 'Interior', count: 18, icon: Bed },
    { id: 'amenities', label: 'Amenities', count: 10, icon: Coffee },
    { id: 'surrounding', label: 'Surroundings', count: 8, icon: Palmtree },
  ],
  photos: [
    // Exterior
    {
      id: 1,
      category: 'exterior',
      title: 'Front View',
      description: 'Beautiful facade with modern architecture',
      url: '/images/gallery/exterior/1.jpg',
      featured: true,
    },
    {
      id: 2,
      category: 'exterior',
      title: 'Pool Area',
      description: 'Infinity pool overlooking the ocean',
      url: '/images/gallery/exterior/2.jpg',
    },
    {
      id: 3,
      category: 'exterior',
      title: 'Evening View',
      description: 'Stunning sunset views from terrace',
      url: '/images/gallery/exterior/3.jpg',
    },
    {
      id: 4,
      category: 'exterior',
      title: 'Garden',
      description: 'Lush tropical gardens',
      //   url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      url: '/images/gallery/exterior/4.jpg',
    },

    // Interior - Living Spaces
    {
      id: 5,
      category: 'interior',
      title: 'Living Room',
      description: 'Spacious living area with ocean views',
      //   url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      url: '/images/gallery/interior/livingroom.jpg',
      featured: true,
    },
    {
      id: 6,
      category: 'interior',
      title: 'Master Bedroom',
      description: 'King-size bed with panoramic views',
      url: '/images/gallery/interior/masterbedroom.jpg',

      //   url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
    },
    {
      id: 7,
      category: 'interior',
      title: 'Kitchen',
      description: 'Modern chef kitchen with island',
      url: '/images/gallery/interior/kitchen.jpg',
      //   url: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800',
    },
    {
      id: 8,
      category: 'interior',
      title: 'Dining Area',
      description: 'Elegant dining space for 8 guests',
      url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
    },
    {
      id: 9,
      category: 'interior',
      title: 'Guest Bedroom',
      description: 'Comfortable guest suite',
      url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
    },
    {
      id: 10,
      category: 'interior',
      title: 'Master Bathroom',
      description: 'Spa-like bathroom with soaking tub',
      url: '/images/gallery/interior/masterbathroom.jpg',

      //   url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
    },

    // Amenities
    // {
    //   id: 11,
    //   category: 'amenities',
    //   title: 'Home Theater',
    //   description: 'Private cinema room with 4K projector',
    //   url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800',
    //   featured: true,
    // },
    // {
    //   id: 12,
    //   category: 'amenities',
    //   title: 'Gym',
    //   description: 'Fully-equipped fitness center',
    //   url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    // },
    // {
    //   id: 13,
    //   category: 'amenities',
    //   title: 'Wine Cellar',
    //   description: 'Temperature-controlled wine storage',
    //   url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    // },
    // {
    //   id: 14,
    //   category: 'amenities',
    //   title: 'Game Room',
    //   description: 'Entertainment space with pool table',
    //   url: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800',
    // },
    // {
    //   id: 15,
    //   category: 'amenities',
    //   title: 'Spa',
    //   description: 'Private spa with sauna and steam room',
    //   url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    // },

    // Surrounding
    {
      id: 16,
      category: 'surrounding',
      title: 'Town Access',
      description: 'Trading center just steps away',
      url: '/images/gallery/surrounding/town.jpg',
      // url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      featured: true,
    },
    {
      id: 17,
      category: 'surrounding',
      title: 'Rock of Tororo',
      description: 'Breathtaking Tororo Rock View',
      url: '/images/gallery/surrounding/tororo-rock.jpg',
      // url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    },
    // {
    //   id: 18,
    //   category: 'surrounding',
    //   title: 'Nearby Restaurants',
    //   description: 'World-class dining nearby',
    //   url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    // },
    {
      id: 19,
      category: 'surrounding',
      title: 'Local Attractions',
      description: 'Shopping and entertainment',
      url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    },
    {
      id: 20,
      category: 'surrounding',
      title: 'Fenced Yard',
      description: 'Secure and spacious outdoor area',
      url: '/images/gallery/surrounding/gate.jpg',
      // url: 'https://images.unsplash.com/photo-1569252165341-c1a6f5a5e3bc?w=800',
    },
  ],
  amenitiesList: [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Tv, label: '4K Smart TVs' },
    { icon: Coffee, label: 'Coffee Maker' },
    { icon: Wind, label: 'Air Conditioning' },
    // { icon: Dumbbell, label: 'Gym' },
    { icon: Car, label: 'Free Parking' },
    { icon: Utensils, label: 'Full Kitchen' },
    { icon: Bath, label: 'Hot Tub' },
  ],
};

const PropertyGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // grid or masonry
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhotos = galleryData.photos.filter((photo) => {
    const matchesCategory =
      selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesSearch =
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  const toggleFavorite = (photoId) => {
    setFavorites((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-96 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/gallery/gallery-bg.jpg')",
            // "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920')",
          }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{galleryData.propertyInfo.location}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {galleryData.propertyInfo.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">
                {galleryData.propertyInfo.rating}
              </span>
              <span className="text-white/80">
                ({galleryData.propertyInfo.reviews} reviews)
              </span>
            </div>
            <div className="text-white/80">
              Hosted by {galleryData.propertyInfo.host}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Amenities Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Featured Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {galleryData.amenitiesList.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-center text-gray-600 font-medium">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
            <div className="flex flex-wrap gap-2">
              {galleryData.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200'
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and View Controls */}
          <div className="flex gap-2">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search photos..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <button className="px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Photo Count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {filteredPhotos.length}{' '}
            {filteredPhotos.length === 1 ? 'Photo' : 'Photos'}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'masonry'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid gap-4 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                photo.featured && viewMode === 'masonry'
                  ? 'sm:col-span-2 sm:row-span-2'
                  : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div
                className={`relative bg-gray-200 ${
                  photo.featured && viewMode === 'masonry'
                    ? 'aspect-[4/3]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured Badge */}
                {photo.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(photo.id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(photo.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-white/90 text-sm">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No photos found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Info */}
            <div className="absolute top-6 left-6 z-10 max-w-md">
              <h3 className="text-white text-2xl font-bold mb-2">
                {filteredPhotos[currentImageIndex]?.title}
              </h3>
              <p className="text-white/80">
                {filteredPhotos[currentImageIndex]?.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <ZoomIn className="w-6 h-6" />
              </button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Download className="w-6 h-6" />
              </button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(filteredPhotos[currentImageIndex]?.id);
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <Heart
                  className={`w-6 h-6 ${
                    favorites.includes(filteredPhotos[currentImageIndex]?.id)
                      ? 'fill-red-500 text-red-500'
                      : ''
                  }`}
                />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium z-10">
              {currentImageIndex + 1} / {filteredPhotos.length}
            </div>

            {/* Main Image */}
            <div className="relative max-w-6xl max-h-[80vh] w-full">
              <img
                src={filteredPhotos[currentImageIndex]?.url}
                alt={filteredPhotos[currentImageIndex]?.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={previousImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-4xl w-full overflow-x-auto">
              <div className="flex gap-2 px-4">
                {filteredPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-white scale-110'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
