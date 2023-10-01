import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;

export const ControlsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: 400;
    line-height: 1.5rem; /* 160% */
    letter-spacing: -0.00563rem;
  }
`;
export const ControlsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .toggle-slider {
    width: 50px;
    height: 25px;
    background-color: #ccc;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
  }

  .slider {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
  }

  .toggle-slider.toggled .slider {
    left: calc(100% - 22px);
    transform: translate(-10%, -50%);
  }

  .toggled {
    background: #087b2f;
  }

  span {
    color: #666;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }
`;

export const GreenCheck = styled.svg`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  cursor:pointer;
`;

export const BlankCheckBox = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid #d4d9e4;
  background: #fff;
  cursor:pointer;

`;
