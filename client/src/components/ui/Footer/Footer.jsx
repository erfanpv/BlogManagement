import Image from "next/image";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-14">
      <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-5">
        <div>
          <h4 className="font-semibold mb-5">Home</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Features
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Blogs
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Resources{" "}
                <span className="bg-gray-700 text-white text-xs ml-1 px-1 rounded">
                  New
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Testimonials
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-8">News</h4>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Trending Stories
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Featured Videos
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Technology
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Health
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Politics
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Environment
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-8">Blogs</h4>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Quantum Computing
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                AI Ethics
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Space Exploration
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Biotechnology{" "}
                <span className="bg-gray-700 text-white text-xs ml-1 px-1 rounded">
                  New
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Renewable Energy
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                Biohacking
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-8">Podcasts</h4>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                AI Revolution
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                AI Revolution{" "}
                <span className="bg-gray-700 text-white text-xs ml-1 px-1 rounded">
                  New
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                TechTalk AI
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-400 hover:text-white">
                AI Conversations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-8">Resources</h4>
          <ul>
            <li className="mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg"
              >
                Whitepapers
              </a>
            </li>
            <li className="mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg"
              >
                Ebooks
              </a>
            </li>
            <li className="mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg"
              >
                Reports
              </a>
            </li>
            <li className="mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-500 p-3 rounded-lg"
              >
                Research Papers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm order-last md:order-first mt-4 md:mt-0">
          Terms & Conditions | Privacy Policy
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Medium</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          &copy; 2024 FutureTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
