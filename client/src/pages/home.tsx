import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Play, Trash2, Settings, Plus, Filter, Star, Clock, Calendar } from "lucide-react";
import type { Story, User } from "@shared/schema";

function formatTimeAgo(date: Date | null): string {
  if (!date) return "New story!";
  
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 14) return "1 week ago";
  return `${Math.floor(diffInDays / 7)} weeks ago`;
}

export default function Home() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: user } = useQuery<User>({
    queryKey: ["/api/user"],
  });

  const { data: stories = [], isLoading: storiesLoading } = useQuery<Story[]>({
    queryKey: ["/api/stories"],
  });

  const { data: featuredStory } = useQuery<Story>({
    queryKey: ["/api/stories/featured"],
  });

  const playStoryMutation = useMutation({
    mutationFn: async (storyId: string) => {
      return apiRequest("POST", `/api/stories/${storyId}/play`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/stories"] });
      toast({
        title: "Story Started",
        description: "Enjoy your bedtime story!",
      });
    },
  });

  const deleteStoryMutation = useMutation({
    mutationFn: async (storyId: string) => {
      return apiRequest("DELETE", `/api/stories/${storyId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/stories"] });
      toast({
        title: "Story Deleted",
        description: "The story has been removed from your library.",
      });
    },
  });

  const handlePlayStory = (storyId: string) => {
    playStoryMutation.mutate(storyId);
  };

  const handleDeleteStory = (storyId: string) => {
    deleteStoryMutation.mutate(storyId);
  };

  const handleCreateNewStory = () => {
    toast({
      title: "Create New Story",
      description: "Story creation feature coming soon!",
    });
  };

  const regularStories = stories.filter(story => story.isFeatured !== "true");

  return (
    <div className="w-full h-full flex flex-col relative bg-gradient-to-br from-background to-secondary/20">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-accent/30 rounded-full floating-element" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary/30 rounded-full floating-element" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-secondary/40 rounded-full floating-element" style={{ animationDelay: "2s" }}></div>

      {/* Header Navigation */}
      <header className="flex items-center justify-between px-16 py-8 bg-card/50 backdrop-blur-sm gentle-shadow relative z-10">
        <div className="flex items-center space-x-8">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center gentle-shadow floating-element">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h1 className="title-font text-6xl text-primary tracking-wide">✦ TALE POP ✦</h1>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-6">
          <Button 
            variant="ghost" 
            size="lg" 
            className="nav-button p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            data-testid="button-settings"
          >
            <Settings className="w-8 h-8 text-muted-foreground" />
          </Button>

          {user && (
            <div className="flex items-center space-x-4 bg-muted/50 rounded-2xl px-6 py-3">
              <div className="w-20 h-20 rounded-full overflow-hidden gentle-shadow">
                <img 
                  src={user.avatar || "https://pixabay.com/get/g86a8cda62c5da0cb1681ef0168ac00acb7b16f30ac85551cc58b4e3aa168ec68b44a51edf1fbba500022048e5ffe2324e28e53bfc678717f8145363f3cc2b7c6_1280.jpg"} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                  data-testid="img-user-avatar"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg text-foreground" data-testid="text-username">{user.name}</p>
                <p className="text-sm text-muted-foreground">Ready for stories!</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex px-16 py-12 gap-16">
        
        {/* Left Panel - Featured Story & Create New */}
        <div className="w-2/5 space-y-8">
          
          {/* Featured Story Card */}
          {featuredStory && (
            <Card className="bg-card rounded-3xl p-10 gentle-shadow relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full translate-y-6 -translate-x-6"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-accent-foreground font-semibold text-lg tracking-wide">FEATURED STORY</span>
                </div>
                
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 gentle-shadow">
                  <img 
                    src={featuredStory.thumbnail || ""} 
                    alt="Featured story illustration" 
                    className="w-full h-full object-cover"
                    data-testid="img-featured-thumbnail"
                  />
                </div>
                
                <h3 className="title-font text-3xl text-primary mb-3" data-testid="text-featured-title">{featuredStory.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6" data-testid="text-featured-description">{featuredStory.description}</p>
                
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={() => handlePlayStory(featuredStory.id)}
                    className="flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-colors gentle-shadow"
                    data-testid="button-play-featured"
                  >
                    <Play className="w-6 h-6" />
                    <span>Listen Now</span>
                  </Button>
                  <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-xl flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredStory.duration} min read</span>
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Create New Story Button */}
          <Button 
            onClick={handleCreateNewStory}
            className="create-button w-full text-primary-foreground p-8 rounded-3xl font-bold text-2xl title-font tracking-wide gentle-shadow bg-gradient-to-br from-primary via-primary to-primary/80 hover:from-primary hover:to-primary/90"
            data-testid="button-create-new"
          >
            <div className="flex items-center justify-center space-x-4">
              <Plus className="w-8 h-8" />
              <span>CREATE NEW STORY!</span>
            </div>
          </Button>

        </div>

        {/* Right Panel - Story Library */}
        <div className="flex-1 space-y-8">
          
          {/* Library Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="title-font text-4xl text-primary mb-2" data-testid="text-library-title">Your Story Library</h2>
              <p className="text-muted-foreground text-lg">Choose your next bedtime adventure</p>
            </div>
            
            {/* Filter/Sort Controls */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="nav-button px-6 py-3 bg-muted rounded-xl text-muted-foreground hover:bg-muted/80 transition-colors flex items-center space-x-2"
                data-testid="button-filter"
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          {/* Story List */}
          <div className="space-y-6">
            {storiesLoading ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Loading your stories...</p>
              </div>
            ) : regularStories.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No stories in your library yet. Create your first story!</p>
              </div>
            ) : (
              regularStories.map((story) => (
                <Card key={story.id} className="story-card rounded-2xl p-6 gentle-shadow flex items-center space-x-6 bg-gradient-to-r from-card to-card/80">
                  {/* Story thumbnail */}
                  <div className="w-24 h-24 story-thumbnail rounded-2xl flex items-center justify-center gentle-shadow flex-shrink-0 overflow-hidden">
                    <img 
                      src={story.thumbnail || ""} 
                      alt={`${story.title} thumbnail`} 
                      className="w-full h-full object-cover rounded-2xl"
                      data-testid={`img-thumbnail-${story.id}`}
                    />
                  </div>
                  
                  {/* Story details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2" data-testid={`text-title-${story.id}`}>{story.title}</h3>
                    <p className="text-muted-foreground mb-3" data-testid={`text-description-${story.id}`}>{story.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{story.genre}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{story.duration} min</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Last played {formatTimeAgo(story.lastPlayed)}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-3">
                    <Button 
                      onClick={() => handlePlayStory(story.id)}
                      size="lg"
                      className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center hover:bg-primary/90 transition-colors gentle-shadow"
                      data-testid={`button-play-${story.id}`}
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                    <Button 
                      onClick={() => handleDeleteStory(story.id)}
                      variant="ghost"
                      size="lg"
                      className="w-14 h-14 bg-muted text-muted-foreground rounded-2xl flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      data-testid={`button-delete-${story.id}`}
                    >
                      <Trash2 className="w-6 h-6" />
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Load More Stories */}
          {regularStories.length > 0 && (
            <div className="text-center pt-8">
              <Button 
                variant="secondary"
                className="bg-secondary text-secondary-foreground px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-secondary/90 transition-colors gentle-shadow"
                data-testid="button-load-more"
              >
                Load More Stories
              </Button>
            </div>
          )}

        </div>

      </main>
    </div>
  );
}
