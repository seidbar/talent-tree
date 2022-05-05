import { FC } from "react";
import styled from "styled-components";
import AddNode from "./AddNodeButton";
import { useXarrow } from "react-xarrows";
import { EditNodeFunction, TreeRow } from "./TalentTree/TalentTree";
import TalentNode from "./TalentNode";

const RowStyles = styled.div<RowStyleProps>`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: ${(props) =>
    props.editMode ? "space-between" : "space-around"};
  gap: 10px;
  margin: 20px 0;
`;

const TalentRow: FC<TalentRowProps> = ({
  editMode,
  row,
  addNode,
  editNode,
  toggleCompletion,
  selectRef,
  index,
}) => {
  // While this is not directly called, this will trigger a re-render on every TalentRow rerender.
  // This could also be achieved with a useEffect hook further up the tree, but would be less snappy
  const updateXarrow = useXarrow();
  return (
    <RowStyles editMode={editMode}>
      {row.nodes.map((node) => (
        <TalentNode
          editMode={editMode}
          key={node.id}
          talent={node}
          editNode={editNode}
          toggleCompletion={toggleCompletion}
          disabled={!!selectRef && selectRef !== index}
          rowIndex={index}
        />
      ))}
      {editMode && (
        <AddNode
          onClick={() => {
            addNode(index);
          }}
        />
      )}
    </RowStyles>
  );
};

export default TalentRow;

type TalentRowProps = {
  editMode?: boolean;
  row: TreeRow;
  addNode: (id: number) => void;
  editNode: EditNodeFunction;
  toggleCompletion: EditNodeFunction;
  selectRef?: number;
  index: number;
};

type RowStyleProps = {
  editMode?: boolean;
};
