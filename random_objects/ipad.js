// creating an iPad object

const ipad = {
  name: "Regular iPad",
  height: 25,
  color: "space grey",
  storage: 64,
};

console.log("The first object is:", ipad);

// creating a blueprint for an iPad object

function Ipad(name, height, color, storage) {
  this.name = name;
  this.height = height;
  this.color = color;
  this.storage = storage;
  // add a storageLeft and a function that updates storageLeft
}
