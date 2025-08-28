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
      {/* Magical Floating Elements */}
      <div className="absolute top-32 right-40 text-6xl floating-star z-10" style={{ animationDelay: "0s" }}>⭐</div>
      <div className="absolute top-80 right-200 text-5xl floating-heart z-10" style={{ animationDelay: "1s" }}>💖</div>
      <div className="absolute bottom-60 left-80 text-7xl floating-element z-10" style={{ animationDelay: "2s" }}>🌙</div>
      <div className="absolute top-40 left-120 text-4xl floating-star z-10" style={{ animationDelay: "1.5s" }}>✨</div>
      <div className="absolute bottom-40 right-60 text-5xl floating-element z-10" style={{ animationDelay: "3s" }}>🦄</div>
      <div className="absolute top-1/2 left-40 text-4xl floating-heart z-10" style={{ animationDelay: "2.5s" }}>🌈</div>
      <div className="absolute bottom-80 left-200 text-3xl floating-star z-10" style={{ animationDelay: "0.5s" }}>🎈</div>

      {/* Header Navigation */}
      <header className="flex items-center justify-between px-16 py-8 bg-white/80 backdrop-blur-xl magical-shadow relative z-20 border-b-4 border-purple-200">
        <div className="flex items-center space-x-8">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6 logo-container">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-3xl flex items-center justify-center super-magical-shadow">
              <div className="text-4xl">📚</div>
            </div>
            <h1 className="title-font text-7xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
              ✨ TALE POP ✨
            </h1>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-6">
          <Button 
            variant="ghost" 
            size="lg" 
            className="p-4 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 super-magical-shadow"
            data-testid="button-settings"
          >
            <Settings className="w-8 h-8 text-white drop-shadow-md" />
          </Button>

          {user && (
            <div className="flex items-center space-x-6 bg-white/90 rounded-3xl px-8 py-4 super-magical-shadow border-4 border-purple-200">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-400 to-purple-500 super-magical-shadow">
                <img 
                  src={user.avatar || "https://pixabay.com/get/g86a8cda62c5da0cb1681ef0168ac00acb7b16f30ac85551cc58b4e3aa168ec68b44a51edf1fbba500022048e5ffe2324e28e53bfc678717f8145363f3cc2b7c6_1280.jpg"} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                  data-testid="img-user-avatar"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent title-font" data-testid="text-username">
                  👋 Hi {user.name}!
                </p>
                <p className="text-lg text-purple-600 font-semibold">Ready for magical stories! ✨</p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex px-16 py-12 gap-16">
        
        {/* Left Panel - Featured Story & Create New */}
        <div className="w-2/5 space-y-10">
          
          {/* Featured Story Card */}
          {featuredStory && (
            <Card className="bg-white/95 rounded-[2rem] p-12 super-magical-shadow relative overflow-hidden border-4 border-purple-200">
              {/* Magical Background Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full -translate-y-12 translate-x-12 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full translate-y-8 -translate-x-8 opacity-20"></div>
              <div className="absolute top-1/2 right-8 text-6xl opacity-20 floating-star">✨</div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                  <span className="text-purple-700 font-bold text-2xl tracking-wide title-font">🌟 FEATURED STORY 🌟</span>
                </div>
                
                <div className="w-full h-64 rounded-3xl overflow-hidden mb-8 super-magical-shadow border-4 border-pink-200">
                  <img 
                    src={featuredStory.thumbnail || ""} 
                    alt="Featured story illustration" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    data-testid="img-featured-thumbnail"
                  />
                </div>
                
                <h3 className="title-font text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4" data-testid="text-featured-title">
                  {featuredStory.title}
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed mb-8 font-medium" data-testid="text-featured-description">
                  {featuredStory.description}
                </p>
                
                <div className="flex items-center space-x-6">
                  <Button 
                    onClick={() => handlePlayStory(featuredStory.id)}
                    className="play-button flex items-center space-x-4 px-10 py-6 rounded-3xl font-bold text-xl text-white transform hover:scale-105 transition-all duration-300"
                    data-testid="button-play-featured"
                  >
                    <Play className="w-8 h-8" />
                    <span>🎧 Listen Now!</span>
                  </Button>
                  <span className="text-lg text-purple-600 bg-purple-100 px-6 py-3 rounded-2xl flex items-center space-x-2 font-semibold">
                    <Clock className="w-5 h-5" />
                    <span>{featuredStory.duration} min adventure</span>
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Create New Story Button */}
          <Button 
            onClick={handleCreateNewStory}
            className="create-button w-full text-white p-12 rounded-3xl font-bold text-3xl title-font tracking-wide relative overflow-hidden border-4 border-yellow-300"
            data-testid="button-create-new"
          >
            <div className="flex items-center justify-center space-x-6 relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Plus className="w-10 h-10" />
              </div>
              <span>🎨 CREATE NEW STORY! 🎨</span>
            </div>
          </Button>

        </div>

        {/* Right Panel - Story Library */}
        <div className="flex-1 space-y-10">
          
          {/* Library Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="title-font text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-3" data-testid="text-library-title">
                📚 Your Magical Library
              </h2>
              <p className="text-gray-700 text-2xl font-semibold">Choose your next bedtime adventure! ✨</p>
            </div>
            
            {/* Filter/Sort Controls */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-400 hover:from-pink-400 hover:to-purple-500 rounded-2xl text-white font-bold text-xl transition-all duration-300 transform hover:scale-105 super-magical-shadow flex items-center space-x-3"
                data-testid="button-filter"
              >
                <Filter className="w-6 h-6" />
                <span>🔍 Filter</span>
              </Button>
            </div>
          </div>

          {/* Story List */}
          <div className="space-y-8">
            {storiesLoading ? (
              <div className="text-center py-16">
                <div className="text-8xl mb-6 floating-element">📚</div>
                <p className="text-purple-600 text-2xl font-bold">Loading your magical stories...</p>
              </div>
            ) : regularStories.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-8xl mb-6 floating-heart">✨</div>
                <p className="text-purple-600 text-2xl font-bold">No stories in your library yet. Create your first magical story!</p>
              </div>
            ) : (
              regularStories.map((story) => (
                <Card key={story.id} className="story-card rounded-3xl p-8 flex items-center space-x-8 border-4 border-purple-100">
                  {/* Story thumbnail */}
                  <div className="w-32 h-32 story-thumbnail rounded-3xl flex items-center justify-center super-magical-shadow flex-shrink-0 overflow-hidden border-4 border-yellow-200">
                    <img 
                      src={story.thumbnail || ""} 
                      alt={`${story.title} thumbnail`} 
                      className="w-full h-full object-cover rounded-2xl transform hover:scale-110 transition-transform duration-300"
                      data-testid={`img-thumbnail-${story.id}`}
                    />
                  </div>
                  
                  {/* Story details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-3 title-font" data-testid={`text-title-${story.id}`}>
                      {story.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-4 font-medium leading-relaxed" data-testid={`text-description-${story.id}`}>
                      {story.description}
                    </p>
                    <div className="flex items-center space-x-6 text-lg text-purple-600 font-semibold">
                      <span className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-2xl">
                        <Star className="w-5 h-5" />
                        <span>{story.genre}</span>
                      </span>
                      <span className="flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-2xl">
                        <Clock className="w-5 h-5" />
                        <span>{story.duration} min</span>
                      </span>
                      <span className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-2xl">
                        <Calendar className="w-5 h-5" />
                        <span>{formatTimeAgo(story.lastPlayed)}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-4">
                    <Button 
                      onClick={() => handlePlayStory(story.id)}
                      size="lg"
                      className="play-button w-20 h-20 rounded-3xl flex items-center justify-center text-white font-bold transform hover:scale-110 transition-all duration-300"
                      data-testid={`button-play-${story.id}`}
                    >
                      <Play className="w-8 h-8" />
                    </Button>
                    <Button 
                      onClick={() => handleDeleteStory(story.id)}
                      variant="ghost"
                      size="lg"
                      className="w-20 h-20 bg-red-200 text-red-600 rounded-3xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                      data-testid={`button-delete-${story.id}`}
                    >
                      <Trash2 className="w-8 h-8" />
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
                className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white px-12 py-6 rounded-3xl font-bold text-2xl hover:from-yellow-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 super-magical-shadow title-font"
                data-testid="button-load-more"
              >
                🌟 Load More Stories 🌟
              </Button>
            </div>
          )}

        </div>

      </main>
    </div>
  );
}
