import styled from "styled-components";
import TalentTree from "./components/TalentTree";

function App() {
  const Layout = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <Layout>
      <TalentTree talents={[]} />
    </Layout>
  );
}

export default App;
