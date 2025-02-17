"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaMedium } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";




// const fetchQuotes = async () => {
//   try {
//     const response = await fetch("https://programming-quotesapi.vercel.app/api/available");
//     const data = await response.json();
//     return data.content;
//   } catch (error) {
//     return "Error here";
//   }
// };

const ProfileCard = () => {
  // const [quote, setQuote] = useState("Loading...");

  // useEffect(() => {
  //   const updateQuote = async () => {
  //     const newQuote = await fetchQuotes();
  //     setQuote(newQuote);
  //   };

  //   updateQuote();
  //   const interval = setInterval(updateQuote, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      
      <Card className="max-w-lg w-full  rounded-2xl shadow-lg bg-white text-center">
        
      <div className="bg-green-950 max-w-lg w-full p-6  shadow-lg  rounded-t-2xl text-center ">
        <Image src="/images/profile-img.jpg" alt="The Chef" width={106} height={30} className="mx-auto rounded-full aspect-square object-cover border-2 border-white relative top-20" />
      </div>
      <div className="p-6">
        <h2 className="text-4xl font-bold mt-12">The Chef</h2>
        <p className="text-gray-600">Mobile & Web App Developer | Tech Enthusiast | Educator | Creator</p>

        <div className="flex justify-center gap-4 my-4 text-gray-700 text-xl">
          <Link href="https://x.com/hackr_chef" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link href="https://medium.com/@oduolatemmy" target="_blank" rel="noopener noreferrer"><FaMedium /></Link>
          <Link href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
          <Link href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></Link>
          <Link href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
          
        </div>

        {/* <blockquote className="italic text-gray-700 my-4">“{quote}”</blockquote> */}

        <h3 className="text-2xl font-semibold mt-6">About Me</h3>
        <p className="text-gray-600 text-sm mt-2">I share insights on tech, coding, and money-making strategies. Join my journey and explore opportunities in tech!</p>

        <h3 className="text-lg font-semibold mt-6">Stay Updated</h3>
        <div className="flex gap-2 mt-2">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button>Subscribe</Button>
        </div>

        <Link href="/explore">
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Explore More
          </Button>
        </Link>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
