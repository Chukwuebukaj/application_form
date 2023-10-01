import styled from "styled-components"
import Button from "../Button"
import { AiOutlineClose } from "react-icons/ai"

const DeleteQuestionBtn = () => {
  return (
    <DeleteBtnWrapper>
        <AiOutlineClose/>
    </DeleteBtnWrapper>
  )
}

export default DeleteQuestionBtn

const DeleteBtnWrapper = styled(Button)`

`