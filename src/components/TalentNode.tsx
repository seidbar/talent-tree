import { FC } from "react";
import styled from "styled-components";
import Xarrow from "react-xarrows";
import { EditNodeFunction } from "./TalentTree/TalentTree";

const TalentStyles = styled.div<TalentStylesProps>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  border: solid #546a76 1px;
  background: ${(props) => (props.completed ? "#546A76" : "none")};
  color: ${(props) => (props.completed ? "white" : "black")};
  user-select: none;
  transition: background 1s, color 1s;
`;

const TalentNode: FC<TalentNodeProps> = ({
  talent,
  editMode,
  editNode,
  rowId,
}) => {
  const { completed, id, parent, title } = talent;

  const handleClick = () => {
    editNode(rowId, id);
    /*  if (!editMode)
      setNode((prevState) => ({
        ...prevState,
        completed: !prevState.completed,
      }));
    else openSidebar(node, setNode); */
  };

  return (
    <>
      {parent && (
        <Xarrow
          start={parent}
          end={id}
          color="#546A76"
          startAnchor="bottom"
          endAnchor="top"
        />
      )}
      <TalentStyles
        onClick={() => handleClick()}
        completed={completed ?? false}
        id={id}
      >
        <p>{title}</p>
      </TalentStyles>
    </>
  );
};

export default TalentNode;

type TalentStylesProps = {
  completed: boolean;
};

export type Talent = {
  title: string;
  id: string;
  completed?: boolean;
  parent?: string;
};

export type TalentNodeProps = {
  talent: Talent;
  editMode?: boolean;
  editNode: EditNodeFunction;
  rowId: number;
};
