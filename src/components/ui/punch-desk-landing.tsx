"use client"

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
};

const FightBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: '100%',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: '1 0 calc(100% / 15)',
                maxWidth: 'calc(100% / 15)',
                height: '100%',
                background: 'linear-gradient(to top, rgb(220, 38, 38), transparent)',
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                transition: 'transform 0.5s ease-in-out',
                animation: 'pulseBar 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`,
                outline: '1px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Hand className="w-8 h-8 text-red-500 mr-2" />
            <span className="text-white font-bold text-xl tracking-tighter">
              PunchDesk
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">
              Combat Features
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">
              War Stories
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
              Battle Plans
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Join the Fight
            </a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Enter the Ring
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                Combat Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                War Stories
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                Battle Plans
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                Join the Fight
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full transition-all duration-300 w-full">
                Enter the Ring
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <FightBars />
      <Navbar />

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen py-8 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-3 bg-red-900/60 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
            <div className="flex -space-x-2 sm:-space-x-3">
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-red-700 shadow-lg">
                <img src="https://i.pravatar.cc/150?img=1" alt="Fighter" className="h-full w-full object-cover" />
              </div>
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-red-700 shadow-lg">
                <img src="https://i.pravatar.cc/150?img=2" alt="Fighter" className="h-full w-full object-cover" />
              </div>
              <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-red-700 shadow-lg">
                <img src="https://i.pravatar.cc/150?img=3" alt="Fighter" className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-white whitespace-nowrap">
              <span className="text-red-300 font-semibold">1.2K</span> agents ready to fight
            </p>
          </div>
        </div>

        <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 px-4">
          <span className="block font-bold text-[clamp(2rem,8vw,5rem)] whitespace-nowrap">
            Customer Service
          </span>
          <span className="block font-bold italic text-[clamp(2rem,8vw,5rem)] text-red-500 whitespace-nowrap">
            With a Punch
          </span>
        </h1>

        <div className="mb-6 sm:mb-10 px-4">
          <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed">
            Where customer complaints meet their match.
          </p>
          <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed">
            Professional. Aggressive. Effective.
          </p>
        </div>

        <div className="w-full max-w-2xl mb-6 sm:mb-8 px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter Your Email to Join the Fight"
              className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900/60 border border-red-700 focus:border-red-500 outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(220,38,38,0.3)] backdrop-blur-sm transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base bg-red-600 hover:bg-red-700 text-white"
            >
              Enter the Ring
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
            <Twitter size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
            <Linkedin size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
            <Github size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const steps = [
    {
      icon: <Ticket className="w-8 h-8 text-red-500" />,
      title: "Ticket Influx",
      description: "A new complaint ticket arrives, overflowing with customer rage and unreasonable demands.",
      content: (
        <div className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl">
          <div className="mb-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-sm text-red-300 mb-1">🚨 PRIORITY: URGENT</p>
            <p className="text-sm text-gray-300 mb-1">From: Karen S. &lt;karen.s@example.com&gt;</p>
            <p className="text-sm text-gray-300 mb-2">Subject: WHERE IS MY REFUND?!</p>
          </div>
          <p className="text-sm text-gray-100 leading-relaxed">
            "I've been waiting for my refund for WEEKS! This is absolutely unacceptable! I want to speak to your manager RIGHT NOW!
            Your service is a complete joke and I'm going to tell everyone how terrible you are! Fix this immediately or I'm
            taking my business elsewhere and reporting you to the BBB, the FTC, and every review site on the internet!"
          </p>
        </div>
      )
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      title: "User Tracking",
      description: "Advanced surveillance systems pinpoint the customer's exact location and emotional volatility.",
      content: (
        <div className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl">
          <div className="relative mb-4 bg-gray-900 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=200&fit=crop" 
              alt="Customer Location Map" 
              className="w-full h-32 object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-100">📍 Location: Starbucks, Main St. <span className="text-orange-400">(High Caffeine Alert)</span></p>
            <p className="text-gray-100">😡 Mood: Volatile <span className="text-red-400">(Threat Level: RED)</span></p>
            <p className="text-gray-100">📱 Recent Activity: 3 angry tweets, 1 Yelp review, 2 Facebook rants</p>
          </div>
        </div>
      )
    },
    {
      icon: <Plane className="w-8 h-8 text-red-500" />,
      title: "Travel Coordination",
      description: "Deploy your most experienced combat agent for direct customer engagement.",
      content: (
        <div className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl">
          <div className="mb-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-sm text-blue-300 mb-1">🚁 AGENT DISPATCH</p>
            <p className="text-sm text-gray-100 mb-1">Agent: 'The Negotiator' Sarah L.</p>
            <p className="text-sm text-gray-100">Combat Rating: ⭐⭐⭐⭐⭐ (98% Success Rate)</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-100">🕐 ETA: 15 minutes (Traffic: Light, Weather: Clear)</p>
            <p className="text-gray-100">🎯 Strategy: De-escalation via aggressive empathy</p>
            <p className="text-gray-100">⚔️ Backup: Legal team on standby, Manager ready for escalation</p>
          </div>
        </div>
      )
    },
    {
      icon: <Gavel className="w-8 h-8 text-red-500" />,
      title: "Legal Escalation",
      description: "Prepare for nuclear option - full legal warfare deployment.",
      content: (
        <div className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl">
          <div className="mb-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-sm text-purple-300 mb-1">⚖️ LEGAL DEFCON 2</p>
            <p className="text-sm text-gray-100">Status: Armed and Ready</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-100">📋 Legal Team: Notified and caffeinated</p>
            <p className="text-gray-100">📄 Cease & Desist: Pre-drafted and spell-checked</p>
            <p className="text-gray-100">🎲 Outcome Probability: 70% Resolution, 20% Stalemate, 10% Full Litigation</p>
            <p className="text-gray-100">💰 War Chest: $50K allocated for customer destruction</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / 30); // 3 second intervals
      } else {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Combat</span> Workflow Demo
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how PunchDesk transforms a simple customer complaint into a full-scale tactical operation.
            From ticket to total domination in 4 easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-6 cursor-pointer transition-all duration-300 ${
                  index === activeStep ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    index === activeStep
                      ? 'bg-red-600 border-red-500 shadow-lg shadow-red-500/30'
                      : index < activeStep
                      ? 'bg-green-600 border-green-500'
                      : 'bg-gray-700 border-gray-600'
                  }`}>
                    {index < activeStep ? (
                      <Check className="w-8 h-8 text-white" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  {index === activeStep && (
                    <div className="absolute inset-0 rounded-full border-2 border-red-400">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray={`${progress * 3.01} 301`}
                          className="text-red-400 transition-all duration-100"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Display */}
          <div className="relative">
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative"
                >
                  {steps[activeStep].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">
            * Demonstration purposes only. No actual customers were harmed in this workflow.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <Sword className="w-5 h-5" />
            Try the Demo Yourself
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Sword className="w-8 h-8" />,
      title: "Combat Training",
      description: "Advanced customer confrontation techniques and verbal sparring methods."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Defensive Protocols",
      description: "Protect your sanity with our bulletproof complaint deflection system."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Strikes",
      description: "Target customer weaknesses with surgical precision and corporate politeness."
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Rage Management",
      description: "Channel your inner fury into productive customer domination."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Victory Analytics",
      description: "Track your wins, losses, and customer submission rates in real-time."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Responses",
      description: "Strike back at customer complaints faster than they can blink."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Combat</span> Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Equip your team with the ultimate customer service weapons.
            Professional on the outside, warrior on the inside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">War</span> Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our battle-tested agents who've mastered the art of customer combat.
          </p>
        </div>

        <FightTestimonials />
      </div>
    </section>
  );
};

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Rookie Fighter",
      subtitle: "For beginners",
      price: { monthly: 49, yearly: 490 },
      description: "Start your customer combat journey",
      icon: Target,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-400 to-cyan-400",
      features: [
        "5 customer fights per month",
        "Basic combat training",
        "Email backup support",
        "Standard intimidation tactics",
        "1GB rage storage"
      ],
      highlight: false,
      badge: null
    },
    {
      name: "Pro Warrior",
      subtitle: "Most popular",
      price: { monthly: 149, yearly: 1490 },
      description: "Advanced combat capabilities for seasoned fighters",
      icon: Sword,
      gradient: "from-red-500/20 to-orange-500/20",
      borderGradient: "from-red-400 to-orange-400",
      features: [
        "Unlimited customer battles",
        "Advanced combat techniques",
        "24/7 backup squad",
        "Custom intimidation templates",
        "100GB rage storage",
        "Team coordination",
        "Victory analytics"
      ],
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Ultimate Champion",
      subtitle: "For organizations",
      price: { monthly: 399, yearly: 3990 },
      description: "Enterprise-grade customer destruction",
      icon: Crown,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-400 to-pink-400",
      features: [
        "Everything in Pro Warrior",
        "Custom combat training",
        "Dedicated fight coordinator",
        "Unlimited rage storage",
        "Advanced psychological warfare",
        "White-label intimidation",
        "SLA guarantee"
      ],
      highlight: false,
      badge: "Enterprise"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-black via-red-950/20 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-red-500">Battle Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Select the perfect combat package for your customer service warfare needs.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full border-2 transition-all ${
                isYearly ? 'bg-red-500 border-red-400' : 'bg-white/[0.08] border-white/[0.15]'
              }`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                  isYearly ? 'translate-x-8' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-white/60'}`}>
              Yearly
            </span>
            {isYearly && (
              <div className="px-2 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-300">
                Save 20%
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div
                className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl overflow-hidden ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-red-500/[0.12] to-orange-500/[0.04] border-red-400/50'
                    : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.15]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-orange-500 text-white">
                    {plan.badge}
                  </div>
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/20 flex items-center justify-center mb-6">
                    <plan.icon className="w-8 h-8 text-red-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{plan.subtitle}</p>
                  <p className="text-white/80 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-white/60">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-green-400 text-sm mt-1">
                        Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                      </p>
                    )}
                  </div>

                  <div className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 py-1.5">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white'
                        : 'bg-white/[0.08] border border-white/[0.15] text-white hover:bg-white/[0.12] hover:border-white/[0.25]'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Start Fighting
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-900 via-black to-red-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-red-400">Dominate</span> Customer Service?
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Join thousands of agents who've transformed their customer service approach.
          Professional results through controlled aggression.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <Sword className="w-5 h-5" />
            Enter the Ring Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10">
            Watch Demo Fight
          </button>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>1000+ Active Fighters</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            <span>4.9/5 Combat Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const PunchDeskLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes pulseBar {
          0% { transform: scaleY(var(--scale, 1)); }
          100% { transform: scaleY(calc(var(--scale, 1) * 1.1)); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />

      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Hand className="w-6 h-6 text-red-500 mr-2" />
              <span className="text-white font-bold text-lg">PunchDesk</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2024 PunchDesk. All rights reserved. Fight responsibly.</p>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-semibold text-yellow-400">
                ⚠️ PARODY DISCLAIMER ⚠️
              </p>
              <p>
                This website is a <strong>satirical parody</strong> and intended for <strong>entertainment purposes only</strong>. 
                PunchDesk is not a real product or service. No actual customers, customer service agents, or customer service 
                representatives were harmed, threatened, or engaged in physical combat in the making of this fictional product.
              </p>
              <p>
                Any resemblance to real customer service platforms, living or dead, or actual events is purely coincidental. 
                We do not condone violence, aggression, or unprofessional behavior in customer service interactions.
              </p>
              <p>
                Please treat your customers and customer service representatives with respect and kindness. 
                This parody is meant to highlight the absurdity of aggressive customer service approaches, not promote them.
              </p>
              <p className="mt-3 text-gray-500">
                Legal: This is a work of fiction. Names, characters, businesses, places, events, and incidents are either 
                products of the author's imagination or used in a fictitious manner.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PunchDeskLanding;
