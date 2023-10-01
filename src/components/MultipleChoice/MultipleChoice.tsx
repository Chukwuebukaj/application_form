import { InputField } from "../FormFields";
import {
  MultipleChoiceWrapper,
  ChoiceLabel,
  InputWrapper,
  CheckWrapper,
  Unchecked,
  MaxLabel,
} from "./MultipleChoice.styled";
import {
  MultipleChoiceProps,
  greenCheckBox,
  menuIcon,
} from "./MultipleChoiceData";
import { ImPlus } from "react-icons/im";

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  checked,
  dropdown,
  yesOrNo,
  choiceArr,
  onChangeChoice,
  onClickAddChoice,
  onClickCheckBox,
  maxValue,
  onChangeMaxValue,
  valIndex,
}) => {
  console.log(valIndex, maxValue);

  return (
    <MultipleChoiceWrapper>
      {!yesOrNo && (
        <ChoiceLabel>
          <span>Choice</span>
          {choiceArr?.map((choice, index) => (
            <InputWrapper key={index}>
              {menuIcon}
              <InputField
                id="choice"
                placeholder="Type here"
                name={`${valIndex!}`}
                value={choice}
                onChange={onChangeChoice!(index)}
              />
              {index === choiceArr.length - 1 && (
                <ImPlus
                  className="plus"
                  onClick={() => onClickAddChoice!(valIndex!)}
                />
              )}
            </InputWrapper>
          ))}
        </ChoiceLabel>
      )}
      <CheckWrapper>
        {checked ? (
          <div className="checked" onClick={() => onClickCheckBox!(valIndex!)}>
            {greenCheckBox}
          </div>
        ) : (
          <Unchecked onClick={() => onClickCheckBox!(valIndex!)}></Unchecked>
        )}
        <span>
          {yesOrNo
            ? "Disqualify candidate if the answer is no"
            : "Enable “Other” option"}
        </span>
      </CheckWrapper>
      {!dropdown && !yesOrNo && (
        <MaxLabel>
          <span>Max choice allowed</span>
          <InputField
            id="max"
            type="number"
            placeholder="Enter number of choice allowed here"
            value={maxValue || ""}
            name={`${valIndex!}`}
            onChange={onChangeMaxValue}
            maxLength={4}
          />
        </MaxLabel>
      )}
    </MultipleChoiceWrapper>
  );
};

export default MultipleChoice;
