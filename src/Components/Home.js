import React from "react";
import Contact from "./Contact";

import Reg from "./Reg";

const Home = ({ formSub, dispcntct, favtoggle, dltcntct }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <h2 className="text-center mt-3">ADD CONTACT</h2>

            <Reg formSub={formSub} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <h3>All Contacts</h3>

          {dispcntct.map((singlecntct) => {
            return (
              <Contact
                key={singlecntct.id}
                allcntct={singlecntct}
                favtoggle={favtoggle}
                dltcntct={dltcntct}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
