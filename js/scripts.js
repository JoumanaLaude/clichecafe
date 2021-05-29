$("#reserveButton").click(function(){
   $("#tyModal").modal("show");
});

$("#hoursButton").click(function(){
   $("#hoursModal").modal("show");
});

const resPhone = document.getElementById("phoneNumber");
resPhone.addEventListener("keyup", fixLength);
function fixLength() {
  if(resPhone.value.length >= 12){
   resPhone.value = resPhone.value.slice(0,12);
 }
}