
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// IMAGE CAROUSELS — Update these arrays if you upload new images
const digitalArtImages = [
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

const videoEditingLinks = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder 1
  "https://www.youtube.com/embed/3JZ_D3ELwOQ", // placeholder 2
];

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="section">
      <h2 className="section-title">Hobbies & Interests</h2>
      <div className="flex flex-col gap-8">
        {/* Digital Art Carousel */}
        <div className="flex flex-col items-center w-full">
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
        <div className="flex flex-col items-center w-full">
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
        <div className="flex flex-col items-center w-full">
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
