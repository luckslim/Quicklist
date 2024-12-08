const form = document.querySelector("form")
const item = document.getElementById("item")
const ul = document.querySelector(".list ul");
form.onsubmit = (event) => {
    event.preventDefault()
    const list = {
        id: new Date().getTime(),
        item: item.value,
    }
    console.log(list)
    listAdd(list)
    formClear()
    notify()
}
function listAdd(list){
    try{
        
        const li = document.createElement("li");
        li.classList.add("class-list");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox-${list.id}`;
        const p = document.createElement("p");
        p.textContent = list.item;
        const trashIcon = document.createElement("img");
        trashIcon.src = "img/trash.svg";
        trashIcon.alt = "Delete";
        trashIcon.style.cursor = "pointer";
        trashIcon.onclick = () => {
            ul.removeChild(li);
            del()
        };
        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(trashIcon);
        ul.appendChild(li);
    }catch(error){
        console.log(error)
    }
}
function formClear(){
    item.value=""
    item.focus()
}
function notify(){
    const notify = document.querySelector("span")
    notify.textContent='Adicionado com sucesso'
    notify.style.background="#22c55e9c";
    notify.style.display="block";
    setTimeout(() => {
        notify.style.display = "none";
    }, 2000); 
}
function del(){
    const notifyDel = document.querySelector("span")
    notifyDel.style.background="red";
    notifyDel.textContent='Deletado com sucesso'
    notifyDel.style.display="block";
    setTimeout(() => {
        notifyDel.style.display = "none";
    }, 2000); 

}