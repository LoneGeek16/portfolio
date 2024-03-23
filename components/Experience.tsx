import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SystemEngineer from "./works/SystemEngineer";
import TechnologyAnalyst from "./works/TechnologyAnalyst";
import LeadMLEngineer from "./works/LeadMLEngineer";
import SeniorEngineer from "./works/SeniorEngineer";

const Experience = () => {
  const [workLeadMLEngineer, setWorkLeadMLEngineer] = useState(false);
  const [workTechnologyAnalyst, setWorkTechnologyAnalyst] = useState(false);
  const [workSeniorEngineer, setWorkSeniorEngineer] = useState(false);
  const [workSystemEngineer, setWorkSystemEngineer] = useState(false);

  const handleLeadMLEngineer = () => {
    setWorkLeadMLEngineer(true);
    setWorkTechnologyAnalyst(false);
    setWorkSeniorEngineer(false);
    setWorkSystemEngineer(false);
  };

  const handleTechnologyAnalyst = () => {
    setWorkLeadMLEngineer(false);
    setWorkTechnologyAnalyst(true);
    setWorkSeniorEngineer(false);
    setWorkSystemEngineer(false);
  };
  const handleSeniorEngineer = () => {
    setWorkLeadMLEngineer(false);
    setWorkTechnologyAnalyst(false);
    setWorkSeniorEngineer(true);
    setWorkSystemEngineer(false);
  };
  const handleSystemEngineer = () => {
    setWorkLeadMLEngineer(false);
    setWorkTechnologyAnalyst(false);
    setWorkSeniorEngineer(false);
    setWorkSystemEngineer(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleLeadMLEngineer}
            className={`${
              workLeadMLEngineer
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            LeadMLEngineer
          </li>
          <li
            onClick={handleTechnologyAnalyst}
            className={`${
              workTechnologyAnalyst
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            TechnologyAnalyst
          </li>
          <li
            onClick={handleSeniorEngineer}
            className={`${
              workSeniorEngineer
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            SeniorEngineer
          </li>
          <li
            onClick={handleSystemEngineer}
            className={`${
              workSystemEngineer
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            SystemEngineer
          </li>
        </ul>
        {workLeadMLEngineer && <LeadMLEngineer />}
        {workTechnologyAnalyst && <TechnologyAnalyst />}
        {workSeniorEngineer && <SeniorEngineer />}
        {workSystemEngineer && <SystemEngineer />}
      </div>
    </section>
  );
};

export default Experience;
