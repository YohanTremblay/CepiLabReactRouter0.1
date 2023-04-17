import { useState } from "react";

function AddComment(props) {
    let [commentAdd, setCommentAdd] = useState("");
    let date = new Date().toLocaleDateString();
  
    function ajoutCommentaire(event) {
      event.preventDefault();
      fetch("http://localhost:3000/Commentaire?lier=" + props.idBlog, {
        method: "POST",
        body: JSON.stringify({
          lier: props.idBlog,
          Date: date,
          content: commentAdd,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        // Rafraîchir la page après la soumission du formulaire
        window.location.reload();
      });
    }
  
    function surChangement(event) {
      setCommentAdd(event.target.value);
    }
  
    return (
      <form className="row" onSubmit={ajoutCommentaire}>
        <div className="form-group largeurMax col-6 align-self-center">
          <label className="colorText" htmlFor="Commentaire">
            <h3>Commentaire</h3>
          </label>
          <textarea
            id="Commentaire"
            name="Commentaire"
            className="form-control"
            rows="6"
            onChange={surChangement}
          ></textarea>
        </div>
        <div className="col-4 ">
          <button type="submit" className="btn btn-primary align-self-end">
            Submit
          </button>
        </div>
      </form>
    );
  }
  export default AddComment;