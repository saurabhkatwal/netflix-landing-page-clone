let cancel=document.querySelector('.cancel');
let watch=document.querySelector('.watch');
let pick=document.querySelector('.pick');
let tabs=document.querySelectorAll('.tab');
let tabcontent=document.querySelectorAll('.tab-in');

// tabs.forEach(curr=>{
//     console.log(curr);
//     curr.addEventListener('mouseover',changeColor(curr)); 
// })


for(let i=0;i<tabs.length;i++){
    console.log(tabs[i]);
    tabs[i].addEventListener('mouseover',function(){
        console.log(event);
        changeColor(this);
    })
    tabs[i].addEventListener('mouseout',function(){
        removeColor(this);
    })
}


// tabs.forEach(curr)=>{
//     curr.addEventListener('mouseover',function(){
//         changeColor(curr);
//     })
// })
function changeColor(elem){
    console.log(elem);
    for(let i=0;i<tabs.length;i++){
        tabs[i].children[0].style.color="";
        tabs[i].children[1].style.color="";
    }
    elem.children[0].style.color="#fff";
    elem.children[1].style.color="#fff";
}
function removeColor(elem){
    for(let i=0;i<tabs.length;i++){
        tabs[i].children[0].style.color="";
        tabs[i].children[1].style.color="";
    }
}


// console.log(tabs);
// console.log(cancel);
// console.log(watch);
// console.log(pick);
cancel.addEventListener('click',function(){
    removeActives();
    tabcontent[0].style.display="block";
    cancel.style.borderBottom="8px solid red";
})

watch.addEventListener('click',function(){
    removeActives();
    tabcontent[1].style.display="block";
    watch.style.borderBottom="8px solid red";
})

pick.addEventListener('click',function(){
    removeActives();
    tabcontent[2].style.display="block";
    pick.style.borderBottom="8px solid red";
})

function removeActives(){
    for(let i=0;i<tabs.length;i++){
        tabs[i].style.borderBottom="7px solid #141414";
    }
    for(let i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }

}
document.querySelector('.cancel').click();