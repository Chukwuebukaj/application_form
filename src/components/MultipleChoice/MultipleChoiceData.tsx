import { ReactNode } from "react";

export const menuIcon: ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="menu"
  >
    <path
      d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z"
      fill="black"
    />
  </svg>
);

export const greenCheckBox: ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <rect width="18" height="18" rx="4" fill="#087B2F" />
    <path
      d="M5 10.0303L7.5 12L13 7"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export interface MultipleChoiceProps {
  checked: boolean;
  dropdown: boolean;
  yesOrNo: boolean;
  choiceArr?: string[];
  onChangeChoice?: (
    index: number
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMaxValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddChoice?: (index: number) => void;
  onClickCheckBox?: (index: number) => void;
  maxValue?: number | null;
  valIndex?: number;
}
