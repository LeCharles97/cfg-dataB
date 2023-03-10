import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Service_1 } from "./Service_1";
import { Service_2 } from "./AppropriateUseOfTheDBMSWeb";
import { Service_3 } from "./DatabaseWeb";
import { Service_4 } from "./Service_4";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export function Services() {
  const { ref: serviceRef1, inView: elementVisible1 } = useInView();
  const { ref: serviceRef2, inView: elementVisible2 } = useInView();
  const { ref: serviceRef3, inView: elementVisible3 } = useInView();
  const { ref: serviceRef4, inView: elementVisible4 } = useInView();

  const autoRotar = 1;

  return (
    <section
      id="Services"
      className=" text-white font-Stika"
    >
      {/*------------------------------------- */}
      {/**Header */}
      <div>
        <div className="py-28 relative">
          <div className="z-10 opacity-10 absolute inset-0 mt-10" draggable={false}>
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  attach="material"
                  distort={0.5}
                  speed={1}
                  color="aqua"
                />
              </Sphere>
            </Canvas>
          </div>
          <h1 className="outline2 bg-gradient-to-br from-cyan-400 to-lime-400 text-transparent bg-clip-text text-6xl md:text-7xl font-bold font-Stika  text-center">
            Services
          </h1>
          <h1 className="bg-gradient-to-br from-cyan-400 to-lime-400 text-transparent bg-clip-padding mx-auto w-60 md:w-80 pt-1"></h1>
        </div>
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/*Service #1*/}
        <div className="flex flex-col md:flex-row justify-center gap-0 md:gap-20 lg:gap-10 my-5 md:my-16 mx-5 md:mx-0">
          <div className="text-xl md:text-2xl text-cyan-50 font-Stika leading-relaxed text-center md:text-right basis-1/3 my-auto">
            <div>
              <motion.h1 ref={serviceRef1} className="bg-gradient-to-br from-cyan-400 to-lime-400 text-transparent bg-clip-text text-4xl md:text-5xl font-bold pb-8 " animate={{translateX: elementVisible1 ? 0 : -50, opacity: elementVisible1 ? 1 : 0}} transition={{duration: 0.3}}>
                Design, implementation and maintenance
              </motion.h1>
              <motion.h1 ref={serviceRef1} animate={{translateX: elementVisible1 ? 0 : -50, opacity: elementVisible1 ? 1 : 0}} transition={{duration: 0.4}}>
                Installation of the DBMS and configuration of the infrastructure
                to allow correct access.
              </motion.h1>
            </div>
          </div>
          <div className="basis-1/5 h-10 md:h-96">
            {/*<img
              src="/Services Icon Pack/Design and Implementation.png"
              className=" w-32 h-32 mx-auto md:mx-0"
            />*/}
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[1, 1, 1]} />
              <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={autoRotar} enablePan={false}/>
              <Service_1 scale={2} />
            </Canvas>
          </div>
        </div>
        {/*#end Service #1 */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/* Service #2 */}
        <div className="flex flex-col md:flex-row justify-center gap-0 md:gap-20 lg:gap-10 my-5 md:my-16 mx-5 md:mx-0 py-40">
          <div className="basis-1/6 h-10 md:h-96">
            {/*<img
              src="/Services Icon Pack/Appropriate use of the DBMS.png"
              className=" w-32 h-32 mx-auto md:mx-0 lg:float-right "
          />*/}
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[1, 1, 1]} />
              <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={autoRotar} enablePan={false}/>
              <Service_2 scale={0.5} />
            </Canvas>
          </div>
          <div className="text-xl md:text-2xl text-cyan-50 font-Stika text-center md:text-left leading-relaxed basis-1/3 my-auto">
            <div>
              <motion.h1 ref={serviceRef2} className="bg-gradient-to-bl from-cyan-400 to-lime-400 text-transparent bg-clip-text text-4xl md:text-5xl font-bold pb-8 "  animate={{translateX: elementVisible2 ? 0 : 20, opacity: elementVisible2 ? 1 : 0}} transition={{duration: 0.3}}>
                Appropriate use of the DBMS
              </motion.h1>
              <motion.h1 ref={serviceRef2}  animate={{translateX: elementVisible2 ? 0 : 20, opacity: elementVisible2 ? 1 : 0}} transition={{duration: 0.4}}>
                Establishment of policies and procedures for appropriate
                management, security and maintenance.
              </motion.h1>
            </div>
          </div>
        </div>
        {/*#end Service #2 */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/* Service #3 */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 lg:gap-10 my-5 md:my-16 mx-5 md:mx-0">
          <div className="text-xl md:text-2xl text-cyan-50 font-Stika leading-relaxed text-center md:text-right basis-1/3 my-auto">
            <div>
              <motion.h1 ref={serviceRef3} className="bg-gradient-to-br from-cyan-400 to-lime-400 text-transparent bg-clip-text text-4xl md:text-5xl font-bold pb-8 "  animate={{translateX: elementVisible3 ? 0 : -50, opacity: elementVisible3 ? 1 : 0}} transition={{duration: 0.3}}>
                Crew capacitation
              </motion.h1>
              <motion.h1 ref={serviceRef3}  animate={{translateX: elementVisible3 ? 0 : -50, opacity: elementVisible3 ? 1 : 0}} transition={{duration: 0.4}}>
                Creation of training materials and instruction to employees on
                the proper use and access of the database management system.
              </motion.h1>
            </div>
          </div>
          <div className="basis-1/5 h-10 md:h-96">
            {/*<img
              src="/Services Icon Pack/Crew capacitation.png"
              className=" w-32 h-32 mx-auto md:mx-0"
        />*/}
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[1, 1, 1]} />
              <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={autoRotar} enablePan={false}/>
              <Service_3 scale={2.5} />
            </Canvas>
          </div>
        </div>
        {/*#end Service #3 */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/* Service #4 */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 lg:gap-10 my-5 md:my-16 mx-5 md:mx-0 py-40">
          <div className="basis-1/6 h-96">
            {/*<img
              src="/Services Icon Pack/Performance optimization.png"
              className=" w-32 h-32 mx-auto md:mx-0 lg:float-right object-contain"
            />*/}
            <Canvas >
              <ambientLight intensity={1} />
              <directionalLight position={[1, 1, 1]} />
              <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={autoRotar} enablePan={false}/>
              <Service_4 scale={1.5} />
            </Canvas>
          </div>
          <div className="text-xl md:text-2xl text-cyan-50 font-Stika text-center md:text-left leading-relaxed basis-1/3 my-auto">
            <div>
              <motion.h1 ref={serviceRef4} className="bg-gradient-to-bl from-cyan-400 to-lime-400 text-transparent bg-clip-text text-4xl md:text-5xl font-bold pb-8 " animate={{translateX: elementVisible4 ? 0 : 20, opacity: elementVisible4 ? 1 : 0}} transition={{duration: 0.3}}>
                Performance optimization
              </motion.h1>
              <motion.h1 ref={serviceRef4} animate={{translateX: elementVisible4 ? 0 : 20, opacity: elementVisible4 ? 1 : 0}} transition={{duration: 0.4}}>
                Troubleshooting, fine-tuning and performance optimization of
                tasks and programs that access the database.
              </motion.h1>
            </div>
          </div>
        </div>
        {/*#end Service #4 */}
        {/*------------------------------------- */}
      </div>
    </section>
  );
}
