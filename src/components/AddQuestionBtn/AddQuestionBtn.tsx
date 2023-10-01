import styled from "styled-components";
import Button from "../Button";
import { AiOutlinePlus } from "react-icons/ai";

interface AddQuestionBtnProps {
  onClick: () => void;
}

const AddQuestionBtn: React.FC<AddQuestionBtnProps> = ({ onClick }) => {
  return (
    <StyledAddQuestionBtn onClick={onClick}>
      <AiOutlinePlus />
      <span>Add a question</span>
    </StyledAddQuestionBtn>
  );
};

export default AddQuestionBtn;

const StyledAddQuestionBtn = styled(Button).attrs({ type: "button" })`
  display: flex;
  align-items: center;
  font-weight: 600;
  background: transparent;
  border: transparent;
  gap: 1.26rem;
  margin-right: auto;

  span {
    font-size: 0.9375rem;
    line-height: 1.5rem; /* 160% */
    letter-spacing: -0.00563rem;
  }

  svg {
    width: 1.48656rem;
    height: 1.5rem;
    flex-shrink: 0;
  }
`;
