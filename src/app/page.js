"use client";

import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Ticker from "./components/Ticker";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyUs from "./components/WhyUs";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main className="main-content">
        <Hero />
        <Ticker />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton
        placement="floating"
        pulse
        tooltip
        showDelayMs={5000}
        enableScrollVisibility
        scrollThreshold={140}
        message="Hi Trenquix, I just visited your website and want to get a free consultation for my project."
        analyticsEventName="whatsapp_floating_cta"
      />
      <Footer />
    </div>
  );
}
