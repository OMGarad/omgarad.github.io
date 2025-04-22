
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";

// IMAGE CAROUSELS — Update these arrays if you upload new images
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Digital Art Carousel */}
        <div className="flex flex-col items-center md:items-start w-full md:ml-0">
          <h3 className="text-xl font-semibold mb-4">Digital Art</h3>
          <Carousel className="w-full max-w-sm md:max-w-md">
            <CarouselContent>
              {digitalArtImages.map((img) => (
                <CarouselItem key={img} className="flex justify-center items-center">
                  <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt="Digital Art"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>

        {/* Football Carousel */}
        <div className="flex flex-col items-center md:items-end w-full md:translate-y-16">
          <h3 className="text-xl font-semibold mb-4">Football (Soccer)</h3>
          <Carousel className="w-full max-w-sm md:max-w-md">
            <CarouselContent>
              {footballImages.map((img) => (
                <CarouselItem key={img} className="flex justify-center items-center">
                  <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt="Football Hobby"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>

        {/* Video Editing Carousel */}
        <div className="flex flex-col items-center md:col-span-2 w-full md:w-3/4 mx-auto">
          <h3 className="text-xl font-semibold mb-4">Video Editing</h3>
          <Carousel className="w-full max-w-sm md:max-w-xl">
            <CarouselContent>
              {videoEditingLinks.map((yt, idx) => (
                <CarouselItem key={yt} className="flex justify-center items-center">
                  <AspectRatio ratio={16/9} className="bg-black rounded-lg overflow-hidden">
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
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
