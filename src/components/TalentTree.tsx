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
  padding: 10px;
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
      <TalentNode name="Talent 2" id="test2" parent="test" />
      <RowStyles>
        <TalentNode name="Talent 3" id="test3" parent="test2" />
        <TalentNode name="Talent 4" id="test4" parent="test2" />
      </RowStyles>
      <RowStyles>
        <TalentNode name="Talent 5" id="test5" parent="test3" />
        <TalentNode name="Talent 6" id="test6" parent="test4" />
      </RowStyles>
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
