import styled from "styled-components";

export const VideoQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    border-radius: 0.3125rem;
    border: 1px solid #000;
    width: 100%;
    height: 9rem;
    padding: 1rem;
    font-family: Poppins;
  }
`;

export const BottomFields = styled.div`
  display: flex;
  gap: 1rem;
  align-items:center;

  input,
  select {
    padding: 1rem;
    border-radius: 0.3125rem;
    border: 1px solid #000;
  }

  input {
    width: 60%;
  }

  select {
    width: 40%;
  }
`;
