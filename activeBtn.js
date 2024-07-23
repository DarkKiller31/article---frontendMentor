const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function() {
  let share = document.getElementsByClassName("boxShare");
  if (share.length > 0) { 
    if (share[0].style.display === "none" || share[0].style.display === "") {
      share[0].style.display = "flex";
    } else {
      share[0].style.display = "none";
    }
  }
});


btn2.addEventListener('click', function() {
  let share = document.getElementsByClassName("boxShare");
  if(share[0].style.display == "flex"){
    share[0].style.display = "none";
  } 
});