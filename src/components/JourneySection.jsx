// src/components/JourneySection.jsx

import React from "react";

const moments = [
  {
    date: "9th April 2025",
    emoji: "🌸",
    title: "When I first saw you, I knew you were special",
    description:
      "Somehow, the universe brought us together. I am soo lucky and grateful to have you in my life bebo.",
  },
  {
    date: "15th April 2025",
    emoji: "📞",
    title: "First time we talked",
    description:
      "I still remember the butterflies in my stomach. Your voice was like music to my ears. (You were yapping about your college events)",
  },
  {
    date: "23rd April 2025",
    emoji: "💖",
    title: "Our First Time Together",
    description:
      "I was just mesmerized by your presence. It felt like we had known each other forever. It was really a perfect day, and my favorite part of that day was when you held my hand while I was driving.",
  },
  {
    date: "Late Nights",
    emoji: "🌙",
    title: "Night Talks",
    description:
      "The kind of conversations that make time disappear. You became my favorite distraction.",
  },
  {
    date: "I love you Bebo",
    emoji: "💖",
    title: "This Moment",
    description:
      "It’s not official yet… but my heart already feels like it belongs to you.",
  },
];

function JourneySection() {
  return (
    <section
      className="relative w-full py-20 px-4 font-poppins text-gray-800 rounded-3xl"
      style={{
        backgroundImage: "url('/bg4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      {/* 🧁 Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-rose-600 mb-12">
          Our Journey So Far ✨
        </h2>

        <div className="space-y-10">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{moment.emoji}</span>
                <h3 className="text-xl font-semibold text-rose-500">
                  {moment.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-1">{moment.description}</p>
              <p className="text-sm text-gray-400">{moment.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
