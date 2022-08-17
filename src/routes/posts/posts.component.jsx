import { Fragment } from "react";
import "./posts.styles.scss"
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Posts = () =>{

    const data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const [state,setState] = useState([]);


    useEffect(()=>{
        setState([data]);

    },[]);

    const fetchMoreData = () =>{
        setTimeout(() => {
        setState(state.concat(data));

    }, 1000);

    }

    return(
        <InfiniteScroll
        dataLength={state.length}
        next={fetchMoreData}
        className="card-list"
        hasMore={true}
        loader={<div style={{display:"flex",justifyContent:"center"}}><CircularProgress /></div>}
      >

{state.map((text)=>{

return(  
    <div className="contact-info-container">
        <div className="contact-info-text">
        <h1>{text}</h1>
        </div>
    </div>
 )})}
   
   
    </InfiniteScroll>);
}

export default Posts;

// import CardContainer from "./card-container/card-container.component";
// import "./card-list.styles.scss";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useEffect, useState } from "react";
// import CircularProgress from '@mui/material/CircularProgress';

// const CardList = (props) => {

//     const {contacts,handleDelete,handleModify} = props;

//     // console.log(contacts.slice(0,4));

//     const [state,setState] = useState([]);
//     const [pageNo, setPageNo] = useState(1);
//     const [total, setTotal] =useState();

//     useEffect(()=>{
//         setState(contacts.slice(0,3));
//         setPageNo(1);
//         setTotal(Math.ceil(contacts.length/3))
//     },[contacts]);


//     const checkForData = () =>{
//         return (pageNo<total)?true:false;
//     }

//     const fetchMoreData = () =>{
//         setTimeout(() => {
//         setState(state.concat(contacts.slice(3*pageNo,3*(pageNo+1))));
//         setPageNo(pageNo+1);
//         console.log(state);
//         console.log(pageNo);
//     }, 1000);

//     }

    

//     // console.log("Card List Rendered");

//     return(
//         // <div className="card-list">
//          <InfiniteScroll
//           dataLength={state.length}
//           next={fetchMoreData}
//           className="card-list"
//           hasMore={checkForData}
//           loader={checkForData()?<div style={{display:"flex",justifyContent:"center"}}><CircularProgress /></div>:<></>}
//         >
//                 {state.map((contact)=>{

//                 return(  
//                 <CardContainer key={contact.id} contact={contact} handleDelete={handleDelete} handleModify={handleModify}/>
//                  )})}
//                 </InfiniteScroll>
//             // </div>
//     );