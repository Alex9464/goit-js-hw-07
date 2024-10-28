const listItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
    const title = item.querySelector("h2");
    const elements = item.querySelectorAll("ul li");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements.length}`);
});
