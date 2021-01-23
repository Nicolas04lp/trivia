let buenas = localStorage.getItem('Buenas');
let malas = localStorage.getItem('Malas');

function results(){
   let container = document.getElementById('answers-container');
   
   container.innerHTML += `<div class="container mt-5">
                               <div class="row justify-content-center">
                                   <div class="col-md-6">
                                       <div class="card">
                                           <div class="card-body">
                                               <button type="submit" class="btn btn-primary col-md-12 mt-2">Buenas ${buenas}</button>
                                               <button type="submit" class="btn btn-warning col-md-12 mt-2">Malas ${malas}</button>
                                               <input type="button" class="btn btn-warning col-md-12 mt-2" value="Página anterior" onClick="history.go(-1);">
                                           </div>
                                       </div>
                                   </div>
                               </div>`
}
console.log(buenas);
console.log(malas)