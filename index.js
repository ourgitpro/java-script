/*document.write("hello world <br/>");
document.write("hello world <br/>");
document.write("hello world <br/>");

document.write("eblo");
var nameE = "eblo";

document.write(nameE);
nameE = "nitu";
document.write(nameE);*/
//var text = "bangladesh";
//document.write(text.length);
//var num = 6;
//if (num % 2 == 0) console.log("Even");
//else console.log("Odd");
//var num = prompt("Enter a number : ");
//if (num > 0) console.log("positive");
//else if (num < 0) console.log("negative");
//else console.log("zero");
//var marks = prompt("Enter your marks : ");
//if (marks >= 80) console.log("A+");
//else if (marks >= 70) console.log("A");
/*else if (marks >= 60) console.log("A-");
else if (marks >= 50) console.log("B+");
else if (marks >= 40) console.log("B");
else console.log("Fail");*/
/*for (var x = 1; x <= 10; x = x + 1) document.write(" " + "Bangladesh");
for (var x = 1; x <= 10; x = x + 1) document.write(" " + "<h1>Bangladesh</h1>");
for (var x = 1; x <= 100; x = x + 2) document.write(" " + x);

for (var x = 2; x <= 100; x = x + 2) document.write(" " + x);
for (var x = 100; x >= 1; x = x - 1) document.write(" " + x);*/
//var digit = prompt("enter your name : ");
/*if (digit == 0) console.log("zero");
else if (digit == 1) console.log("one");
else if (digit == 2) console.log("two");
else if (digit == 3) console.log("three");
else if (digit == 4) console.log("four");
else if (digit == 5) console.log("five");
else if (digit == 6) console.log("six");
else if (digit == 7) console.log("seven");
else if (digit == 8) console.log("eight");
else if (digit == 9) console.log("nine");
else console.log("not a digit");*/
//switch,case,break,default
/*switch (digit) {
  case "0":
    console.log("zero");
    break;
  case "1":
    console.log("one");
    break;
  case "2":
    console.log("two");
    break;
  case "3":
    console.log("three");
    break;
  case "4":
    console.log("four");
    break;
  case "5":
    console.log("five");
    break;
  case "6":
    console.log("six");
    break;
  case "7":
    console.log("seven");
    break;
  case "8":
    console.log("eight");
    break;
  case "9":
    console.log("nine");
    break;
  default:
    console.log("not a digit");
}*/
//switch case break default
//var i = 1;
//while (i <= 5) {
//document.write(" " + "i");
//i = i + 1;
//}
/*var i = 1;
for (i = 1; i <= 5; i++) {
  document.write(" " + i);
}*/
//var i = 1;
//do {
//document.write(" " + i);
//i++;
//} while (i <= 5);
//ternary
//var number = Number(prompt("Enter your name "));
//var result = number > 0 ? "positive" : "negetive";
//var result = number > 0 ? "positive" : number < 0 ? "negetive" : "zero";
//console.log(result);
//break, continue
/*for (var i = 1; i <= 100; i++) {
  if (i == 10) {
    break;
  }
  document.write(" " + i);
}*/
/*for (var x = 1; x <= 100; x++) {
  document.write(" " + x);
  if (x == 10) {
    break;
  }
}*/
/*for (var i = 1; i <= 100; i++) {
  if (i == 10) {
    continue;
  }
  document.write(" " + i);
}*/
//function
/*function square() {
  var num = 5;
  var result = num * num;
  document.write(result);
}
square();*/
/*function square(num) {
  var result = num * num;
  document.write("result= " + result + "<br>");
}
square(5);
square(5);
square(5);*/
/*function square(num1, num2) {
  var result = num1 * num2;
  document.write("result= " + result + "<br>");
}
square(5, 6);
square(5, 7);
square(5, 8);*/
/*function square(num1, num2) {
  var result = num1 * num2;
  return result;
}
var resul = square(5, 67);
document.write("result= " + resul + "<br>");*/
// Array collection of variable ,
/*var Name = ["eblo", "nahid", "hossain", "Allu"];
Name.push("hashan");
console.log(Name.length);
console.log(Name);
console.log(Name[4]);
Name.pop();
console.log(Name);*/
// Array loop
/*var num = [10, 12, 13, 33, 88];
var sum = 0;
for (var i = 0; i < 5; i++) {
  console.log(num[i]);
  sum = sum + num[i];
}
console.log(sum);*/
//Array related method
/*var names = ["eblko", "nahid", "nitu"];
names.pop();
names.shift();
console.log(names);
names.push("eblo");
names.unshift("hashan");
console.log(names);*/
//
//
//
//
//object
/*var names = "eblo";
var age = 27;
var cgpa = 3.9;
var lang = ["eng", "hindi", "bangla"];
console.log(lang);
console.log(age);
console.log(cgpa);
console.log(names);*/

