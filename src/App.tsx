import styled from "styled-components";
import TalentTree from "./components/TalentTree";

function App() {
  const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #88a0a8;
  `;

  return (
    <Layout>
      <TalentTree talents={[]} />
    </Layout>
  );
}

export default App;
