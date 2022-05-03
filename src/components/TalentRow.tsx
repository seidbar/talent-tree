import { FC, ReactNode, useState } from "react";
import { useXarrow } from "react-xarrows";
import styled from "styled-components";
import AddNode from "./AddNode";

const RowStyles = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

const TalentRow: FC<TalentRowProps> = ({ children, editMode }) => {
  const [addButtonVisibility, setAddButtonVisibility] =
    useState<boolean>(false);

  const updateXarrow = useXarrow();

  const changeVisbility = (state: boolean) => {
    if (editMode) {
      setTimeout(() => {
        setAddButtonVisibility(state);
        updateXarrow();
      }, 200);
    }
  };

  return (
    <RowStyles
      onMouseOver={() => changeVisbility(true)}
      onMouseLeave={() => changeVisbility(false)}
    >
      {children}
      {addButtonVisibility && <AddNode />}
    </RowStyles>
  );
};

export default TalentRow;

type TalentRowProps = {
  editMode?: boolean;
  children: ReactNode | ReactNode[];
};
