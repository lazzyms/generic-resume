import { ILanguage } from "@/utils/IResume";
import { classNames } from "@/utils/classNames";

type PropType = {
  languages: ILanguage[];
};
const Languages = ({ languages }: PropType) => {
  return (
    <div className="w-max">
      {languages.map((item) => (
        <p key={item.language} className={classNames("px-2")}>
          {item.language} ({item.fluency})
        </p>
      ))}
    </div>
  );
};

export default Languages;
