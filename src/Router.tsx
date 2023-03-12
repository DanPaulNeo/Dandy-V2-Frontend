import React from "react";
import InitializeRoutes from "./Helpers/Routes/InitializeRoutes";
import Layout from "./Components/Layouts";
import { Provider } from "react-redux";
import store from "./State/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <InitializeRoutes />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
