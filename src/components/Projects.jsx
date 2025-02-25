import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='pink-white-gradient p-3 rounded-2xl w-[90%] border-white border-2 mb-8'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* GitHub Icon */}
          <div className='absolute inset-0 flex justify-end m-1 card-img_hover'>
            <div className="w-14 h-10 border-black border-2 flex items-center justify-center"
             onClick={() => window.open(source_code_link, "_blank")}>
              <div
                className=' black-gradient w-12 h-8 flex justify-center items-center cursor-pointer'
              >
                <img
                  src={name === "a" ? github : github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
                <div className="text-[5px]">GitHub Link</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project name and description */}
        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='text-black mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* Relevant tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#fda5e9" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} flex items-center justify-center bg-gray-800 text-white p-4 rounded-full cursor-pointer`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }  

  // Setting for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='mt-10'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");