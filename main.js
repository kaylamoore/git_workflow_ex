var turn = 0;
// var boxes = document.querySelectorAll(".box");
var boxes = $('.box'); console.log(boxes);
var button = document.querySelector("button")

$(".box").on("click", function(){
    console.log(this);
    if (turn ===1) {
      $(this).html("O");
    }else {
      $(this).html("X");
    }turn= turn ===0?1:0;
});
//ternary: alternates between one and zero, true and false 
 //button.addEventListener("click", resetBoard);

//$.each(boxes, function (index, value ){
 //   sum+=value;
//})

console.log(sum); 
//for(var i = 0; i < boxes.length; i++){
//   boxes[i].addEventListener("click", takeTurn)
//}

//function takeTurn(){
//    if(!this.innerHTML){
//        if(turnCount % 2 === 0){
//            this.innerHTML = "X";
//        } else {
//            this.innerHTML = "O";
//        }
//        checkWinner()
//        turnCount++;
//    }   
//}

//function resetBoard(){
//    for(var i = 0; i < boxes.length; i++){
//        boxes[i].innerHTML = ""
//    }
//}

//function checkWinner(){
//    console.log("running checkwinner")
//    if(boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X" ||
//       boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X" ||
//       boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X" ||
//       boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X" ||
//       boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X" ||
//       boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X" ||
//       boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X" ||
//       boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X") {
//          console.log("X wins")
//      } else if(boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O" ||
//       boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O" ||
//       boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O" ||
//       boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O" ||
//       boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O" ||
//       boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O" ||
//       boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O" ||
//       boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O"){
//          console.log("O wins")
//      }
//}
