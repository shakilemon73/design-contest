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
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Minimal Magical Floating Elements */}
      <div className="absolute top-20 right-32 text-4xl floating-star z-10 opacity-30" style={{ animationDelay: "0s" }}>⭐</div>
      <div className="absolute bottom-32 left-32 text-4xl floating-element z-10 opacity-30" style={{ animationDelay: "2s" }}>🌙</div>
      <div className="absolute top-1/3 left-20 text-3xl floating-star z-10 opacity-30" style={{ animationDelay: "1.5s" }}>✨</div>

      {/* Header Navigation */}
      <header className="flex items-center justify-between px-16 py-6 bg-gradient-to-r from-amber-100/95 to-orange-100/95 backdrop-blur-xl relative z-20 border-b border-amber-200/50">
        <div className="flex items-center space-x-8">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6 logo-container">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-800 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-2xl">📚</div>
            </div>
            <h1 className="title-font text-5xl bg-gradient-to-r from-amber-900 to-amber-800 bg-clip-text text-transparent tracking-wide">
              TALE POP
            </h1>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-6">
          <Button 
            variant="ghost" 
            size="lg" 
            className="p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-110 super-magical-shadow"
            data-testid="button-settings"
          >
            <Settings className="w-8 h-8 text-white drop-shadow-md" />
          </Button>

          {user && (
            <div className="flex items-center space-x-3 bg-amber-100/80 rounded-2xl px-4 py-3 border border-amber-300">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                <img 
                  src={user.avatar || "https://pixabay.com/get/g86a8cda62c5da0cb1681ef0168ac00acb7b16f30ac85551cc58b4e3aa168ec68b44a51edf1fbba500022048e5ffe2324e28e53bfc678717f8145363f3cc2b7c6_1280.jpg"} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                  data-testid="img-user-avatar"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg text-amber-900" data-testid="text-username">
                  {user.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col px-16 py-6 gap-8">
        
        {/* Hero CTA Section - Create New Story */}
        <div className="w-full flex justify-center mb-6">
          <div className="w-full max-w-2xl">
            <Button 
              onClick={handleCreateNewStory}
              className="create-button w-full text-white p-8 rounded-3xl font-bold text-3xl title-font tracking-wide relative overflow-hidden border-3 border-amber-800/30 shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              data-testid="button-create-new"
            >
              <div className="flex items-center justify-center space-x-4 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Plus className="w-8 h-8" />
                </div>
                <span className="drop-shadow-sm">CREATE NEW!</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex gap-16">
          
          {/* Left Panel - Featured Story */}
          <div className="w-2/5">
            {featuredStory && (
              <div className="rounded-3xl overflow-hidden border-2 border-amber-700/20 bg-gradient-to-br from-amber-100/90 to-orange-100/90 backdrop-blur-sm">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={featuredStory.thumbnail || ""} 
                    alt="Featured story illustration" 
                    className="w-full h-full object-cover"
                    data-testid="img-featured-thumbnail"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                    <span className="text-amber-800 font-bold text-sm tracking-wide">FEATURED STORY</span>
                  </div>
                  
                  <h3 className="title-font text-2xl text-amber-900 mb-3" data-testid="text-featured-title">
                    {featuredStory.title}
                  </h3>
                  <p className="text-amber-800 text-base leading-relaxed mb-4 font-medium" data-testid="text-featured-description">
                    {featuredStory.description}
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <Button 
                      onClick={() => handlePlayStory(featuredStory.id)}
                      className="play-button flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold text-base text-white"
                      data-testid="button-play-featured"
                    >
                      <Play className="w-5 h-5" />
                      <span>Listen</span>
                    </Button>
                    <span className="text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-lg flex items-center space-x-1 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{featuredStory.duration} min</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

        {/* Right Panel - Story Library */}
        <div className="flex-1 space-y-10">
          
          {/* Library Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="title-font text-2xl text-amber-900" data-testid="text-library-title">
              Your Stories
            </h2>
          </div>

          {/* Story List */}
          <div className="space-y-8">
            {storiesLoading ? (
              <div className="text-center py-16">
                <div className="text-8xl mb-6 floating-element">📚</div>
                <p className="text-amber-700 text-2xl font-bold">Loading your magical stories...</p>
              </div>
            ) : regularStories.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-8xl mb-6 floating-heart">✨</div>
                <p className="text-amber-700 text-2xl font-bold">No stories in your library yet. Create your first magical story!</p>
              </div>
            ) : (
              regularStories.map((story) => (
                <div key={story.id} className="bg-amber-50/80 border-2 border-amber-700/20 rounded-2xl p-4 flex items-center space-x-4 hover:bg-amber-100/80 transition-all duration-200">
                  {/* Story thumbnail */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-amber-300 flex-shrink-0">
                    <img 
                      src={story.thumbnail || ""} 
                      alt={`${story.title} thumbnail`} 
                      className="w-full h-full object-cover"
                      data-testid={`img-thumbnail-${story.id}`}
                    />
                  </div>
                  
                  {/* Story details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-amber-900 mb-1" data-testid={`text-title-${story.id}`}>
                      {story.title}
                    </h3>
                    <p className="text-amber-800 text-sm font-medium leading-relaxed" data-testid={`text-description-${story.id}`}>
                      {story.description}
                    </p>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-2">
                    <Button 
                      onClick={() => handlePlayStory(story.id)}
                      className="play-button w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      data-testid={`button-play-${story.id}`}
                    >
                      <Play className="w-5 h-5" />
                    </Button>
                    <Button 
                      onClick={() => handleDeleteStory(story.id)}
                      variant="ghost"
                      className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200"
                      data-testid={`button-delete-${story.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Load More Stories */}
          {regularStories.length > 0 && (
            <div className="text-center pt-12">
              <Button 
                variant="secondary"
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-12 py-6 rounded-3xl font-bold text-2xl hover:from-amber-600 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 super-magical-shadow title-font"
                data-testid="button-load-more"
              >
                🌟 Load More Stories 🌟
              </Button>
            </div>
          )}

        </div>

        </div>
      </main>
    </div>
  );
}
