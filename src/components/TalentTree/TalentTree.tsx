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
  const [selectRef, setSelectRef] = useState<number>();

  const toggleEditMode = () => {
    if (editMode) setSidebarOpen(false);
    setEditMode((prevState) => !prevState);
    setSelectRef(undefined);
  };

  const selectedNode = editRef
    ? rows[editRef?.rowIndex].nodes.find((node) => node.id === editRef?.nodeId)
    : undefined;

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

  const editNode: EditNodeFunction = (rowIndex, nodeId) => {
    setSidebarOpen(true);
    setEditRef({ rowIndex, nodeId });
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    if (editRef) {
      const newRows = [...rows];
      newRows[editRef?.rowIndex].nodes.map((node) => {
        if (node.id === editRef.nodeId) node.title = e.target.value;
      });
      setRows(newRows);
    }
  };

  const changeAddLinkMode = () => {
    if (!selectRef && editRef) {
      setSelectRef(editRef?.rowIndex);
    } else setSelectRef(undefined);
  };

  const addLink = (parentId: string) => {
    if (editRef) {
      const newRows = [...rows];
      newRows[editRef?.rowIndex].nodes.map((node) => {
        if (node.id === editRef?.nodeId) node.parent = parentId;
      });

      setRows(newRows);
    }
  };

  const toggleCompletion: EditNodeFunction = (rowIndex, nodeId) => {
    const newRows = [...rows];
    newRows[rowIndex].nodes.map((node) => {
      if (node.id === nodeId) node.completed = !node.completed;
    });
    setRows(newRows);
  };

  return (
    <Layout>
      <Content>
        <Xwrapper>
          <TreeStyles>
            <EditButton onClick={() => toggleEditMode()} open={editMode} />
            {rows.map((row, i) => (
              <TalentRow
                editMode={editMode}
                key={row.id}
                row={row}
                addNode={addNode}
                editNode={editNode}
                toggleCompletion={toggleCompletion}
                selectRef={selectRef}
                index={i}
                addLink={addLink}
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
        <EditButton
          onClick={() => {
            setSidebarOpen(false);
            setSelectRef(undefined);
          }}
          open={sidebarOpen}
        />
        {!!editRef && (
          <>
            <>
              <FormField
                id="title"
                label="Title"
                value={selectedNode?.title}
                onChange={(e) => handleEdit(e)}
              />
            </>
            {!!selectRef && (
              <h2>
                Click on a node to set as a parent for {selectedNode?.title}
              </h2>
            )}
            <button
              onClick={() => changeAddLinkMode()}
              disabled={editRef.rowIndex === 0}
            >
              {!!selectRef ? "Cancel" : "Add a parent"}
            </button>
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
  rowIndex: number;
  nodeId: string;
};
