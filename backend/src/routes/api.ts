import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

// skills route
router.get('/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error) {
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

router.get('/projects', async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Error fetching projects" });
    }
});

export default router;
