let heart_like=document.getElementsByClassName("heart_like")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.querySelector("#finalPrice")
let prices=[1379,176,500]
let Item=document.getElementsByClassName("Item")
let deletee=document.getElementsByClassName("delete")
for (let index = 0; index <heart_like.length; index++) {
    // Like Button
    heart_like[index].addEventListener("click",function(){
        if(heart_like[index].style.color==="black"){
            heart_like[index].style.color="red"
        }
        else{
            heart_like[index].style.color="black"
        }
    })
    
    // Plus Button
    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        finalPrice.value=Number(finalPrice.value)+prices[index]
    })

    // Minus Button
    minus_btn[index].addEventListener("click",function(){
        if(Quant[index].value!=0){
            Quant[index].value=Number(Quant[index].value)-1
            finalPrice.value=Number(finalPrice.value)-prices[index]
        }
    })

    // Delete Button
    deletee[index].addEventListener("click",function(){
        Item[index].style.display="none"
        finalPrice.value=Number(finalPrice.value)-prices[index]*Number(Quant[index].value)
    })
    
}