const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getAboutData = async () => {
    
    const [skillsRes, traitsRes] = await Promise.all([
        fetch(`${API_URL}/skills`),
        fetch(`${API_URL}/traits`)
    ])

    if (!skillsRes.ok || !traitsRes.ok)
        throw new Error('Failed to fetch skills or traits data');

    return {
        skills: await skillsRes.json(),
        traits: await traitsRes.json()
    }
}