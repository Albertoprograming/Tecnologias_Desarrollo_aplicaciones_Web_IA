/*fecha actualizacion */
document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
  
    var formattedDate = currentDate.toLocaleDateString();
  
    document.getElementById("hoy").innerText = formattedDate;
  });
  