import React from 'react';

const LandingPage = () => {
  const reasons = [
    {
      title: "Cultural Identity",
      description: "Heritage helps maintain our cultural identity, providing a link between our past, present, and future generations.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Historical Knowledge",
      description: "Understanding our heritage provides valuable insights into historical practices, wisdom, and societal evolution.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12h6M9 8h6M9 16h4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Economic Value",
      description: "Cultural heritage tourism contributes significantly to local economies and sustainable development.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16M17 7l-5-3-5 3M6 7h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const galleryItems = [
    {
      title: "Classical Dance",
      location: "Tamil Nadu",
      category: "Dance Forms",
      description: "Bharatanatyam - A classical dance form known for its grace and expressions",
      image: "/images/classical-dance.jpg",
    },
    {
      title: "Classical Music",
      location: "North India",
      category: "Music",
      description: "Hindustani Classical Music featuring ragas and traditional instruments",
      image: "/images/classical-music.jpg",
    },
    {
      title: "Traditional Attire",
      location: "Pan India",
      category: "Fashion",
      description: "Diverse traditional clothing styles representing different regions",
      image: "/images/traditional-attire.png",
    },
    {
      title: "Indian Cuisine",
      location: "Pan India",
      category: "Food",
      description: "Rich and diverse culinary traditions with unique regional specialties",
      image: "/images/indian-cuisine.jpg",
    },
    {
      title: "Folk Art",
      location: "Rajasthan",
      category: "Art",
      description: "Colorful folk paintings depicting stories of local culture",
      image: "/images/folk-art.png",
    },
    {
      title: "Festival Celebrations",
      location: "Pan India",
      category: "Festivals",
      description: "Vibrant festivals celebrating traditions and cultural unity",
      image: "/images/festivals.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
    {/* Navigation */}
    <nav className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-900">Heroic Vault</div>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-indigo-900">About</a>
            <a href="heritage.html" className="text-gray-600 hover:text-indigo-900">Heritage</a>
            <a href="culture.html" className="text-gray-600 hover:text-indigo-900">Culture</a>
            <a href="contactpage.html" className="px-4 py-2 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
            Contact
          </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Discover India's Rich Cultural Heritage
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Experience the vibrant traditions, ancient monuments, and diverse cultural tapestry 
              that make India a unique treasure trove of heritage and history.
            </p>
            <div className="flex space-x-4">
              <a href="#explore" className="px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
                Explore
              </a>
              <a href="heritage.html" className="px-6 py-3 border border-indigo-900 text-indigo-900 rounded-md hover:bg-indigo-800 hover:text-white">
                Learn more
              </a>
            </div>
          </div>
          
          <div className="relative">
            <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M200 50 L350 200 L50 200 Z" fill="#f3f4f6" stroke="#4338ca" strokeWidth="2"/>
              <path d="M150 200 L250 200 L200 100 Z" fill="#f3f4f6" stroke="#4338ca" strokeWidth="2"/>
              <rect x="180" y="150" width="40" height="50" fill="#f3f4f6" stroke="#4338ca" strokeWidth="2"/>
              <circle cx="200" cy="80" r="10" fill="#4338ca"/>
              <path d="M160 200 C180 180, 220 180, 240 200" stroke="#4338ca" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
 {/* New About Us Section */}
 <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
                About Heroic Vault
              </h2>
              <p className="text-gray-600 text-lg">
                Heroic Vault is a digital platform dedicated to preserving, celebrating, 
                and sharing the rich cultural heritage of India. Our mission is to bridge 
                the gap between generations by providing immersive, educational experiences 
                that showcase the depth and diversity of Indian culture.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-900 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m3 4H6v-4h14v4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900">Our Vision</h3>
                    <p className="text-gray-600">
                      To create a global platform that connects people with India's living cultural heritage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-900 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.492-.634-2.026M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.492.634-2.026M14 10h2a3 3 0 013 3v5M5 14a2 2 0 104 0 2 2 0 00-4 0zm12 0a2 2 0 104 0 2 2 0 00-4 0zm-6-3a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900">Our Community</h3>
                    <p className="text-gray-600">
                      Bringing together scholars, artists, historians, and culture enthusiasts from around the world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a href="#gallery" className="px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
                  Explore Our Culture
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about-heroic-vault.png" 
                alt="Heroic Vault Team" 
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-indigo-900/20"></div>
            </div>
          </div>
        </div>
      </div>

  {/* Why Essential Section */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8" id="explore">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Why is it Essential to Understand and Conserve our Heritage and Culture?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our heritage and culture are the foundations of our identity and society. 
              They connect us to our roots while guiding us towards the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-indigo-900 mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </div>



      {/* Cultural Gallery Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Experience Indian Culture</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Immerse yourself in the rich tapestry of Indian cultural expressions, from classical arts to vibrant festivals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium bg-indigo-900/80 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  <div  className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
          Virtual Museum Experience
        </h2>
        <p className="text-gray-600 text-lg">
          Explore India's cultural treasures from anywhere in the world through our immersive virtual museum.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-900 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900">360° Virtual Tours</h3>
              <p className="text-gray-600">Immerse yourself in panoramic views of cultural exhibitions.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-900 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900">Interactive Exhibits</h3>
              <p className="text-gray-600">Engage with artifacts through detailed 3D models.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-900 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-900">Audio Guides</h3>
              <p className="text-gray-600">Listen to expert narratives about cultural artifacts.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
            <a href="/museum/index.html" target="_blank">
              <button className="px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800 inline-flex items-center space-x-2">
                <span>Enter Virtual Museum</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </a>
          </div>
      </div>
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
        <div>
      <video 
        src="/images/museum.mp4" 
        className="object-cover" 
        autoPlay 
        muted 
        loop 
        controls
      >
      </video>
    </div>


          <div className="absolute inset-0 bg-indigo-900/10"></div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* New Virtual Museum Images Section */}
<div className="bg-indigo-100 py-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-indigo-900 mb-8">Explore Our Museum</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative">
        <img
          src="/images/museum1.png"
          alt="Museum Gallery 1"
          className="object-cover w-full h-64 rounded-lg shadow-lg"
        />
      </div>
      <div className="relative">
        <img
          src="/images/museum2.png"
          alt="Museum Gallery 2"
          className="object-cover w-full h-64 rounded-lg shadow-lg"
        />
      </div>
      <div className="relative">
        <img
          src="/images/museum3.png"
          alt="Museum Gallery 3"
          className="object-cover w-full h-64 rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</div>

{/* Footer Section */}
<footer className="bg-indigo-900 text-white py-12 px-3 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-3">
        <h3 className="text-xl font-bold">Heroic Vault</h3>
        <p className="text-gray-300">
          Preserving and celebrating India's rich cultural heritage for future generations.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
          <li><a href="#heritage" className="text-gray-300 hover:text-white"></a></li>
          <li><a href="culture.html" className="text-gray-300 hover:text-white">Culture</a></li>
          <li><a href="/museum/index.html" className="text-gray-300 hover:text-white">Virtual Museum</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Contact</h4>
        <ul className="space-y-2 text-gray-300">
          <li>Phone: +91 8010545026</li>
          <li>Address: Nashik, India</li>
        </ul>
      </div>
      
        
      
    </div>
    <div className="mt-12 text-center text-gray-400">
      <p>&copy; 2024 Heroic Vault. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>



    
  );

};

export default LandingPage;
