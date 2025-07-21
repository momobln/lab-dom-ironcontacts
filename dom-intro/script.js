
let p = document.createElement("p");


let text = document.createTextNode("Hi there! I am using JavaScript");


p.appendChild(text);


document.body.appendChild(p);
let parent = document.getElementsByTagName('body')[0]; 
let h1Tag = document.createElement('h1');              
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2'; 

parent.insertBefore(h1Tag, h2Tag); 
