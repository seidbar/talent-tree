import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import TalentNode, { Talent } from "./Talent";
import TalentRow from "./TalentRow";
import { Xwrapper } from "react-xarrows";
import { mockedTree } from "../mockData";
import PlusSign from "./PlusSign";

const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  user-select: none;
`;

const TreeStyles = styled.div<TreeStyleProps>`
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

const AddRowButton = styled.button`
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

const TalentTree: FC<TalentTreeProps> = ({ talents }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const [rows, setRows] = useState(mockedTree);

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
              { id: "1000", completed: false, name: "test", parent: undefined },
            ],
          }
        : row
    );

    console.log({ id });
  };

  return (
    <>
      <EditButton type="button" onClick={() => toggleEditMode()}>
        {editMode ? "Save changes" : "Edit"}
      </EditButton>
      <Xwrapper>
        <TreeStyles>
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

type TreeStyleProps = {
  width?: number;
};
