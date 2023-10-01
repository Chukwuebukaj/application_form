import { InputField, Select, TextArea } from "../FormFields";
import { VideoQuestionWrapper, BottomFields } from "./VideoQuestion.styled";
import { VideoQuestionProps, selectOptions } from "./VideoQuestionData";

const VideoQuestion: React.FC<VideoQuestionProps> = ({
  additionalInfo,
  maxDuration,
  siUnit,
  onChangeVideoValues,
}) => {
  return (
    <VideoQuestionWrapper>
      <TextArea
        placeholder="Additional information"
        onChange={onChangeVideoValues}
        name="moreInfo"
        value={additionalInfo}
      />
      <BottomFields>
        <InputField
          placeholder="Max duration of video"
          type="number"
          onChange={onChangeVideoValues}
          name="maxDuration"
          value={maxDuration || ""}
        />
        <Select
          defaultValue="in (sec/min)"
          options={selectOptions}
          onChange={onChangeVideoValues}
          name="unit"
          value={siUnit}
        />
      </BottomFields>
    </VideoQuestionWrapper>
  );
};

export default VideoQuestion;
