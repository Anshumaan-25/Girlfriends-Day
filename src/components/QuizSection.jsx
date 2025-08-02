import React, { useState } from "react";
import { Sparkles } from "lucide-react";

const options = [
  "You coping with my technical side (hehe)🤓",
  "The way you fake being mad at me 😠 (but not really)",
  "Your sleepy 'mmm' in the morning 😴",
  "Your laugh when I say something thats not even funny 😂",
  "The way you take care of me like I’m your own baby lol 🍼",
  "The way you always know what to say to make me smile 😊",
  "Your taste (like deadass, you're tasty) 😋",
  "the way you look at me like I’m your favorite thing 😳",
  "When you randomly send me cute pics of you 🥺",
  // Cheeky option
  "all of the above ",
];

const QuizSection = () => {
  const [selected, setSelected] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [sparkle, setSparkle] = useState(false);

  const handleClick = (option) => {
    setSelected(option);
    setShowMessage(true);
    setSparkle(option.includes("all of the above"));
  };

  return (
    <section
      className="relative w-full py-20 px-4 font-poppins text-gray-800 rounded-3xl"
      style={{
        backgroundImage: "url('/Girlfriends-Day/bg3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🧊 Overlay for readability */}
      {/*<div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-[2px]"></div>*/}

      {/* 🧁 Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s play a tiny game 💫</h2>
        <p className="text-lg mb-10">
          Before you scroll, I’ve got a little question for you. Just a sweet
          reminder of all the little things I love about you (Prize- Multiple passion filled puchhies if you get it on your first try hehe)💖
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-xl font-semibold mb-4">
            Guess my favorite thing about you 💭
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleClick(opt)}
                className={`transition px-4 py-3 rounded-xl font-medium border text-left hover:bg-pink-200 ${
                  opt.includes("all of the above")
                    ? "text-xs italic text-gray-200 opacity-30 hover:opacity-80 hover:text-pink-500 hover:italic"
                    : "bg-pink-100 text-pink-900"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showMessage && (
            <div className="mt-8 transition-all duration-500 text-center">
              <p className="text-lg font-medium text-pink-700">
                {selected.includes("all of the above")
                  ? "Okay, okay — you got me 😳 It's literally EVERYTHING about you. I LOVE YOU BEBO"
                  : "I mean, I do love that, but the real answer is: Just you, being you."}
              </p>

              {sparkle && (
                <div className="flex justify-center mt-6 animate-bounce">
                  <Sparkles className="h-8 w-8 text-pink-400" />
                </div>
              )}

              <p className="mt-6 text-base text-pink-600">
                Thanks for playing, cutie 💛
              </p>
            </div>
          )}
        </div>

        {/* 💖 Footer integrated below content */}
        <footer className="mt-16 text-center text-base text-gray-700 italic">
          Made with too much love & too little sleep — by your boyfriend 💻💕
        </footer>
      </div>
    </section>
  );
};

export default QuizSection;
