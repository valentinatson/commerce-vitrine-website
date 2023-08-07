const expanBtns = document.querySelectorAll(".card-item .eye");

expanBtns.forEach((btn, index) =>{

    btn.addEventListener("click", ()=> {
        for (let i = 0; i < expanBtns.length; i++){
            if(index == i){
                expanBtns[i].parentElement.classList.toggle("expand");
            }
            else{
                expanBtns[i].parentElement.classList.remove("expand");
            }
        }
    })
})