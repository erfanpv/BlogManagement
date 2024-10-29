import Footer from "@/components/ui/Footer/Footer";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import AuthNavbar from "@/components/ui/AuthNavbar/AuthNavbar";
import HomeContent from "@/components/ui/HomeContent/HomeContent";


export default function Home() {
  return (
    <div>
      <AuthNavbar />
      <main className="min-h-screen bg-customGray text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-20 items-stretch">
            {/* Left Section */}
            <section className="md:w-1/2 mb-8 md:mb-0 h-full ">
              <p className="text-gray-400 mb-4">
                Your Journey to Tomorrow Begins Here
              </p>
              <h1 className="text-5xl md:text-6xl font-medium mb-6 max-w-2xl">
                Explore the Frontiers of Artificial Intelligence
              </h1>
              <p className="text-gray-400 max-w-2xl mb-8">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
                <div>
                  <h3 className="text-4xl font-bold mb-2">
                    300<span className="text-yellow-400">+</span>
                  </h3>
                  <p className="text-gray-400">Resources available</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">
                    12k<span className="text-yellow-400">+</span>
                  </h3>
                  <p className="text-gray-400">Total Downloads</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">
                    10k<span className="text-yellow-400">+</span>
                  </h3>
                  <p className="text-gray-400">Active Users</p>
                </div>
              </div>
            </section>

            {/* Right Section */}
            <section className="md:w-1/3 h-full flex ">
              <div className="bg-customGrayrounded-xl p-8 relative overflow-hidden flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gray-600 border-2 border-gray-800"
                      ></div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Explore 1000+ resources
                </h3>
                <p className="text-gray-400 mb-4">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
                </p>
                <button className="flex items-center text-gray-300 hover:text-gray-400 transition-colors border px-7 py-3 rounded-md">
                  Explore Resources
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
            <div className=" border border-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11l5 3-5 3-5-3 5-3z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Latest News Updates</h3>
              <p className="text-gray-400 mb-4">Stay Current</p>
              <p className="text-gray-400 text-sm">
                Over 1000 articles published monthly
              </p>
            </div>

            <div className="p-8 rounded-xl border border-gray-800 ">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13a4 4 0 010 7.75"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Contributors</h3>
              <p className="text-gray-400 mb-4">Trusted Insights</p>
              <p className="text-gray-400 text-sm">
                50+ renowned AI experts on our team
              </p>
            </div>

            <div className="bg-customgray p-8 rounded-xl border border-gray-800 ">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Readership</h3>
              <p className="text-gray-400 mb-4">Worldwide Impact</p>
              <p className="text-gray-400 text-sm">2 million monthly readers</p>
            </div>
          </section>
          <section>
            <h2 className="text-4xl md:text-5xl mb-6">
              Today&apos;s Headlines: Stay Informed
            </h2>
            <p className="text-gray-400 max-w-3xl">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </section>
        </div>
        <HomeContent/>
      </main>
      <HeroSection />
      <Footer />
    </div>
  );
}
