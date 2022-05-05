import { FC } from "react";
import styled from "styled-components";
import { RiAddFill } from "react-icons/ri";

const AddNodeStyles = styled.button<AddNodeStyleProps>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  user-select: none;
  color: white;
  font-size: 20px;
  transition: background 200ms;
  background-color: ${(props) => (props.disabled ? "gray" : "#546a76")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "#88a0a8")};
  }
  &:only-child {
    margin-left: auto;
  }
`;

const AddNodeButton: FC<AddNodeProps> = ({ onClick, disabled }) => {
  return (
    <>
      <AddNodeStyles onClick={onClick} disabled={disabled}>
        <RiAddFill />
      </AddNodeStyles>
    </>
  );
};

export default AddNodeButton;

type AddNodeProps = {
  onClick: () => void;
  disabled?: boolean;
};

type AddNodeStyleProps = {
  disabled?: boolean;
};
