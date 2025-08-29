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
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Minimal Magical Floating Elements */}
      <div className="absolute top-20 right-32 text-4xl floating-star z-10 opacity-30" style={{ animationDelay: "0s" }}>⭐</div>
      <div className="absolute bottom-32 left-32 text-4xl floating-element z-10 opacity-30" style={{ animationDelay: "2s" }}>🌙</div>
      <div className="absolute top-1/3 left-20 text-3xl floating-star z-10 opacity-30" style={{ animationDelay: "1.5s" }}>✨</div>

      {/* Header Navigation */}
      <header className="flex items-center justify-between px-16 py-8 bg-amber-50/80 backdrop-blur-xl magical-shadow relative z-20 border-b-4 border-amber-200">
        <div className="flex items-center space-x-8">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6 logo-container">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-800 via-amber-600 to-amber-500 rounded-3xl flex items-center justify-center super-magical-shadow">
              <div className="text-4xl">📚</div>
            </div>
            <h1 className="title-font text-7xl bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
              ✨ TALE POP ✨
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
            <div className="flex items-center space-x-6 bg-amber-50/90 rounded-3xl px-8 py-4 super-magical-shadow border-4 border-amber-200">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 super-magical-shadow">
                <img 
                  src={user.avatar || "https://pixabay.com/get/g86a8cda62c5da0cb1681ef0168ac00acb7b16f30ac85551cc58b4e3aa168ec68b44a51edf1fbba500022048e5ffe2324e28e53bfc678717f8145363f3cc2b7c6_1280.jpg"} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                  data-testid="img-user-avatar"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent title-font" data-testid="text-username">
                  👋 Hi {user.name}!
                </p>
                <p className="text-lg text-amber-700 font-semibold">Ready for magical stories! ✨</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col px-16 py-8 gap-12">
        
        {/* Hero CTA Section - Create New Story */}
        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <Button 
              onClick={handleCreateNewStory}
              className="create-button w-full text-white p-16 rounded-[3rem] font-bold text-5xl title-font tracking-wide relative overflow-hidden border-6 border-amber-300 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
              data-testid="button-create-new"
            >
              {/* Magical Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 opacity-20 animate-pulse"></div>
              
              <div className="flex items-center justify-center space-x-8 relative z-10">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/40">
                  <Plus className="w-12 h-12" />
                </div>
                <span className="drop-shadow-lg">✨ CREATE YOUR MAGICAL STORY ✨</span>
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/40">
                  <div className="text-2xl">🎨</div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex gap-16">
          
          {/* Left Panel - Featured Story */}
          <div className="w-2/5">
            {featuredStory && (
              <Card className="bg-amber-50/95 rounded-[2rem] p-10 super-magical-shadow relative overflow-hidden border-4 border-amber-200">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full -translate-y-8 translate-x-8 opacity-15"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-full translate-y-6 -translate-x-6 opacity-15"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"></div>
                    <span className="text-amber-800 font-bold text-xl tracking-wide title-font">🌟 FEATURED STORY</span>
                  </div>
                  
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 super-magical-shadow border-3 border-amber-300">
                    <img 
                      src={featuredStory.thumbnail || ""} 
                      alt="Featured story illustration" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      data-testid="img-featured-thumbnail"
                    />
                  </div>
                  
                  <h3 className="title-font text-3xl bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600 bg-clip-text text-transparent mb-3" data-testid="text-featured-title">
                    {featuredStory.title}
                  </h3>
                  <p className="text-amber-800 text-lg leading-relaxed mb-6 font-medium" data-testid="text-featured-description">
                    {featuredStory.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <Button 
                      onClick={() => handlePlayStory(featuredStory.id)}
                      className="play-button flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg text-white transform hover:scale-105 transition-all duration-300"
                      data-testid="button-play-featured"
                    >
                      <Play className="w-6 h-6" />
                      <span>🎧 Listen Now</span>
                    </Button>
                    <span className="text-base text-amber-700 bg-amber-100 px-4 py-2 rounded-xl flex items-center space-x-2 font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>{featuredStory.duration} min</span>
                    </span>
                  </div>
                </div>
              </Card>
            )}
          </div>

        {/* Right Panel - Story Library */}
        <div className="flex-1 space-y-10">
          
          {/* Library Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="title-font text-3xl bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600 bg-clip-text text-transparent mb-2" data-testid="text-library-title">
                📚 Your Library
              </h2>
              <p className="text-amber-800 text-lg font-medium">Choose your next adventure</p>
            </div>
            
            {/* Filter/Sort Controls */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 rounded-xl text-white font-semibold text-base transition-all duration-300 flex items-center space-x-2"
                data-testid="button-filter"
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
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
                <Card key={story.id} className="story-card rounded-2xl p-6 flex items-center space-x-6 border-2 border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg">
                  {/* Story thumbnail */}
                  <div className="w-24 h-24 story-thumbnail rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-amber-200">
                    <img 
                      src={story.thumbnail || ""} 
                      alt={`${story.title} thumbnail`} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      data-testid={`img-thumbnail-${story.id}`}
                    />
                  </div>
                  
                  {/* Story details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent mb-2 title-font" data-testid={`text-title-${story.id}`}>
                      {story.title}
                    </h3>
                    <p className="text-amber-800 text-base mb-3 font-medium leading-relaxed" data-testid={`text-description-${story.id}`}>
                      {story.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-amber-700 font-medium">
                      <span className="flex items-center space-x-1 bg-amber-100 px-3 py-1 rounded-lg">
                        <Star className="w-3 h-3" />
                        <span>{story.genre}</span>
                      </span>
                      <span className="flex items-center space-x-1 bg-amber-50 px-3 py-1 rounded-lg">
                        <Clock className="w-3 h-3" />
                        <span>{story.duration} min</span>
                      </span>
                      <span className="text-amber-600">{formatTimeAgo(story.lastPlayed)}</span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-3">
                    <Button 
                      onClick={() => handlePlayStory(story.id)}
                      size="lg"
                      className="play-button w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold transform hover:scale-105 transition-all duration-300"
                      data-testid={`button-play-${story.id}`}
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                    <Button 
                      onClick={() => handleDeleteStory(story.id)}
                      variant="ghost"
                      size="lg"
                      className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                      data-testid={`button-delete-${story.id}`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </Card>
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
