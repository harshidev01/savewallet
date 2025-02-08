import Button from "../appcomponents/Button";

function Card() {
  return (
    <div className="w-full h-fit   flex ">
      <div className="w-[20vw] bg-purple-300 flex flex-col gap-8 rounded-2xl shadow-2xl p-4">
        <div className="text-3xl font-bold flex  py-2.5">1 Month</div>
        <div className="flex text-xs font-semibold">
          If you select this card you can pay daily wise. For example if you pay
          daily 20 then you 600 in your wallet by the end of month.
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[18vw] h-[1px] bg-black"></div>

          <div className="w-full h-full flex justify-center py-2">
            <Button className=" rounded-xs shadow-2xl ">Let's go👉  </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
