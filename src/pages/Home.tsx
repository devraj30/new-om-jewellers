import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Shield, Truck, RefreshCw, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Jewellery" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-luxury-gold uppercase tracking-[0.4em] text-sm font-medium mb-4 block"
        >
          Established 1995
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto leading-tight"
        >
          Timeless Elegance for Your Golden Moments
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link 
            to="/collections" 
            className="bg-luxury-gold text-white px-10 py-4 rounded-full font-medium hover:bg-luxury-gold/90 transition-all flex items-center justify-center gap-2 group"
          >
            Explore Collections <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/bridal" 
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
          >
            Bridal Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const features = [
    { icon: Shield, title: "BIS Certified", desc: "100% Hallmarked Gold" },
    { icon: Star, title: "Est. 1995", desc: "25+ Years of Legacy" },
    { icon: Truck, title: "Free Shipping", desc: "Safe & Insured Delivery" },
    { icon: RefreshCw, title: "Buyback Policy", desc: "Best Exchange Value" }
  ];

  return (
    <section className="bg-white py-12 border-b border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <f.icon className="text-luxury-gold mb-2" size={28} />
            <h3 className="font-serif text-lg font-semibold">{f.title}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CategoryShowcase = () => {
  const categories = [
    { title: "Gold Jewellery", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800", link: "/collections" },
    { title: "Diamond Collection", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", link: "/collections" },
    { title: "Silver Articles", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800", link: "/collections" },
    { title: "Bridal Special", img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800", link: "/bridal" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Shop by Category</h2>
        <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Link to={cat.link} key={i} className="group relative h-[400px] overflow-hidden rounded-2xl">
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-serif mb-2">{cat.title}</h3>
                <span className="text-xs uppercase tracking-widest text-luxury-gold font-medium">View Collection</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TrustBar />
      <CategoryShowcase />
      
      {/* Featured Section */}
      <section className="bg-luxury-black text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-sm">Signature Collection</span>
            <h2 className="text-5xl font-serif leading-tight">The Royal Bridal Heritage</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Discover our most exquisite bridal sets, handcrafted with precision and infused with centuries of tradition. Each piece tells a story of love, heritage, and timeless beauty.
            </p>
            <Link 
              to="/bridal" 
              className="inline-block border-b-2 border-luxury-gold pb-2 text-luxury-gold font-medium uppercase tracking-widest hover:text-white hover:border-white transition-all"
            >
              Discover the Collection
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 border border-luxury-gold/30 rounded-2xl translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=1000" 
              alt="Bridal" 
              className="relative z-10 rounded-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
