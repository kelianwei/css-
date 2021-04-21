var toggleul = {
    handleEvent(event) {
        if (event.type != "click") { return; }
        var ele = event.target.nextElementSibling ? event.target.nextElementSibling : event.target.parentNode.nextElementSibling;
        ele.hidden = !ele.hidden;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    for (let elem of document.querySelectorAll("div.index>span")) {
        elem.nextElementSibling.hidden = true;
        elem.insertAdjacentHTML("beforeend", "   <small class='count'>(" + elem.nextElementSibling.children.length + "个属性)</small>")
        elem.addEventListener("click", toggleul);
    }
    document.querySelector(".count").textContent = document.querySelector(".index").querySelectorAll("li").length
        ;
});


