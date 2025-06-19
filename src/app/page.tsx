"use client"

import React, { useState, useEffect } from 'react';
import PunchDeskLanding from '@/components/ui/punch-desk-landing';
import { motion, AnimatePresence } from 'framer-motion';
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
  Hand
} from 'lucide-react';

interface TestimonialData {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

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
  }
];

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
      
      {/* Animated background bars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex h-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-red-600 to-transparent opacity-20"
              style={{
                animation: `pulse ${2 + index * 0.1}s ease-in-out infinite alternate`,
                height: `${30 + Math.random() * 70}%`,
                alignSelf: 'flex-end'
              }}
            />
          ))}
        </div>
      </div>

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % fightTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + fightTestimonials.length) % fightTestimonials.length);
  };

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

        <div className="relative max-w-4xl mx-auto">
          {isClient ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={fightTestimonials[currentIndex].imgSrc}
                    alt={fightTestimonials[currentIndex].by}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-red-500"
                  />
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {fightTestimonials[currentIndex].by}
                    </p>
                  </div>
                </div>
                <blockquote className="text-xl text-gray-300 italic">
                  "{fightTestimonials[currentIndex].testimonial}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src={fightTestimonials[0].imgSrc}
                  alt={fightTestimonials[0].by}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-red-500"
                />
                <div>
                  <p className="text-lg font-semibold text-white">
                    {fightTestimonials[0].by}
                  </p>
                </div>
              </div>
              <blockquote className="text-xl text-gray-300 italic">
                "{fightTestimonials[0].testimonial}"
              </blockquote>
            </div>
          )}

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
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
      features: [
        "5 customer fights per month",
        "Basic combat training",
        "Email backup support",
        "Standard intimidation tactics",
        "1GB rage storage"
      ],
      highlight: false
    },
    {
      name: "Pro Warrior",
      subtitle: "Most popular",
      price: { monthly: 149, yearly: 1490 },
      description: "Advanced combat capabilities for seasoned fighters",
      icon: Sword,
      features: [
        "Unlimited customer battles",
        "Advanced combat techniques",
        "24/7 backup squad",
        "Custom intimidation templates",
        "100GB rage storage",
        "Team coordination",
        "Victory analytics"
      ],
      highlight: true
    },
    {
      name: "Ultimate Champion",
      subtitle: "For organizations",
      price: { monthly: 399, yearly: 3990 },
      description: "Enterprise-grade customer destruction",
      icon: Crown,
      features: [
        "Everything in Pro Warrior",
        "Custom combat training",
        "Dedicated fight coordinator",
        "Unlimited rage storage",
        "Advanced psychological warfare",
        "White-label intimidation",
        "SLA guarantee"
      ],
      highlight: false
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
                {plan.highlight && (
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-orange-500 text-white">
                    Most Popular
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

export default function PunchDeskPage() {
  return <PunchDeskLanding />;
} 