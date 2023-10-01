export const QuestionTypes: string[] = [
  "Paragraph",
  "Short answer",
  "Yes/No",
  "Dropdown",
  "Multiple choice",
  "Date",
  "Number",
  "File upload",
  "Video question",
];

export interface QuestionsArrProps {
  name: string;
  value: string;
  type: string;
}

export interface QuestionDetails {
  type: string;
  questionValue: string;
  choiceArr: string[];
  checked: boolean;
  maxChoice: number | null;
  moreInfo: string;
  maxDuration: number | null;
  unit: string;
  [key: string]: any;
}

export interface QuestionProps {
  onClickDelete: (index: number) => void;
  onClickSave: (index: number) => void;
  selectQuestionType: (questionType: string, index: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  index: number;
  fieldValues: QuestionDetails;
  display: string;
  editing: boolean;
  checked: boolean;
  onChangeChoice: (
    index: number
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMaxValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeVideoValues: (
    index: number
  ) => (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onClickAddChoice: (index: number) => void;
  onClickCheckBox: (index: number) => void;
  maxValue: number | null;
  questionIndex: number;
}
