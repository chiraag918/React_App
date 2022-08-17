import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navbar/navbar.components";
// import Contacts from "./routes/contacts/contacts.components";
import { useState, useEffect, Fragment } from "react";
import ContactInfo from "./routes/contact-info/contact-info.components";
import ToDo from "./routes/todo/todo.component";
import About from "./routes/about/about.components";
import CircularProgress from '@mui/material/CircularProgress';
import Posts from "./routes/posts/posts.component";

const LazyContacts  = React.lazy(()=>import("./routes/contacts/contacts.components"))

const App = () => {

  const [contacts,setContacts] = useState([]);
  const [sortBy, setSortBy] = useState('ID');

  useEffect(()=>{
    console.log("Fetch API entered - SIDE EFFECTS");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {console.log(users);setContacts(users.slice(0,6))});
     
  },[]);

  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        {/* <Route index element={<Home/>}/> */}
        <Route index element={<About/>}/>
        <Route path="contacts" element={<React.Suspense fallback={<div style={{display:"flex",justifyContent:"center"}}><CircularProgress /></div>}><LazyContacts contacts={contacts} setContacts={setContacts} sortBy={sortBy} setSortBy={setSortBy}/></React.Suspense>}/>
        <Route path="todo" element={<ToDo/>}/>
        <Route path="posts" element={<Posts/>}/>
        {contacts.map(contact=>{
          return(
            <Route key={contact.id} path={`contact-info/${contact.id}`} element={<ContactInfo contact={contact}/>}/>
          );
        })}
      </Route>
    </Routes>
  </Fragment>
  );
};

export default App;
