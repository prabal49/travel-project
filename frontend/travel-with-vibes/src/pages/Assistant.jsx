import indiaData from "../data/indiaData";
import { useState } from "react";

import {
  Send,
  Bot,
  User,
  Plane,
  Hotel,
  Train,
  Bus,
  Sparkles,
} from "lucide-react";

const Assistant = () => {

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello 👋 I am your premium AI Travel Assistant. Ask me about flights, hotels, budget trips, weather or packages.",
    },
  ]);

  // AI RESPONSE
  const getBotResponse = (msg) => {

    const text = msg.toLowerCase();

    // GREETING
    if (
      text.includes("hi") ||
      text.includes("hello")
    ) {

      return "Hello 👋 How can I help plan your next luxury trip today?";
    }

    // BOOK
    if (text.includes("book")) {

      return `
✈️ Flight Booking
🏨 Hotels & Resorts
🚆 Train Reservations
🚌 Premium Bus Booking

Tell me what you want to explore.
      `;
    }

    // FLIGHTS
    if (text.includes("flight")) {

      return `
✈️ Available Flights:

Delhi → Goa ₹4,200
Mumbai → Dubai ₹18,000
Delhi → Agra ₹2,800
Delhi → Manali ₹6,500

Would you like premium or budget options?
      `;
    }

    // HOTEL
    if (text.includes("hotel")) {

      return `
🏨 Premium Hotels:

Goa Beach Resort ₹4,500/night
Manali Snow Resort ₹3,200/night
Agra Palace Stay ₹2,800/night
Mathura Temple View ₹2,000/night
      `;
    }

    // TRAIN
    if (text.includes("train")) {

      return `
🚆 Train Routes:

Delhi → Agra ₹900
Delhi → Jaipur ₹1,200
Delhi → Mathura ₹700
Mumbai → Goa ₹1,800
      `;
    }

    // BUS
    if (text.includes("bus")) {

      return `
🚌 Luxury Bus Options:

Delhi → Agra ₹500
Delhi → Jaipur ₹850
Delhi → Rishikesh ₹1,200
      `;
    }

    // BUDGET
    if (text.includes("budget")) {

      return `
💰 Budget Friendly Trips:

Jaipur ₹4,000
Rishikesh ₹3,500
Agra ₹5,000
Mathura ₹4,500
Goa ₹8,000
      `;
    }

    // DESTINATION SEARCH FROM indiaData
    const foundPlace = indiaData
      .flatMap((state) => state.places)
      .find((place) =>
        text.includes(
          place.name.toLowerCase().split(" ")[0]
        )
      );

    if (foundPlace) {

      return {
        text: `
🌍 ${foundPlace.name}

━━━━━━━━━━━━━━━

💰 Budget: ₹${foundPlace.cost}

📅 Best Time: ${foundPlace.bestTime}

🏨 Premium Hotels Available
✈️ Flight Available
🚆 Train Available
🚌 Luxury Bus Available
🍳 Breakfast Included
📸 Sightseeing Included

━━━━━━━━━━━━━━━

Type:
• "book"
• "hotel"
• "flight"

for more details ✨
    `,

        image: foundPlace.image,
      };
    }
    // SUPPORT
    if (
      text.includes("support") ||
      text.includes("call")
    ) {

      return `
📞 Premium Support

+91 9876543210
support@travelvibes.com
      `;
    }

    // THANKS
    if (text.includes("thanks")) {

      return "You're welcome 😊 Happy journey ✈️";
    }

    // DEFAULT
    return `
🤖 I can help you with:

✈️ Flights
🏨 Hotels
🚆 Trains
🚌 Bus
💰 Budget Trips
🌍 Packages
📞 Travel Support
    `;
  };

  // SEND MESSAGE
  const handleAsk = () => {

    if (!input.trim()) return;

    const userMsg = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMsg]);

    setTyping(true);

    const botReply = getBotResponse(input);

    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: botReply.text || botReply,
          image: botReply.image || null,
        }
      ]);

      setTyping(false);

    }, 1000);

    setInput("");
  };

  return (

    <div
      className="
        min-h-screen
        bg-[#071120]
        text-white
        overflow-hidden
      "
    >

      {/* GLOW EFFECTS */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          bg-blue-500/20
          blur-[120px]
          rounded-full
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-cyan-400 tracking-[5px] uppercase">
            AI Travel Assistant
          </p>

          <h1 className="text-6xl font-black mt-4 leading-tight">
            Smart Travel <br />
            AI Experience 🤖
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Get instant recommendations for flights,
            hotels, luxury trips, weather forecasts,
            trains and premium travel packages.
          </p>

        </div>

        {/* QUICK FEATURES */}
        <div className="grid md:grid-cols-4 gap-6 mt-14">

          {[
            {
              icon: <Plane />,
              title: "Flights",
            },

            {
              icon: <Hotel />,
              title: "Hotels",
            },

            {
              icon: <Train />,
              title: "Trains",
            },

            {
              icon: <Bus />,
              title: "Bus Booking",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-2xl
                rounded-[30px]
                p-6
                hover:-translate-y-2
                hover:border-cyan-400/40
                transition-all
                duration-500
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  shadow-xl
                "
              >

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

        {/* CHAT BOX */}
        <div
          className="
            mt-16
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[35px]
            shadow-2xl
            overflow-hidden
          "
        >

          {/* TOP */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-6
              py-5
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  shadow-xl
                "
              >

                <Bot size={28} />

              </div>

              <div>

                <h2 className="text-2xl font-black">
                  Travel AI Assistant
                </h2>

                <p className="text-gray-400">
                  Online & Ready To Help
                </p>

              </div>

            </div>

            <Sparkles className="text-cyan-400" />

          </div>

          {/* MESSAGES */}
          <div
            className="
              h-[500px]
              overflow-y-auto
              p-6
              space-y-6
            "
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`
                  flex
                  ${msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                  }
                `}
              >

                <div
                  className={`
                    max-w-[80%]
                    px-6
                    py-4
                    rounded-[28px]
                    whitespace-pre-line
                    shadow-xl
                    ${msg.role === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "bg-white/10 border border-white/10 text-gray-100"
                    }
                  `}
                >

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        mt-1
                      "
                    >

                      {msg.role === "user" ? (
                        <User size={18} />
                      ) : (
                        <Bot size={18} />
                      )}

                    </div>

                    <div>

                      <p className="leading-7">
                        {msg.text}
                      </p>

                      {msg.image && (

                        <img
                          src={msg.image}
                          alt=""
                          className="
        mt-4
        rounded-2xl
        w-full
        h-56
        object-cover
        border
        border-white/10
      "
                        />

                      )}

                    </div>
                  </div>

                </div>

              </div>
            ))}

            {/* TYPING */}
            {typing && (

              <div className="flex justify-start">

                <div
                  className="
                    bg-white/10
                    border
                    border-white/10
                    px-6
                    py-4
                    rounded-[28px]
                    flex
                    items-center
                    gap-3
                  "
                >

                  <Bot size={18} />

                  <div className="flex gap-1">

                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>

                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></span>

                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></span>

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* INPUT */}
          <div
            className="
              border-t
              border-white/10
              p-5
              flex
              gap-4
            "
          >

            <input
              type="text"
              placeholder="Ask about flights, hotels, Goa, Agra..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && handleAsk()
              }
              className="
                flex-1
                bg-black/20
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              onClick={handleAsk}
              className="
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                rounded-2xl
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-xl
                flex
                items-center
                gap-3
              "
            >

              <Send size={18} />

              Send

            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Assistant;