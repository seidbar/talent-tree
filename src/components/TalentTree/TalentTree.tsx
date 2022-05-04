import { FC, useState } from "react";
import { TreeStyles, AddRowButton } from "./talent-tree-styles";
import TalentNode, { Talent } from "../Talent";
import TalentRow from "../TalentRow";
import { Xwrapper } from "react-xarrows";
import { mockedTree } from "../../mockData";
import PlusSign from "../PlusSign";
import { v4 as uuidv4 } from "uuid";
import EditButton from "../EditButton";

const TalentTree: FC<TalentTreeProps> = ({ talents }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const [rows, setRows] = useState<TreeRow[]>(mockedTree);

  const addRow = () => {
    const newId =
      rows.reduce(
        (highest, row) => (highest = highest > row.id ? highest : row.id),
        0
      ) + 1;
    const row = { id: newId, nodes: [] };
    setRows([...rows, row]);
  };

  const addNode = (rowId: number) => {
    const newRows = rows.map((row) =>
      row.id === rowId
        ? {
            id: row.id,
            nodes: [
              ...row.nodes,
              {
                id: uuidv4(),
                completed: false,
                name: "New Talent",
                parent: undefined,
              },
            ],
          }
        : row
    );
    setRows(newRows);
  };

  return (
    <>
      <Xwrapper>
        <TreeStyles>
          <EditButton onClick={() => toggleEditMode()} editMode={editMode} />
          {rows.map((row) => (
            <TalentRow
              editMode={editMode}
              key={row.id}
              id={row.id}
              addNode={addNode}
            >
              {row.nodes.map((node) => (
                <TalentNode
                  name={node.name}
                  complete={node.completed}
                  id={node.id}
                  editMode={editMode}
                  parent={node.parent}
                  key={node.id}
                />
              ))}
            </TalentRow>
          ))}
          {editMode && (
            <AddRowButton onClick={() => addRow()}>
              <PlusSign color="white" />
            </AddRowButton>
          )}
        </TreeStyles>
      </Xwrapper>
    </>
  );
};

export default TalentTree;

type TalentTreeProps = {
  talents: Talent[];
};

export type TreeRow = {
  id: number;
  nodes: TreeNode[];
};

type TreeNode = {
  id: string;
  completed: boolean;
  name: string;
  parent?: string;
};
