import styled from "styled-components";
import notePad from "../assets/image 298.png";

const NotePad = () => {
  return <NotePadIcon src={notePad} alt="notepad" />;
};

export default NotePad;

const NotePadIcon = styled.img`
  width: 1.375rem;
  height: 1.15738rem;
  flex-shrink: 0;
`;
