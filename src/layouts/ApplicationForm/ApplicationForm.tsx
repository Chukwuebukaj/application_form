import AdditionalQuestions from "../AdditionalQuestions/AdditionalQuestions";
import ImageUpload from "../ImageUpload/ImageUpload";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Profile from "../Profile/Profile";
import { ApplicationFormWrapper } from "./ApplicationForm.styled";

const ApplicationForm = () => {
  return (
    <ApplicationFormWrapper>
      <ImageUpload />
      <PersonalInfo />
      <Profile />
      <AdditionalQuestions />
    </ApplicationFormWrapper>
  );
};

export default ApplicationForm;
