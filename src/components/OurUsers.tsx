import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MOCK_USERS } from "../lib/constants";

const OurUsers = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const target = useRef(1000); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
        observer.observe(ref.current);
    }    
    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered) return;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target.current);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasEntered]);

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center gap-16 mt-2 p-6 w-full">
      {/* Active Users */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {MOCK_USERS.slice(0, 4).map((user, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              className="relative group"
            >
              <img
                src={user.image}
                alt={user.name}
                className="size-12 rounded-full border-2 border-white shadow"
              />
              {/* Tooltip */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 px-2 py-1 text-xs 
                bg-[#1d1d1d] text-white rounded opacity-0 group-hover:opacity-100 
                transition-all duration-200 whitespace-nowrap"
              >
                <p className="font-medium text-[18px] pb-2">{user.name}</p>
                <p className="font-normal text-[12px]">{user.profession}</p>
                {/* Triangle */}
                <div
                  className="absolute left-1/2 -bottom-2 -translate-x-1/2 
                  w-0 h-0 border-l-4 border-r-4 border-t-4 
                  border-l-transparent border-r-transparent border-t-black"
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experts */}
      <div className="flex items-center gap-[45px]">
        <div className="flex flex-col leading-tight gap-1 border-r border-[#D9D9D9] pe-[45px]">
          <span className="font-semibold text-[20px]">{count}+</span>
          <span className="text-[18px] font-normal text-secondary-text">Active users</span>
        </div>
        
        <div className="flex flex-col leading-tight gap-1">
          <span className="font-semibold text-[20px]">{Math.floor(count / 2)}+</span>
          <span className="text-[18px] font-normal text-secondary-text">Experts</span>
        </div>
      </div>
    </div>
  );
};

export default OurUsers;
