import AppFooter from "../appcomponents/AppFooter";
import AppNavbar from "../appcomponents/AppNavbar";
import Card from "./Card";

function ChoosePlan() {
  return (
    <div className="w-full h-[95%] flex justify-between flex-col ">
      <div>
        <AppNavbar />
      </div>
      <div className="flex flex-col gap-[5vh] justify-center items-center">
        <div className="text-[50px] w-[60vw] text-center flex justify-center font-bold">
          Life planning, Making easy to turn dreams a reality.
        </div>
        <div className="flex flex-col gap-[5vh] w-full">
          <div className="flex flex-row w-full h-fit items-center">
          <div className="font-bold px-10 text-2xl">Featured Plans</div>
          
          </div>
          <div className="px-20">
            <Card />
          </div>
        </div>
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
}
export default ChoosePlan;
