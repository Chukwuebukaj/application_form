import { SlPencil } from "react-icons/sl";
import { AddedQuestionProps } from "./AddedQuestionData";
import styled from "styled-components";

const AddedQuestion: React.FC<AddedQuestionProps> = ({
  question,
  questionType,
  onClickEdit,
  toBeEdited,
  duration,
}) => {
  return (
    <AddedQuestionWrapper>
      <AddedQuestionTop>
        <AddedQuestionLeft>
          <span>
            {questionType === "Video question" ? duration : questionType}
          </span>
          <p>{question}</p>
        </AddedQuestionLeft>
        <SlPencil onClick={onClickEdit} />
      </AddedQuestionTop>
      <>{toBeEdited}</>
    </AddedQuestionWrapper>
  );
};

export default AddedQuestion;

const AddedQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.0625rem solid #c4c4c4;

  svg {
    width: 1.125rem;
    height: 1.0625rem;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const AddedQuestionTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AddedQuestionLeft = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #979797;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 159.5%; 

  p {
    color: #000;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 114%;
  }
`;
