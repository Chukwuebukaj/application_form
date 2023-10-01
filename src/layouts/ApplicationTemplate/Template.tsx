import { useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import Preview from "../Preview/Preview";
import ProgramDetails from "../ProgramDetails/ProgramDetails";
import WorkFlow from "../WorkFlow/WorkFlow";
import { TemplateWrapper } from "./Template.styled";

const Template = () => {
  const [currentTab, setCurrentTab] = useState<string>("Program Details");

  return (
    <TemplateWrapper>
      <Tabs currentTab={currentTab} onClick={(title) => setCurrentTab(title)} />
      {currentTab === "Program Details" && <ProgramDetails />}
      {currentTab === "Application Form" && <ApplicationForm />}
      {currentTab === "Workflow" && <WorkFlow />}
      {currentTab === "Preview" && <Preview />}
    </TemplateWrapper>
  );
};

export default Template;
