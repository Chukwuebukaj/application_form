import { BiSolidDownArrow } from "react-icons/bi";
import { QuestionProps, QuestionTypes } from "./QuestionData";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  BtnsWrapper,
  DeleteButton,
  QuestionInput,
  QuestionTypesList,
  QuestionWrapper,
  SaveButton,
  SelectedType,
  TypesDropDown,
} from "./Question.styled";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import VideoQuestion from "../VideoQuestion/VideoQuestion";

const Question: React.FC<QuestionProps> = ({
  onClickDelete,
  onClickSave,
  selectQuestionType,
  onChange,
  index,
  fieldValues,
  display,
  editing,
  checked,
  onChangeChoice,
  onClickAddChoice,
  onClickCheckBox,
  onChangeMaxValue,
  questionIndex,
  onChangeVideoValues,
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  console.log(fieldValues);

  return (
    <QuestionWrapper $display={display}>
      {!editing && (
        <>
          <span className="label">Type</span>
          <TypesDropDown onClick={() => setShowList(!showList)}>
            <SelectedType>
              <span>{fieldValues.type}</span>
              <BiSolidDownArrow />
            </SelectedType>
            {showList && (
              <QuestionTypesList>
                {QuestionTypes.map((type, questionIndex) => (
                  <p
                    key={questionIndex}
                    onClick={() => selectQuestionType(type, index)}
                    onMouseEnter={() => setHoveredIndex(questionIndex)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    className={
                      questionIndex === hoveredIndex
                        ? hoveredIndex === 0
                          ? "active first"
                          : hoveredIndex === QuestionTypes.length - 1
                          ? "active last"
                          : "active"
                        : ""
                    }
                  >
                    {type}
                  </p>
                ))}
              </QuestionTypesList>
            )}
          </TypesDropDown>
        </>
      )}
      <label htmlFor="question" className="label">
        Question
      </label>
      <QuestionInput
        placeholder="Type here"
        id="question"
        name={`${index}`}
        value={fieldValues.questionValue}
        onChange={onChange}
      />
      {fieldValues.type === "Multiple choice" && (
        <MultipleChoice
          checked={fieldValues.checked}
          dropdown={false}
          yesOrNo={false}
          choiceArr={fieldValues.choiceArr}
          onChangeChoice={(index: number) => onChangeChoice(index)}
          onClickAddChoice={(index: number) => onClickAddChoice(index)}
          onClickCheckBox={(index: number) => onClickCheckBox(index)}
          maxValue={fieldValues.maxChoice}
          onChangeMaxValue={onChangeMaxValue}
          valIndex={questionIndex}
        />
      )}
      {fieldValues.type === "Dropdown" && (
        <MultipleChoice
          checked={fieldValues.checked}
          dropdown={true}
          yesOrNo={false}
          choiceArr={fieldValues.choiceArr}
          onChangeChoice={(index: number) => onChangeChoice(index)}
          onClickAddChoice={(index: number) => onClickAddChoice(index)}
          onClickCheckBox={(index: number) => onClickCheckBox(index)}
          valIndex={questionIndex}
        />
      )}
      {fieldValues.type === "Yes/No" && (
        <MultipleChoice
          checked={checked}
          dropdown={false}
          yesOrNo={true}
          onClickCheckBox={(index: number) => onClickCheckBox(index)}
          valIndex={questionIndex}
        />
      )}
      {fieldValues.type === "Video question" && (
        <VideoQuestion
          additionalInfo={fieldValues.moreInfo}
          maxDuration={fieldValues.maxDuration}
          siUnit={fieldValues.unit}
          onChangeVideoValues={onChangeVideoValues(questionIndex)}
        />
      )}
      <BtnsWrapper>
        <DeleteButton onClick={() => onClickDelete(questionIndex)}>
          <AiOutlineClose /> <span>Delete question</span>
        </DeleteButton>
        <SaveButton
          children="Save"
          onClick={() => onClickSave(questionIndex)}
        />
      </BtnsWrapper>
    </QuestionWrapper>
  );
};

export default Question;
