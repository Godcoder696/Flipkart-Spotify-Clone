let goLeft= document.getElementById('previous');
let goRight= document.getElementById('next');

let arrayOfImages=
[   
    {src:"/images/deals/deal1.png"},
    {src:"/images/deals/deal2.png"},
    {src:"/images/deals/deal3.png"},
    {src:"/images/deals/deal4.png"},
    {src:"/images/deals/deal5.png"}
]
let index=0;

let deal= document.getElementById('deal');

goLeft.addEventListener('click',()=>{
    if(index==0) index= arrayOfImages.length-1;
    else index--;
    deal.src=arrayOfImages[index].src;
})

goRight.addEventListener('click',()=>{
    if(index==arrayOfImages.length) index= 0;
    else index++;
    deal.src=arrayOfImages[index].src;
})

setInterval(()=>{
    if(index==arrayOfImages.length-1) index=0;
    else index++;
    deal.src=arrayOfImages[index].src;
},3500)
