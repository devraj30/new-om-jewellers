import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Calculator, Clock, ShieldCheck } from 'lucide-react';
import { fetchGoldRates } from '../services/goldRateService';

const GoldRate = () => {
  const [rates, setRates] = useState<any>(null);
  const [weight, setWeight] = useState<number>(10);
  const [purity, setPurity] = useState<string>('22k');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRates = async () => {
      setLoading(true);
      const data = await fetchGoldRates();
      setRates(data);
      setLoading(false);
    };
    getRates();
  }, []);

  const calculatePrice = () => {
    if (!rates) return 0;
    const rate = purity === '24k' ? rates.gold24k : purity === '22k' ? rates.gold22k : rates.gold18k;
    return (rate / 10) * weight;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-luxury-gold uppercase tracking-[0.4em] text-sm mb-4 block">Live Market Updates</span>
        <h1 className="text-5xl font-serif mb-6">Today's Gold Rates</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Real-time gold and silver rates in Amravati. Prices are updated daily based on international market trends.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Gold Rates Card */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-luxury-gold/10">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-gold-100 p-3 rounded-2xl">
                <TrendingUp className="text-luxury-gold" size={24} />
              </div>
              <h2 className="text-2xl font-serif">Gold Prices (per 10g)</h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
              <Clock size={14} />
              <span>Last updated: {rates?.timestamp || 'Loading...'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: '24K Pure Gold', rate: rates?.gold24k, purity: '99.9%' },
              { label: '22K Standard Gold', rate: rates?.gold22k, purity: '91.6%' },
              { label: '18K Gold', rate: rates?.gold18k, purity: '75.0%' }
            ].map((item, i) => (
              <div key={i} className="bg-luxury-cream/50 rounded-2xl p-6 border border-luxury-gold/5">
                <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">₹{item.rate?.toLocaleString('en-IN') || '---'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="bg-luxury-gold/10 text-luxury-gold px-2 py-1 rounded">Purity: {item.purity}</span>
                  <span className="text-green-600 flex items-center">
                    <TrendingUp size={12} className="mr-1" /> +0.4%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-2xl flex gap-4 items-start">
            <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={20} />
            <p className="text-sm text-blue-800 leading-relaxed">
              All our gold jewellery is <strong>BIS Hallmarked</strong>. The rates mentioned above are indicative and subject to change based on market fluctuations and GST.
            </p>
          </div>
        </div>

        {/* Silver Rates Card */}
        <div className="bg-luxury-black text-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/10 p-3 rounded-2xl">
              <TrendingDown className="text-gray-300" size={24} />
            </div>
            <h2 className="text-2xl font-serif">Silver Price</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Per 1 KG</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">₹{rates?.silver?.toLocaleString('en-IN') || '---'}</span>
                <span className="text-red-400 text-sm flex items-center">
                  <TrendingDown size={14} className="mr-1" /> -0.2%
                </span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-luxury-gold font-serif text-lg mb-4">Price Calculator</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Weight (Grams)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Purity</label>
                  <select 
                    value={purity}
                    onChange={(e) => setPurity(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                  >
                    <option value="24k" className="bg-luxury-black">24K Gold</option>
                    <option value="22k" className="bg-luxury-black">22K Gold</option>
                    <option value="18k" className="bg-luxury-black">18K Gold</option>
                  </select>
                </div>
                <div className="pt-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Estimated Value</p>
                  <p className="text-3xl font-bold text-luxury-gold">₹{Math.round(calculatePrice()).toLocaleString('en-IN')}</p>
                  <p className="text-[10px] text-gray-500 mt-2">*Excluding GST and Making Charges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GoldRate;
