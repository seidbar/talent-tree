import { FC, useState } from "react";
import styled from "styled-components";

const TalentStyles = styled.div<TalentStylesProps>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  border: solid black 1px;
  background: ${(props) => (props.completed ? "green" : "none")};
  user-select: none;
`;

const TalentNode: FC<Talent> = ({ name, complete, id }) => {
  const [completed, setCompleted] = useState<boolean>(complete ?? false);

  const toggleCompletion = () => {
    setCompleted((prevState) => !prevState);
  };

  return (
    <TalentStyles
      onClick={() => toggleCompletion()}
      completed={completed}
      id={id}
    >
      <p>{name}</p>
    </TalentStyles>
  );
};

export default TalentNode;

type TalentStylesProps = {
  completed: boolean;
};

export type Talent = {
  name: string;
  complete?: boolean;
  id: string;
};
