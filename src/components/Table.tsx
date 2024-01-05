import { classNames } from "@/utils/classNames";
import { ReactElement } from "react";

type PropType = {
  title: string;
  child: ReactElement | string;
  small?: boolean;
};
const Table = ({ title, child, small }: PropType) => {
  return (
    <div
      className={classNames(
        "px-4 sm:grid sm:grid-cols-6  sm:px-0",
        small ? "py-1 sm:gap-3" : "py-6 sm:gap-4"
      )}
    >
      <dt className="text-sm font-normal leading-6 text-gray-900">{title}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-5 sm:mt-0">
        {child}
      </dd>
    </div>
  );
};

export default Table;
