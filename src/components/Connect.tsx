import { IBasics, IProfile } from "@/utils/IResume";

type PropType = {
  basics: IBasics;
  profiles: IProfile[];
};
const Connect = ({ basics, profiles }: PropType) => {
  return (
    <>
      <dl>
        <div>
          <dd>
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
          </dd>
        </div>
        <div>
          <dd>
            <a href={`tel:${basics.phone}`}>{basics.phone}</a>
          </dd>
        </div>
        <div className="mt-2 flex flex-col gap-1 w-full">
          {profiles.map((profile) => (
            <div key={profile.url}>
              <dd>
                {profile.network}: <a href={`${profile.url}`}>{profile.url}</a>
              </dd>
            </div>
          ))}
        </div>
      </dl>
    </>
  );
};

export default Connect;
