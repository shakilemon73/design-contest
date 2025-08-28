import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertStorySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get current user
  app.get("/api/user", async (req, res) => {
    try {
      const user = await storage.getUser("default-user");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to get user" });
    }
  });

  // Get all stories
  app.get("/api/stories", async (req, res) => {
    try {
      const stories = await storage.getStories("default-user");
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Failed to get stories" });
    }
  });

  // Get featured story
  app.get("/api/stories/featured", async (req, res) => {
    try {
      const story = await storage.getFeaturedStory();
      if (!story) {
        return res.status(404).json({ message: "No featured story found" });
      }
      res.json(story);
    } catch (error) {
      res.status(500).json({ message: "Failed to get featured story" });
    }
  });

  // Get story by ID
  app.get("/api/stories/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const story = await storage.getStoryById(id);
      if (!story) {
        return res.status(404).json({ message: "Story not found" });
      }
      res.json(story);
    } catch (error) {
      res.status(500).json({ message: "Failed to get story" });
    }
  });

  // Create new story
  app.post("/api/stories", async (req, res) => {
    try {
      const validatedData = insertStorySchema.parse(req.body);
      const story = await storage.createStory(validatedData);
      res.status(201).json(story);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid story data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create story" });
    }
  });

  // Update story (for last played, etc.)
  app.patch("/api/stories/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const story = await storage.updateStory(id, req.body);
      if (!story) {
        return res.status(404).json({ message: "Story not found" });
      }
      res.json(story);
    } catch (error) {
      res.status(500).json({ message: "Failed to update story" });
    }
  });

  // Play story (update last played)
  app.post("/api/stories/:id/play", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.updateLastPlayed(id);
      res.json({ message: "Story play updated" });
    } catch (error) {
      res.status(500).json({ message: "Failed to update story play" });
    }
  });

  // Delete story
  app.delete("/api/stories/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteStory(id);
      if (!deleted) {
        return res.status(404).json({ message: "Story not found" });
      }
      res.json({ message: "Story deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete story" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
