import { FC } from "react";
import styled from "styled-components";
import TalentNode, { Talent } from "./Talent";
import Xarrow from "react-xarrows";

const TreeStyles = styled.div<TreeStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: ${(props) => (props.width ? `${props.width}px` : "400px")};
  height: 90vh;
`;

const RowStyles = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

const TalentTree: FC<TalentTreeProps> = ({ talents }) => {
  return (
    <TreeStyles>
      <RowStyles>
        <TalentNode name="Talent 1" complete id="test" />
      </RowStyles>
      <TalentNode name="Talent 2" id="test2" />
      <RowStyles>
        <TalentNode name="Talent 3" id="test3" />
        <TalentNode name="Talent 4" id="test4" />
      </RowStyles>
      <RowStyles>
        <TalentNode name="Talent 5" id="test5" />
        <TalentNode name="Talent 6" id="test6" />
      </RowStyles>
      <Xarrow start="test" end="test2" />
      <Xarrow start="test2" end="test3" />
      <Xarrow start="test2" end="test4" />
      <Xarrow start="test3" end="test5" />
      <Xarrow start="test4" end="test6" />
    </TreeStyles>
  );
};

export default TalentTree;

type TalentTreeProps = {
  talents: Talent[];
};

type TreeStyleProps = {
  width?: number;
};
