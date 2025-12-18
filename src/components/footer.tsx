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
    <footer className="w-full bg-black text-white px-6 md:px-[6%] lg:px-[8%] py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image
            src="/icon-white.svg"
            alt="The People Wire"
            width={120}
            height={40}
            priority
          />

          <p className="text-sm text-gray-400 max-w-sm">
            Your World, <br />
            Your Voice, <br />
            Your Wire
          </p>

          <div className="flex gap-8 text-orange-500 pt-2">
            <FaFacebook className="size-7 cursor-pointer hover:text-orange-400" />
            <FaYoutube className="size-7 cursor-pointer hover:text-orange-400" />
            <FaInstagram className="size-7 cursor-pointer hover:text-orange-400" />
            <FaLinkedin className="size-7 cursor-pointer hover:text-orange-400" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-5 text-lg">
            Categories
          </h3>

          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300">
            <span className="hover:text-orange-400 cursor-pointer">
              Top Stories
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              Entertainment
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              International
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              Science & Tech
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              Business
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              Sports
            </span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-5 text-lg">
            Reach out to Us
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-300">
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

      {/* App Download Section */}
      <div className="mt-12 flex flex-col gap-6">
        <div className="border border-[#F3CB04] rounded-xl p-6 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/footerLogo.png"
              alt="The People Wire"
              width={60}
              height={60}
            />
            <div>
              <p className="font-semibold text-xl">
                Download <span className="text-[#F3CB04]">Our App</span>
              </p>
              <p className="text-sm text-gray-400">
                Get all things membership, straight to your inbox.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src="/appstore.png"
              alt="Download on App Store"
              width={160}
              height={48}
            />
            <Image
              src="/PlayStore.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
            />
          </div>
        </div>

        {/* Back To Top */}
        <Button
          onClick={handleBackToTop}
          className="w-full bg-[#F25C05] hover:bg-orange-600 text-white py-6 text-lg flex items-center justify-center gap-2"
        >
          Back To Top <ArrowUpIcon size={18} />
        </Button>
      </div>

      {/* Divider */}
      <Separator className="my-10 bg-[#F25C05]" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <CopyrightIcon size={12} />
          <span>2025 The People Wire. All Rights Reserved.</span>
        </div>

        <div className="flex gap-6">
          <span className="hover:text-orange-400 cursor-pointer">
            Disclaimer
          </span>
          <span className="hover:text-orange-400 cursor-pointer">
            Privacy & Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
