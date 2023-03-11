import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref: myRef, inView: elementVisible } = useInView();

  return (
    <section
      id="About"
      className=" text-white font-Stika pl-20"
    >
      <div className="flex flex-col md:flex-row justify-center gap-10 py-40 pr-20 md:pr-20 lg:pr-60">
        {/**----------------------------------------- */}
        {/**Avatar Image */}
        <div className="my-auto basis-1/6 md:basis-2/6 lg:basis-1/6">
          <img src="/avatar.jpg" className="lg:w-52 mx-auto  md:w-44 w-44 rounded-full" />
        </div>

        {/**#end Avatar Image */}
        {/**----------------------------------------- */}

        {/**----------------------------------------- */}
        {/**Description */}
        <div className="text-xl basis-1/3 md:basis-1/2 lg:basis-1/3">
          <div className="flex text-5xl gap-5">
            <h1>Hello </h1>
            {/*<motion.h1>👋</motion.h1>*/}
            <img src="./waving-hand.gif" className="w-10 h-10 my-auto" />
          </div>
          <motion.p ref={myRef} className=" pt-5" animate={{translateX: elementVisible ? 0 : 50, opacity: elementVisible ? 1 : 0}} transition={{duration: 0.3}}>
            I am Carlos, a database manager based in Cuba. I manage all kind of
            data strucure in databases, but I love working on MicrosoftSQL
            Server.
          </motion.p>
          <motion.p ref={myRef} className=" pt-5" animate={{translateX: elementVisible ? 0 : 50, opacity: elementVisible ? 1 : 0}} transition={{duration: 0.4}}>
            One of my favorite activities is to educate and mentor others in the
            field to fulfill their potencial and deepen my knowledge. You can
            find more about this on my{" "}
            <button className="text-cyan-400 hover:underline hover:underline-offset-4">
              {" "}
              YouTube Channel.
            </button>
          </motion.p>
          <motion.p ref={myRef} className=" pt-5" animate={{translateX: elementVisible ? 0 : 50, opacity: elementVisible ? 1 : 0}} transition={{duration: 0.5}}>
            I recently published my well curated course to show you how you can
            manage databases just like me using the following tools.
          </motion.p>
          <motion.button
            className="mt-5 p-2 border-2 border-lime-500 text-lime-400 rounded-2xl "
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "yellowgreen",
              color: "black",
            }}
          >
            My Portfolio Course
          </motion.button>
        </div>
        {/**#end Description */}
        {/**----------------------------------------- */}
      </div>
    </section>
  );
}
