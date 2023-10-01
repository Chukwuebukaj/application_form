import { ReactNode } from "react";

export interface AddedQuestionProps {
  questionType: string;
  question: string;
  toBeEdited: ReactNode;
  duration: string;
  onClickEdit: () => void;
}
