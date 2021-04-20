var toggleul = {
    handleEvent(event) {
        if (event.type != "click") { return; }
        event.target.nextElementSibling.hidden = !event.target.nextElementSibling.hidden;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    for (let elem of document.querySelectorAll("div.index>span")) {
        elem.nextElementSibling.hidden = true;
        elem.addEventListener("click", toggleul);
    }
});


