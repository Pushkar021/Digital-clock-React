import React from "react";
import { useEffect, useState } from "react";

export default function Index() {
    
    
    function samay(){
    let hours = gettime.getHours()
    let minutes = gettime.getMinutes()
    let seconds = gettime.getSeconds()
    let date = gettime.getDate()
    let month = gettime.getMonth()
    let year = gettime.getFullYear()
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let x = (hours>=12)?"PM":"AM"
    return `${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${x}
    ${date} ${months[month]} ${year}`;
}
const [gettime,settime]=useState(new Date())
useEffect(()=>{
    setTimeout(()=>{
        settime(new Date())
    },1000)
},[gettime])

function zero(args){
    return (args<10?"0":"")+args
}


  return (
    <div className="clockcontainer">
      <div className="clock">{samay()}</div>
    </div>
  );
}
