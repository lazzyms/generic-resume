import { IBasics } from "@/utils/IResume";
import Image from "next/image";
import Print from "./Print";

type PropType = {
  basics: IBasics;
};
const Heading = ({ basics }: PropType) => {
  return (
    <>
      <div className="w-full px-4 sm:px-0 flex gap-4 items-center">
        <Image
          src={basics.image}
          alt="Profile picture of Maulik Sompura"
          className="rounded-full p-2 h-24 w-24"
          width="100"
          height="100"
        />
        <div className="w-full flex flex-col gap-1 justify-center">
          <h1 className="text-base text-3xl font-semibold leading-1 text-gray-900">
            {basics.name}
          </h1>
          <p className="w-full mt-1 mb-3 text-base text-lg leading-3 text-gray-500">
            {basics.label}
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
