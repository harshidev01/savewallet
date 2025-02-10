import Button from "../appcomponents/Button";

function Card() {
  return (
    <div className="w-full h-fit   flex ">
      <div className="w-[20vw] bg-purple-300 flex flex-col gap-8 rounded-2xl shadow-2xl p-4">
        <div>
        <div className="text-zinc-500/40">Plans</div>
        <div className="text-3xl font-bold flex underline ">1 Month</div>
        </div>
        <div className="flex text-xs font-semibold">
          If you select this card you can pay daily wise.For example if you pay
          daily 20 then you 600 in your wallet by the end of month with intrest.
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[18vw] h-[1px] bg-zinc-500/20"></div>

          <div className="w-full h-full flex justify-between py-2">
            <div className="flex flex-col">
              <div className=" text-zinc-500/70">For 1 month</div>
              <div>1.5%</div>
            </div>
            <div className="h-full flex items-center">
            <Button className=" rounded-xl shadow-2xl  items-center ">Let's go👉  </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
