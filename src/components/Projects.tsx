import { IProject } from "@/utils/IResume";
import { classNames } from "@/utils/classNames";
import Badge from "./Badge";

type PropType = {
  projects: IProject[];
};
const Projects = ({ projects }: PropType) => {
  return (
    <>
      <div className="flex flex-col divide-y divide-gray-100">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={classNames("mb-2", i > 0 ? "pt-2" : "")}
          >
            <a href={project.url} className="text-base text-md font-semibold">
              ◎ {project.name}
            </a>
            <div className="md:pl-5">
              <div className="flex mt-1 gap-1">
                <p className="text-gray-500">Description:</p>
                <p className="text-justify text-gray-600">
                  {project.description}
                </p>
              </div>
              <div className="flex mt-1 gap-1">
                <p className="text-gray-500">Highlights:</p>
                {project.highlights && (
                  <div className={classNames("pl-5 mb-2")}>
                    <ul className="list-disc">
                      {project.highlights.map((hl) => (
                        <li key={hl}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex mt-1 gap-1">
                <p className="text-gray-500">Affiliation:</p>
                <p>{project.entity}</p>
              </div>
              <div className="flex mt-1 gap-1">
                <div className="flex flex-wrap w-full items-center">
                  {/* <p className="text-gray-500">Skills:</p> */}
                  {project.keywords.map((item) => (
                    <Badge key={item} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
