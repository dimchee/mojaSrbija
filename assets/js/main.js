// Expects structure 
// div
//   button
//   button
//   button
//   button
//   div
//   div
//   div
//   div
function opentab(event, tab) {
    var el = document.getElementById(tab);
    Array.from(el.parentElement.children)
        .filter((x) => x.tagName == 'DIV')
        .forEach((t) => t.style.display = "none");
    el.style.display = "block";
    
    Array.from(el.parentElement.children)
        .filter((x) => x.tagName == 'BUTTON')
        .forEach((t) => t.className = t.className.replace(" active", ""));
    event.currentTarget.className += " active";
}

window.opentab = opentab
