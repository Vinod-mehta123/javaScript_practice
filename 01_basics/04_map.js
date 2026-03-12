/*
const map = new Map();
map.set('IN', "India");
map.set('SL', "Srilanka")
map.set('USA', "United States of America")

console.log(map);

for(const [key, value] of map){
    console.log(`Here key is country code ${key} and value is country name ${value}`);
}
*/
// if it was a object then traversing would be different

let my_object = new Object;
my_object = {
    js: 'javaScript',
    cpp: 'C plus plus',
    swift : 'swift by apple',
}

for(const key in my_object){
    console.log(`${key} is shortcut for ${my_object[key]}`);
}