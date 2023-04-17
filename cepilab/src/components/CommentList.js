import { useEffect, useState } from "react";
import Comment from "./Comment"

function CommentList(props){
    let [comment, setComment] = useState();
    useEffect(()=>{
        fetch('http://localhost:3000/Commentaire?lier=' + props.idBlog)
        .then(reponse => reponse.json())
        .then(json =>{
            let tab = json.map((element, index) =>
                {
                   return <Comment key={index} content={element.content} Date={element.Date}></Comment>
                })
            
                setComment(tab);
        });
        },[])

    return comment;
}
export default CommentList;