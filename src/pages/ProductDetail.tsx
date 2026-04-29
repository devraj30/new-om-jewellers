import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Share2, ShieldCheck, RefreshCw, Truck } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Mock product data
  const product = {
    id: Number(id),
    name: "Royal Gold Necklace",
    price: 125000,
    description: "A masterpiece of traditional craftsmanship, this 22K gold necklace features intricate filigree work and a stunning central pendant. Perfect for weddings and special occasions.",
    weight: "24.5g",
    purity: "22K Gold (916 Hallmarked)",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity">
                <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <nav className="flex gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-luxury-gold">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-luxury-gold">Collections</Link>
            <span>/</span>
            <span className="text-luxury-gold">{product.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-luxury-gold mb-8">₹{product.price.toLocaleString('en-IN')}</p>
          
          <div className="space-y-6 mb-12">
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-luxury-gold/10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Weight</p>
                <p className="font-medium">{product.weight}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Purity</p>
                <p className="font-medium">{product.purity}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="flex-grow bg-luxury-black text-white px-8 py-4 rounded-full font-medium hover:bg-luxury-gold transition-all flex items-center justify-center gap-2">
              <ShoppingBag size={20} /> Add to Bag
            </button>
            <button className="p-4 border border-luxury-gold/20 rounded-full hover:bg-luxury-cream transition-all">
              <Heart size={20} />
            </button>
            <button className="p-4 border border-luxury-gold/20 rounded-full hover:bg-luxury-cream transition-all">
              <Share2 size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <ShieldCheck className="text-luxury-gold" size={20} />
              <span>BIS Hallmarked</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RefreshCw className="text-luxury-gold" size={20} />
              <span>Lifetime Buyback</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck className="text-luxury-gold" size={20} />
              <span>Free Insured Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
