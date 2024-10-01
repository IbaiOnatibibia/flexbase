window.onload = () => {
let lista = [
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]
 let ind =0;
 let argazkia = document.getElementById("argazkia");
 let izenburua = document.getElementById("izenburu_text");
 let egilea = document.getElementById("Egilea_text");
 let ISBN = document.getElementById("ISBN_text");
 let data = document.getElementById("Data_text");
 let ezkerr_botoi = document.getElementById("ezkerr_botoi");
 let eskuin_botoi = document.getElementById("eskuin_botoi");
  argazkia.style.backgroundImage = `url(https://covers.openlibrary.org/b/id/${lista[ind].filename}`;
  izenburua.value=lista[ind].izenburua
  egilea.value=lista[ind].egilea
  ISBN.value=lista[ind].isbn
  data.value=lista[ind].data
  right = ()=>{
    ind++;
    if(ind==lista.length) ind=0;
    aldatu();
  }
  left = ()=>{
    ind--;
    if(ind<0) ind=lista.length - 1;
    aldatu();
  }
  aldatu = ()=>{
    izenburua.value=lista[ind].izenburua
    egilea.value=lista[ind].egilea
    ISBN.value=lista[ind].isbn
    data.value=lista[ind].data
  }
  ezkerr_botoi.addEventListener("click",left);
  eskuin_botoi.addEventListener("click", right);
}