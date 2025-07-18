// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Calculate time difference
export const timeDifference = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = endDate - startDate;
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

// Generate random ID
export const generateId = (prefix) => {
  return `${prefix}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
};

// Calculate distance between coordinates (simplified)
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // Simplified calculation - in a real app use more accurate formula
  const latDiff = Math.abs(lat1 - lat2);
  const lonDiff = Math.abs(lon1 - lon2);
  return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff) * 110; // Approx km
};