import { Router } from "express";

const router = Router();

// api endpoint for testing
router.get('/about', (req, res) => {
    res.json({ 
        name: 'Filipe Paredes',
        role: 'Junior Software Engineer',
        techStack: [
            'JavaScript', 
            'TypeScript', 
            'React', 'Node.js', 
            'Express', 
            'CSS', 
            'HTML',
            'Git',
            'SQL',
            'C',
            'C++',
            'C#',
            'Java',
            'Python',
            'Azure'
        ],
        description: "Welcome to my personal portfolio!"
     });
});

export default router;
