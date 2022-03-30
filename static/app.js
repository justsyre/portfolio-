const sections = document.querySelectorAll('.sect');
const mnav = document.querySelectorAll('.mnav');
const mnavControl = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button Click active class
    for(let i = 0; i < mnavControl.length; i++){
        mnavControl[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    allSections.addEventListener('click', (e) =>{
        //console.log(e.target)
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            mnav.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();