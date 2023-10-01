import { FiUpload } from "react-icons/fi";
import {
  ImageUploadWrapper,
  ImageUploadTop,
  ImageUploadBody,
  ImageLabel,
  StyledInput,
} from "./ImageUpload.styled";
import { useState, useRef } from "react";
import Loaded from "./Loaded";

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const imageUrl: string | null = image && URL.createObjectURL(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        return;
      }

      if (file.size > 1024 * 1024) {
        alert("Image size exceeds 1MB limit.");
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        return;
      }
      setImage(file);
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  return (
    <>
      {image && (
        <Loaded
          bgImg={imageUrl}
          handleImageChange={handleImageChange}
          handleDeleteImage={handleDeleteImage}
        />
      )}
      {!image && (
        <ImageUploadWrapper>
          <ImageUploadTop>
            <span>Upload cover image</span>
          </ImageUploadTop>
          <ImageUploadBody>
            <ImageLabel htmlFor="upload">
              <FiUpload />
              <p className="p1">Upload cover image</p>
              <p className="p2">
                16:9 ratio is recommended. Max image size 1mb
              </p>
              <StyledInput
                id="upload"
                type="file"
                onChange={handleImageChange}
                inputRef={inputRef}
                value={image || ""}
                accept="image/*"
              />
            </ImageLabel>
          </ImageUploadBody>
        </ImageUploadWrapper>
      )}
    </>
  );
};

export default ImageUpload;
