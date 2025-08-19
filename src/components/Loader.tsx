import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050520]/50 z-50">
      <motion.div
        animate={{
          rotate: 360,
          boxShadow: [
            "0 0 20px #3b82f6",
            "0 0 40px #3b82f6",
            "0 0 20px #3b82f6",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="w-20 h-20 border-[10px] border-blue-500/90 border-t-transparent rounded-full"
        style={{
          borderStyle: "solid",
        }}
      />
    </div>
  );
}

export default Loader;
