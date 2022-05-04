import { FC, useState } from "react";
import styled from "styled-components";
import Xarrow from "react-xarrows";

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

const TalentNode: FC<Talent> = ({
  name,
  complete,
  id,
  parent,
  editMode,
  openSidebar,
}) => {
  const [completed, setCompleted] = useState<boolean>(complete ?? false);

  const toggleCompletion = () => {
    if (!editMode) setCompleted((prevState) => !prevState);
    else openSidebar();
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
        onClick={() => toggleCompletion()}
        completed={completed}
        id={id}
      >
        <p>{name}</p>
      </TalentStyles>
    </>
  );
};

export default TalentNode;

type TalentStylesProps = {
  completed: boolean;
};

export type Talent = {
  name: string;
  id: string;
  complete?: boolean;
  parent?: string;
  editMode?: boolean;
  openSidebar: () => void;
};
