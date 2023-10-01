export interface LoadedProps {
  bgImg: string | null;
  handleDeleteImage: () => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
