import { type User, type InsertUser, type Story, type InsertStory } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getStories(userId?: string): Promise<Story[]>;
  getStoryById(id: string): Promise<Story | undefined>;
  getFeaturedStory(): Promise<Story | undefined>;
  createStory(story: InsertStory): Promise<Story>;
  updateStory(id: string, updates: Partial<Story>): Promise<Story | undefined>;
  deleteStory(id: string): Promise<boolean>;
  updateLastPlayed(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private stories: Map<string, Story>;

  constructor() {
    this.users = new Map();
    this.stories = new Map();
    
    // Create a default user
    const defaultUser: User = {
      id: "default-user",
      username: "emma",
      name: "Emma",
      avatar: "https://pixabay.com/get/g86a8cda62c5da0cb1681ef0168ac00acb7b16f30ac85551cc58b4e3aa168ec68b44a51edf1fbba500022048e5ffe2324e28e53bfc678717f8145363f3cc2b7c6_1280.jpg",
      createdAt: new Date(),
    };
    this.users.set(defaultUser.id, defaultUser);

    // Create default stories
    const defaultStories: Story[] = [
      {
        id: "featured-story",
        title: "The Starlight Adventure",
        description: "Join Luna as she discovers a magical portal hidden in her bedroom ceiling that leads to a world made entirely of stars and moonbeams.",
        content: "Once upon a time...",
        genre: "Adventure",
        duration: 8,
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        userId: "default-user",
        isFeatured: "true",
        lastPlayed: null,
        createdAt: new Date(),
      },
      {
        id: "lysander-story",
        title: "Lysander and the Lumin-Stone",
        description: "A brave young wizard discovers a magical stone that lights up the darkest corners of the enchanted forest.",
        content: "In a faraway kingdom...",
        genre: "Adventure",
        duration: 12,
        thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
        userId: "default-user",
        isFeatured: "false",
        lastPlayed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        createdAt: new Date(),
      },
      {
        id: "ballet-story",
        title: "The Moonlight Ballet Mystery",
        description: "Every full moon, mysterious dancers appear in the garden, teaching children the secret language of movement.",
        content: "On moonlit nights...",
        genre: "Mystery",
        duration: 10,
        thumbnail: "https://pixabay.com/get/g42546e9ec316da6dc2b8150359a73339a3403212dcfd29df2260d72528bb872e3e0362ce8084c413e5d3b0a83f576e19345fcd9c4244666ad6f0aeadd65069e2_1280.jpg",
        userId: "default-user",
        isFeatured: "false",
        lastPlayed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        createdAt: new Date(),
      },
      {
        id: "carnival-story",
        title: "The Magical Midnight Carnival",
        description: "A carnival that only appears when children are fast asleep, filled with wonder and impossible rides through the clouds.",
        content: "Deep in the night...",
        genre: "Fantasy",
        duration: 15,
        thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
        userId: "default-user",
        isFeatured: "false",
        lastPlayed: null,
        createdAt: new Date(),
      },
      {
        id: "firefly-story",
        title: "The Firefly Garden",
        description: "A little girl discovers that fireflies are actually tiny fairies who tend a secret garden that only blooms at night.",
        content: "In a secret garden...",
        genre: "Nature",
        duration: 9,
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
        userId: "default-user",
        isFeatured: "false",
        lastPlayed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        createdAt: new Date(),
      },
    ];

    defaultStories.forEach(story => {
      this.stories.set(story.id, story);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async getStories(userId?: string): Promise<Story[]> {
    const allStories = Array.from(this.stories.values());
    if (userId) {
      return allStories.filter(story => story.userId === userId);
    }
    return allStories;
  }

  async getStoryById(id: string): Promise<Story | undefined> {
    return this.stories.get(id);
  }

  async getFeaturedStory(): Promise<Story | undefined> {
    return Array.from(this.stories.values()).find(story => story.isFeatured === "true");
  }

  async createStory(insertStory: InsertStory): Promise<Story> {
    const id = randomUUID();
    const story: Story = { 
      ...insertStory, 
      id,
      lastPlayed: null,
      createdAt: new Date(),
    };
    this.stories.set(id, story);
    return story;
  }

  async updateStory(id: string, updates: Partial<Story>): Promise<Story | undefined> {
    const story = this.stories.get(id);
    if (!story) return undefined;
    
    const updatedStory = { ...story, ...updates };
    this.stories.set(id, updatedStory);
    return updatedStory;
  }

  async deleteStory(id: string): Promise<boolean> {
    return this.stories.delete(id);
  }

  async updateLastPlayed(id: string): Promise<void> {
    const story = this.stories.get(id);
    if (story) {
      story.lastPlayed = new Date();
      this.stories.set(id, story);
    }
  }
}

export const storage = new MemStorage();
