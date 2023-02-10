// 2nd Task: change the h2 tag color: lightblue;
const h2Tag = document.getElementsByTagName("h2");
for (h2 of h2Tag) {
  h2.style.color = "lightblue";
}

// 3rd Task: change the backpack section background color: tomato;
const backpackBackground = document.getElementById("backpack");
backpackBackground.style.backgroundColor = "tomato";

// 4th Task: change the card class border radius: 30px;
const cardBorderRadius = document.getElementsByClassName("card");
for (card of cardBorderRadius) {
  card.style.borderRadius = "30px";
}

// 5th Task: create function with console.log and added button event handler ;
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  console.log("Submit Button Clicked");
});

// 6th Task: when click remove Buy Now Button
const buttons = document.getElementsByClassName("remove-btn");
for (btn of buttons) {
    btn.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.remove();
    });
}

// 7th Task: disabled button when write "email" then enabled button
document.getElementById("delete-confirm").addEventListener("keyup", function(event){
    const text = event.target.value;
    const deleteBtn = document.getElementById("submit-btn");
    if(text === "email"){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})

// 9th: when double click change background color:
const changeBG = document.getElementById("subscribe");
changeBG.addEventListener("dblclick", function(){
    changeBG.style.backgroundColor = "goldenrod";
})