/*var student1 = {
  name: "eblo",
  age: "27",
  cgpa: "3.90",
  lang: ["eng", "hindi", "bangla"],
};
var student2 = {
  name: "Nahid",
  age: "30",
  cgpa: "3",
  lang: ["eng", "hindi", "bangla"],
};
var student3 = {
  name: "hossain",
  age: "20",
  cgpa: "3.90",
  lang: ["spanish", "urdu", "japanis"],
};
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student3.name);
console.log(student1.age);*/
//adding costruction
/*function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}
var student1 = new Student("anisul", 27, 3.9, ["eng", "bang", "hindi"]);
var student2 = new Student("eblo", 45, 2.9, ["islamic", "kutti", "bangla"]);
var student3 = new Student("nahid", 27, 3.9, [
  "english",
  "bangladesh",
  "hindi",
]);
console.log(student1.name);
student1.display();*/
//math.object
/*var num1 = parseInt(prompt("enter your first name : "));
var num2 = parseInt(prompt("enter your first name : "));

var maximum = Math.max(num1, num2);
console.log(maximum);*/
//guees gaming
//data object
/*var date = new Date();
console.log(date);
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
console.log(month);
var currentDate = date.getDate();
console.log(currentDate);
var currentDay = date.getDay();
console.log(currentDay);*/
//document.getElementById("eblo").innerHTML = "I am web developer";
//document.getElementById("para").innerHTML = "I am a desinger";
//document.getElementById("eblo1").innerHTML = "I am web developer";
//dom
//document.getElementsByTagName("h1")[1].innerHTML = "eblo is a bad boy.";
//document.getElementsByClassName("para")[0].innerHTML = "hi";
//document.getElementsByClassName("para1")[0].innerHTML = "Lorem 5 ";
//document.querySelector("#pid").innerHTML = "hellow world";
//document.querySelector(" .my-app a").innerHTML = "new text";
//document.querySelector("a").innerHTML = "new text";
//document.querySelector("li a").innerHTML = "new text";
//onclick
/*function myMessage1() {
  alert("hello, I love bangladesh");
}
function myMessage2() {
  alert("hello, I love bangladesh");
}
function myMessage3() {
  alert("hello, I love bangladesh");
}
function paid() {
  document.querySelector("#paid").innerHTML =
    "hello, I am Eblo here, and i am nice guy,";
}
function paid1() {
  document.querySelector("#paid1").innerHTML =
    "hello, I am Eblo here, and i am nice guy, and aslo loving bangladesh, its my homeland.";
}*/
//more DOM property
/*var link = document.getElementsByTagName("a")[0];
link.innerHTML = "Visit wifi";
link.style.textDecoration = "none";
link.style.color = "green";
link.style.fontSize = "1.5rem";
var h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "hello Eblo";
//creating a html element
var h3 = document.createElement("h1");
var text = document.createTextNode("hi,I am Eblo noted");
h3.appendChild(text);
var h4 = document.getElementById("my-app");
h4.appendChild(h3);*/
//image slider
/*var photos = ["man1.jpg", "man4.jpg", "man6.jpg"];
var imgTag = document.querySelector("img");

var count = 0;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}*/
/*function addStyle() {
  var myVar = document.querySelector("#paraId");
  //myVar.style.color = "red";
  // myVar.style.fontSize = "3rem";
  //myVar.style.fontWeight = "bold";
  //myVar.style.fontStyle = "italic";
  myVar.classList.add("IT");
}
function removeStyle() {
  var myVar = document.querySelector("#paraId");
  //myVar.style.color = "red";
  // myVar.style.fontSize = "3rem";
  //myVar.style.fontWeight = "bold";
  //myVar.style.fontStyle = "italic";
  myVar.classList.remove("IT");
}*/
//evenlister
//
//
//
//
//array handling-> try,catch,finally,throw
// try ...catch handle run time errors
// error object
//the finally statement
/*try {
  //code test
  alert("hi every one");
  alert(x);
} catch (err) {
  //handle error
  console.log(err);
} finally {
  alert("bye every one");
}*/
//throw
/*document.querySelector("#checkButton").addEventListener("click", function () {
  var num = document.querySelector("#numtestfield").value;
});*/
//canvas
/*var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 280);
ctx.fillStyle = "green";
ctx.fillRect(12, 12, 376, 276);
var centerX = c.width / 2;
var centerY = c.height / 2;
ctx.beginPath();
ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();*/
//es6
//function add(x, y) {
//var sum = x + y;
// console.log(sum);
//}
//add(5, 6);
//add(5, 89);
//const add = (x, y) => {
// let sum = x + y;
//console.log(sum);
//};
//add(100, 234);
/*ES6 Features
1. ES6 syntax
   1.1 ES6 variable-> let,const(scope,redeclaration, value assigning)
   1.2 Template literals,
   1.3 hoisting & strict mode
   1.4 default and rest parameter
   1.5 spread operator
   1.6 for...of
2. arrow function
3. destructing*/
//let const
//yahoo baba 13 to 60,
//ternary operator
/*var a = 100;
var b;
a == 10 ? (b = "true") : (b = "false");
document.write(b);*/
//prompt
//var a = prompt("Enter your name ?");
//document.write(a);
//alert("a");
//confirm("your name is");
// function of return
/* javascript basic events
click,double click,right click,mouse hover,mouse out,mouse down,mouse up.
key press, key up, load, unload, resize,scroll.*/

