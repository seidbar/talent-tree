import { FC, useState } from "react";
import styled from "styled-components";
import Xarrow from "react-xarrows";

const AddNodeStyles = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  border: solid black 1px;
  user-select: none;
  transition: background 1s;
`;

const AddNode: FC = () => {
  return (
    <>
      <AddNodeStyles>
        <p>+</p>
      </AddNodeStyles>
    </>
  );
};

export default AddNode;
