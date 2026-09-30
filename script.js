(function(){
var S="https://thevishaldey.github.io/PRODIGY_WD_0";
var P={sw:["Stopwatch",S+"2/"],ttt:["Tic-Tac-Toe",S+"3/"],wx:["Weather",S+"5/"]};
var D=[
["JavaScript","Web","Timers, game logic, an AI opponent and live data fetching.",["sw","ttt","wx"]],
["HTML","Web","Page structure and accessible markup for every interface.",["sw","ttt","wx"]],
["CSS","Web","Layouts and styling that keep each app clear and easy to use.",["sw","ttt","wx"]],
["REST APIs","Web","Requesting real-time data and showing it on the page.",["wx"]],
["Python","Languages","Scripting and step-by-step problem solving.",[]],
["C","Languages","Core programming fundamentals: logic, loops and functions.",[]],
["SQL","Data","Writing queries to store and retrieve data.",[]],
["Relational databases","Data","Organising data into related tables.",[]],
["Problem-solving","People","Breaking a bug or feature into small steps and testing each one.",[]],
["Communication","People","Explaining technical ideas in plain language.",[]],
["Time management","People","Planning work so each project ships on time.",[]],
["Team collaboration","People","Sharing work and feedback openly with others.",[]]
];
var g=document.getElementById("skillGrid");
D.forEach(function(d){
var el=document.createElement("div");el.className="skill";el.dataset.cat=d[1];
var h="<h3>"+d[0]+"</h3><p>"+d[2]+"</p>";
if(d[3].length){h+='<div class="used">'+d[3].map(function(k){return '<a href="'+P[k][1]+'" target="_blank" rel="noopener">'+P[k][0]+'</a>'}).join("")+"</div>"}
el.innerHTML=h;g.appendChild(el);
});
document.querySelectorAll(".tab").forEach(function(b){
b.addEventListener("click",function(){
document.querySelectorAll(".tab").forEach(function(x){x.setAttribute("aria-pressed",x===b)});
var f=b.dataset.f;
g.querySelectorAll(".skill").forEach(function(c){c.hidden=!(f==="All"||c.dataset.cat===f)});
});
});
})();

(function(){
var msg=document.getElementById("copyMsg");
document.querySelectorAll("[data-copy]").forEach(function(b){
b.addEventListener("click",function(){
var t=b.dataset.copy;
function done(ok){msg.textContent=ok?"Copied: "+t:"Copy this manually: "+t}
function fallback(){
var a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";
document.body.appendChild(a);a.select();
var ok=false;try{ok=document.execCommand("copy")}catch(e){}
document.body.removeChild(a);done(ok);
}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){done(true)},fallback)}else{fallback()}
});
});
})();