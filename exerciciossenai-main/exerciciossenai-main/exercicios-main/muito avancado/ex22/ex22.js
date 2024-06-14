// Yasmin Siqueira Lobo
const form = document.getElementById('checkoutForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if(validateForm()) {
        alert('Compra realizada com sucesso!');
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const cardNumberInput = document.getElementById('cardNumber');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const cardNumberError = document.getElementById('cardNumberError');

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, insira seu nome.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Por favor, insira seu email.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (cardNumberInput.value.trim() === '') {
        cardNumberError.textContent = 'Por favor, insira o número do cartão.';
        isValid = false;
    } else {
        cardNumberError.textContent = '';
    }

    return isValid;
}
