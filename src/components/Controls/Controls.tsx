import {
  BlankCheckBox,
  ControlsLeft,
  ControlsRight,
  ControlsWrapper,
} from "./Controls.styled";
import { ControlsProps, GreenCheckBox } from "./ControlsData";

const Controls: React.FC<ControlsProps> = ({
  checked,
  slid,
  checkBoxText,
  sliderText,
  handleToggle,
  handleCheck,
}) => {
  return (
    <ControlsWrapper>
      <ControlsLeft>
        {checked ? (
          <GreenCheckBox onClick={handleCheck} />
        ) : (
          <BlankCheckBox onClick={handleCheck}></BlankCheckBox>
        )}
        <span>{checkBoxText}</span>
      </ControlsLeft>
      <ControlsRight>
        <div
          className={`toggle-slider ${slid ? "toggled" : ""}`}
          onClick={handleToggle}
        >
          <div className="slider"></div>
        </div>
        <span>{sliderText}</span>
      </ControlsRight>
    </ControlsWrapper>
  );
};

export default Controls;
