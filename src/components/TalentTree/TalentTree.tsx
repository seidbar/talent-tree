import { ChangeEvent, FC, useState } from "react";
import {
  TreeStyles,
  AddRowButton,
  EditMenu,
  Content,
  Layout,
} from "./talent-tree-styles";
import { Talent } from "../TalentNode";
import TalentRow from "../TalentRow";
import { Xwrapper } from "react-xarrows";
import { mockedTree } from "../../mockData";
import { v4 as uuidv4 } from "uuid";
import EditButton from "../EditButton";
import { RiAddFill } from "react-icons/ri";
import FormField from "../FormField";

const TalentTree: FC<TalentTreeProps> = ({ talents }) => {
  const [editMode, setEditMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editRef, setEditRef] = useState<EditRefProps>();
  const [rows, setRows] = useState<TreeRow[]>(mockedTree);

  const toggleEditMode = () => {
    if (editMode) setSidebarOpen(false);
    setEditMode((prevState) => !prevState);
  };

  const selectedNode = rows
    .find((row) => row.id === editRef?.rowId)
    ?.nodes.find((node) => node.id === editRef?.nodeId);

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
    const nodeId = uuidv4();
    const newRows = rows.map((row) =>
      row.id === rowId
        ? {
            id: row.id,
            nodes: [
              ...row.nodes,
              {
                id: nodeId,
                completed: false,
                title: "New Talent",
                parent: undefined,
              },
            ],
          }
        : row
    );
    setRows(newRows);
    editNode(rowId, nodeId);
  };

  const editNode: EditNodeFunction = (rowId, nodeId) => {
    setSidebarOpen(true);
    setEditRef({ rowId, nodeId });
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const newRows = [...rows];
    newRows.map((row) =>
      row.id === editRef?.rowId
        ? row.nodes.map((node) => {
            if (node.id === editRef.nodeId) node.title = e.target.value;
          })
        : { ...row }
    );
    setRows(newRows);
  };

  return (
    <Layout>
      <Content>
        <Xwrapper>
          <TreeStyles>
            <EditButton onClick={() => toggleEditMode()} open={editMode} />
            {rows.map((row) => (
              <TalentRow
                editMode={editMode}
                key={row.id}
                row={row}
                addNode={addNode}
                editNode={editNode}
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
      <EditMenu open={sidebarOpen}>
        <h1>Edit Node</h1>
        <EditButton onClick={() => setSidebarOpen(false)} open={sidebarOpen} />
        {editRef && (
          <>
            <>
              <FormField
                id="title"
                label="Title"
                value={selectedNode?.title}
                onChange={(e) => handleEdit(e)}
              />
            </>
            <button>Add Link</button>
          </>
        )}
      </EditMenu>
    </Layout>
  );
};

export default TalentTree;

type TalentTreeProps = {
  talents: Talent[];
};

export type TreeRow = {
  id: number;
  nodes: Talent[];
};

export type EditNodeFunction = (row: number, id: string) => void;

type EditRefProps = {
  rowId: number;
  nodeId: string;
};
