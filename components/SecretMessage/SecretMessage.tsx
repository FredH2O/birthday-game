"use client";
import { HeartIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const SecretMessage = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleShowMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleShowMessage}
        className="text-xs font-light italic cursor-pointer underline"
      >
        Secret message by Dad
      </button>
      {showMessage && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="min-h-screen fixed inset-0 top-0 left-0 rounded flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-yellow-100 p-6"
          >
            <div className="bg-white/80 rounded-2xl shadow-xl p-8 max-w-md text-center border border-pink-200">
              <h1 className="text-2xl font-bold text-pink-600 mb-4">
                Dear Amber 🌸
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed">
                Happy Birthday, pet! 🎂 I love you so much - to the moon and
                back, hehe.
                <br />
                <br />
                Don’t stop being silly, and always do the right thing. We love
                you always. Keep dreaming big and being you. 💖
                <br />
                <br />
                You are brave, kind, and full of magic... 🥰 ✨
              </p>
              <div className="flex justify-center mt-6 space-x-4">
                <HeartIcon className="w-6 h-6 text-pink-400 animate-pulse" />
                <SparklesIcon className="w-6 h-6 text-yellow-400 animate-bounce" />
              </div>
            </div>
            <button
              onClick={handleShowMessage}
              className="px-5 font-light py-1 rounded cursor-pointer bg-white/70 mt-3 hover:bg-white/30"
            >
              Close
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default SecretMessage;
