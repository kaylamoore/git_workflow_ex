var boxes= document.querySelectorAll(".square");
    turns = 0;

for (var i = 0; i < boxes.length; i++){
     boxes[i].addEventListener("click", getPiece);
  	}




function getPiece(){
     if(!this.innerHTML){
     	if(turns % 2 === 0){
     		this.innerHTML = "x";
            console.log('x');
		} else {
    		this.innerHTML = "o";
            console.log('o');
		}
		turns ++;
        console.log(turns);
	}
}


// button.addEventListener(“click”, resetBoard);

// function resetBoard(){
//     for(var i = 0; i < boxes.length; i++){
//      	boxes[i].innerHTML = “”;
// 	} 
// }
