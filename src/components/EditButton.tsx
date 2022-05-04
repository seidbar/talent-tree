import { FC } from "react";
import { RiPencilFill, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";

const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  user-select: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 18px;
  background-color: #546a76;
  &:hover {
    background-color: #88a0a8;
  }
  transition: background 200ms;
`;

const EditButton: FC<EditButtonProps> = ({ onClick, open }) => {
  return (
    <ButtonStyles onClick={onClick} type="button" aria-label="Edit Tree">
      {open ? <RiCloseLine /> : <RiPencilFill />}
    </ButtonStyles>
  );
};

export default EditButton;

type EditButtonProps = {
  onClick: () => void;
  open: boolean;
};
