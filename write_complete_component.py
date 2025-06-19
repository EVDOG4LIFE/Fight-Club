#!/usr/bin/env python3

# Complete PunchDesk Landing Component
# Replacing Fist icon with Hand icon since Fist doesn't exist in lucide-react

component_content = '''"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  Sword,
  Shield,
  Target,
  Zap,
  Crown,
  Star,
  ArrowRight,
  Check,
  Users,
  Trophy,
  Flame,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Ticket,
  MapPin,
  Plane,
  Gavel,
  Hand
} from 'lucide-react';

interface TestimonialData {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

interface TestimonialCardProps {
  position: number;
  testimonial: TestimonialData;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const SQRT_5000 = Math.sqrt(5000);

const fightTestimonials: TestimonialData[] = [
  {
    tempId: 0,
    testimonial: "Finally, a customer service platform that lets me unleash my inner warrior. My KO rate is 95%!",
    by: "Marcus 'The Destroyer', Senior Combat Agent",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "I've never felt more alive than when I'm in the ring with difficult customers. PunchDesk changed my life!",
    by: "Sarah 'Iron Fist', Customer Combat Specialist",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "The adrenaline rush of a good customer beatdown is unmatched. 10/10 would recommend!",
    by: "Jake 'The Hammer', Support Warrior",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "My stress levels dropped 90% after I started using PunchDesk. Nothing beats a good customer fight!",
    by: "Lisa 'Knockout', Service Fighter",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "Best investment our company ever made. Customer satisfaction through intimidation works!",
    by: "Mike 'Bruiser', Team Lead",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "I used to dread customer calls. Now I can't wait to throw down with Karen from accounting!",
    by: "Alex 'Thunder', Combat Rep",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  }
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter
          ? "z-10 bg-red-600 text-white border-red-500"
          : "z-0 bg-gray-900 text-gray-100 border-gray-700 hover:border-red-500/50"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #374151" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-600"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-800 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #000000"
        }}
      />
      <h3 className={`text-base sm:text-xl font-medium ${
        isCenter ? "text-white" : "text-gray-100"
      }`}>
        "{testimonial.testimonial}"
      </h3>
      <p className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
        isCenter ? "text-white/80" : "text-gray-400"
      }`}>
        - {testimonial.by}
      </p>
    </div>
  );
};

const FightTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(fightTestimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-black/50"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-gray-900 border-2 border-gray-700 hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-gray-900 border-2 border-gray-700 hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};'''

# Write first part
with open('src/components/ui/punch-desk-landing.tsx', 'w') as f:
    f.write(component_content)

print("First part of component written successfully!") 