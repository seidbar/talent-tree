import { FC, useState } from "react";
import { TreeStyles, AddRowButton } from "./talent-tree-styles";
import { Talent } from "../Talent";
import TalentRow from "../TalentRow";
import { Xwrapper } from "react-xarrows";
import { mockedTree } from "../../mockData";
import { v4 as uuidv4 } from "uuid";
import EditButton from "../EditButton";
import styled from "styled-components";
import { RiAddFill } from "react-icons/ri";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #88a0a8;
`;

const Content = styled.section`
  display: flex;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

const EditMenu = styled.div<EditMenuProps>`
  background-color: white;
  width: ${(props) => (props.open ? "400px" : 0)};
  transition: 1s;
  right: 400px;
`;

const TalentTree: FC<TalentTreeProps> = ({ talents }) => {
  const [editMode, setEditMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <Layout>
      <Content>
        <Xwrapper>
          <TreeStyles>
            <EditButton onClick={() => toggleEditMode()} editMode={editMode} />
            {rows.map((row) => (
              <TalentRow
                editMode={editMode}
                key={row.id}
                row={row}
                addNode={addNode}
                openSidebar={() => setSidebarOpen(true)}
              />
            ))}
            {editMode && (
              <AddRowButton onClick={() => addRow()}>
                <RiAddFill />
              </AddRowButton>
            )}
          </TreeStyles>
        </Xwrapper>
      </Content>
      <EditMenu open={sidebarOpen}></EditMenu>
    </Layout>
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

type EditMenuProps = {
  open: boolean;
};
