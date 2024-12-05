import React from 'react';
import Heading from './Heading';
import Cards from './Cards';

const data = [
    {
      
        id: 0,
        title: "Todo-List",
        desc: "A simple todo list application.",
        img: "/finished-todo-list.png",
        tags: ["React", "Node", "CSS", "TypeScript"],
    },
    {
        id: 1,
         title: "Currency Converter",    // Countdown Timer
        desc: "A currency converter application.",//A countdown timer application.
        img: "/images.png",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
        
    },
    {
      id: 0,
      title: "Burger Website",
      desc: "A simple burger website application.",
      img: "/burger-web.png",
      tags: ["React", "Node", "CSS", "TypeScript"],
      link: "https://burger-website-landingpage.vercel.app/#", 
    },
    
    {
        id: 3,
        title: "Todo list",
        desc: "A simple countdown timer application.",
        img: "/finished-todo-list.png",
        tags: ["React", "Node", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title: "Currency Converter",
        desc: "Another countdown timer application.",
        img: "/images.png",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 5,
        title: "Burger website",
        desc: "A burger Website application.",
        img: "/burger-web.png",
        tags: ["React", "Node", "CSS", "TypeScript"],
    }
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' /> {/* Capitalized for consistency */}
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            desc={el.desc} // Added description to Cards
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
