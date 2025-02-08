import ChoosePlan from "./features/components/ChoosePlan";
import SaveWalletMain from "./features/components/SaveWalleMain";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <BrowserRouter>
    <Routes>
      <Route path="/" element= {<SaveWalletMain/>}/>
      <Route path="/chooseplan" element={<ChoosePlan/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
