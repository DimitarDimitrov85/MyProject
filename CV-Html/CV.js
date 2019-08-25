
document.querySelector(".person").addEventListener("click", function(){
    this.classList.add("person_unactive")
    document.querySelector(".Cv_All_Info_Unactive").classList.add("Cv_All_Info")
})     
 $(".information").click(function(){
     $(".information_active").removeClass("information_active")
     $(this).addClass("information_active")
     
    
})  
 document.querySelector("h1").addEventListener("click", ()=>{
    document.querySelector(".Cv_All_Info_Unactive").classList.remove("Cv_All_Info")
    document.querySelector(".person").classList.remove("person_unactive")
})   

document.querySelector(".languages").addEventListener("click",()=>{
    document.querySelector(".languages_Skill_Content").setAttribute("style","width:130px; transition: all 2s 0.7s")
})
  


   
       




