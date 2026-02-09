'use strict'
const swicher = document.querySelector('.btn');

swicher.addEventListener('cick', funcion(){
    document.body.classlist.toggle('dark-theme')

    var classname = document.body.className;
    if(className -- "light-theme") {
        this.textcontent = "dark";
    }
    else {
        this.textcontent = "light";
    }

    console.log ('current class name:' + classname);
});
