import item from "./item.js";

const items = [];
const hideCheckedItems = false;

function findByID(id) {
  let querry = items.find(function (search) {
    return search.id === id;
  });
  return querry;
}

function addItem(name) {
  try {
    item.validateName(name);
    let newItem = item.create(name);
    items.push(newItem);
  } catch (e) {
    console.log(`${e.message}`);
  }
}

function findAndToggleChecked(id) {
  let found = this.findByID(id);
  found.checked = !found.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let itemToUpdate = findByID(id);
    itemToUpdate.name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  let itemToRemove = findByID(id);
  items.splice(itemToRemove, 1);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findAndDelete,
  findAndUpdateName,
  findAndToggleChecked,
  findByID,
  addItem,
  toggleCheckedFilter,
};
