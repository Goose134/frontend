const textInput = document.getElementById("textInput");
const sendButton = document.getElementById("sendButton");
const message = document.getElementById("message");
const getButton = document.getElementById("getButton");
const resultInput = document.getElementById("resultInput");

sendButton.addEventListener("click", async () => {
    const text = textInput.value;

    if (text.trim() === "") {
        message.textContent = "Введите текст.";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        const data = await response.json();

        message.textContent = data.message;
    } catch (error) {
        message.textContent = "Ошибка соединения с сервером.";
        console.error(error);
    }
});

getButton.addEventListener("click", async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/data");

        const data = await response.json();

        resultInput.value = data.text;
    } catch (error) {
        resultInput.value = "Ошибка соединения с сервером.";
        console.error(error);
    }
});