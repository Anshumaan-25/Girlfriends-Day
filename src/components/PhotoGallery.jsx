import React from "react";

const photos = [
  {
    src: "/photos/first-day.jpg",
    caption: "The first day we met (Ngl one of the best day of my life) 💘",
    aspect: "aspect-[9/16]",
    emoji: "💘",
  },
  {
    src: "/photos/hair.jpg",
    caption: "Hands down one of the cutest picture of us (I love this one) 🥰",
    aspect: "aspect-[9/16]",
    emoji: "🥰",
  },
  {
    src: "/photos/MyKitten.jpg",
    caption:
      "Dressed up as a cat just to cheer me up (one of the most magical nights I’ve shared with you virtually) 🌙",
    aspect: "aspect-[117/151.8]",
    emoji: "🐱",
  },
  {
    src: "/photos/fav-pic.jpg",
    caption: "My absolute fav picture of us 🥺💕",
    aspect: "aspect-[871/1064]",
    emoji: "💖",
  },
];

function PhotoGallery() {
  return (
    <section
      className="relative  py-20 px-4 font-poppins text-white"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 z-0 rounded-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-100 mb-12 drop-shadow-lg">
          Our Memories 📸
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white bg-opacity-20 backdrop-blur"
            >
              <div className="absolute top-2 left-3 text-2xl z-10">
                {photo.emoji}
              </div>

              <div className={`w-full ${photo.aspect}`}>
                <img
                  src={photo.src}
                  alt="memory"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              <p className="bg-white bg-opacity-70 text-gray-800 text-center py-4 px-3 text-sm font-medium rounded-b-2xl backdrop-blur-sm">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
