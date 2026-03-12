const map = new Map();
map.set('IN', "India");
map.set('SL', "Srilanka")
map.set('USA', "United States of America")

console.log(map);

for(const [key, value] of map){
    console.log(`Here key is country code ${key} and value is country name ${value}`);
}