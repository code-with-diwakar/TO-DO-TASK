let todo = document.getElementById("todo");
let ul = document.getElementById("todo-list");

todo.addEventListener('change', function(e) {
    let li = document.createElement("li");
    
    li.innerHTML = `
        <img src="./delete-svgrepo-com (1).svg" alt="Todo Icon" style="width:20px; height:20px; vertical-align:middle; margin-right:5px;">
        ${e.target.value}
    `;
    ul.appendChild(li);
    e.target.value = ""; 

    li.addEventListener('click', function() {
        ul.removeChild(li); 
    });
});
