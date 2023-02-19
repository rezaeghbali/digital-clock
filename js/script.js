let hourElem=document.querySelector('#hour')
let minuteElem=document.querySelector('#minute')
let secondElem=document.querySelector('#seconds')


setInterval(()=>{
    let myDate=new Date()
    let nowHour=myDate.getHours()
    let nowMinute=myDate.getMinutes()
    let nowSeconds=myDate.getSeconds()
    
    if(nowHour<10){
        nowHour='0'+nowHour 
    }
    if(nowMinute<10){
        nowMinute='0'+nowMinute 
    }
    if(nowSeconds<10){
        nowSeconds='0'+nowSeconds 
    }

    hourElem.innerHTML=nowHour
    minuteElem.innerHTML=nowMinute
    secondElem.innerHTML=nowSeconds
},1000)



