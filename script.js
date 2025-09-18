function init() {
  const Input = document.getElementById("input-tarefa");
  const BotaoAdd = document.getElementById("botao");
  const Tarefas = document.getElementById("tarefas");

  BotaoAdd.addEventListener("click", function () {
    const valor = Input.value.trim();
    if (valor !== "") {
      const tarefa = document.createElement("p");
      tarefa.innerText = "- " + valor;
      Tarefas.appendChild(tarefa);
      Input.value = "";

      let riscado = false;
      tarefa.addEventListener("click", function () {
        riscado = !riscado;
        tarefa.style.textDecoration = riscado ? "line-through" : "";
      });

      tarefa.addEventListener("dblclick", function () {
        tarefa.remove();
      });
    }
  });
}

// Chamada automática no navegador
window.addEventListener("DOMContentLoaded", init);

// Para Jest
if (typeof module !== "undefined") {
  module.exports = { init };
}
