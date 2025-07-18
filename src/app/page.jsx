import Main from "@/components/Main";

function MyApp() {
  const arr = ["/bg/bg2.png"];
  const imgSrc = Math.floor((Math.random() * 10) % 4);

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-sm" />
        {/* <img
          src={arr[0]}
          alt="background"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Main Content */}
      <Main />
    </div>
  );
}

export default MyApp;
