import React from "react";
import { motion, useScroll } from "motion/react";
const App = () => {
  console.log(useScroll());

  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-black text-white w-full h-full text-center px-20 py-10">
      {/* <motion.div className="w-80 h-80 bg-red-600 border-2 border-white" initial={{x:500}} animate={{rotate:360, x:1000,}} transition={{duration:4, delay:1, ease:"anticipate", repeat:2}}></motion.div> */}
      {/* <motion.div className="w-80 h-80 bg-gray-600 border-2 rounded-full border-white" animate={{rotate:360, x:500,scale:2}}></motion.div> */}

      {/* <motion.div
        className="w-80 h-80 bg-red-600 border-2 border-white"
        // drag
        // whileDrag={{ scale: 0.6 }}

        // whileHover={{backgroundColor:'green'}}
        // whileTap={{scale:0.8}}
        // initial={{ x: 500 }}
        // animate={{ x: [0, 800, 800, 0, 0], y: [0, 0, 400, 400, 0], rotate:[0,360,0,-360,0] }}
        // transition={{ duration: 4, delay: 1 }}
        
        // dragDirectionLock="true"
        // dragConstraints={{
        //   left: 0,
        //   top: 0,
        //   right: 500,
        // }}

        
      ></motion.div> */}

      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="h-3 bg-red-500 w-full fixed top-0 left-0 origin-left"
      ></motion.div>
      <h1 className="text-4xl font-bold  mb-10">Rajan Shrestha</h1>
      <p className="font-mono">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione rem dolorum soluta voluptas odio fuga ad quae eveniet, sit cupiditate possimus nulla quasi nihil. Architecto repellendus unde consequuntur a excepturi!
      </p>
    </div>
  );
};

export default App;
