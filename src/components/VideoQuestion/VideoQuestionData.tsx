export const selectOptions: string[] = ["Minute", "Seconds"];

export interface VideoQuestionProps {
  additionalInfo: string;
  maxDuration: number | null;
  siUnit: string;
  onChangeVideoValues: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}
