document.getElementById("exam-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;

    if (question1.trim() === "" || question2.trim() === "") {
        alert("Bạn phải trả lời cả hai câu hỏi!");
        return;
    }

    const examData = {
        question1,
        question2,
        timestamp: new Date().toISOString()
    };

    fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(examData)
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error("Error:", error));
});
