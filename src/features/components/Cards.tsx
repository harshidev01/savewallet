import Button from "../appcomponents/Button";

function Cards() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-[30vw] h-[30vh] bg-pink-100 rounded-lg shadow-2xl gap-1">
        <div className="text-3xl font-semibold flex justify-center py-2.5 underline">
          Daily
        </div>
        <div className="flex p-5 text-l ">
          If you select this card you can pay daily wise. For example if you pay
          daily 20 then you 600 in your wallet by the end of month.
        </div>
        <div className="w-full h-full flex justify-center py-2">
          <Button className=" rounded-xl bg-pink-300 shadow-xl ">
            Let's go
          </Button>
        </div>
        
      </div>
    </div>
  );
}
export default Cards;
