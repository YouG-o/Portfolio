
"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  href: string;
  duration: number;
}

const PageTransition = ({ children, href, duration }: PageTransitionProps) => {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push(href);
    }, duration);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onClick={handleLinkClick}
      className="relative flex flex-col justify-center items-center min-h-full text-white cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;