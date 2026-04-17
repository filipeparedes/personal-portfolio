import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

// skills route
router.get('/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ error: "Error fetching skills" });
  }
});

// traits route
router.get('/traits', async (req, res) => {
  try {
    const traits = await prisma.trait.findMany();
    res.json(traits);
  } catch (error) {
    res.status(500).json({ error: "Error fetching traits" });
  }
});

export default router;
