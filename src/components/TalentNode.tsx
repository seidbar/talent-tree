import { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import Xarrow from "react-xarrows";
import { EditNodeFunction } from "./TalentTree/TalentTree";

const TalentStyles = styled.div<TalentStylesProps>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "inherit" : "pointer")};
  width: 80px;
  height: 80px;
  border-radius: 3px;
  border: solid #546a76 1px;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => (props.completed ? "white" : "black")};
  user-select: none;
  transition: background 1s, color 1s;
  z-index: 2;
`;

const TalentNode: FC<TalentNodeProps> = ({
  talent,
  editMode,
  editNode,
  toggleCompletion,
  disabled,
  rowIndex,
  selectRef,
  addLink,
}) => {
  const { completed, id, parent, title } = talent;

  const backgroundColor: any = {
    "00": "white",
    "01": "gray",
    "10": "#546176",
    "11": "olive",
  };

  const index = `${completed ? "1" : "0"}${disabled ? "1" : "0"}`;

  const handleClick = () => {
    if (!disabled) {
      if (!editMode) toggleCompletion(rowIndex, id);
      else if (!!selectRef) addLink(id);
      else editNode(rowIndex, id);
    }
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
        onClick={(e) => handleClick()}
        completed={completed ?? false}
        id={id}
        disabled={disabled}
        backgroundColor={backgroundColor[index]}
      >
        <p>{title}</p>
      </TalentStyles>
    </>
  );
};

export default TalentNode;

type TalentStylesProps = {
  completed: boolean;
  disabled?: boolean;
  backgroundColor: CSSProperties["color"];
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
  toggleCompletion: EditNodeFunction;
  disabled: boolean;
  rowIndex: number;
  selectRef?: number;
  addLink: (parentId: string) => void;
};
