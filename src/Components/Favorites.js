import React from "react";
import Contact from "./Contact";

const Favorites = ({ dispcntct, favtoggle, dltcntct }) => {
  // console.log(dispcntct);
  return (
    <>
      <div className="container">
        <div className="row">
          <h3>Favorites Contacts</h3>
          
          {dispcntct.map((singleitem) => {
            return (
              singleitem.fav && (
                <Contact
                  key={singleitem.id}
                  allcntct={singleitem}
                  favtoggle={favtoggle}
                  dltcntct={dltcntct}
                />
              )
            );
          })}
          {dispcntct.filter(item=>item.fav).length ===0 && <h3>No Favorites</h3> }
          
        </div>
      </div>
    </>
  );
};

export default Favorites;
