import styled from "styled-components";

export const TreeStyles = styled.div<TreeStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
  min-height: 80vh;
  padding: 40px 20px;
  margin: 20px 0;
  box-shadow: 0px 10px 66px -5px rgba(0, 0, 0, 0.1);
  background-color: #dbd3c9;
  border-radius: 8px;
`;

export const AddRowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 25px;
  transition: background 200ms;
  background-color: #546a76;
  &:hover {
    background-color: #88a0a8;
  }
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #88a0a8;
  overflow: hidden;
`;

export const Content = styled.section`
  display: flex;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const EditMenu = styled.div<EditMenuProps>`
  position: relative;
  background-color: #dbd3c9;
  box-shadow: 0px 10px 66px -5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.open ? "400px" : 0)};
  transition: 1s;
  right: ${(props) => (props.open ? 0 : "-400px")};
`;

type TreeStyleProps = {
  width?: number;
};

type EditMenuProps = {
  open: boolean;
};
