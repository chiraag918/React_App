import "./card-container.styles.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";

const CardContainer = ({contact,handleDelete,handleModify}) =>{

    const {name,email,id,phone} = contact;

    return(
        <div key={id} className="card-container">
             
             <Link key={contact.id} className="contact-link" to={`/contact-info/${contact.id}`}>
             <img alt={`contact ${id}`} src={`https://randomuser.me/api/portraits/lego/${id}.jpg`} height="200px" width="200px"/>
             </Link>
             <h2 className="container-title">{name}</h2>
             <p className="container-email">{email}</p>
             <p className="container-phone">{phone}</p>
             <div className="card-container-options">
             
             <DeleteIcon className="card-delete" onClick={handleDelete}/>
             <SettingsIcon className="card-modify" onClick={handleModify}/>
             
             </div>
        </div>
    );

}

export default CardContainer;