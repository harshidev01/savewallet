import {
  HOME_MAIN_CONTENT_LINE_1,
  HOME_MAIN_CONTENT_LINE_2,
  HOME_MAIN_CONTENT_LINE_3,
} from "../appcomponents/AppConstants";
import Button from "../appcomponents/Button";


function SaveWalletMain() {
  return (
    <div className="w-full h-full flex ">
      <div className="w-full h-full flex  ">
        <div className="w-full h-full flex ">
          <div className="text-[100px] max-w-[60vw] flex items-center h-full justify-center font-extrabold  ">
            <div className="flex flex-col ">
              <h2>{HOME_MAIN_CONTENT_LINE_1}</h2>
              <h2>{HOME_MAIN_CONTENT_LINE_2}</h2>

              <h2 className="flex items-center">
                {HOME_MAIN_CONTENT_LINE_3} <Button>sdas</Button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveWalletMain;
