import { useNavigate } from "react-router-dom";
import {
  GET_IN,
  HOME_MAIN_CONTENT_LINE_1,
  HOME_MAIN_CONTENT_LINE_2,
  HOME_MAIN_CONTENT_LINE_3,
} from "../appcomponents/appConstants";
import AppFooter from "../appcomponents/AppFooter";
import AppNavbar from "../appcomponents/AppNavbar";
import Button from "../appcomponents/Button";

function SaveWalletMain() {
  const navigate = useNavigate()
  function handleGetinClick() {


    navigate("/chooseplan")

  }
  return (
    <div className="w-full h-full   flex  flex-col px-2 justify-between ">
      <AppNavbar />
      <div className="w-full h-full flex px-10  ">
        <div className="w-full h-full flex ">
          <div className="text-[100px] max-w-[60vw] flex items-center h-full justify-center font-extrabold  ">
            <div className="flex flex-col ">
              <h2>{HOME_MAIN_CONTENT_LINE_1}</h2>
              <h2>{HOME_MAIN_CONTENT_LINE_2}</h2>

              <h2 className="flex items-center ">
                {HOME_MAIN_CONTENT_LINE_3}{" "}
                <Button
                  className="mt-7 ml-5 w-fit h-[8vh] text-xl  "
                  onTrigger={handleGetinClick}
                >
                  {GET_IN}
                </Button>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <AppFooter />
      </div>
    </div>
  );
}

export default SaveWalletMain;