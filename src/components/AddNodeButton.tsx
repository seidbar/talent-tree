import { FC } from "react";
import styled from "styled-components";
import { RiAddFill } from "react-icons/ri";

const AddNodeStyles = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  user-select: none;
  color: white;
  font-size: 20px;
  transition: background 200ms;
  background-color: #546a76;
  &:hover {
    background-color: #88a0a8;
  }
  &:only-child {
    margin-left: auto;
  }
`;

const AddNodeButton: FC<AddNodeProps> = ({ onClick }) => {
  return (
    <>
      <AddNodeStyles onClick={onClick}>
        <RiAddFill />
      </AddNodeStyles>
    </>
  );
};

export default AddNodeButton;

type AddNodeProps = {
  onClick: () => void;
};
