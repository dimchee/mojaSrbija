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

document.documentElement.setAttribute('data-theme', 
    localStorage.getItem('theme') ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
);

function theme_switch() {
    let root = document.documentElement;
    var theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme);
}

window.opentab = opentab;
window.theme_switch = theme_switch;
