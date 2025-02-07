function AppFooter() {
  function handleNameClick() {
    window.open("https://afriddev.vercel.app");
  }

  return (
    <div className="w-full items-center justify-center flex ">
      <div className="flex items-center w-[65vw] justify-between">
        <label>© 2025 Save Wallet. All Rights Reserved.</label>
        <label className="flex text-nowrap text-gray-400 gap-1">
          Made with 💛 by{" "}
          <a className="cursor-pointer" onClick={handleNameClick}>
            Shaik Afrid
          </a>
        </label>
      </div>
    </div>
  );
}
export default AppFooter;
