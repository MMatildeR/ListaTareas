const input= document.querySelector ("input");
const addBtn= document.querySelector (".btn-add"); //probar esto con getElementByClass
const ul = document.querySelector ("ul");
const sinTareas = document.querySelector (".sinTareas");

addBtn.addEventListener("click", (e) =>{

    e.preventDefault();

    const text = input.value;

    if (text !== ""){
        const li = document.createElement("li");
        const p = document.createElement("p");
     

        p.textContent = text;

        li.appendChild(p);
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());

        input.value = "";
        sinTareas.style.display = "none";

    }
})

function addDeleteBtn () {
    const deleteBtn = document.createElement ("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
    
    deleteBtn.addEventListener("click", (e) =>{
        
        const tarea = e.target.parentElement;

        ul.removeChild (tarea);

        const tareas = document.querySelectorAll ("li");

        if (tareas.length === 0) {
            sinTareas.style.display = "block";
        }


    })
}


//crear boton, hacer el evento (dispare evento, el evento genere lectura de lo que hay y haga el borrado). Evaluar la longitud del parrafo. Si es igual a 0, sabre que puedo quitar o no las cosas.

