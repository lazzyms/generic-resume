import { IReference } from "@/utils/IResume";

type PropType = {
  references: IReference[];
};

const References = ({ references }: PropType) => {
  return (
    <>
      <div className="grid grid-cols-3">
        {references.map((item) => (
          <div key={item.name} className="flex flex-col">
            <a href={item.profile}>
              <p>{item.name}</p>
              <p>{item.designation}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default References;
