import Home3D from "../models/Home3D";

const Home = () => {
  return (
    <section id="home" className="mt-20">
      <div className="sm:mx-30 md:mx-40 md:px-8 px-5 flex flex-col">
        {/* Text */}
        <div className="text-center md:text-9xl text-6xl font-serif text-wrap tracking-wide">
          <p>Let's make</p>
          <p className="italic">it move.</p>
        </div>

        {/* 3D */}
        <figure>
          <div className="relative mt-10 h-[60vh]">
            <div className="w-full h-full bg-navbar-3d z-0 absolute  left-1/2 transform -translate-x-1/2 -top-2 "></div>
            <Home3D className="absolute z-50 w-full h-full" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Home;
