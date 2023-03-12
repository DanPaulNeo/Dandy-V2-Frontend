import React from "react";
import InitializeRoutes from "./Helpers/Routes/InitializeRoutes";
import Layout from "./Components/Layouts";

function App() {
  return (
    <>
      <Layout>
        <InitializeRoutes />
      </Layout>
    </>
  );
}

export default App;
