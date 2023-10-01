import styled from "styled-components";

export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  width: 37.1875rem;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 3px 3px 14px 0px rgba(190, 190, 190, 0.3);
`;

export const PersonalInfoTop = styled.div`
  display: flex;
  align-items: center;
  padding: 2.12rem 0 1.81rem 1.81rem;
  width: 100%;
  flex-shrink: 0;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  background: #d0f7fa;

  span {
    font-size: 1.5625rem;
    font-weight: 600;
    line-height: 114%; /* 1.78125rem */
  }
`;

export const PersonalInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.44rem;
  padding: 2.37rem 1.88rem;
`;

export const EachInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 32.3125rem;
  border-bottom: 0.0625rem solid #c4c4c4;
  padding-bottom: 1.56rem;
  justify-content:space-between;

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 114%; /* 1.425rem */
    display: flex;
    align-items: flex-end;
    gap:.4rem;

    span {
      font-weight: 100;
      font-size: 0.875rem;
    }
  }
`;
