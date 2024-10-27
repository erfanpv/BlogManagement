"use client"

// import api from '@/api/interSepter';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import arrow2 from '../../../../public/images/arrow2.png'
// import LogoNavbar from '@/components/LogoNavbar';
// import About from '@/pages/About';
// import Footer from '@/pages/Footer';
// import userAuth from '@/zustand/useAuth';
import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';


const HomePage = () => {

  const router = useRouter();
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // const blogList = async () => {
    //   await api.get('/api/v1/blogs/')
    //     .then((result) => {
    //       setBlogs(result.data.data)
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    // }
    // blogList();
  }, []);

  const handleLogin = () => {
    router.push('/signin');
    toast.error("Please sign in to continue.");
  };

  const handleBlogView = () => {
    router.push('/blogpage');
  }

  const dummyImage = 'https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/06/05074905/world-environment-day.jpg';
  // const { user } = userAuth();

  return (
    <>
      {/* <LogoNavbar /> */}
      <main className="min-h-screen bg-customGray text-white p-8">
        <div className="max-w-7xl mx-auto">
          <section className="mb-20">
            <p className="text-gray-400 mb-4">Your Journey to Tomorrow Begins Here</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-gray-400 max-w-2xl mb-8">
              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines
              think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
              <div>
                <h3 className="text-4xl font-bold mb-2">300<span className="text-yellow-400">+</span></h3>
                <p className="text-gray-400">Resources available</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">12k<span className="text-yellow-400">+</span></h3>
                <p className="text-gray-400">Total Downloads</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">10k<span className="text-yellow-400">+</span></h3>
                <p className="text-gray-400">Active Users</p>
              </div>
            </div>
          </section>
          <section className="mb-20">
            <div className="bg-gray-900 rounded-xl p-8 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-gray-800"></div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Explore 1000+ resources</h3>
              <p className="text-gray-400 mb-4">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
              <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                Explore Resources
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11l5 3-5 3-5-3 5-3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Latest News Updates</h3>
              <p className="text-gray-400 mb-4">Stay Current</p>
              <p className="text-gray-400 text-sm">Over 1000 articles published monthly</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13a4 4 0 010 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Contributors</h3>
              <p className="text-gray-400 mb-4">Trusted Insights</p>
              <p className="text-gray-400 text-sm">50+ renowned AI experts on our team</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Readership</h3>
              <p className="text-gray-400 mb-4">Worldwide Impact</p>
              <p className="text-gray-400 text-sm">2 million monthly readers</p>
            </div>
          </section>
          <section>
            <h2 className="text-4xl md:text-5xl mb-6">Today&apos;s Headlines: Stay Informed</h2>
            <p className="text-gray-400 max-w-3xl">
              Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover
              the world through our news coverage.
            </p>
          </section>
        </div>

        <div className="p-6 bg-customGray">
          {blogs.length > 0 && (
            <div className="mb-4 p-10 bg-customGray rounded-sm shadow-lg md:flex">
              <div className="md:w-1/3">
                <Image
                  src={blogs[0].image || dummyImage}
                  alt={blogs[0].BlogTitle}
                  width={800}
                  height={600}
                  className="w-full h-full rounded-sm object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-4">{blogs[0].BlogTitle}</h2>
                <p className="text-gray-500 mb-8">{blogs[0].Description}</p>
                <div className="text-gray-500 text-sm mb-10">
                  <div className="flex justify-between">
                    <span className="font-semibold">Category</span>
                    <span className="font-semibold">Publication Date</span>
                    <span className="font-semibold">Author</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>{blogs[0].Category}</span>
                    <span>{blogs[0].Date}</span>
                    <span>{blogs[0].AuthorName}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-2 ">
                  <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">Like</button>
                  <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">Share</button>
                </div>
                <div className='flex justify-end'>
                  {localStorage.getItem("token") ? (<button
                    className=" border border-gray-500 text-gray-300 px-6 py-2 rounded-md  hover:bg-gray-800"
                    onClick={() => handleBlogView()}
                  >
                    Read More
                  </button>) : (
                    <button
                      className=" border border-gray-500 text-gray-300 px-6 py-2 rounded-md  hover:bg-gray-800"
                      onClick={() => handleLogin()}
                    >
                      Read More
                    </button>)}

                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 p-14">

            {blogs.slice(1, 7).map((blog, index) => (
              <div key={index} className="bg-customGray rounded-lg shadow-md p-4">
                <Image
                  src={blog.image || dummyImage}
                  alt={blog.BlogTitle}
                  width={800}
                  height={600}
                  className="w-full h-48 rounded-lg object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{blog.BlogTitle}</h3>
                <div className="text-gray-500 text-sm mb-2">
                  <p>{blog.Category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">Like</button>
                  <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">Share</button>
                </div>
                <div className='flex justify-end'>
                  {localStorage.getItem("token") ? (<button
                    className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight"
                    onClick={() => handleBlogView()}
                  >
                    Read More
                    {/* <Image src={arrow2} className="ml-2 w-4" alt="Arrow Icon" /> */}
                  </button>) : (
                    <button
                      className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight"
                      onClick={() => handleLogin()}
                    >
                      Read More
                      <Image src={arrow2} className="ml-2 w-4" alt="Arrow Icon" />
                    </button>)}

                </div>
              </div>
            ))}
          </div>

          <div className="bg-userCard w-full h-auto flex flex-col items-start justify-start text-left p-6 relative ml-4 md:ml-14">
            <div className="bg-customGray1 text-white px-2 py-1 rounded-sm mb-2">
              Featured Blog
            </div>
            <div className="flex flex-col md:flex-row md:items-center w-full">
              <h2 className="text-2xl md:text-5xl mb-4 md:mb-0 md:mr-4">Visual Insights for the Modern Viewer</h2>
              <button className="flex items-center border border-gray-500 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-800 mt-2 md:mt-0">
                View All
                  {/* <Image src={arrow2} className="ml-2 w-4" alt="Arrow Icon" /> */}
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* <About />
      <Footer /> */}
    </>
  );
};

export default HomePage;