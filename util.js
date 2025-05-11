
// Use < > in code would lead to interpretation of html -> replace these characters by &lt; and &gt;
document.querySelectorAll("code").forEach(function(element) {
    element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
});

hljs.highlightAll();


// e.parentElement.find;
function showCorrectAnswer(e) {
    const parent = e.parentElement;
    const correctElement = parent.querySelector('[right]');
    if (correctElement) {
        correctElement.classList.add('right');
    }
}