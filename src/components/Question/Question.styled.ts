import styled from "styled-components";
import { InputField } from "../FormFields";
import Button from "../Button";

export const QuestionWrapper = styled.div<{ $display: string }>`
  display: ${({ $display }) => $display};
  flex-direction: column;
  width: 100%;
  gap: 1.81rem;

  .label {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 114%; /* 1.425rem */
    margin-bottom: -1.31rem;
  }
`;

export const TypesDropDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 4.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid #000;
  justify-content: center;
  padding: 0 1.62rem;
  position: relative;
  align-items: center;
  cursor:pointer;
`;

export const SelectedType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .svg {
    margin-left: auto;
  }
`;

export const QuestionInput = styled(InputField)`
  width: 100%;
  height: 4.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid #000;
  padding: 0 1.62rem;

  &:focus {
    outline: none;
  }
`;

export const QuestionTypesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 102%;
  background: #fff;
  border-radius: 0.3125rem;
  box-shadow: 3px 3px 27px 0px rgba(190, 190, 190, 0.3);
  z-index: 2;

  p {
    width: 100%;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  .active {
    background: #9c4de2;
    color: #fff;
  }

  .first {
    border-radius: 0.3125rem 0.3125rem 0 0;
  }

  .last {
    border-radius: 0 0 0.3125rem 0.3125rem;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled(Button).attrs({ type: "button" })`
  display: flex;
  align-items: center;
  color: #a80000;
  gap: 1rem;
  background: transparent;
  border: transparent;

  span {
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.5rem; /* 160% */
    letter-spacing: -0.00563rem;
  }

  svg {
    width: 1.48656rem;
    height: 1.5rem;
  }
`;

export const SaveButton = styled(Button).attrs({ type: "button" })`
  width: 3.6875rem;
  height: 2.1875rem;
  border-radius: 0.3125rem;
  background: #087b2f;
  color: #fff;
  border: solid #087b2f;
`;
