import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import videoThumb from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";

export default function VideosStrip() {
  const videos = [
    {
      id: 1,
      title: "JD Process in 90 seconds",
      thumbnail: videoThumb,
      duration: "1:30"
    },
    {
      id: 2,
      title: "Client Story",
      thumbnail: videoThumb,
      duration: "3:45"
    },
    {
      id: 3,
      title: "Site Walk-through",
      thumbnail: videoThumb,
      duration: "5:12"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-center mb-12" data-testid="text-videos-heading">
          See How We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'md:scale-105' : ''
              }`}
              data-testid={`video-card-${video.id}`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-xl text-center">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group" data-testid="button-see-all-videos">
            See all Videos
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
