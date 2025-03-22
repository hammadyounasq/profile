import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#242F65]  text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-white 400 mb-4 sm:mb-0">
          © Identityhub 2024. All rights reserved
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Send size={18} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Facebook size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
