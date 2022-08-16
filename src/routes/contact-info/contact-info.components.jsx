import "./contact-info.styles.scss"

const ContactInfo = ({contact}) =>{

    const {name,email,phone,id} = contact;
    return(
    <div className="contact-info-container">
       <img alt={`${name}'s profile pic`} className="contact-info-img" src={`https://randomuser.me/api/portraits/lego/${id}.jpg`} height="200px" width="200px"/>
        <div className="contact-info-text">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
        </div>
        
    </div>);
}

export default ContactInfo;