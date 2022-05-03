import { FC, useState } from "react";
import styled from "styled-components";
import TalentNode, { Talent } from "./Talent";
import TalentRow from "./TalentRow";
import { Xwrapper } from "react-xarrows";

const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
`;

const TreeStyles = styled.div<TreeStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? `${props.width}px` : "400px")};
  height: 90vh;
  padding: 10px;
  background-color: #f5eedc;
  box-shadow: 5px 1px 17px 0px rgba(0, 0, 0, 0.41);
`;

const TalentTree: FC<TalentTreeProps> = ({ talents }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode((prevState) => !prevState);

  return (
    <>
      <EditButton type="button" onClick={() => toggleEditMode()}>
        {editMode ? "Save changes" : "Edit"}
      </EditButton>
      <Xwrapper>
        <TreeStyles>
          <TalentRow editMode={editMode}>
            <TalentNode
              name="Talent 1"
              complete
              id="test"
              editMode={editMode}
            />
          </TalentRow>
          <TalentRow editMode={editMode}>
            <TalentNode
              name="Talent 2"
              id="test2"
              parent="test"
              editMode={editMode}
            />
          </TalentRow>
          <TalentRow editMode={editMode}>
            <TalentNode
              name="Talent 3"
              id="test3"
              parent="test2"
              editMode={editMode}
            />
            <TalentNode
              name="Talent 4"
              id="test4"
              parent="test2"
              editMode={editMode}
            />
          </TalentRow>
          <TalentRow editMode={editMode}>
            <TalentNode
              name="Talent 5"
              id="test5"
              parent="test3"
              editMode={editMode}
            />
            <TalentNode
              name="Talent 6"
              id="test6"
              parent="test4"
              editMode={editMode}
            />
          </TalentRow>
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
