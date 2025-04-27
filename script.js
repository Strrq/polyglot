async function sendToGPT() {
    const input = document.getElementById("wordInput").value;
    const responseBox = document.getElementById("responseBox");

    responseBox.innerText = "Загрузка...";

    const response = await fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "EXPLAIN_WORD: " +"Объясни значение слов простыми словами . Переведи его на русский и дай пример использования. и всегда отвечай только на вопросы связаные с языками и обьяснениями их слов.И всегда проевряй значение слов на https://library.harvard.edu/services-tools/oxford-english-dictionary. Если тебе написали на полностью другом языке ты должен его полностью на русский язык. Если тебе написали слова неправильно то ты должен его поравить в зависимости от значения предложения в которои его тебе написали "}),
    });

    const data = await response.json();
    responseBox.innerText = data.answer;
}