import { Fragment } from "react";
import "./about.styles.scss"

const About = () =>{

    return(
    <Fragment>
    <div className="contact-info-container">
       <img alt={`Chiraag's profile pic`} className="contact-info-img" src={`https://randomuser.me/api/portraits/lego/${1}.jpg`} height="200px" width="200px"/>
        <div className="contact-info-text">
        <h1>Chiraag</h1>
        <p>chiraag918@gmail.com</p>
        <p>9731006819</p>
        <p>Web Developer</p>
        </div>
    </div>
    <div className="contact-info-container">
    <div className="contact-info-text">
        <h1>Skills</h1>
        <table cellSpacing={20} className="contact-info-table">
            <tr>
                <td><h2>ReactJS</h2></td>
                <td><h2>Redux</h2></td>
            </tr>
            <tr>
                <td><h2>HTML</h2></td>
                <td><h2>CSS</h2></td>
            </tr>
        </table>
        </div>
        <hr/>
        <div className="contact-info-text">
        <h1>Qualifications</h1>
        <table cellSpacing={10} className="contact-info-table">
            <tr>
                <td><p>Degree</p></td>
                <td><p>Graduation</p></td>
            </tr>
            <tr>
                <td><p>B.Tech - EEE</p></td>
                <td><p>2022</p></td>
            </tr>
        </table>
        </div>
    </div>
    </Fragment>);
}

export default About;