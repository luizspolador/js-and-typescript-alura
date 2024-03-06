//encontrando o botao add tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
//capturando o formulário de adicionar tarefa
const formAdicionarTarefa = document.querySelector('.app__form-add-task')

// quando o botao for clicado, sera feita a alternancia da classe hidden
btnAdicionarTarefa.addEventListener('click', () => {
  formAdicionarTarefa.classList.toggle('hidden')
})