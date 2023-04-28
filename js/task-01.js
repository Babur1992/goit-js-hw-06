

const categoriesEl = document.querySelector("#categories");
const items = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories:${items.length}`);
items.forEach(item => {
  const titleEl = item.querySelector("h2").textContent;
  const categoriesEl = item.querySelectorAll("li");
  console.log(`Category: ${titleEl}.Elements:${categoriesEl.length}`);
});



