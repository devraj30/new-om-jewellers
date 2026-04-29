import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-8">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-sm font-medium block">Our Legacy</span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">Crafting Purity Since 1995</h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            New Om Jewellers was founded with a simple yet profound vision: to provide the people of Amravati with jewellery that is as pure as their trust. Over the last 25 years, we have grown from a small boutique to a landmark of excellence in craftsmanship.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our journey is built on the pillars of transparency, quality, and an unwavering commitment to our customers. Every piece that leaves our workshop is a testament to our heritage and our passion for fine jewellery.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-luxury-gold/10">
            <div>
              <p className="text-3xl font-serif text-luxury-gold font-bold">25+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Years of Trust</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-luxury-gold font-bold">50k+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-luxury-gold font-bold">100%</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">BIS Hallmarked</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border border-luxury-gold/20 rounded-3xl translate-x-4 translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1573408302185-9127fe589ad5?auto=format&fit=crop&q=80&w=1000" 
            alt="Our Workshop" 
            className="relative z-10 rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="bg-luxury-black text-white rounded-[3rem] p-12 md:p-24 text-center space-y-12">
        <h2 className="text-4xl font-serif text-luxury-gold">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Uncompromising Purity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We believe that trust is earned through transparency. That's why every piece of gold we sell is 100% BIS Hallmarked, ensuring you get exactly what you pay for.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Exquisite Artistry</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our master craftsmen blend traditional techniques with modern designs to create jewellery that is both timeless and contemporary.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Customer First</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              For us, jewellery is not just a business; it's a relationship. We strive to provide a shopping experience that is as precious as the jewellery itself.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
