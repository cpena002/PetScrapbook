// var pet = new observableModule.Observable(); // Old Way to Instantiates a new observable object
// import { Observable } from "data/observable"; // ES6 version
// var pet = new Observable(); // Instantiates a new observable object
// var observableModule = require("data/observable"); // Old version
// var viewModule = require("ui/core/view"); // gives access to UI elements


// THE BINDING METHOD
// exports.onLoaded = function(args){
//     console.log("**************************************")
//     var page = args.object; // GET THE PAGE OBJECT
//     var pet = new observableModule.Observable(); // INSTANTIATE AN OBSERVABLE OBJECT
//     var label = viewModule.getViewById(page, "title"); // GET ELEMENT YOU WISH TO BIND 
//     var label2 = viewModule.getViewById(page, "age"); // GET ELEMENT YOU WISH TO BIND

//     var bindingOptions = {
//         sourceProperty: "Name", // the name of the property you'll be setting up. this can be whatever name you want to give it
//         targetProperty: "text" // the property of the UI element you wish to target. In this case is text="" property of the UI element
//     }

//     var bindingOptions2 = {
//         sourceProperty: "Age",
//         targetProperty: "text"
//     }

//     // label.bind(bindingOptions, pet);
//     label.bind({sourceProperty: "Name", targetProperty: "text"}, pet); //binding the bindingOptions to the UI element you wish to target. 
//     label2.bind(bindingOptions2, pet);

//     pet.set("Name", "Riven"); // giving a value to the property we set up in the binding options
//     pet.set("Age", "3")
    
    // YOU'LL RARELY HAVE TO USE PROPERTY BIDNING, INSTEAD
    // YOU'LL MOSTLY USE THE XML BINDING METHOD
// }

//  **************************************** THE XML BINDING METHOD ***********************************************************************

/* 
  * Instead of definding the source and target properties in a javascript object (bindingOptions above), you the declare 
    the binding relationship between the UI element and an observable in the page's XML markup. 
  * To use the XML Binding Method, you need to set the PAGE'S BINDING CONTEXT 
*/

var observableModule = require("data/observable"); // Old version
var viewModule = require("ui/core/view"); // gives access to UI elements

exports.onLoaded = function(args){
    var page = args.object; // GET THE PAGE OBJECT
    var home = new observableModule.fromObject({ // fromObject IS A SHOROTCUT TO SETTING PROPERTIES OF OBSERVABLES.
        Header: "Pet Scrapbook", // THE PROPERTY NAME MUST MATCH THE NAME USED IN THE XML MARK UP
        Footer: " Brosteins 2016"
    }); // INSTANTIATE AN OBSERVABLE OBJECT
    page.bindingContext = home; // SETTING THE PAGE'S BINDING CONTEXT. PET IS ESTABLISHED AS A PAGE-LEVEL OBSERVABLE 
}