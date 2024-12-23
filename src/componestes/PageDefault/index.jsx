import React from "react";
import Menu from "../menu";
import Footer from "../Footer";

import "./index.css";


function PageDefault({ children }) {
  return (
    <React.Fragment>
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>

  )
}

export default PageDefault;