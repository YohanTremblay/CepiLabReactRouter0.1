
// function NewPubli()
// { 
//      ConfirmDialog('Êtes-vous sûr ?');
// }
// function test()
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
//                     test();
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