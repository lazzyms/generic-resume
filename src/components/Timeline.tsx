import { IWork } from "@/utils/IResume";
import { classNames } from "@/utils/classNames";

type PropType = {
  works: IWork[];
};
const Timeline = ({ works }: PropType) => {
  return (
    <>
      <div className="relative text-left">
        {works.map((work, i) => (
          <div key={work.name} className="flex items-start relative">
            <div className="hidden sm:block w-48">
              <div>
                {work.startDate.slice(0, 4)} -
                {work.endDate ? ` ${work.endDate.slice(0, 4)}` : " Current"}
              </div>
            </div>

            <div className="border-r border-black absolute h-full -left-1 sm:left-28 top-2 z-10">
              <i className="fas fa-circle "></i>
              <div className="-top-2 -left-[0.22rem] absolute h-2 w-2 rounded-full bg-gray-100 ring-1 ring-gray-300" />
            </div>

            <div className="w-full pl-2 md:pl-0">
              <div className="font-medium">{work.position}</div>
              <div className="sm:mb-4">
                <a href={work.url}>
                  {work.name}, {work.location}
                </a>
              </div>
              <div className="mb-4 mt-2 sm:hidden">
                <div>
                  {work.startDate.slice(0, 4)} -
                  {work.endDate ? ` ${work.endDate.slice(0, 4)}` : " Current"}
                </div>
              </div>
              <div
                className={classNames(
                  work.highlights.length > 0 ? "mb-4" : "mb-1"
                )}
              >
                {work.summary}
              </div>
              {work.highlights && (
                <div
                  className={classNames(
                    i == works.length - 1 ? "mb-1" : "mb-5"
                  )}
                >
                  <ul className="list-disc">
                    {work.highlights.map((hl) => (
                      <li key={hl}>{hl}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
