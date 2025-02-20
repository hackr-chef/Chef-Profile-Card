"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaMedium, FaAngular, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaWhatsapp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FaGlobe } from "react-icons/fa6";



const techIcons = [
  { Icon: FaHtml5, color: "text-orange-500" },
  { Icon: FaCss3, color: "text-blue-600" },
  { Icon: FaJs, color: "text-yellow-500" },
  { Icon: FaReact, color: "text-blue-500" },
  { Icon: FaAngular, color: "text-red-600" },
  { Icon: FaNodeJs, color: "text-green-600" },
  { Icon: RiNextjsFill },  
];



const ProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % techIcons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      
      <Card className="max-w-lg w-full  rounded-2xl shadow-lg bg-white text-center">
     
        
      <div className="bg-green-950 max-w-lg w-full p-6  shadow-lg  rounded-t-2xl text-center ">
        <Image src="/images/profile-img.jpg" alt="The Chef" width={150} height={30} className="mx-auto rounded-full aspect-square object-cover border-2 border-white relative top-[5.5em]" />
      </div>
      <div className="p-[1em]">
        <h2 className="text-4xl font-bold mt-16">The Chef</h2>
        <p className="text-gray-600">Mobile & Web App Developer | Tech Enthusiast | Educator | Creator</p>

        <div className="flex justify-center gap-4 my-4 text-gray-700 text-xl">
          <Link href="https://x.com/hackr_chef" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link href="https://medium.com/@oduolatemmy" target="_blank" rel="noopener noreferrer"><FaMedium /></Link>
          <Link href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
          <Link href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></Link>
          <Link href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
          
        </div>

        <div className="relative w-full h-12 overflow-hidden">
          <motion.div
            className="absolute flex space-x-6 text-3xl"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {techIcons.map(({ Icon, color }, index) => (
              <Icon key={index} className={`mx-2 ${color}`} />
            ))}
          </motion.div>
        </div>

        <h3 className="text-2xl font-semibold">About Me</h3>
        <p className="text-gray-600 text-sm mt-2  text-balance"> 
          I'm a passionate tech enthusiast with a love for innovation, teaching, and problem-solving. 
          With years of experience in web development and a keen eye for emerging technologies, I create 
          content that simplifies complex concepts, making tech more accessible to everyone. My mission is to 
          empower individuals to build, learn, and grow in the digital space. Whether it's front-end 
          frameworks, backend development, or AI integration, I explore it all. 
        </p>
        <p className="text-gray-600 text-sm mt-2 text-balance">
          As an educator and creator, I share coding tips, money-making strategies, and business insights to 
          help developers and entrepreneurs succeed. My journey in tech has allowed me to build meaningful 
          projects, contribute to communities, and collaborate with like-minded individuals. Join me on this 
          adventure as we push the boundaries of technology together!
        </p>
       

        <h3 className="text-lg font-semibold mt-6">Stay Updated</h3>
        <div className="flex gap-2 mt-2">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button>Subscribe</Button>
        </div>

        
          <Button onClick={() => setIsModalOpen(true)} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Explore More
          </Button>
       
        </div>
      </Card>

      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
          <DialogContent className="fixed bg-white  px-8 rounded-lg shadow-lg text-center w-[25em] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <DialogTitle className="text-lg font-bold">Connect with Me</DialogTitle>
            <div className="flex justify-center gap-4 mt-4">
              <div className="border-2 border-solid border-gray-700 p-8 rounded-lg">
              <Link href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-2">
              <FaGlobe className="text-8xl" /> 
                 
              </Link>
              </div>
              <div className="border-2 border-solid border-gray-700 p-8 rounded-lg">
              <Link href="https://wa.me/7053279392" target="_blank" rel="noopener noreferrer" className="text-green-600 flex items-center gap-2">
                <FaWhatsapp className="text-8xl" /> 
              </Link>
              </div>
              
            </div>
            <Button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(false)}>Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProfileCard;
