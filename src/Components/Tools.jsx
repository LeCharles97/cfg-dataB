import { Slider } from "infinite-react-carousel";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Tools() {
  const carouselImagesPropertys =
    " bg-center bg-cover bg-no-repeat py-36 md:py-52";
  const carouselImages = [
    {
      title: "microsoftSQL ",
    },
    {
      title: "mySQL ",
    },
    {
      title: "postgreSQL ",
    },
    {
      title: "sqlLite ",
    },
    {
      title: "mongoDB ",
    },
    {
      title: "versat ",
    },
  ];

  return (
    <section
      id="Tools"
      className="z-30 py-44 lg:py-32 lg:px-36"
    >
      {/*------------------------------------- */}
      {/*Header*/}
      <div className="relative py-20">
        <div
          className="z-10 opacity-10 absolute inset-x-0 top-0 lg:inset-0 mb-10"
          draggable={false}
        >
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                attach="material"
                distort={0.5}
                speed={1}
                color="aqua"
              />
            </Sphere>
          </Canvas>
        </div>
        <div className="mt-5">
          <h1 className="outline2 outline-none text-7xl font-bold font-Stika bg-gradient-to-br from-cyan-400 to-green-400 text-transparent bg-clip-text text-center ">
            Tools
          </h1>
          <h1 className="bg-gradient-to-br from-cyan-400 to-green-400 text-transparent bg-clip-padding mx-auto w-60 mb-28 pt-1"></h1>
        </div>
      </div>
      {/*#end Header*/}
      {/*------------------------------------- */}

      {/*------------------------------------- */}
      {/*Description*/}
      <section className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div  className="text-white font-Stika basis-1/2 mx-10 lg:mx-32 my-auto">
          <h1 className="text-5xl lg:text-6xl font-bold font-Stika my-auto bg-gradient-to-b from-sky-500 to-green-500 text-transparent bg-clip-text">
            Optimize your database and make it powerfull
          </h1>

          <p className="mt-5 text-cyan-50 text-xl">
            We ensure quality and performance using the best tools in the market
          </p>
        </div>
        {/*#end Description*/}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/*Carousel*/}
       <Slider className="my-20 rounded-full overflow-hidden mx-16" autoplay={true}>
          {carouselImages.map((e) => (
            <div
              key={e.title}
              className={`${e.title} ${carouselImagesPropertys}`}
            />
          ))}
          </Slider>
        {/*------------------------------------- */}
        {/*#end Carousel*/}
      </section>
    </section>
  );
}
