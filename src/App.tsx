import styled from "styled-components";
import TalentTree from "./components/TalentTree";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #88a0a8;
`;

function App() {
  return (
    <Layout>
      <TalentTree talents={[]} />
    </Layout>
  );
}

export default App;
