
let label_1 = document.querySelector("[for='tex']");
let label_2 = document.querySelector("[for='pas']");
let inbut_1 = document.querySelector("#tex");
let inbut_2 = document.querySelector("#pas");

// addRemoveActive(inbut_1, label_1)
// addRemoveActive(inbut_2, label_2)


full(label_1)
full(label_2)
// console.log(inbut_1.parentElement.parentElement);
console.log(document.forms[0]);
document.forms[0].addEventListener("submit", (e)=>{
   let user = inbut_1.value;
   let pas = inbut_1.value;
   let pattern = /[^-_ a-z]/i
   let pattern_1 = /[A-Z]/
   
   let valed = pattern.test(user)
   let valed_1 = pattern_1.test(pas)
   
   if (valed && !valed_1) {
      e.preventDefault()
   }
})




// --------------------functions------------
// --------------------functions------------
// function addRemoveActive(inbut, label) {
//   inbut.addEventListener("focus", (e)=>{
//       label.classList.add("active");
//     })
//     inbut.addEventListener("mouseout", ()=>{
//         label.classList.remove("active");
      
//     }) 
// }


function full(inb) {
    let Deelay = 0;
    let word = inb.innerHTML;
    inb.innerHTML ="";
for (let i = 0; i < word.length; i++) {
     Deelay = 0.1 + Deelay;
 let span_1 = document.createElement("span");
        span_1.style.animationDelay=`${Deelay}s`
 let word_1 = document.createTextNode(`${word[i]}`)
 span_1.appendChild(word_1);
 inb.appendChild(span_1) 
 }
}