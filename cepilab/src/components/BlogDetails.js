import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
function BlogDetails(props)
{
    
    let [blogDetails, setBlogDetails] = useState();
    useEffect(()=>{
        fetch('http://localhost:3000/Publication?id=' + props.idBlog)
        .then(reponse => reponse.json())
        .then(json =>{
            let tab = json.map((element, index) =>
                {
                   return<div  key={index}>
                            <div className="text-center" >
                                <img className="img-fluid largeurMax " src="\Image\imageNotFound.png" alt="Responsive image"/>  
                            </div> 
                            <div>
                                <h1 className="colorText">{element.title}</h1>
                            </div>
                            <div>
                                <p>{element.content}</p>
                            </div>;
                        </div>
                })
           
                setBlogDetails(tab);
        });

    },[])

    return blogDetails;
   
}
export default BlogDetails;