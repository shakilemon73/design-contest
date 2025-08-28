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
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-background">
      {/* Header with Title and User Profile */}
      <header className="flex items-center justify-between px-20 py-6">
        <div></div> {/* Empty left space for balance */}
        
        {/* Centered Title */}
        <h1 className="title-font text-6xl text-dark-brown tracking-wider font-bold text-center">
          ✦ TALE POP ✦
        </h1>
        
        {/* Right side - User Profile */}
        <div className="flex items-center space-x-4">
          {user && (
            <div className="text-right mr-4">
              <p className="text-sm text-muted-foreground">Text Login</p>
              <p className="text-sm text-muted-foreground">Google</p>
            </div>
          )}
          
          {user && (
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
              <img 
                src={user.avatar || "https://pixabay.com/get/g86a8cda62c5da0cb1681ef0168ac00acb7b16f30ac85551cc58b4e3aa168ec68b44a51edf1fbba500022048e5ffe2324e28e53bfc678717f8145363f3cc2b7c6_1280.jpg"} 
                alt="User avatar" 
                className="w-full h-full object-cover"
                data-testid="img-user-avatar"
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex px-20 py-8 gap-20">
        
        {/* Left Panel - Circular Illustration */}
        <div className="flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-b from-golden-accent to-medium-brown relative overflow-hidden border-4 border-dark-brown" style={{ boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.1)' }}>
            {/* Stars in background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-20 left-16 text-yellow-300 text-2xl">✦</div>
              <div className="absolute top-12 right-20 text-yellow-200 text-lg">✦</div>
              <div className="absolute bottom-16 left-12 text-yellow-400 text-xl">✦</div>
              <div className="absolute bottom-20 right-16 text-yellow-300 text-sm">✦</div>
              <div className="absolute top-1/3 right-1/3 text-yellow-200 text-3xl">★</div>
            </div>
            
            {/* Child silhouette */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-black opacity-80" style={{ clipPath: 'polygon(30% 100%, 70% 100%, 75% 80%, 80% 70%, 75% 60%, 70% 50%, 65% 40%, 55% 35%, 45% 35%, 35% 40%, 30% 50%, 25% 60%, 20% 70%, 25% 80%)' }}>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Create Button and Story List */}
        <div className="flex-1 space-y-8">
          
          {/* Create New Story Button */}
          <div className="flex justify-end mb-12">
            <Button 
              onClick={handleCreateNewStory}
              className="create-button bg-medium-brown text-soft-cream px-8 py-4 rounded-2xl font-semibold text-xl border-2 border-dark-brown hover:bg-dark-brown transition-colors"
              data-testid="button-create-new"
            >
              CREATE NEW!
            </Button>
          </div>

          {/* Story List */}
          <div className="space-y-4">
            {storiesLoading ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-xl">Loading stories...</p>
              </div>
            ) : regularStories.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-xl">No stories in your library yet. Create your first story!</p>
              </div>
            ) : (
              [...regularStories, ...regularStories, ...regularStories].slice(0, 3).map((story, index) => (
                <Card key={`${story.id}-${index}`} className="story-card rounded-2xl p-4 flex items-center justify-between bg-card border-2 border-border hover:border-medium-brown transition-colors">
                  
                  {/* Story icon/thumbnail */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center border border-border">
                      <div className="w-8 h-8 bg-medium-brown rounded" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}></div>
                    </div>
                    
                    {/* Story title */}
                    <h3 className="font-semibold text-xl text-foreground" data-testid={`text-title-${story.id}`}>
                      {story.title}
                    </h3>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-3">
                    <Button 
                      onClick={() => handlePlayStory(story.id)}
                      size="sm"
                      className="play-button bg-medium-brown hover:bg-dark-brown text-soft-cream px-4 py-2 rounded-xl transition-colors"
                      data-testid={`button-play-${story.id}`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button 
                      onClick={() => handleDeleteStory(story.id)}
                      variant="ghost"
                      size="sm"
                      className="bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground px-4 py-2 rounded-xl transition-colors"
                      data-testid={`button-delete-${story.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
