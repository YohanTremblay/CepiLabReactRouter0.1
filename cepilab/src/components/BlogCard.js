import React from 'react';
import { Link } from 'react-router-dom';
function BlogCard(props)
{

    return  <div className="container">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className=" card col-lg-4 yeah">
                                                <img className="img-fluid" src="\Image\imageNotFound.png" alt=""/>
                                                <h2> {props.title} </h2>
                                                <p className="card-text"> {props.content.substr(0, 150)} </p>
                                                <button>
                                                    <Link to={`/routeBlog/${props.id}`}>Voir Publication</Link>
                                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     ;
    
    
   
}

export default BlogCard;