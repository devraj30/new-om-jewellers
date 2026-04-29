export const fetchGoldRates = async () => {
  try {
    // Using a public API for spot gold prices
    const response = await fetch('https://api.metals.live/v1/spot/gold');
    const data = await response.json();
    
    // The API returns price in USD per Troy Ounce
    // 1 Troy Ounce = 31.1035 grams
    // Approx conversion to INR (assuming 1 USD = 84 INR)
    const usdPerOz = data[0]?.price;
    
    if (!usdPerOz) throw new Error('Invalid data');

    const inrPerGram = (usdPerOz / 31.1035) * 84;
    const gold24k = Math.round(inrPerGram * 10);
    const gold22k = Math.round(gold24k * 0.916); // 22K is 91.6% pure
    const gold18k = Math.round(gold24k * 0.75);  // 18K is 75% pure

    // Fetch silver rate
    const silverResponse = await fetch('https://api.metals.live/v1/spot/silver');
    const silverData = await silverResponse.json();
    const silverUsdPerOz = silverData[0]?.price;
    const silverInrPerKg = Math.round((silverUsdPerOz / 31.1035) * 1000 * 84);

    return {
      gold24k,
      gold22k,
      gold18k,
      silver: silverInrPerKg,
      timestamp: new Date().toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  } catch (error) {
    console.error('Error fetching gold rates:', error);
    // Fallback static rates if API fails
    return {
      gold24k: 72500,
      gold22k: 66410,
      gold18k: 54375,
      silver: 88500,
      timestamp: new Date().toLocaleString() + ' (Estimated)'
    };
  }
};
