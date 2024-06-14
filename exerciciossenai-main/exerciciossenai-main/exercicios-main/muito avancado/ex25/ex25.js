// Yasmin Siqueira Lobo
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === "block";
            answer.style.display = isVisible ? "none" : "block";
        });
    });
});
