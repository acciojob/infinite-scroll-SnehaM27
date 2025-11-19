//your code here!
const list = document.getElementById("infi-list");

// Add initial 10 items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + (list.children.length + 1);
    list.appendChild(li);
  }
}

addItems(10); // first load

// Detect scroll to bottom
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 more items when bottom reached
  }
});

