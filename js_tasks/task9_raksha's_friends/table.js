var rows = [{name:"ANKITH", edu:"B.E",  metIn:"when I was a kid"}, 
{name:"Sreeraksha", edu:"M.tech", metIn:"when I was born"},
{name:"Darshan", edu:"M.com" ,metIn:"when I was in high school"},
{name:"pragathi", edu:"B.E", metIn:"when I was in high school"},
{name:"sridar", edu:"MBA",metIn:"when I was in high school"}]

var table = "<table border='1|1'>";
table += '<tr><th>name</th><th>education</th><th>met in</th></tr>'  
    rows.forEach(row => {
        table+="<tr>";
        table+="<td>"+row.name+"</td>";
        table+="<td>"+row.edu+"</td>";
        table+="<td>"+row.metIn+"</td>";
        table+="<td><button class='view-button' data-friend='"+JSON.stringify(row)+"'> view </button></td>";
        table+="</tr>";
    });
    table+="</table>";
document.getElementById("box").innerHTML = table;

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0]

array = document.querySelectorAll(".view-button")
array.forEach((arrayElement) => {
    arrayElement.addEventListener('click',(clickEvent)=>{
       console.log('clickEvent', clickEvent.target.dataset.friend, JSON.parse(clickEvent.target.dataset.friend))
       var requiredName = JSON.parse(clickEvent.target.dataset.friend).name
       var requiredEdu = JSON.parse(clickEvent.target.dataset.friend).edu
       var requiredMetIn = JSON.parse(clickEvent.target.dataset.friend).metIn
       var content = document.querySelector(".my-modal-content")
       content.innerHTML = requiredName + ' has ' + requiredEdu + ' degree and we both met ' + requiredMetIn
       modal.style.display = "block";

    })
})
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

