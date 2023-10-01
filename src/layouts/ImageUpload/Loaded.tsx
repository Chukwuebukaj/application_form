import Button from "../../components/Button";
import { AiOutlineClose } from "react-icons/ai";
import {
  LoadedWapper,
  LoadedImage,
  LoadedLabel,
  StyledInput,
  DeleteBtnWrapper,
} from "./ImageUpload.styled";
import { LoadedProps } from "./ImageUploadData";

const Loaded: React.FC<LoadedProps> = ({
  bgImg,
  handleImageChange,
  handleDeleteImage,
}) => {
  return (
    <LoadedWapper>
      <LoadedImage $bgImg={bgImg}></LoadedImage>
      <DeleteBtnWrapper>
        <Button type="button" onClick={handleDeleteImage}>
          <LoadedLabel>
            <AiOutlineClose /> <span>Delete & re-upload</span>
          </LoadedLabel>
        </Button>
        <StyledInput
          id="upload"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
      </DeleteBtnWrapper>
    </LoadedWapper>
  );
};

export default Loaded;
