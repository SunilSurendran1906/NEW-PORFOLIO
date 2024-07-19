import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-8">
        <div className="max-w-screen-2xl container mx-auto px-3 md:px-15">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaGithub size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-4 border-t border-gray-700 pt-4 flex flex-col items-center">
              <p className="text-sm">
                &copy;All rights reserved ❤️ Sunil Surendran
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
