import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navbar/navbar.components";
import Contacts from "./routes/contacts/contacts.components";
import { useState, useEffect, Fragment } from "react";
import ContactInfo from "./routes/contact-info/contact-info.components";
import ToDo from "./routes/todo/todo.component";
import About from "./routes/about/about.components";


const App = () => {

  const [contacts,setContacts] = useState([]);
  const [sortBy, setSortBy] = useState('ID');

  useEffect(()=>{
    console.log("Fetch API entered - SIDE EFFECTS");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {console.log(users);setContacts(users.slice(0,7))});
     
  },[]);

  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        {/* <Route index element={<Home/>}/> */}
        <Route index element={<About/>}/>
        <Route path="contacts" element={<Contacts contacts={contacts} setContacts={setContacts} sortBy={sortBy} setSortBy={setSortBy}/>}/>
        <Route path="todo" element={<ToDo/>}/>
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
