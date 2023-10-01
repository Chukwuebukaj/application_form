import { useState } from "react";
import Controls from "../../components/Controls/Controls";
import {
  EachInfoWrapper,
  ProfileBody,
  ProfileTop,
  ProfileWrapper,
} from "./Profile.styled";
import { profileData } from "./ProfileData";
import AddQuestionBtn from "../../components/AddQuestionBtn/AddQuestionBtn";

const Profile = () => {
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
    <ProfileWrapper>
      <ProfileTop>
        <span>Profile</span>
      </ProfileTop>
      <ProfileBody>
        {profileData.map((data, index) => (
          <EachInfoWrapper key={index}>
            <p className="title">
              {data} {index === 3 && <span>(without dial code)</span>}
            </p>
            <Controls
              checkBoxText={"Mandatory"}
              sliderText={toggledInfo.includes(data) ? "Show" : "Hide"}
              checked={checkedInfo.includes(data)}
              slid={toggledInfo.includes(data)}
              handleToggle={() => addToggled(data)}
              handleCheck={() => addChecked(data)}
            />
          </EachInfoWrapper>
        ))}
        <AddQuestionBtn onClick={() => {}} />
      </ProfileBody>
    </ProfileWrapper>
  );
};

export default Profile;
