import { ReactNode } from "react";
import Button from "../appcomponents/Button";
import { GET_STARTED, READ_MORE } from "../appcomponents/AppConstants";

interface SelecttypeCardInterface {
  title: ReactNode;
  desc: ReactNode;
  example: ReactNode;
  id: string;
}

function SelectTypeCard({ desc, example, id, title }: SelecttypeCardInterface) {
  function handleReadMoreClick() {
    console.log(id);
  }

  function handleGetStartedClick() {
    console.log(id);
  }

  return (
    <div className="shadow-md border border-gray-200 rounded-md h-[25vh]  max-w-[22vw] p-4  justify-between flex flex-col  ">
      <div className="flex flex-col gap-2">
        <div className="    text-md  w-fit font-semibold ">{title}</div>
        <div className="ml-3 text-xs">{desc}</div>
        <div className="ml-3">{example}</div>
      </div>
      <div className="flex items-center justify-between">
        <Button onTrigger={handleReadMoreClick} icon="read">
          {READ_MORE}
        </Button>

        <Button onTrigger={handleGetStartedClick} icon="start">
          {GET_STARTED}
        </Button>
      </div>
    </div>
  );
}

export default SelectTypeCard;
