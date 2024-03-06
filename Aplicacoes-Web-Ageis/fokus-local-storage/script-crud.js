const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefas = []

// quando o botao for clicado, sera feita a alternancia da classe hidden
btnAdicionarTarefa.addEventListener('click', () => {
  formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: textArea.value
  }
  tarefas.push(tarefa)
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
})