import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import react from "../../public/react.256x228.png";
import javascript from "../../public/javascript.png";
import node from "../../public/node.png";
import mongodb from "../../public/mongodb.jpg";
import github from "../../public/github-outline.256x256.png";
import postman from "../../public/postman.248x256.png";
import bootstrap from "../../public/bootstrap.256x256.png";
import aws from "../../public/amazon.256x256.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "REACT",
    },
    {
      id: 5,
      logo: node,
      name: "NODE JS",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MONGODB",
    },
    {
      id: 7,
      logo: github,
      name: "GITHUB",
    },
    {
      id: 8,
      logo: bootstrap,
      name: "BOOTSTRAP",
    },
    {
      id: 9,
      logo: postman,
      name: "POSTMAN",
    },
    {
      id: 10,
      logo: aws,
      name: "AWS",
    },
  ];

  return (
    <div
      name="experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills and Tools</h1>
        <p className="  "></p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
