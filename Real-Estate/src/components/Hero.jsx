export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-400">
          The <span className="text-blue-600">#1</span> site real estate professionals trust*
        </h1>
      <p className="mt-4 text-xl text-gray-300 text-center">
        Join millions of renters who trust RentCafe.com to find their new home.
      </p>
      <div className="mt-6 w-full max-w-4xl max-h-lg relative">
        <input
          type="text"
          placeholder="Where are you moving? What are you looking for?"
          className="w-full px-5 py-3 text-gray-400 rounded-full shadow-lg border-green-300 focus:ring-4 focus:ring-green-500"
        />
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition">
          Search
        </button>
      </div>
    </div>
  );
}
