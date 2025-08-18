import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../lib/icons/Icons";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center px-4 relative">
      {/* Hero left  background blur */}
                <div 
              className="absolute top-[-10%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
            />
           
          <img src="/stars.png" alt="" className="absolute top-[-32%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
            {/* Hero right  background blur */}
            <div 
              className="absolute top-[-10%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
            />
           
          <img src="/stars.png" alt="" className="absolute top-[-32%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      
      
          {/* background icons T */}
          <span className="absolute top-20 left-[10%]">{Icons.usdt}</span>
          <span className="absolute top-20 right-[10%]">{Icons.usdt}</span>
      
       
          {/* background icons T */}
          <span className="absolute bottom-[20%] left-[5%]">{Icons.bnb}</span>
          <span className="absolute bottom-[20%] right-[5%]">{Icons.solana}</span>
      
      {/* 404 with scale + bounce */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative text-[80px] sm:text-[120px] font-extrabold text-white select-none"
      >
        <span className="absolute left-0 top-0 text-blue-600 blur-sm opacity-70">
          404
        </span>
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg sm:text-2xl font-semibold text-gray-300 mb-3"
      >
        Oops! Page not found
      </motion.h2>

      {/* Message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-400 max-w-md mb-6"
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Back Home Button with hover/tap animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="sm:w-[284px] w-fit sm:px-0 px-[30px] h-[40px] bg-gradient-to-b bg-[#56565653]   flex  items-center justify-center rounded-[13px] cursor-pointer">
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFound;
