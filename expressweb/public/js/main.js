const submitbtn=document.getElementById('submit_button');
const city=document.getElementById('city_name');
const location1=document.getElementById('location');
const weathericon=document.getElementById('weathercon');

const errmsg=document.getElementById('errormsg');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');

//document.getElementById("date").innerHTML = d.getDay+'|'+ months[d.getMonth()]+'|'+d.getTime();
const getinfo= async(event)=>{
event.preventDefault();
   
const cityval=city.value;
    if(cityval==''){
errmsg.innerText=`Please write name of Location`;
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=55b323ee6ceccab054edece67621dc80`;
            const response= await fetch(url);
            const resobj=await response.json();
            const arrofanobj=[resobj];
            console.log(arrofanobj);

            temp.innerHTML=arrofanobj[0].main.temp+ "<sup>o</sup>C";
            temp_status.innerText=arrofanobj[0].weather[0].main;
            location1.innerText=`${arrofanobj[0].name},${arrofanobj[0].sys.country}`;
const tempmood=arrofanobj[0].weather[0].main;
if(tempmood=='Clear'){
    weathericon.innerHTML="<i class='fas fa-sun' style='color: #d36326;font-size:10rem'></i>";
}else if(tempmood=='Clouds')
{
    weathericon.innerHTML="<i class='fas fa-cloud' style='color: #d36326;font-size:10rem'></i>";


}else if(tempmood=='Smoke')
{    weathericon.innerHTML='<i class="fas fa-smog" style="color: #d36326;font-size:10rem;"></i>';


}else if(tempmood=='Rain')
{
    weathericon.innerHTML='<i class="fas fa-cloud-showers-heavy	" style="color: #d36326;font-size:10rem"></i>';

}else{
    weathericon.innerHTML='<i class="fas fa-cloud-sun" style="color: #d36326;font-size:10rem"></i>';

}
        }catch{
            errmsg.innerText=`Please Enter Proper Location`;

        }
        
    }
}
submitbtn.addEventListener('click',getinfo);