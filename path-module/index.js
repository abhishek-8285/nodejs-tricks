// path module

const path = require('path');

// console.log(path.basename(__filename)) //index.js
// console.log(path.basename(__filename,'.js'))   // index
// console.log(path.dirname(__filename)) //C:\Users\abhis\OneDrive\Desktop\nodejs-tricks\nodejs-tricks\path-module

// console.log(path.extname(__filename)); // we will get extension of file name like we get of this file extension .js


// console.log(path.join('/search','label','course/python')); // \search\label\course\python  explanin using this join function we will create new directory 


// console.log(path.join('/search','label','course/python','..')); // output:= \search\label\course   explain using two dot like this ".." we will go to one step back



// console.log(path.normalize("c://temp////foo//bar"))  // output:= c:\temp\foo\bar this will make a correct url and remove unwanted things


// console.log(path.parse(__filename));  // output:= {root: 'c:\\',dir:'c:\\Users\\abhis\\OneDrive\\Desktop\\nodejs-tricks\\nodejs-tricks\\path-module',base: 'index.js',ext: '.js',name: 'index'}











// console.log(__filename);