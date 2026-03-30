import { motion } from "framer-motion";

export function Photo() {
    return(
        <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block flex-shrink-0"
            >
              <div className="w-64 h-80 rounded-lg bg-slate-800 border-2 border-purple-500 overflow-hidden sticky top-8">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                    {/* TODO: ADD PHOTO
                <img 
                  src="" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                */}
                </div>
                
              </div>
        </motion.div>
    );
}