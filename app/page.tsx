import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div className="relative flex-grow flex flex-col">
        {/* Full-screen background image */}
        <Image
          src="https://sjc.microlink.io/yAneCtOSFFlWGijgW7cCtuiXmNelANdj7xQoy4nNFb70yQ3eSC0DIlfupABNGsZacD_8eqZeufWYJwMw5Iduow.jpeg"
          alt="AI Robot Hand"
          fill // Makes image fill container
          className="object-cover" // Ensures image covers area without distortion
          priority // Preloads image for better performance
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4">
          {/* Header */}
          <h1 className="text-white font-bold text-2xl md:text-3xl tracking-wider mb-16">
            FIBERMIND.AI
          </h1>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
              Empowering Innovation with AI
            </h2>
            <div className="animate-pulse">
              <p className="text-2xl md:text-3xl text-cyan-400 font-semibold tracking-wider">
                COMING SOON!
              </p>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="relative z-10 pb-12 px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Subscribe
            </h3>
            <p className="text-gray-300 mb-6">
              Sign up to be the first to receive updates
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

