import { FC, ReactNode } from "react";
import styled from "styled-components";
import AddNode from "./AddNodeButton";
import { useXarrow } from "react-xarrows";

const RowStyles = styled.div<RowStyleProps>`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: ${(props) =>
    props.editMode ? "space-between" : "space-around"};
  gap: 10px;
`;

const TalentRow: FC<TalentRowProps> = ({ children, editMode, id, addNode }) => {
  // While this is not directly called, this will trigger a re-render on every TalentRow rerender.
  // This could also be achieved with a useEffect hook further up the tree, but would be less snappy
  const updateXarrow = useXarrow();
  return (
    <RowStyles editMode={editMode}>
      {children}
      {editMode && <AddNode onClick={() => addNode(id)} />}
    </RowStyles>
  );
};

export default TalentRow;

type TalentRowProps = {
  editMode?: boolean;
  children: ReactNode | ReactNode[];
  id: number;
  addNode: (id: number) => void;
};

type RowStyleProps = {
  editMode?: boolean;
};
