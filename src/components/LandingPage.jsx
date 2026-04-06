import React from 'react';

const LandingPage = () => {
  const reasons = [
    {
      title: "Cultural Identity",
      description: "Heritage maintains our cultural identity, linking past, present, and future generations.",
    },
    {
      title: "Historical Knowledge",
      description: "Understanding heritage provides insights into historical practices and societal evolution.",
    },
    {
      title: "Economic Value",
      description: "Cultural heritage tourism contributes to local economies and sustainable development.",
    },
  ];

  const galleryItems = [
    {
      title: "Classical Dance",
      location: "Tamil Nadu",
      category: "Dance",
      image: "/images/classical-dance.jpg",
    },
    {
      title: "Classical Music",
      location: "North India",
      category: "Music",
      image: "/images/classical-music.jpg",
    },
    {
      title: "Traditional Attire",
      location: "Pan India",
      category: "Fashion",
      image: "/images/traditional-attire.png",
    },
    {
      title: "Indian Cuisine",
      location: "Pan India",
      category: "Food",
      image: "/images/indian-cuisine.jpg",
    },
    {
      title: "Folk Art",
      location: "Rajasthan",
      category: "Art",
      image: "/images/folk-art.png",
    },
    {
      title: "Festival",
      location: "Pan India",
      category: "Celebration",
      image: "/images/festivals.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Heroic Vault
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
            <a href="heritage.html" className="text-gray-700 hover:text-orange-600 transition">Heritage</a>
            <a href="culture.html" className="text-gray-700 hover:text-orange-600 transition">Culture</a>
            <a href="studios.html" className="text-gray-700 hover:text-orange-600 transition">Studios</a>
            <a href="contactpage.html" className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-lg transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover India's
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Cultural Heritage
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience vibrant traditions, ancient monuments, and diverse cultural tapestry that make India unique.
            </p>
            <div className="flex gap-4">
              <a href="#explore" className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105">
                Explore Now
              </a>
              <a href="heritage.html" className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/about-heroic-vault.png" alt="About" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Heroic Vault</h2>
            <p className="text-gray-600 leading-relaxed">
              A digital platform preserving and celebrating India's rich cultural heritage, bridging generations through immersive experiences.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">Global platform connecting people with India's living heritage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Community</h3>
                  <p className="text-gray-600">Scholars, artists, historians, and culture enthusiasts worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50" id="explore">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Heritage Matters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our heritage and culture form the foundation of identity and society.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in India's rich tapestry of cultural expressions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img src={item.image} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="text-xs font-medium bg-orange-600 px-3 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Virtual Museum</h2>
            <p className="text-gray-600">
              Explore India's treasures from anywhere through our immersive virtual museum.
            </p>
            <div className="space-y-4">
              {['360° Virtual Tours', 'Interactive Exhibits', 'Audio Guides'].map((feature, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
            <a href="/museum/index.html" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-xl transition">
              <span>Enter Museum</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <video src="/images/museum.mp4" className="w-full h-full object-cover" autoPlay muted loop controls />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Museum Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img src={`/images/museum${num}.png`} alt={`Museum ${num}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-slate-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Heroic Vault</h3>
              <p className="text-gray-400 leading-relaxed">Preserving India's cultural heritage for future generations through digital innovation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="heritage.html" className="hover:text-orange-400 transition">Heritage</a></li>
                <li><a href="culture.html" className="hover:text-orange-400 transition">Culture</a></li>
                <li><a href="/museum/index.html" className="hover:text-orange-400 transition">Virtual Museum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Explore</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="studios.html" className="hover:text-orange-400 transition">3D Studios</a></li>
                <li><a href="#gallery" className="hover:text-orange-400 transition">Gallery</a></li>
                <li><a href="contactpage.html" className="hover:text-orange-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">Phone: +91 8010545026</p>
              <p className="text-gray-400 mb-4">Location: Nashik, India</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Heroic Vault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
