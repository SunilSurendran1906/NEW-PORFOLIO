import React from "react";
import food from "../../public/steaming-bowl.256x255.png";
import chat from "../../public/chat.256x256.png";
import Realestate from "../../public/real-estate-agent.254x256.png";
import ecommerce from "../../public/amazon.256x256.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: food,
      name: "TOMATO FOOD APP",
      description: "Food Delivery Application",
      DemoLink: "https://tomato-rs.netlify.app",
      sourceCodeLink:
        "https://github.com/SunilSurendran1906/FOOD_DELIVERY_APP_FRONTEND",
      serverCodeLink:
        "https://github.com/SunilSurendran1906/FOOD_DELIVERY_APP_BACKEND",
    },
    {
      id: 2,
      logo: chat,
      name: "REAL TIME CHAT APP",
      description: "Chat Application",
      DemoLink: "https://basic-chat-app-56mw.onrender.com",
      sourceCodeLink:
        "https://github.com/SunilSurendran1906/BASIC-CHAT-APP/tree/main/client",
      serverCodeLink:
        "https://github.com/SunilSurendran1906/BASIC-CHAT-APP/tree/main/server",
    },
    {
      id: 3,
      logo: ecommerce,
      name: "E-COMMERCE",
      description: "Dress Shopping Application",
      DemoLink: "https://ecommerce-rvsunil0603.netlify.app",
      sourceCodeLink:
        "https://github.com/SunilSurendran1906/E-COMMERCE_FRONTEND",
      serverCodeLink:
        "https://github.com/SunilSurendran1906/E-COMMERCE_BACKEND",
    },
    {
      id: 4,
      logo: Realestate,
      name: "DREAM HOUSE",
      description: "Real Estate Application",
      DemoLink: "https://real-estate-applications-zenclass.onrender.com",
      sourceCodeLink:
        "https://github.com/SunilSurendran1906/REAL-ESTATE-APPLICATIONS/tree/main/client",
      serverCodeLink:
        "https://github.com/SunilSurendran1906/REAL-ESTATE-APPLICATIONS/tree/main/api",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold"></span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(
            ({
              id,
              logo,
              name,
              description,
              DemoLink,
              sourceCodeLink,
              serverCodeLink,
            }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center justify-center"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] rounded-full border-[2px]"
                  alt={name}
                />
                <div className="text-center mt-3">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">{description}</p>
                </div>
                <div className="mt-4 space-x-3">
                  <a href={DemoLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1 rounded">
                      Demo
                    </button>
                  </a>
                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-1 rounded">
                      Client
                    </button>
                  </a>
                  <a
                    href={serverCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-2 py-1 rounded">
                      Server
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
