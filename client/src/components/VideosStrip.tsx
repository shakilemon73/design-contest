import { Play, Clock } from "lucide-react";

export default function VideosStrip() {
  const videos = [
    {
      id: 1,
      title: "Process in 90 seconds",
      duration: "1:30",
      thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Client story",
      duration: "2:15",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Site walk-through",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-black text-white"
      aria-labelledby="videos-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Videos</p>
          <h2 
            id="videos-heading"
            className="font-serif font-light text-4xl md:text-5xl"
          >
            See It In Action
          </h2>
        </div>

        {/* Three thumbnails */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
            >
              <div className="aspect-video relative overflow-hidden bg-[#1a1a1a] mb-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black ml-1" aria-hidden="true" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm flex items-center gap-2">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <span className="text-xs font-light">{video.duration}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-light text-center">
                {video.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
