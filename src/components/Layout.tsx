import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchGoldRates } from '../services/goldRateService';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rates, setRates] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    fetchGoldRates().then(setRates);
    setIsOpen(false);
  }, [location]);

  return (
    <header className="w-full z-50">
      {/* Ticker */}
      <div className="bg-luxury-black text-white py-2 overflow-hidden border-b border-luxury-gold/20">
        <div className="ticker-wrap">
          <div className="ticker flex gap-12 text-sm font-medium tracking-wider uppercase">
            <span>✨ BIS Hallmarked Jewellery</span>
            <span>💎 Certified Diamonds</span>
            <span>💰 Live Gold Rate (24K): ₹{rates?.gold24k?.toLocaleString('en-IN') || 'Loading...'}</span>
            <span>🌟 25+ Years of Trust</span>
            <span>✨ BIS Hallmarked Jewellery</span>
            <span>💎 Certified Diamonds</span>
            <span>💰 Live Gold Rate (24K): ₹{rates?.gold24k?.toLocaleString('en-IN') || 'Loading...'}</span>
            <span>🌟 25+ Years of Trust</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-luxury-gold/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-luxury-gold">NEW OM</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans uppercase -mt-1">Jewellers</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center font-sans text-sm font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
            <Link to="/collections" className="hover:text-luxury-gold transition-colors">Collections</Link>
            <Link to="/bridal" className="hover:text-luxury-gold transition-colors">Bridal</Link>
            <Link to="/gold-rate" className="hover:text-luxury-gold transition-colors">Gold Rate</Link>
            <Link to="/about" className="hover:text-luxury-gold transition-colors">About</Link>
            <Link to="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden text-luxury-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-luxury-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-sans text-sm font-medium uppercase tracking-widest">
              <Link to="/">Home</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/bridal">Bridal</Link>
              <Link to="/gold-rate">Gold Rate</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-widest text-luxury-gold">NEW OM</span>
            <span className="text-xs tracking-[0.3em] font-sans uppercase -mt-1">Jewellers</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting timeless elegance since 1995. Our commitment to purity and craftsmanship makes us your trusted partner for all life's golden moments.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-luxury-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-luxury-gold transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-luxury-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/collections" className="hover:text-white transition-colors">Gold Jewellery</Link></li>
            <li><Link to="/collections" className="hover:text-white transition-colors">Diamond Collection</Link></li>
            <li><Link to="/bridal" className="hover:text-white transition-colors">Bridal Gallery</Link></li>
            <li><Link to="/gold-rate" className="hover:text-white transition-colors">Live Gold Rates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-luxury-gold">Customer Care</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Legacy</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Buyback Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-luxury-gold">Visit Our Store</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-luxury-gold shrink-0" />
              <span>Main Road, Near Gandhi Chowk, Amravati, Maharashtra 444601</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <span>+91 70208 87722</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>info@newomjewellers.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© 2024 New Om Jewellers. All Rights Reserved. Designed with Elegance.</p>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917020887722?text=Hi%20New%20Om%20Jewellers!%20I%27m%20interested%20in%20your%20jewellery%20collection.%20Can%20you%20help%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform z-[9999] flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Layout;
