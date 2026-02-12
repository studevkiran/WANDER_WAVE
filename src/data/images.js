// Centralized Image Configuration
// All images used across the Wander Wave website

export const images = {
    // Destination Hero Images (High Resolution)
    destinations: {
        dubai: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        thailand: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        vietnam: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        maldives: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        hongkong: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        srilanka: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        kazakhstan: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },

    // Review/Testimonial Images (Medium Resolution)
    reviews: {
        dubai1: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        thailand1: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        vietnam1: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        bali1: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        maldives1: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        singapore1: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        malaysia1: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        indonesia1: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        cambodia1: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        philippines1: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        srilanka1: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
        nepal1: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },

    // Hero/Background Images
    hero: {
        default: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        travel: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },

    // Placeholder/Fallback Images
    placeholder: {
        destination: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    }
};

// Helper function to get optimized image URL with custom dimensions
export const getOptimizedImage = (url, width = 1200, quality = 80) => {
    if (!url) return images.placeholder.destination;

    // If it's an Unsplash URL, optimize it
    if (url.includes('unsplash.com')) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?q=${quality}&w=${width}&auto=format&fit=crop&ixlib=rb-4.0.3`;
    }

    return url;
};

export default images;
