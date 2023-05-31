document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal1 = document.getElementById("myModal1");
    var modal2 = document.getElementById("myModal2");
    // Get the button that opens the modal
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal 
    btn1.addEventListener("click", function() {
      modal1.style.display = "block";
    });

    btn2.addEventListener("click", function() {
        modal2.style.display = "block";
      });
  
    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
      modal1.style.display = "none";
      modal2.style.display = "none";
    });
  
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
      if (event.target == modal1 || event.target == modal2){
        modal1.style.display = "none";
        modal2.style.display = "none";
      }
    });
});