
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const digitalArtImages = [
  "/lovable-uploads/photo-1618160702438-9b02ab6515c9.jpg",
  "/lovable-uploads/photo-1472396961693-142e6e269027.jpg",
  "/lovable-uploads/photo-1466721591366-2d5fba72006d.jpg",
  "/lovable-uploads/photo-1493962853295-0fd70327578d1.jpg",
  "/lovable-uploads/photo-1535268647677-300dbf3d78d1.jpg",
];

const footballImages = [
  "/lovable-uploads/photo-1498936178812-4b2e558d2937.jpg",
  "/lovable-uploads/photo-1452960962994-acf4fd70b632.jpg",
  "/lovable-uploads/photo-1518877593221-1f28583780b4.jpg",
];

const videoEditingLinks = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
];

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="section fade-section">
      <h2 className="section-title">Hobbies & Interests</h2>
      <div className="flex flex-col gap-12 w-full items-center">
        {/* Digital Art Carousel */}
        <div className="w-full max-w-[900px] flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2 w-full">Digital Art</h3>
          <Carousel className="w-full aspect-video max-w-full rounded-lg transition-transform hover:-translate-y-2 hover:shadow-xl hover:animate-pulse-glow">
            <CarouselContent>
              {digitalArtImages.map((img) => (
                <CarouselItem key={img} className="flex justify-center items-center">
                  <img
                    src={img}
                    alt="Digital Art"
                    className="aspect-video rounded-lg object-cover w-full max-h-[60vw] md:max-h-[440px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:-translate-y-1 transition-transform" />
            <CarouselNext className="hover:-translate-y-1 transition-transform" />
          </Carousel>
        </div>
        {/* Football Carousel */}
        <div className="w-full max-w-[900px] flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2 w-full">Football (Soccer)</h3>
          <Carousel className="w-full aspect-video max-w-full rounded-lg transition-transform hover:-translate-y-2 hover:shadow-xl hover:animate-pulse-glow">
            <CarouselContent>
              {footballImages.map((img) => (
                <CarouselItem key={img} className="flex justify-center items-center">
                  <img
                    src={img}
                    alt="Football Hobby"
                    className="aspect-video rounded-lg object-cover w-full max-h-[60vw] md:max-h-[440px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:-translate-y-1 transition-transform" />
            <CarouselNext className="hover:-translate-y-1 transition-transform" />
          </Carousel>
        </div>
        {/* Video Editing Carousel */}
        <div className="w-full max-w-[900px] flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2 w-full">Video Editing</h3>
          <Carousel className="w-full aspect-video max-w-full rounded-lg transition-transform hover:-translate-y-2 hover:shadow-xl hover:animate-pulse-glow">
            <CarouselContent>
              {videoEditingLinks.map((yt, idx) => (
                <CarouselItem key={yt} className="flex justify-center items-center">
                  <div className="aspect-video rounded-lg overflow-hidden w-full max-h-[60vw] md:max-h-[440px] bg-black">
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
            <CarouselPrevious className="hover:-translate-y-1 transition-transform" />
            <CarouselNext className="hover:-translate-y-1 transition-transform" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
