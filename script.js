// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


// Add a row
function addR() {
     let tr=document.createElement("tr"); 
    let td=document.createElement("td");

    td.addEventListener('click', () => {td.style.background = colorSelected;} ); // add color
    
    tr.appendChild(td); // create one column
    for(let i =1;i<numCols;i++) // if more then one, create more rows 
    {
        let td1=document.createElement("td");
       td1.addEventListener('click', () => {td1.style.background = colorSelected;} );
        tr.appendChild(td1);
    }
    numRows+=1; //increase the counter for  rows 
    if(numCols===0)//if column is 0 then increase it to one
    {
        numCols=1;
    }
    let grid=document.getElementById("grid");
    grid.appendChild(tr); //add the row to the column

}

// Add a column
function addC() {
    let grid=document.getElementById("grid");
    let col=grid.querySelectorAll("tr");  // returns array of all row element(tr)
    
    for(let i=0;i<numRows;i++){

        let td=document.createElement("td");
        td.addEventListener('click', () => {td.style.background = colorSelected;} ); // for color on click 

        col[i].appendChild(td);
        

    }
    
    numCols+=1;
    if(numRows===0){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        

          td.addEventListener('click', () => {td.style.background = colorSelected;} );
          
          tr.appendChild(td);
    
     
      grid.appendChild(tr); //add the row to the columnm if row and col are 0
      numRows=1
    }
   

}

// Remove a row
function removeR() {
    let grid= document.getElementById("grid")
    
    let a = grid.lastElementChild; 
     grid.removeChild(a);    // remove one row 
    numRows-=1
    if(numRows===0){
        numCols=0
    }

}



// Remove a column
function removeC() {
    
    
 let grid=document.getElementById('grid');
 let cols=grid.querySelectorAll("tr") // calls all the query  
     for(let i=0;i<numRows;i++){
 
        let last= cols[i].lastElementChild;
        cols[i].removeChild(last);   // removes the last columns
   } 
numCols-=1 // sub by one 
  if(numCols===0){
    numRows=0
  }

  


}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){//if color is blank then change it
    
    let td = grid.querySelectorAll("td");
    td.forEach(td=>{
        if(td.style.background=== ""){  
            td.style.background= colorSelected;
        }
    })
}

// Fill all cells
function fillAll(){
    let grid =document.getElementById("grid");
   let td =grid.querySelectorAll("td");
   td.forEach(td =>{
    td.style.background= colorSelected;
   })

     
   //if( td.style.background != colorSelected){   // alert("Clicked Fill All")
    

  //  td.style.backgroundColor= colorSelected
   //}
   // Replace this line with your code. // might need all query elements once doing more research

}

// Clear all cells // means remove all colors?
function clearAll(){
    
    let grid =document.getElementById("grid");
    let td = grid.querySelectorAll("td");
    
  td.forEach(tr => {
    removeR() //  this has an eqaul col to row match inside the function
  })
    
}