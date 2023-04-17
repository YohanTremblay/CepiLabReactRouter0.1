import { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import { useLoaderData, useParams } from "react-router-dom";

function Blog(props){
    const params = new URLSearchParams(window.location.search);

    const { id } = useLoaderData();

    console.log(id);
    return <div>
            <BlogDetails idBlog={id}/>
            <AddComment idBlog={id}/>
            <CommentList idBlog={id}/>
         </div>
}
export default Blog;