import styled from "styled-components";
import TalentTree from "./components/TalentTree";

function App() {
  const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `;

  return (
    <Layout>
      <TalentTree talents={[]} />
    </Layout>
  );
}

export default App;
