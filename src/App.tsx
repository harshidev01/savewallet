import AppFooter from "./features/appcomponents/Appfooter";
import AppNavbar from "./features/appcomponents/AppNavbar";
import SaveWalletMain from "./features/components/SaveWalleMain";

function App() {
  return (
    <div className=" flex gap-2  flex-col font-mono text-xs px-2">
      <div className="flex flex-col gpa-4  h-[90vh] ">
        <AppNavbar />
        <div className="px-6 h-full">
          <SaveWalletMain />
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default App;