/*function hello() {
  document.write("hello everyone");
}*/
//nested loop
/*for (var a = 1; a <= 100; a = a + 10) {
  for (var b = a; b < a + 10; b++) {
    document.write(b + " ");
  }
  document.write("<br>");
}*/
// isArray
//var a = ["Eblo", "Nahid", "Saiymon"];
//var a = 10;
//document.write(a + "<br><br>");
//var b = Array.isArray(a);
//document.write(b);
/*if (Array.isArray(a)) {
  document.write("this is an Array");
} else {
  document.write("this is not an Array");
}*/
// indexOf and lastIndexOf
/*var a = ["Sanjoy", "Aman", "Rehman", "Aman", "syelet"];
document.write(a + " <br>");
var b = a.indexOf("Aman", 2);
document.write(b);*/
//include
/*var a = ["sanjy", "Aman", "Rehman", "rahul"];
document.write(a + "<br><br>");
var b = a.includes("sanjy");
document.write(b + "<br><br>");*/
/*var ages = [10, 12, 18, 20];
document.write(ages + "<br><br>");
var b = ages.some(checkAdult);
document.write(b + "<br><br>");
function checkAdult(age) {
  return age >= 18;
}*/
/*var ages = [10, 12, 18, 20];
document.write(ages + "<br><br>");
var b = ages.every(checkAdult);
document.write(b + "<br><br>");
function checkAdult(age) {
  return age >= 18;
}*/
//array methods find and findIndex
/*var ages = [10, 12, 24, 28];
document.write(ages + "<br><br>");
var b = ages.find(checkAduld);
document.write(b + "<br><br>");
function checkAduld(age) {
  return age >= 18;
}*/
/*var ages = [10, 12, 24, 28];
document.write(ages + "<br><br>");
var b = ages.filter(checkAduld);
document.write(b + "<br><br>");
function checkAduld(age) {
  return age >= 18;
}*/
// toString; ValueOf; fill()
/*var a = ["sanjoy", "nahid", "joy", "Eblo"];
a.toString();
document.write(a + "<br><br>");
//toString method convert an array to string and return the result.
//valueOf function return an array .
//fill method fill all the element in an array with static value;
var a = ["sanjoy", "nahid", "joy", "Eblo"];
a.fill("Eblo");
document.write(a + "<br><br>");*/
//forEach()
/*var a = ["Abul", "Kalam", "Hasem", "Eblo"];
a.forEach(function (value, index) {
  document.write(index + " : " + value + "<br><br>");
});*/
//object
/*var a = {
  fname: "yahoo",
  lname: "baba",
  age: 29,
  email: "nahidhossain124@gmail.com",
  favoriteM: ["Dhoom", "hasan", "Eblo"],
  object: {
    city: "chittagong",
    dhaka: "capital",
  },
  salary: function () {
    return 25000;
  },
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};
//document.write(a.fullName());

document.write(a.object.city);*/
// new object
/*var person = new Object();
(person.firstName = "Ram"), (person.lastName = "Nath"), (person.age = 29);
document.write(person.age);
document.write(person.firstName);*/
//map
/*var ary = [12, 15, 17, 30];
var b = ary.map(text);
document.write(b);
function text(x) {
  return x * 10;
}
var a = [
  { fname: "nahid", lname: "hossain" },
  { fname: "Eblo", lname: "Hossain" },
  { fname: "Yahoo", lname: "Baba" },
];
var b = a.map(hlw);
document.write(b);
function hlw(y) {
  return y.fname + " " + y.lname;
}
// string method
/* length(property), toLowerCase(),toUpperCase(),includes(), startsWith(),endsWith(), search(),match(), indexOf(),lastIndexOf(),replace(),trim(),charAt(),charCodeAt(), fromCharCode(), concat(),split(),repeat(), slice(),substr(),substring(),toString(),
valueOf().*/
//var str = "JavaScript is a great is language.";
//var str1 = "JavaScript is a great is language.";
//var a = str.length;
//var a = str.toLowerCase();
//var a = str.toUpperCase();
//var a = str.includes("is");
//var a = str.startsWith("is");
//var a = str.endsWith("language");
//var a = str.search("great");
//var a = str.match(/is/g);
//var a = str.indexOf("is");
//var a = str.lastIndexOf("language");
//var a = str.replace("JavaScript", "python");
//var a = str.replace(/is/g, "are");
//var a = str.replace("JavaScript", "python");
//var a = str.trim();
//var a = str.charAt(0);
//var a = str.charCodeAt(2);
//var a = String.fromCharCode(90);
//var a = str.concat(str1);
//var str = 50;
//var a = str.toString();
//var a = str.split("i");
//var a = str.repeat(4);
//var a = str.slice(3, 10);
//var a = str.substr(2, 6);
//var a = str.substring(3, 6);
//var a = str.toString();

