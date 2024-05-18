const form = document.getElementById('form-cadastro');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.querySelector('button[type="submit"]');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Remove mensagens antigas, se houver
    removeMessages();

    // Verifica se todos os campos foram preenchidos
    if (nome.value && email.value && senha.value) {
        // Simula um tempo de espera (1 segundo) para representar o processo de cadastro
        setTimeout(function () {
            // Limpa os campos do formulário após o cadastro
            nome.value = '';
            email.value = '';
            senha.value = '';

            // Exibe a mensagem de sucesso
            showSuccessMessage('Cadastro efetuado com sucesso!');
        }, 1000);
    } else {
        // Se algum campo estiver vazio, exibe uma mensagem de erro
        showErrorMessage('Por favor, preencha todos os campos');
    }
});

function showSuccessMessage(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
}

function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function removeMessages() {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
}
