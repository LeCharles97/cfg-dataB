import React, { useRef } from "react";
/*import emailjs from "@emailjs/browser";*/
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Form() {
  const form = useRef();
  const labelStyle = "text-white mt-3";
  const inputStyle = "rounded-lg mr-5 focus:outline-none pl-1";

  const sendEmail = (e) => {
    /*e.preventDefault();

    emailjs
      .sendForm(
        "service_f59spla",
        "template_5rp7tds",
        form.current,
        "sTgMjTJeIopu-q6SX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("E-mail sended");
        },
        (error) => {
          console.log(error.text);
          alert("An error ocurred");
        }
      );*/
  };

  return (
    <section
      id="Contact"
      className=" text-white font-Stika flex justify-center"
    >
      <div>
        {/*------------------------------------- */}
        {/*Header*/}
        <div className="py-28 relative">
          <div className="z-10 opacity-10 absolute inset-0" draggable={false}>
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
          <h1 className="outline2 outline-none text-7xl font-bold font-Stika text-cyan-400 text-center ">
            Contact
          </h1>
          <h1 className="bg-cyan-400 bg-clip-padding mx-auto w-80 pt-1"></h1>
          <h1 className="pt-3 text-center font-Corbe text-lg">Get in touch</h1>
        </div>
        {/*#end Header */}
        {/*------------------------------------- */}

        {/*------------------------------------- */}
        {/*Extra Info*/}
        <div className="mx-auto pb-28 px-14 md:w-1/2">
          <div className="text-lg text-cyan-50 font-Corbel">
            <h1>
              I'd love if you reached out me. Even if it's just to say "Hey!".
              Don't hesitate! Drop me a line and I'll get back to you ASAP!
            </h1>
            <h2 className="mt-5 text-lime-500">cfg.databases@gmail.com</h2>
            <h3 className="mt-5 text-cyan-300">Contact Us</h3>
          </div>
          {/*#end Extra Info */}
          {/*------------------------------------- */}

          {/*------------------------------------- */}
          {/*Form*/}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col text-black font-Corbel"
          >
            <label className={`${labelStyle}`}>Your Name</label>
            <input
              type="text"
              name="user_name"
              className={`${inputStyle}`}
              placeholder="Name"
            />

            <label className={`${labelStyle}`}>Your Email</label>
            <input
              type="email"
              name="user_email"
              className={`${inputStyle}`}
              placeholder="Email"
            />

            <label className={`${labelStyle}`}>Message</label>
            <textarea
              name="message"
              className={`${inputStyle} pb-5`}
              placeholder="Message"
            />

            <input
              type="submit"
              value="Send"
              className="border-2 border-lime-400 w-1/2 mx-auto mt-3 px-2 py-1 rounded-lg font-Dubai text-lime-400 hover:bg-lime-400 hover:text-black"
            />
          </form>
          {/*#end Form */}
          {/*------------------------------------- */}
        </div>
      </div>
    </section>
  );
}