//document.write(a + 20);
//number Method
// number (), parseInt(),parseFloat(),isFinite(),isInteger(),toFixed(x),toPrecision(x);
//var a = 99;
//var num = Number(a);
//var a = 11.33;
//var num = parseInt(a);
/*var a = 100;
var a = "Eblo";
var a = 188;
var a = 1.6753444;
//var num = parseFloat(a);
//var num = isFinite(a);
//var num = Number.isInteger(a);
//var num = a.toFixed(2);
var num = a.toPrecision(10);
document.write(num);*/
// math method
/*ceil(x),floor(x),round(x),trunc(x),max(x,y,z....,n),min(x,y,z.....,n),sqrt(x),cbrt(x),pow(x,y),random(),abs(x),PI */
/*var a = Math.ceil(7.9);
var a = Math.floor(4.99);
var a = Math.round(2.5);
var a = Math.trunc(4.99);
var a = Math.max(4, 67, 90);
var a = Math.min(5, 76, 90);
var a = Math.sqrt(4);
var a = Math.cbrt(4);
var a = Math.pow(2, 3);
var a = Math.floor(Math.random() * 10) + 1;
var a = Math.floor(Math.random() * 100) + 1;
var a = Math.abs(4);
var a = Math.PI;
document.write(a);*/
// Date method
/*toDateString(),getDate(),getFullYear(),getMonth(),getDay(),getHours(),getMinutes(),getSeconds(),getMilliseconds(),setDate(),setFullYear(),setHours(),setMilliseconds(),setMinutes(),setMonth(),setSeconds() */
//var a = new Date();
//document.write(a.toDateString());
/* document,document.all,document.documentElement,document.head,document.title,document.body,document.images,document.anchors,document.links,document.forms,document.doctype,document.URL,document.baseURI,document.domain */
//var a;
//a = document;
//console.log(a.All);
// dom is Get and set
//Get in dom
// .innerText,.innerHTML,getAttribute,getAttributeNode,Attributes, its Get value for dom.
//set in dom
// Dom set Methods, innerText,innerHTML,setAttribute,Attribute,removeAttribute.
/*var element;
document.getElementById("header").innerText = "wow";
document.getElementById("header").innerHTML = "<h1>Yahoo baba</h1>";
element = document.getElementById("header").innerHTML;
console.log(element);
//CSS style method,style, classList, className.*/
/* javaScript Basic Event, [click(onClick),Double click(ondblclick),Right click(oncontexmenu),mouse Hover(onmouseenter),Mouse out (onmouseout),Mouse Down(onmousedown), mouse Up(onmouseup),key press(on keypress), key up (onkeyup),Load(onload),Unload(onunload),Resize(onresize),Scroll(onscroll)] */
//assign Events using the HTML DOM:
//document.getElementById().addEventListener("click",functionName);
//document.getElementById().addEventListener("click",function(){

