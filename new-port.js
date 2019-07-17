//initiate 

var home = document.querySelector('#home-part');
var about = document.querySelector('#about-part');
var project = document.querySelector('#project-part');
var contact = document.querySelector('#con');
var arr = [home,about,project,contact];

var navclass = document.querySelector('.nav-class');
var name_class;
navclass.addEventListener('click', class_find(name_class));

function class_find(name_class){
    var blankwrap = document.querySelector('.blank-wrap');
    var aa = setInterval(function(){
        blankwrap.removeAttribute('style');
    },2000);
    var found_class = name_class.className;    
    var search_str = found_class.toString().search('active');
    if( search_str == -1 ){
        var find_part = document.getElementById(''+found_class);
        for(let i = 0 ; i < navclass.childElementCount; i++ ){
            navclass.children[i].classList.remove('active');
            arr[i].removeAttribute('style');
        }
        name_class.classList.add('active');
        find_part.style.position = 'absolute';
        find_part.style.display = 'block'; 
    }
    else{
        return false;
    }
}


