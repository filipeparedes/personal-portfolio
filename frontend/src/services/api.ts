const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getAboutData = async () => {
    const response = await fetch(`${API_URL}/about`);
    if (!response.ok)
        throw new Error('Failed to fetch about data');
    
    return response.json();
}