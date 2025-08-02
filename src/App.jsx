import React from "react";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import PhotoGallery from "./components/PhotoGallery";
import QuizSection from "./components/QuizSection"; // ✅ Add this import

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-all duration-700 ease-in-out-quad bg-gradient-to-b from-pink-100 via-pink-50 to-white text-gray-800">

      <section className="snap-start min-h-screen flex items-center justify-center px-4 py-8">
        <HeroSection />
      </section>

      <section className="snap-start min-h-screen flex items-center justify-center px-4 py-8">
        <JourneySection />
      </section>

      <section className="snap-start min-h-screen flex items-center justify-center px-4 py-8">
        <PhotoGallery />
      </section>

      <section className="snap-start min-h-screen flex items-center justify-center px-4 py-8">
        <QuizSection /> {/* ✅ New Quiz section */}
      </section>

    </div>
  );
}

export default App;
