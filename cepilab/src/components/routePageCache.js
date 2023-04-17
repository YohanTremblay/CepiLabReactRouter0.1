import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { openDB } from 'idb';

function RoutePageCache() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date().toLocaleDateString();
    const data = {
      title,
      author,
      date,
      content,
    };

    fetch('http://localhost:3000/Publication', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Ouverture de la base de données IndexedDB
        openDB('my-db', 1, {
          upgrade(db) {
            // Création d'un store pour les publications
            const store = db.createObjectStore('publications', {
              keyPath: 'id',
              autoIncrement: true,
            });
            // Création d'un index pour les titres
            store.createIndex('title', 'title');
          },
        }).then((db) => {
          // Ajout de la publication dans la base de données IndexedDB
          const tx = db.transaction('publications', 'readwrite');
          const store = tx.objectStore('publications');
          store.add(data);
          return tx.complete;
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="titre">Titre:</label>
        <input
          type="text"
          id="titre"
          name="titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="auteur">Auteur:</label>
        <input
          type="text"
          id="auteur"
          name="auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        <label htmlFor="content">Contenu:</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          cols="50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default RoutePageCache;

    

// import React, { useState } from 'react';
// import {Form} from "react-router-dom"


// function RoutePageCache() {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();a
//     let date = new Date().toLocaleDateString();
//     fetch('http://localhost:3000/Publication', {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         author,
//         date,
//         content
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       }
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.log(error));
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <label htmlFor="titre">Titre:</label>
//         <input type="text" id="titre" name="titre" value={title} onChange={(e) => setTitle(e.target.value)} /><br></br>

//         <label htmlFor="auteur">Auteur:</label>
//         <input type="text" id="auteur" name="auteur" value={author} onChange={(e) => setAuthor(e.target.value)} /><br></br>

//         <label htmlFor="content">Contenu:</label>
//         <textarea id="content" name="content" rows="4" cols="50" value={content} onChange={(e) => setContent(e.target.value)} ></textarea><br></br>
//         <button type="submit" onClick={ReactionDB(title, author, content)}>Submit</button>
//       </Form>
//     </div>
//   );
// }
// function ReactionDB(title, author, content)
// {
//   var bd;

//   var requete = indexedDB.open("MaBD", 1);

//   // Créer ou mettre à jour (si le numéro de version change)
//   requete.onupgradeneeded = function(event){
//     var bd = event.target.result;
    
//     // Création du "store" à l'aide des options
//     var options = {
//       keyPath: "cle", //nom de la clé primaire
//       autoIncrement: true //true si la clé primaire peut être générée
//     };
//     var publication = bd.createObjectStore("maPublication", options);
    
//     // Création d'un index, qui permet la recherche
//     publication.createIndex("nomIndex", "cle");
    
//     // Ajout de données
//     publication.transaction.oncomplete = function(event){
//       // Ouverture de la transaction
//       var trans = bd.transaction("maPublication", "readwrite");
//       var maPublication = trans.objectStore("maPublication");
      
//       // Ajout
//       maPublication.add({
//         cle: 1,
//         titreBD: title,
//         AteurBD: author,
//         ContenueBD : content
//       });
//     };
//   };
// }
// export default RoutePageCache;


// function RoutePageCache()
// { 
//      ConfirmDialog('Êtes-vous sûr ?');
// }
// function InsertionAPI()
// {
//     let date = new Date().toLocaleDateString();

//     fetch('http://localhost:3000/Publication',
//         {
//             method: "POST",
//             body : JSON.stringify({
//                 title : document.getElementById('titre').value,
//                 Auteur : document.getElementById('Auteur').value,
//                 Date : date,
//                 content : document.getElementById('content').value
//             }),
//             headers : {
//                 'Content-type' : 'application/json; charset=UTF-8',
//             }
//         }
//     )
// }

// function ConfirmDialog(message) {
//   $('<div></div>').appendTo('body')
//     .html('<div><h6>' + message + '?</h6></div>')
//     .dialog({
//       modal: true,
//       title: 'Création Publication',
//       zIndex: 10000,
//       autoOpen: true,
//       width: 'auto',
//       resizable: false,
//       buttons: [
//             {
//                 text: "Oui",
//                 id: "btnCreateRev",
//                 click: function () {
//                     InsertionAPI();
//                 }
                
//             }, 
//             {
//                 text: "Non",
//                 id: "btnCancel",
//                 click: function () { $(this).dialog("close"); },
//             }
//         ]
        
//     });
// }
// export default RoutePageCache;