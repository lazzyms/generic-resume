import { IEducation } from "@/utils/IResume";

type PropType = {
  educations: IEducation[];
};
const Education = ({ educations }: PropType) => {
  return (
    <>
      <div className="relative text-left">
        {educations.map((education) => (
          <div
            key={education.institution}
            className="flex items-start relative"
          >
            <div className="hidden sm:block w-48">
              <div>
                {education.startDate.slice(0, 4)} -
                {education.endDate
                  ? ` ${education.endDate.slice(0, 4)}`
                  : " Current"}
              </div>
            </div>

            <div className="border-r border-black absolute h-full left-1 sm:left-28 top-0 z-10">
              <i className="fas fa-circle "></i>
              <div className="-top-2 -left-[0.22rem] absolute h-2 w-2 rounded-full bg-gray-100 ring-1 ring-gray-300" />
            </div>

            <div className="w-full">
              <div className="font-medium">
                {education.studyType} of {education.area}
              </div>
              <div className="sm:mb-3">
                <a href={education.url}>{education.institution}</a>
              </div>
              <div className="mb-4 mt-2 sm:hidden">
                <div>
                  {education.startDate.slice(0, 4)} -
                  {education.endDate
                    ? ` ${education.endDate.slice(0, 4)}`
                    : " Current"}
                </div>
              </div>
              <div className="mb-1">SPI: {education.score}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
