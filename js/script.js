const overskrift = document.querySelector("h1")
overskrift.textContent;
console.log(overskrift.textContent);

const image = document.querySelector("img")
console.log(image);



const sectionChild = document.querySelector("section");
const articleChild = sectionChild.children;
const articleTwo = articleChild.item(1);

console.log(articleTwo.textContent);