let output = document.getElementById("output");


function promiseFunc() {
    reset()

    fetch("land.json")
        .then(response => response.json())
        .then(data => {
            data.countries.forEach(element => {
                let div = document.createElement("div");
                let h1 = document.createElement("h1");
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let p = document.createElement("p");

                div.classList.add("card");
                h1.classList.add("card-name");
                img.classList.add("card-flag");
                h2.classList.add("card-capital");
                p.classList.add("card-inhabitants");

                h1.textContent = element.name;
                img.src = element.flag;
                h2.textContent = element.capital;
                p.textContent = element.inhabitants;

                div.append(h1, img, h2, p)
                output.innerHTML += div.outerHTML
            });
        })
}


function asyncFunc() {
    reset()


}


function reset() {
    output.innerhtml = "";
}