var observableModule = require("data/observable");

exports.onLoaded = function(args){
    var page = args.object;
    var scrapbook = new observableModule.fromObject({ // Observable instance with properties. ONE THE FLY, BABY
        genders: ["Female", "Male", "Other"],
        title: "",
        date: new Date(),
        gender: 0
    });
    page.bindingContext = scrapbook;

}

exports.onTap = function(args){
    var page = args.object;
    var scrapbook = page.bindingContext;
    console.log(`You have made ${scrapbook.title}`);
    console.log(`Age: ${scrapbook.date.toLocaleDateString()}`);
    console.log(`Gender selected: ${scrapbook.genders[scrapbook.gender]}`);
}