//});
//addEventListener(event,function,useCapture);
//useCapture = true or false;
// javaScript classList Method
// add(class1,class2...),remove(class1,class 2...)toggle(class),contains(class),item(index),Length.
//document.getElementById("header").addEventListener("click", abc);
//function abc() {
//document.getElementById("header").style.background = "red";
//document.getElementById("header").classList.add("xyz");
//var a = document.getElementById("header").classList.length;
//console.log(a);
//document.getElementById("header").style.background = "green";
//}
/*var element;
document.getElementById("header").addEventListener("click", abc);

function abc() {
  //document.getElementById("header").classList.add("xyz", "ab");
  document.getElementById("header").classList.remove("xyz");
}*/
//DOM Traversal Methods :
/*parentNode,parentElement,Children,childNodes,firstChild,firstElementChild,lastChild,lastElementChild,nextElementSibling,nextSibling,previousElementSibling,previousSibling */
/*var newElement = document.createElement("h2");
document.write(newElement);
var newWrite = document.createTextNode("this is eblo");
document.write(newWrite);*/
//document.getElementById("inner").parentElement.style.background = "green";
//var a = document.getElementById("inner").parentElement;
//console.log(a);
//document.getElementById("Child-C").parentNode.style.background = "red";
//var a = document.getElementById("inner").children[1];
//console.log(a);
//document.getElementById("inner").children[1].style.background = "blue";
/*var a = 0;
var ID = setInterval(Amin, 100);
function Amin() {
  a = a + 10;
  if (a == 200) {
    clearInterval(ID);
  } else {
    var target = document.getElementById("text");
    target.style.marginLeft = a + "px";
  }
}*/
