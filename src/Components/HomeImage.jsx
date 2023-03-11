import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const tools = [
  "MicrosoftSQL",
  ".",
  "MySQL",
  ".",
  "PostgreSQL",
  ".",
  "SQLite",
  ".",
  "MongoDB",
  ".",
  "Versat",
];

export function HomeImage() {
  const { ref: myRef, inView: elementVisible } = useInView();

  return (
    <section
      id="Home"
      className="font-NuevaStd font-extralight md:px-16 lg:px-48"
    >
      <div>
        <div
          className=" pb-64 pt-32 md:pt-56 bg-current/10 flex flex-col"          
        >
          <div className="z-10 opacity-10 absolute inset-0 md:mb-52 lg:mb-0" draggable={false}>
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  attach="material"
                  distort={0.5}
                  speed={2}
                  color="aqua"
                />
              </Sphere>
            </Canvas>
          </div>

          <img src="./cfg logo/Logo.png" className="z-20 w-48 mx-auto" />
          <div className="z-30 bg-gradient-to-br from-cyan-400 to-lime-400 text-transparent bg-clip-text text-center text-6xl text-cyan-300 pb-7">
            <p>Guinart's Company Services</p>
          </div>
          <div className="z-40 text-center text-xl text-cyan-50 flex flex-col md:justify-around md:flex-row">
            {tools.map((e, id) => (
              <motion.p
                key={id}
                ref={myRef}
                animate={{ opacity: elementVisible ? 1 : 0 }}
                transition={{
                  duration: 0.3,
                  delay: elementVisible ? (id * 0.2) : 0,
                }}
              >
                {e}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
