import styled from "styled-components";

export const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  user-select: none;
`;

export const TreeStyles = styled.div<TreeStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? `${props.width}px` : "400px")};
  height: 90vh;
  padding: 20px;
  box-shadow: 0px 10px 66px -5px rgba(0, 0, 0, 0.1);
  background-color: #dbd3c9;
  border-radius: 8px;
`;

export const AddRowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #546a76 1px;
  width: 100%;
  height: 80px;
  cursor: pointer;
  transition: background 200ms;
  background-color: #546a76;
  &:hover {
    background-color: #88a0a8;
  }
`;

type TreeStyleProps = {
  width?: number;
};
