import "./contacts.styles.scss";
import { useState, useEffect } from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalCustom from "../../components/modal/modal.components";
import BasicSelect from "../../components/card-list/card-container/select/select.component";


const Contacts = ({contacts,setContacts,sortBy,setSortBy}) =>{

  const [searchField,setSearchField] = useState('');
  const [filteredContacts,setFilteredContacts] = useState([]);
  const [open,setOpen] = useState(false);
  const [open2,setOpen2] = useState(false);
  const [targetName,setTargetName] = useState('');
  const [targetEmail,setTargetEmail] = useState('');
  const [targetPhone,setTargetPhone] = useState('');
  
  
  const handleClose = () =>{
    setOpen(false);
  }

  const handleOpen = () =>{
    setOpen(true);
  }


  const handleClose2 = () =>{
    setOpen2(false);
  }

  const handleOpen2 = () =>{
    setOpen2(true);
  }

  const addContacts = ({name,email,phone}) =>{
    setContacts([...contacts,{id:contacts[contacts.length-1].id+1,name,email,phone}]);
  }

  const deleteContacts = (name) =>{
    setContacts(contacts.filter(contact => contact.name!==name));
  }

  const updateContacts = (nameOriginal,{name,phone,email}) =>{
    setContacts(contacts.map((contact)=> contact.name===nameOriginal?{id:contact.id,name,email,phone}:contact))

  }

  const handleSubmit = (event) =>{
    handleClose();

    const textboxes = event.target.parentElement.parentElement.getElementsByClassName('input-box');

    if(textboxes[0].value==="")
    return;
    const obj ={
        name:`${textboxes[0].value}`,
        phone:`${textboxes[1].value}`,
        email:`${textboxes[2].value}`,
    }

    addContacts(obj);
  }

  const handleSubmit2 = (event) =>{
    handleClose2();
    
    const textboxes = event.target.parentElement.parentElement.getElementsByClassName('input-box');
    const originalName = `${textboxes[0].placeholder}`;

    const obj ={
        name:`${textboxes[0].value===""?textboxes[0].placeholder:textboxes[0].value}`,
        phone:`${textboxes[1].value===""?textboxes[1].placeholder:textboxes[1].value}`,
        email:`${textboxes[2].value===""?textboxes[2].placeholder:textboxes[2].value}`,
    }

    console.log("Data updated");
    updateContacts(originalName,obj);
  } 

  const handleDelete = (event)=>{
    const targetName = event.target.parentElement.parentElement.parentElement.getElementsByClassName("container-title")[0].innerText;
    deleteContacts(targetName);
  }

  const handleModify = (event)=>{
    console.log("Modify button presses");
    setTargetName(event.target.parentElement.parentElement.parentElement.getElementsByClassName("container-title")[0].innerText);
    setTargetEmail(event.target.parentElement.parentElement.parentElement.getElementsByClassName("container-email")[0].innerText);
    setTargetPhone(event.target.parentElement.parentElement.parentElement.getElementsByClassName("container-phone")[0].innerText);
    
    handleOpen2();
  }
 

  useEffect(()=>{
      const newFilteredContacts = contacts.filter((element) => {
          return element.name.toLocaleLowerCase().includes(searchField);
        });

      setFilteredContacts(newFilteredContacts);
  },[searchField,contacts]);



  const onSearchChange = (event) => {
        const searchStringFilter = event.target.value.toLocaleLowerCase();
        setSearchField(searchStringFilter);
      };

  return (
          <div className="contacts-container">
            <h1 className="contacts-title">My Contacts</h1>
            <div className="contacts-toolbar">
            <BasicSelect className="select-box" sortBy={sortBy} setSortBy={setSortBy} contacts={contacts} setContacts={setContacts}/>
             <SearchBox
              className="search-box"
              placeholder="Search name"
              onChangeHandler={onSearchChange}
            />
            <AddCircleIcon className="add-icon" onClick={handleOpen} />
            </div>
            
            <ModalCustom open={open} handleClose={handleClose} handleSubmit={handleSubmit} name={"Name"} contact={"Contact"} email={"Email"}/>
            <ModalCustom open={open2} handleClose={handleClose2} handleSubmit={handleSubmit2} name={targetName} contact={targetPhone} email={targetEmail}/>
            <br/>
            <CardList contacts={filteredContacts} handleDelete={handleDelete} handleModify={handleModify}/>
          </div>
        );
}

export default Contacts;
