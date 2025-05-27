import { imageAbout } from "../constants";
import Myskills from "./cards/Myskills";

const About = () => {
  return (
    <section id="about-me" className="mt-20">
      <div className="sm:mx-30 md:mx-40 md:px-8 px-5 flex flex-col">
        <div className="text-center ">
          <h1 className="text-6xl lg:text-7xl font-light text-white font-serif">
            About me
          </h1>
        </div>

        <div className=" lg:flex lg:gap-10 gap-5 mt-5">
          {/* Image */}
          <div className="lg:w-5/12">
            <div className="grid grid-cols-3 gap-5">
              {imageAbout.map((item, key) => (
                <div key={key}>
                  <img
                    src={item.imgPath}
                    alt={item.name}
                    className="rounded-xl  shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Descript */}
          <div className="lg:w-7/12">
            <div className="flex flex-col gap-6 text-1xl italic font-bold lg:mt-0 mt-5 h-full w-full item justify-center lg:items-start items-center">
              <p> My name is Kha. </p>
              <p>
                I’m 23 years old and currently a final-year student at Thu Duc
                College of Technology. I have a strong passion for exploring new
                places.
              </p>
              <p>
                At the moment, I’m looking for an internship position to gain
                hands-on experience and better prepare myself for my future
                career.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Myskills />
    </section>
  );
};

export default About;
