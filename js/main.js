let goUp = document.querySelector('.ul_footer_contact_before');
let html = document.querySelector('html');
goUp.addEventListener('click',()=>{
    if(html.scrollTop>0)
    {
         let up = setInterval(()=>{
            html.scrollTop -=20 ;
            console.log(html.scrollTop);
            if(html.scrollTop==0)
            {
                clearInterval(up);
            }
        },1);
    }
})

let About = document.querySelector('.About');
let about = document.querySelector('#About');

About.addEventListener('click',()=>{
    let y = 20;
     let scroll = setInterval(()=>{

        if(about.getBoundingClientRect().y>0)
         {html.scrollTop += y;
         }
         else html.scrollTop -= y;
         if(about.getBoundingClientRect().y<10&&about.getBoundingClientRect().y>-10)
         clearInterval(scroll);
     },1)
})


let navigation = document.querySelector('.navigation');
let section = document.querySelectorAll('section');
let nav = document.querySelectorAll('.nav');

navigation.addEventListener('click',(e)=>{
    nav.forEach((elem,i)=>{
        elem.classList.remove('active');
        if(e.target==elem)
        {
            elem.classList.add('active');
            let y = 20;
            let scroll = setInterval(()=>{

                if(section[i].getBoundingClientRect().y>0)
                {html.scrollTop += y;
                }
                else html.scrollTop -= y;
                if(section[i].getBoundingClientRect().y<10&&section[i].getBoundingClientRect().y>-10)
                clearInterval(scroll);
            },1)

        }
    })
})
let skill = document.querySelector('.skill');
let progress = document.querySelectorAll('.progres');
window.addEventListener('scroll',()=>{
    if(skill.getBoundingClientRect().y<100)
    {
        progress.forEach((e)=>{
            e.classList.remove('hidden');
        })
    }
    section.forEach((elem,i)=>{
        // nav[i].classList.remove('active');
        if(elem.getBoundingClientRect().y < 500 && elem.getBoundingClientRect().y > -500 )
        {   
            if(!nav[i].classList.contains('active'))
                nav[i].classList.add('active');
        }else nav[i].classList.remove('active');
    })
})





