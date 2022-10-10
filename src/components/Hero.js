import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main>
      <img
        className="img-fluid shadow-sm w-100"
        src="./images/food2.png"
        alt="food"
      />
      <section className="bg-light">
        <div>
          <motion.h2 animate={{scale:1}} initial={{scale: 0}} className="text-center pt-5 ">A propos de nous</motion.h2>
          <div className="underline shadow-md"></div>
        </div>
        <div className="row p-3 m-4 ">
          <div className="col text-center border p-4 m-2 shadow-sm rounded ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur aspernatur rem maxime, corrupti pariatur dolorum
              inventore accusantium illum eveniet, explicabo repudiandae in,
              cumque assumenda similique ducimus! Tempore totam velit minima!
            </p>
          </div>
          <div className="col text-center border p-4 m-2 shadow-sm rounded">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, consectetur odio! Error est aspernatur assumenda
              doloremque fugit cum mollitia aliquid omnis, ex voluptas nostrum
              ea magni eligendi aut debitis numquam!
            </p>
          </div>
          <div className="col text-center border p-4 m-2 shadow-sm rounded">

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              temporibus laboriosam quas? Ut et neque molestias culpa quibusdam,
              quod eius. Aspernatur adipisci libero dicta tempore animi. Dolorum
              incidunt tenetur iusto.
            </p>
          </div>
        </div>
         

      </section>
      
    </main>
  );
};

export default Hero;
