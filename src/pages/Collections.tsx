import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Search } from 'lucide-react';

const products = [
  { id: 1, name: "Royal Gold Necklace", price: 125000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600", category: "Gold" },
  { id: 2, name: "Diamond Stud Earrings", price: 45000, img: "https://images.unsplash.com/photo-1535633302703-3375d461fe21?auto=format&fit=crop&q=80&w=600", category: "Diamond" },
  { id: 3, name: "Antique Gold Bangle", price: 85000, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600", category: "Gold" },
  { id: 4, name: "Bridal Diamond Set", price: 450000, img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=600", category: "Bridal" },
  { id: 5, name: "Gold Temple Pendant", price: 65000, img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600", category: "Gold" },
  { id: 6, name: "Solitaire Engagement Ring", price: 150000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600", category: "Diamond" },
  { id: 7, name: "Traditional Gold Jhumka", price: 55000, img: "https://images.unsplash.com/photo-1630019058353-5ff3f4002eef?auto=format&fit=crop&q=80&w=600", category: "Gold" },
  { id: 8, name: "Diamond Tennis Bracelet", price: 210000, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600", category: "Diamond" }
];

const Collections = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => 
    (filter === 'All' || p.category === filter) &&
    (p.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div className="max-w-xl">
          <h1 className="text-5xl font-serif mb-4">Our Collections</h1>
          <p className="text-gray-500">Explore our curated selection of fine jewellery, from traditional gold pieces to contemporary diamond designs.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search jewellery..."
              className="pl-12 pr-6 py-3 bg-white border border-luxury-gold/10 rounded-full w-full focus:outline-none focus:border-luxury-gold transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 bg-white p-1 rounded-full border border-luxury-gold/10">
            {['All', 'Gold', 'Diamond', 'Bridal'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-luxury-gold text-white shadow-lg' : 'hover:bg-luxury-cream'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={product.id}
            className="group"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-gray-100">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-luxury-gold">
                  {product.category}
                </div>
              </div>
              <h3 className="font-serif text-lg mb-1 group-hover:text-luxury-gold transition-colors">{product.name}</h3>
              <p className="text-luxury-gold font-bold">₹{product.price.toLocaleString('en-IN')}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </motion.div>
  );
};

export default Collections;
