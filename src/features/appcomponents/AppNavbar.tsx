function AppNavbar() {
  return (
    <div className="w-full min-h-10 bg-white text-black px-2 py-2 items-center justify-between flex">
      <img
        src="logo.png"
        className="cursor-pointer  w-[20vw]   object-cover h-[15vh]"
      />

      {/* <div className="mt-2 gap-6  flex  items-center">
        <div className="h-12 shadow w-12 rounded-full bg-white flex items-center justify-center border cursor-pointer">
          a
        </div>
      </div> */}
    </div>
  );
}

export default AppNavbar;
