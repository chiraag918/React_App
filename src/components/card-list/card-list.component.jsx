import CardContainer from "./card-container/card-container.component";
import "./card-list.styles.scss";


const CardList = (props) => {

    const {contacts,handleDelete,handleModify} = props;
    console.log("Card List Rendered");

    return(
        <div className="card-list">
                {contacts.map((contact)=>{

                return(  
                <CardContainer key={contact.id} contact={contact} handleDelete={handleDelete} handleModify={handleModify}/>
                )})}
            </div>
    );
}



export default CardList;