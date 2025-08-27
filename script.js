let BotaoAdd = document.getElementById('botao');
        let Input = document.getElementById('input__tarefa');
        let Tarefas = document.getElementById('tarefas');
        let riscado = false;
        BotaoAdd.addEventListener('click', function() {
            if(Input.value != "") {
                var tarefa = document.createElement("p");
                Tarefas.appendChild(tarefa);
                tarefa.innerText = "- " + Input.value;
                Input.value = "";
                tarefa.addEventListener("click", function() {
                    if(riscado == false) {
                        tarefa.style.textDecoration = "line-through";
                        riscado = true;
                    } else {
                        tarefa.style.textDecoration = "";
                        riscado = false;
                    }                   
                })
                tarefa.addEventListener("dblclick", function(){
                    Tarefas.removeChild(tarefa);
                })
            }
        })