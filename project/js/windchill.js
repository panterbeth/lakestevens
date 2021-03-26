function windChill(tempF, speed){
    let wc= 35.74+(0.6215*tempF)-35.75*(speed**0.16)+(0.4275*tempF*(speed**0.16));
    return wc;
}
  function doInputOutput(t, s){
    
    if(t<=50&&s>3){

    var output=windChill(t,s);
      var equal=output.toFixed(0)+"\xB0F";
    }
    else{var equal="N/A";}

return equal;


}


