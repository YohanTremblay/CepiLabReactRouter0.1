import { useEffect, useState } from "react";
import BlogCard from "./BlogCard"

function BlogList(props){
    let [blog, setBlog] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/Publication')
        .then(reponse => reponse.json())
        .then(json =>{
           
            setBlog(json);
    });
        },[])

    return blog.map((element, index) =>
    {
        return <BlogCard key={index} id={element.id} content={element.content} title={element.title}></BlogCard>
    });

}
export default BlogList;