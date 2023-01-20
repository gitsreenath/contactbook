import Favorites from "./Components/Favorites";
import Home from "./Components/Home";
import Navtop from "./Components/Navtop";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setcontact] = useState([]);

  useEffect(() => {
    const getcntct = async () => {
      const res = await dbdata();
      setcontact(res);
    };
    getcntct();
  }, []);

  // form submit
  const formSub = async (data) => {
    const res = await fetch("http://localhost:3004/contacts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const newdata = await res.json();
    setcontact([...contacts, newdata]);
  };

  const dbdata = async () => {
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();
    return data;
  };

  // get contact
  const getSinglecntct = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const newdata = await res.json();
    return newdata;
  };

  // for set favorites
  const favtoggle = async (id) => {
    const getdata = await getSinglecntct(id);
    const updatedata = { ...getdata, fav: !getdata.fav };

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedata),
    });
if(res.ok){
    let newcontacts = contacts.map((singleitem) => {
      return singleitem.id === id
        ? { ...singleitem, fav: !singleitem.fav }
        : singleitem;
    });
    setcontact(newcontacts);}
    
  };
  // for delete contacts
  const dltcntct = async (id) => {
    const dltfrmserver = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });

    if (dltfrmserver.status === 200) {
      const newcntlist = contacts.filter((singleitem) => {
        return singleitem.id !== id;
      });
      setcontact(newcntlist);
    }
  };

  return (
    <>
      <Navtop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              formSub={formSub}
              dispcntct={contacts}
              favtoggle={favtoggle}
              dltcntct={dltcntct}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />

        <Route
          path="/Favorites"
          element={
            <Favorites
              dispcntct={contacts}
              favtoggle={favtoggle}
              dltcntct={dltcntct}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
