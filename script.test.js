/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");

const html = fs.readFileSync(path.resolve("./index.html"), "utf8");

let BotaoAdd, Input, Tarefas;

beforeEach(() => {
  document.documentElement.innerHTML = html;

  Input = document.getElementById("input-tarefa");
  BotaoAdd = document.getElementById("botao");
  Tarefas = document.getElementById("tarefas");

  const { init } = require("./script.js");
  init();
});

test("1. Não deve adicionar tarefa se o input estiver vazio", () => {
  fireEvent.click(BotaoAdd);
  expect(Tarefas.childElementCount).toBe(0);
});

test("2. O botão de adicionar existe no DOM", () => {
  expect(BotaoAdd).toBeInTheDocument();
});

test("3. Deve limpar o input após adicionar tarefa", () => {
  Input.value = "Estudar CSS";
  fireEvent.click(BotaoAdd);
  expect(Input.value).toBe("");
});

test("4. Deve riscar e desriscar a tarefa ao clicar", () => {
  Input.value = "Estudar HTML";
  fireEvent.click(BotaoAdd);

  const tarefa = Tarefas.firstChild;

  fireEvent.click(tarefa);
  expect(tarefa.style.textDecoration).toBe("line-through");

  fireEvent.click(tarefa);
  expect(tarefa.style.textDecoration).toBe("");
});

test("5. Deve remover a tarefa ao dar duplo clique", () => {
  Input.value = "Apagar tarefa";
  fireEvent.click(BotaoAdd);

  const tarefa = Tarefas.firstChild;

  fireEvent.dblClick(tarefa);
  expect(Tarefas.childElementCount).toBe(0);
});
