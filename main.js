document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const clearInputButton = document.getElementById('clearInputButton');
    const copyButton = document.getElementById('copyButton');
    const clearOutputButton = document.getElementById('clearOutputButton');
    const textInput = document.querySelector('.text-input__textbox');
    const textOutput = document.querySelector('.text-output__textbox');

    const encryptionRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const decryptionRules = Object.fromEntries(
        Object.entries(encryptionRules).map(([key, value]) => [value, key])
    );

    function encrypt(text) {
        return text.split('').map(char => encryptionRules[char] || char).join('');
    }

    function decrypt(text) {
        let decryptedText = text;
        for (const [code, letter] of Object.entries(decryptionRules)) {
            const regex = new RegExp(code, 'g');
            decryptedText = decryptedText.replace(regex, letter);
        }
        return decryptedText;
    }

    encryptButton.addEventListener('click', () => {
        const inputText = textInput.value;
        textOutput.value = encrypt(inputText);
    });

    decryptButton.addEventListener('click', () => {
        const inputText = textInput.value;
        textOutput.value = decrypt(inputText);
    });

    clearInputButton.addEventListener('click', () => {
        textInput.value = '';
    });

    copyButton.addEventListener('click', () => {
        textOutput.select();
        document.execCommand('copy');
    });

    clearOutputButton.addEventListener('click', () => {
        textOutput.value = '';
    });
});
