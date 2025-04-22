import Main from "@/components/Main";

function MyApp() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/20" />
        <img
          src="/bg2.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <Main />
    </div>
  );
}

export default MyApp;
