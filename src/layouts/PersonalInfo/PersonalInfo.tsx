import { useState } from "react";
import {
  PersonalInfoWrapper,
  PersonalInfoTop,
  PersonalInfoBody,
  EachInfoWrapper,
} from "./PersonalInfo.styled";
import { formData } from "./PersonalInfoData";
import Controls from "../../components/Controls/Controls";
import AddQuestionBtn from "../../components/AddQuestionBtn/AddQuestionBtn";

const PersonalInfo = () => {
  const [] = useState<boolean>(false);
  const [checkedInfo, setCheckedInfo] = useState<string[]>([]);
  const [toggledInfo, setToggledInfo] = useState<string[]>([]);

  const addChecked = (text: string) => {
    checkedInfo.includes(text)
      ? setCheckedInfo(checkedInfo.filter((info) => info !== text))
      : setCheckedInfo((prevInfo) => [...prevInfo, text]);
  };

  const addToggled = (text: string) => {
    toggledInfo.includes(text)
      ? setToggledInfo(toggledInfo.filter((info) => info !== text))
      : setToggledInfo((prevInfo) => [...prevInfo, text]);
  };
  return (
    <PersonalInfoWrapper>
      <PersonalInfoTop>
        <span>Personal Information</span>
      </PersonalInfoTop>
      <PersonalInfoBody>
        {formData.map((data, index) => (
          <EachInfoWrapper key={index}>
            <p className="title">
              {data} {index === 3 && <span>(without dial code)</span>}
            </p>
            {index > 2 && (
              <Controls
                checkBoxText={"Internal"}
                sliderText={toggledInfo.includes(data) ? "Show" : "Hide"}
                checked={checkedInfo.includes(data)}
                slid={toggledInfo.includes(data)}
                handleToggle={() => addToggled(data)}
                handleCheck={() => addChecked(data)}
              />
            )}
          </EachInfoWrapper>
        ))}
        <AddQuestionBtn onClick={()=>{} } />
      </PersonalInfoBody>
    </PersonalInfoWrapper>
  );
};

export default PersonalInfo;
