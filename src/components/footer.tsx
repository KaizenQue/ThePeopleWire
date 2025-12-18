"use client";

import {
  CopyrightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ArrowUpIcon,
} from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white px-6 md:px-[6%] lg:px-[8%] py-14">
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Image
            src="/icon-white.svg"
            alt="The People Wire Logo"
            width={130}
            height={40}
            priority
          />

          <p className="text-sm text-gray-400 leading-relaxed">
            Your World,
            <br />
            Your Voice,
            <br />
            Your Wire
          </p>

          <div className="flex gap-8 text-[#F25C05] pt-2">
            <FaFacebook className="size-7 cursor-pointer hover:opacity-80" />
            <FaYoutube className="size-7 cursor-pointer hover:opacity-80" />
            <FaInstagram className="size-7 cursor-pointer hover:opacity-80" />
            <FaLinkedin className="size-7 cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-[#F25C05] font-semibold mb-6 text-lg">
            Categories
          </h3>

          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300">
            <span className="hover:text-[#F25C05] cursor-pointer">Top Stories</span>
            <span className="hover:text-[#F25C05] cursor-pointer">Entertainment</span>
            <span className="hover:text-[#F25C05] cursor-pointer">International</span>
            <span className="hover:text-[#F25C05] cursor-pointer">Science & Tech</span>
            <span className="hover:text-[#F25C05] cursor-pointer">Business</span>
            <span className="hover:text-[#F25C05] cursor-pointer">Sports</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#F25C05] font-semibold mb-6 text-lg">
            Reach out to Us
          </h3>

          <div className="flex flex-col gap-5 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPinIcon size={18} />
              <span>23 Main Street, 12345</span>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon size={18} />
              <span>allthingsmarketing@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon size={18} />
              <span>1234567890</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= APP DOWNLOAD + BACK TO TOP ================= */}
      <div className="mt-14 flex flex-col md:flex-row items-end justify-between gap-8">
        {/* App Download Card */}
        <div className="w-full md:max-w-4xl border border-[#F3CB04] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/footerLogo.png"
            alt="The People Wire App"
            width={64}
            height={64}
          />

          <div className="flex-1 text-center md:text-left">
            <p className="font-semibold text-xl">
              Download <span className="text-[#F3CB04]">Our App Now!</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Get all things membership, straight to your inbox.
            </p>
          </div>

          {/* STORE BUTTONS */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-4">
            <Image
              src="/appstore.png"
              alt="Download on App Store"
              width={150}
              height={48}
            />
            <Image
              src="/PlayStore.png"
              alt="Get it on Google Play"
              width={150}
              height={48}
            />
          </div>
        </div>

        {/* Back To Top (Lower aligned on desktop) */}
        <Button
          onClick={handleBackToTop}
          className="w-full md:w-auto bg-[#F25C05] hover:bg-orange-600 text-white px-10 py-5 text-lg flex items-center gap-3 md:mb-2"
        >
          Back To Top <ArrowUpIcon size={18} />
        </Button>
      </div>

      {/* ================= DIVIDER ================= */}
      <Separator className="my-10 bg-[#F25C05]" />

      {/* ================= BOTTOM ================= */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <CopyrightIcon size={12} />
          <span>2025 The People Wire. All Rights Reserved.</span>
        </div>

        <div className="flex gap-8">
          <span className="hover:text-[#F25C05] cursor-pointer">
            Privacy & Policy
          </span>
          <span className="hover:text-[#F25C05] cursor-pointer">
            Disclaimer
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
