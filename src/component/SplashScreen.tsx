import logo from "../assets/logo.png";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img
          src={logo}
          alt="So-Nyah Cleaners"
          className="w-[120px] sm:w-[150px] h-auto animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;