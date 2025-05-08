
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "./ui/dialog";
import { Maximize2, X } from "lucide-react";
import { Button } from "./ui/button";

const digitalArtImages = [
  "/lovable-uploads/kakashi.png",
  "/lovable-uploads/zenitsu.jpeg",
  "/lovable-uploads/naruto.png",
  "/lovable-uploads/sasuke.jpeg",
  "/lovable-uploads/jojo.png",
];

const footballImages = [
  "/lovable-uploads/mancity.jpeg",
  "/lovable-uploads/messi.jpeg",
  "/lovable-uploads/christmas.jpeg",
  "/lovable-uploads/ct.jpeg"
];

const videoEditingLinks = [
  "https://www.youtube.com/embed/2QLeuNc2mQY?si=VI0nscnyvJ_igSjK",
  "https://www.youtube.com/embed/C07lPVQ8kDw?feature=shorts",
  "https://www.youtube.com/embed/4IOGITJWWzk?si=rnkr5LgyHIJjQKm5"
];

const HobbiesSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Function to handle image expansion
  const handleImageExpand = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setIsImageOpen(true);
  };

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
                  <div className="relative group aspect-video w-full">
                    <img
                      src={img}
                      alt="Digital Art"
                      className="aspect-video rounded-lg object-cover w-full max-h-[60vw] md:max-h-[440px]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="opacity-90 hover:opacity-100 hover:scale-105 transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageExpand(img);
                        }}
                      >
                        <Maximize2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
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
                  <div className="relative group aspect-video w-full">
                    <img
                      src={img}
                      alt="Football Hobby"
                      className="aspect-video rounded-lg object-cover w-full max-h-[60vw] md:max-h-[440px]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="opacity-90 hover:opacity-100 hover:scale-105 transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageExpand(img);
                        }}
                      >
                        <Maximize2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
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

      {/* Full-size Image Dialog */}
      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[95vw] w-auto h-auto max-h-[95vh] p-1 sm:p-2 bg-background/95 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Expanded view" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
            <DialogClose className="absolute top-2 right-2 z-50 rounded-full bg-background/80 hover:bg-background p-1">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HobbiesSection;
