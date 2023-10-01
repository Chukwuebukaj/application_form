import styled from "styled-components";
import { InputField } from "../../components/FormFields";

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.1875rem;
  height: 25.34388rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 3px 3px 14px 0px rgba(190, 190, 190, 0.3);
`;

export const ImageUploadTop = styled.div`
  display: flex;
  place-items: center;
  width: 37.1875rem;
  height: 4.83981rem;
  flex-shrink: 0;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  background: #d0f7fa;
  padding-left: 2rem;
  font-size: 1.5625rem;
  font-weight: 600;
  line-height: 114%; /* 1.78125rem */
`;

export const ImageUploadBody = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  height: 20.66rem;
`;

export const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 32rem;
  height: 13.125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px dashed #000;
  box-shadow: 3px 3px 9px 0px rgba(190, 190, 190, 0.13);
  cursor: pointer;

  .p1 {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 159.5%; /* 1.39563rem */
  }

  .p2 {
    color: #979797;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 159.5%; /* 1.39563rem */
  }
`;

export const StyledInput = styled(InputField)`
  display: none;
`;

export const LoadedWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.1875rem;
  height: 25rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 3px 3px 14px 0px rgba(190, 190, 190, 0.3);
`;

export const LoadedImage = styled.div<{ $bgImg: string | null }>`
  width: 100%;
  height: 20rem;
  border-radius: 1.25rem 1.25rem 0 0;
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
`;

export const DeleteBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  border-radius: 0 0 1.25rem 1.25rem;
  padding-left: 1.62rem;

  button {
    color: #a80000;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;

    label,
    svg,
    span {
      cursor: pointer;
    }
  }
`;

export const LoadedLabel = styled.label.attrs({ htmlFor: "upload" })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.5rem; /* 160% */
  letter-spacing: -0.00563rem;

  svg {
    width: 1.48656rem;
    height: 1.5rem;
    flex-shrink: 0;
  }
`;
