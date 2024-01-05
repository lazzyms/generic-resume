import { IInterest } from "@/utils/IResume";
import Badge from "./Badge";

type PropType = {
  skills: IInterest[];
};
const Skills = ({ skills }: PropType) => {
  return (
    <div className="">
      {skills.map((main) => (
        <div key={main.name} className="pb-3 w-full">
          <p className="text-md font-medium mx-1">{main.name}</p>
          <div className="flex flex-wrap w-full items-center">
            {main.keywords.map((item) => (
              <Badge key={item} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
