
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Image, Video } from "lucide-react";

// IMAGE CAROUSELS
const digitalArtImages = [
  // The user is expected to provide or upload these images (use placeholder names for now)
  "/lovable-uploads/photo-1618160702438-9b02ab6515c9.jpg",
  "/lovable-uploads/photo-1472396961693-142e6e269027.jpg",
  "/lovable-uploads/photo-1466721591366-2d5fba72006d.jpg",
  "/lovable-uploads/photo-1493962853295-0fd70327578a.jpg",
  "/lovable-uploads/photo-1535268647677-300dbf3d78d1.jpg",
];

const footballImages = [
  "/lovable-uploads/photo-1498936178812-4b2e558d2937.jpg",
  "/lovable-uploads/photo-1452960962994-acf4fd70b632.jpg",
  "/lovable-uploads/photo-1518877593221-1f28583780b4.jpg",
];

// VIDEO CAROUSEL (YouTube video links, these must be provided by user)
const videoEditingLinks = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example placeholder (user to provide actual link)
  "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Example placeholder (user to provide actual link)
];

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="section">
      <h2 className="section-title">Hobbies & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Digital Art Carousel */}
        <div className="flex flex-col items-center">
          <div className="p-3 bg-secondary dark:bg-secondary/20 rounded-full mb-3">
            <Image className="text-primary dark:text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Digital Art</h3>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {digitalArtImages.map((img, idx) => (
                <CarouselItem key={img} className="flex justify-center items-center">
                  <img
                    src={img}
                    alt="Digital Art"
                    className="aspect-video rounded-lg object-cover w-full h-40"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Football Carousel */}
        <div className="flex flex-col items-center">
          <div className="p-3 bg-secondary dark:bg-secondary/20 rounded-full mb-3">
            <Image className="text-primary dark:text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Football (Soccer)</h3>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {footballImages.map((img, idx) => (
                <CarouselItem key={img} className="flex justify-center items-center">
                  <img
                    src={img}
                    alt="Football Hobby"
                    className="aspect-video rounded-lg object-cover w-full h-40"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Video Editing Carousel */}
        <div className="flex flex-col items-center">
          <div className="p-3 bg-secondary dark:bg-secondary/20 rounded-full mb-3">
            <Video className="text-primary dark:text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {videoEditingLinks.map((yt, idx) => (
                <CarouselItem key={yt} className="flex justify-center items-center">
                  <div className="aspect-video rounded-lg overflow-hidden w-full h-40 bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={yt}
                      title={`Video Editing Example ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
