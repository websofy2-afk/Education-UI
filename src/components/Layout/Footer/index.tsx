"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../Header/Logo";
import Link from "next/link";
import { footer } from "@/app/api/data";

const Footer = () => {
  return (
    <footer className="bg-PaleSkyBlu pt-16 pb-10">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <Logo />
            <p className="text-MidnightNavyText mt-4 leading-7">
              Edunexa brings you high-quality learning with top instructors,
              expert-curated courses, and a modern LMS platform.
            </p>
            <div className="flex gap-4 mt-5">
              {
                footer?.socialMedia.map((item, index) => (
                  <Link key={index} href={item.url} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-primary hover:text-white transition">
                    {item.icon}
                  </Link>
                ))
              }
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary">Quick Links</h4>

            {
              footer?.quickLinks.map((item, index) => (
                <ul key={index} className="text-MidnightNavyText  flex flex-col">
                  <Link href={item.url} className="hover:text-primary">{item.title}</Link>
                </ul>
              ))
            }
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary">Support</h4>
            {
              footer?.support.map((item, index) => (
                <ul key={index} className="text-MidnightNavyText  flex flex-col">
                  <Link href={item.url} className="hover:text-primary">{item.title}</Link>
                </ul>
              ))
            }
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary">Contact Details</h4>
            {
              footer?.contactDetails.map((item, index) => (
                <ul key={index} className="text-MidnightNavyText  flex flex-col">
                  {
                    item.url.startsWith("https") ? <li className="flex items-center gap-3">
                      {item.icon}
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary text-ftextcol mb-0"
                      >
                        <span>Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh</span>
                      </Link>
                    </li> :
                      <li className="flex items-center gap-3 mt-3">
                        {item.icon}
                        <Link
                          href={item.url}
                          className="text-sm hover:text-primary text-ftextcol mb-0"
                        >
                          {item.title}
                        </Link>
                      </li>}
                </ul>
              ))
            }
          </div>
        </div>
        <div className="border-t border-MidnightNavyText my-8"></div>
        <p className="text-center text-SlateBlueText text-sm">
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <Link
            href="/"
            className="hover:text-primary uppercase font-semibold mb-4 text-secondary"
          >
            Edunexa | Learn And Grow.{" "}
          </Link>
          Designed by :{" "}
          <Link
            href="https://www.websofy.com/"
            className="hover:text-green-800 font-semibold mb-4 text-secondary"
            target="_blank"
          >
            Websofy Software Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

