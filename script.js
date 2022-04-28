var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
       
        //Question2)
        console.log(`Flag:${data[i].flag}`);
       
        //Question3)
        console.log(`Country Name:${data[i].name} Region:${data[i].region}
        Sub Region:${data[i].subregion} Population:${data[i].population}`);
    }
}