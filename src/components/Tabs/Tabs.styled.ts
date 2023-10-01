import styled from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";

export const TabsWrapper = styled.header`
  display: flex;
  width: calc(100vw - 7.11206rem);
  height: 8.0625rem;
  align-items: center;
  box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  margin-top: 7.69rem;
`;

export const TabWrapper = styled.div`
  height: 100%;
  width: 17.6535rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    background: #00635b;
    cursor: not-allowed;
  }

  &.curved {
    border-radius: 0.5625rem 0 0 0.5625rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.875rem;
    flex-shrink: 0;
    border-right: 1px solid #c4c4c4;
    font-family: Inter;
    font-size: 1.25rem;
    font-weight: 500;

    &.active {
      border: none;
    }

    &.white-text {
      color: #fff;
    }
  }
`;

export const Pointer = styled(AiFillCaretRight)`
  color: #00635b;
  position: absolute;
  right: -0.9rem;
  height: 2.625rem;
  width: 1.3125rem;
`;
