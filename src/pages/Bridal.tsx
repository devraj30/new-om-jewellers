import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles } from 'lucide-react';

const Bridal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-24"
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=1920" 
            alt="Bridal Collection" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-sm font-medium mb-4 block">The Bridal Gallery</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">A Legacy of Love</h1>
          <p className="text-luxury-cream/80 max-w-2xl mx-auto text-lg font-serif italic">
            "Every bride deserves to shine with the radiance of a thousand suns."
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-luxury-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif">Custom Design</h3>
            <p className="text-gray-500 leading-relaxed">Work with our master craftsmen to create a unique piece that reflects your personal love story.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-luxury-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif">Private Consultation</h3>
            <p className="text-gray-500 leading-relaxed">Enjoy a personalized styling session in our private bridal lounge with our expert consultants.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-luxury-gold" size={32} />
            </div>
            <h3 className="text-2xl font-serif">In-Store Trials</h3>
            <p className="text-gray-500 leading-relaxed">Experience the weight and brilliance of our bridal sets with a pre-booked trial session.</p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="bg-luxury-black text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-luxury-gold">Book Your Bridal Consultation</h2>
          <p className="text-gray-400 mb-12">Let us help you find the perfect jewellery for your big day. Schedule a private session at our Amravati store.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Phone Number</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="+91 00000 00000" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Preferred Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Wedding Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors" />
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="w-full bg-luxury-gold text-white py-4 rounded-full font-medium hover:bg-luxury-gold/90 transition-all uppercase tracking-widest">
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Bridal;
