import CardContainer from "./card-container/card-container.component";
import "./card-list.styles.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const CardList = (props) => {

    const {contacts,handleDelete,handleModify} = props;

    // console.log(contacts.slice(0,4));

    const [state,setState] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [total, setTotal] =useState();

    useEffect(()=>{
        setState(contacts.slice(0,3));
        setPageNo(1);
        setTotal(Math.ceil(contacts.length/3))
    },[contacts]);


    const checkForData = () =>{
        return (pageNo<total)?true:false;
    }

    const fetchMoreData = () =>{
        setTimeout(() => {
        setState(state.concat(contacts.slice(3*pageNo,3*(pageNo+1))));
        setPageNo(pageNo+1);
        console.log(state);
        console.log(pageNo);
    }, 1000);

    }

    

    // console.log("Card List Rendered");

    return(
        // <div className="card-list">
         <InfiniteScroll
          dataLength={state.length}
          next={fetchMoreData}
          className="card-list"
          hasMore={checkForData}
          loader={checkForData()?<div style={{display:"flex",justifyContent:"center"}}><CircularProgress /></div>:<></>}
        >
                {state.map((contact)=>{

                return(  
                <CardContainer key={contact.id} contact={contact} handleDelete={handleDelete} handleModify={handleModify}/>
                 )})}
                </InfiniteScroll>
            // </div>
    );
}



export default CardList;