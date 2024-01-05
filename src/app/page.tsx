import Heading from "@/components/Heading";
import resume from "../../resume.json";
import Table from "@/components/Table";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";
import References from "@/components/Reference";
import Interests from "@/components/Interests";
import Print from "@/components/Print";

export default function Home() {
  return (
    <main
      id="content"
      className="flex min-h-screen flex-col items-center justify-between px-8 py-2"
    >
      <div className="max-w-4xl w-full px-8">
        <Heading basics={resume.basics} />
        <Print />
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <Table title="Summary" child={<p>{resume.basics.summary}</p>} />
            <Table title="Skills" child={<Skills skills={resume.skills} />} />
            <Table
              title="Employment History"
              child={<Timeline works={resume.work} />}
            />
            <Table
              title="Education"
              child={<Education educations={resume.education} />}
            />
            <Table
              title="Projects"
              child={<Projects projects={resume.projects} />}
            />
            <Table
              title="Languages"
              child={<Languages languages={resume.languages} />}
            />
            <Table
              title="Interests"
              child={<Interests interests={resume.interests} />}
            />
            <Table
              title="References"
              child={<References references={resume.references} />}
            />
            <Table
              title="Get in touch"
              child={
                <Connect
                  basics={resume.basics}
                  profiles={resume.basics.profiles}
                />
              }
            />
          </dl>
        </div>
      </div>
    </main>
  );
}
