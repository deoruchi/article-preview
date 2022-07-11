let one = document.getElementsByClassName('outside');
let two = document.getElementsByClassName('inside');







if(window.matchMedia("(min-width:1024px)").matches){
    console.log("JOhar")

    one[0].lastElementChild.addEventListener('click',function(){
        two[0].classList.toggle('active');
        console.log(two[0].classList)
    })
    
    
    }


if(window.matchMedia("(max-width:425px)").matches){
    console.log(("namaste"))

    one[0].lastElementChild.addEventListener('click',function(){
        two[0].classList.toggle('active');
        one[0].classList.toggle('active')
     });
     
     two[0].addEventListener('click',function(){
         two[0].classList.toggle('active')
         one[0].classList.toggle('active')
     });
}
   
    
   

      

  
