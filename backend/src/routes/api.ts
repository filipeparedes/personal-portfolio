import { Router } from "express";

const router = Router();

// api endpoint for testing
router.get('/', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

export default router;
