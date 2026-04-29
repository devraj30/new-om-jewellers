import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-luxury-gold uppercase tracking-[0.4em] text-sm mb-4 block">Get in Touch</span>
        <h1 className="text-5xl font-serif mb-6">Visit Our Store</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Experience our collections in person. Our experts are ready to help you find your next heirloom.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {/* Store Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-luxury-gold/10">
            <h3 className="text-2xl font-serif mb-8">Store Details</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-luxury-cream p-3 rounded-xl">
                  <MapPin className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed"> Shivshakti Main Road, Shiroli pulachi, Kolhapur, Maharashtra 444601</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-luxury-cream p-3 rounded-xl">
                  <Phone className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 70208 87722</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-luxury-cream p-3 rounded-xl">
                  <Mail className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">info@newomjewellers.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-luxury-black text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-serif mb-8 text-luxury-gold">Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-gray-400">Mon - Sat</span>
                <span className="font-medium">10:30 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-luxury-gold/10">
          <h3 className="text-3xl font-serif mb-8">Send an Enquiry</h3>
          <form
            action="https://formspree.io/f/maqpvyag"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="_subject" value="🪙 New Enquiry — New Om Jewellers" />
            <input type="hidden" name="_replyto" value="devrajmisal3@gmail.com" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                <input
                  type="text"
                  name="Customer Name"
                  required
                  className="w-full bg-luxury-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">WhatsApp Number</label>
                <input
                  type="tel"
                  name="WhatsApp Number"
                  required
                  className="w-full bg-luxury-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="e.g. 9823XXXXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">I'm interested in</label>
                <select
                  name="Interested In"
                  required
                  className="w-full bg-luxury-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxury-gold transition-all"
                >
                  <option value="">-- Select Interest --</option>
                  <option>Gold Jewellery</option>
                  <option>Diamond Jewellery</option>
                  <option>Silver Jewellery</option>
                  <option>Bridal Collection</option>
                  <option>Custom Design Order</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Budget Range</label>
                <select
                  name="Budget Range"
                  className="w-full bg-luxury-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxury-gold transition-all"
                >
                  <option value="">-- Select Budget Range --</option>
                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>Above ₹3,00,000</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Any specific requirement? (optional)</label>
              <textarea
                name="Message"
                rows={3}
                className="w-full bg-luxury-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-luxury-gold transition-all"
                placeholder="Tell us more about what you're looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-luxury-gold text-white px-12 py-4 rounded-full font-medium hover:bg-luxury-gold/90 transition-all shadow-lg shadow-luxury-gold/20 w-full md:w-auto"
            >
              Send Enquiry 💬
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-luxury-gold/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.123456789!2d77.75!3d20.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU1JzQ4LjAiTiA3N8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
