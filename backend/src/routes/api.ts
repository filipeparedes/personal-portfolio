import { Router } from "express";
import prisma from "../lib/prisma";
import { Resend } from 'resend';

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

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

//projects route
router.get('/projects', async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Error fetching projects" });
    }
});

//contact route
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    // Save to database
    await prisma.contact.create({
      data: { name, email, message }
    });

    
    //Send email notification
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.MY_EMAIL!,
      subject: `New message from ${name}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
