let uname="janhvi\"a";
console.log(uname.length);
console.log(uname.toUpperCase());
console.log(uname.toLowerCase());
console.log(uname.slice(0,3));
console.log(uname.slice(-1));

// console.log(uname.splice(0,3));
let nn=uname.replace("jan","ok");
let a="as"
let b="sdsd"
let c=a.concat(b)

console.log(uname.trim());
for (let index = 0; index < uname.length; index++) {
  const element = uname[index];
  console.log(element);
}
//while loop
//do while (min 1 time execute without matching condition)
let myname="jb"
let i=0;
while (i<myname.length) {
  const element=myname[i];
  console.log(element);
  i++;
}