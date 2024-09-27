"use strict";
const ulCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${ulCategories.length}`);
ulCategories.forEach((catedory) => {
  const listTitle = catedory.querySelector("h2").textContent;
  const elementsList = catedory.querySelectorAll("ul li").length;

  console.log(`Category: ${listTitle}`);
  console.log(`Elements: ${elementsList}`);
});
