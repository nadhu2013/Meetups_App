import Meetuplist from "../components/meetups/Meetuplist";
import { useState, useEffect } from "react";

function Allmeetups(){

  const[loading,setloading]=useState(true);
  const[data,setdata]=useState([]);

  useEffect(()=>{
    setloading(true);
    fetch('https://meeetups-e0d91-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        ).then(response=>{
          return response.json();
        }).then(data=>{
          const meetups=[];
            for(const key in data){
              const meetup={
                id:key,
                ...data[key],
              };
              meetups.push(meetup);
            }

          setloading(false);
          setdata(meetups);
        });
  },[]);

if(loading){
 return (<div>
    <h1>loading....</h1>
  </div>);
}



    return(
   <section>
       <h1> All Meetups </h1>
      <Meetuplist meetups={data}/>
   </section>
    );
}
export default Allmeetups;