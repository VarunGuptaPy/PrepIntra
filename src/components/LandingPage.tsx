import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import CountUp from "react-countup";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import Footer from "./Footer";
import axios from "axios";
import { baseURL } from "../globals";
const LandingPage: React.FC = () => {
  const navigator = useNavigate();
  useEffect(() => {
    axios.get(`${baseURL}/authenticated`).then((response) => {
      console.log();
      if (response.data.authenticated) {
        if (response.data.user.accountType == "registering") {
          navigator("/profile");
        } else {
          navigator("/search-interview");
        }
      }
    });
  }, []);
  const stats = [
    { icon: Users, value: 10000, suffix: "+", description: "Users Prepared" },
    { icon: TrendingUp, value: 95, suffix: "%", description: "Success Rate" },
    { icon: Award, value: 1, prefix: "#", description: "AI Interview Trainer" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      <div className="gradient-orb gradient-orb-3"></div>
      <div className="gradient-orb gradient-orb-4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-gradient py-20 px-4 rounded-b-3xl mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Master Your Interviews with PrepIntra
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Harness the power of AI to elevate your interview skills. Practice
              with industry-specific questions, receive instant feedback, and
              boost your confidence.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/register"
                className="btn btn-primary inline-flex items-center"
              >
                Start Free Trial <ArrowRight className="ml-2" />
              </Link>
              <a
                href="#how-it-works"
                className="btn btn-secondary inline-flex items-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center backdrop-blur-sm"
              >
                <stat.icon className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="text-2xl font-bold mb-2">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How PrepIntra Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">
                Select Your Industry
              </h3>
              <p>
                Choose from a wide range of industry-specific interview
                simulations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Practice with AI</h3>
              <p>
                Engage in realistic mock interviews with our advanced AI
                interviewer.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">
                Get Instant Feedback
              </h3>
              <p>
                Receive detailed analysis and tips to improve your interview
                performance.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
        <Pricing />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
