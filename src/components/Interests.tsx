import { IInterest } from "@/utils/IResume";

type PropType = {
  interests: IInterest[];
};
const Interests = ({ interests }: PropType) => {
  return (
    <>
      {interests.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default Interests;
