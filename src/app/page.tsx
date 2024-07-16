"use client";
import Home from "./_sections/Home/Home";
import Faqs from "./_sections/FaqItems/Faqs";
import ConnectWithUs from "./_sections/ContactUs/ConnectWithUs";
import Why from "./_sections/WhyChooseGyanplug/Why";
import Mentors from "./_sections/Mentors/Mentors";
import MembershipCard from "./_sections/MembershipCard/MembershipCard";
import Stories from "./_sections/Stories/Stories";
import Navbar from "@/components/Navbar/Navbar";
import How from "./_sections/HowItWorks/How";
import { useState } from "react";
export default function HomePage() {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLast] = useState(0);
  const controlNavbar = (e: React.UIEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.scrollTop > lastScrollY &&
      e.currentTarget.scrollTop > 200
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLast(e.currentTarget.scrollTop);
  };
  return (
    <div
      className="h-screen w-screen overflow-y-scroll  snap-y snap-mandatory"
      onScroll={controlNavbar}
    >
      <Navbar show={show} />
      <div className="h-auto w-screen bg-[#F5FBFF] overflow-visible relative">
        <Home />
        <Why />
        <MembershipCard />
        <How visible={visible} setVisible={setVisible} />
        {visible && (
          <>
            <Mentors />
            <Stories />
            <Faqs />
            <ConnectWithUs />
          </>
        )}
      </div>
    </div>
  );
}
