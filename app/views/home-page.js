var observableModule = require("data/observable"); // Old version
// var pet = new observableModule.Observable(); // Old Way to Instantiates a new observable object
// import { Observable } from "data/observable"; // ES6 version
// var pet = new Observable(); // Instantiates a new observable object

var viewModule = require("ui/core/view");

// pet.set("Name", "Riven");
// pet.set("Type", "Dog");
// pet.set("Age", 3);

// pet.on("propertyChange", function(e){
//   console.log(`Your pet is a ${pet.Type} named ${pet.Name} and is ${pet.Age} years old`);
// });

// pet.set("Age", 4);

exports.onLoaded = function(args){
    console.log("**************************************")
    var page = args.object;
    var pet = new observableModule.Observable(); 
    var label = viewModule.getViewById(page, "title");
    var label2 = viewModule.getViewById(page, "age");

    var bindingOptions = {
        sourceProperty: "Name",
        targetProperty: "text"
    }

    var bindingOptions2 = {
        sourceProperty: "Age",
        targetProperty: "text"
    }

    label.bind(bindingOptions, pet);
    label2.bind(bindingOptions2, pet);

    pet.set("Name", "Riven");
    pet.set("Age", "3")
    
}