//query selector 
//tag selector
const tag1=document.querySelector("h1");
console.log(tag1);

//class selector

const class1= document.querySelector(".class1");
console.log(class1);

//id selector

const id1 = document.querySelector("#id1");
console.log(id1);

//query selectorAll

const tag2=document.querySelectorAll("h1");
console.log(tag2);
console.log(tag2[0].innerText);
console.log(tag2[1].innerText);

const class2=document.querySelectorAll(".class1");
console.log(class2);
console.log(class2[0].innerHTML);
console.log(class2[1].innerHTML);

const tag3=document.getElementsByTagName("h1");
console.log(tag3);

const class3=document.getElementsByClassName("class1");
console.log(class3);

//childnodes

const id_1=document.getElementById("id1");
console.log(id1);

console.log(id1.childNodes);

//children

const id_2= document.getElementById("list-id");
console.log(id_2);
console.log(id_2.children);

//creat element

const newlist=document.createElement("li");
newlist.innerText="list  five";
console.log(newlist);

//append child

const newlist_1=document.createElement("li");
newlist_1.innerText="list five";
const listid=document.getElementById("list-id");
listid.appendChild(newlist_1);

//Example-2

const id_3=document.getElementById("div-text");
const new_heading=document.createElement("h1");
new_heading.innerText="New heading one";
id_3.appendChild(new_heading);

//removechild

const parentchild=document.getElementById("list-id");
console.log(parentchild);
const removelist=parentchild.children;
console.log(removelist);
console.log(removelist[0]);
console.log(removelist[0].innerHTML);
parentchild.removeChild(removelist[0]);
parentchild.removeChild(removelist[1]);

//replacechild

const parent_list=document.getElementById("replace-id");
const remove_list=parent_list.children[0];
const new_list=document.createElement("li");
new_list.innerText="replace list";
console.log(new_list.innerText);
parent_list.replaceChild(new_list,remove_list);

//title

console.log(document.title);
document.title="New title";

//body

console.log(document.body);
//document.body.innerHTML="<h1>This is only js heading</h1>";

const id_4=document.getElementById("id1");
id1.innerHTML="<p>This is heading</p>"
id1.innerText="<p>This is heading</p>";
console.log("Thank You");