import styled from "styled-components";

export const MultipleChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ChoiceLabel = styled.label.attrs({ htmlFor: "choice" })`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  span {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 114%; /* 1.425rem */
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 1.44rem 1.13rem;
    border-radius: 0.3125rem;
    border: 1px solid #a0a0a0;
    width: 90%;
  }

  .menu {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .plus {
    width: 0.8125rem;
    height: 0.81981rem;
    flex-shrink: 0;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .checked {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg,
  .checked {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  span {
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5rem; /* 160% */
    letter-spacing: -0.00563rem;
  }
`;

export const Unchecked = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #d4d9e4;
  background: #fff;
  cursor: pointer;
`;

export const MaxLabel = styled.label.attrs({ htmlFor: "max" })`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 114%; /* 1.425rem */
  }

  input {
    padding: 1.44rem 1.94rem;
    border-radius: 0.3125rem;
    border: 1px solid #000;
  }
`;
