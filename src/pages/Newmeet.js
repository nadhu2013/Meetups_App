import { useNavigate } from "react-router-dom";
import Newmeetupform from "../components/meetups/Newmeetupform";

function Newmeet(){
  const navigate=useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
           'https://meeetups-e0d91-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
           {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
           } 
        ).then(()=>{
            navigate('/',{replace:true});
        });
    }
    return<section>
        <h1>Add meetups</h1>
        <Newmeetupform onAddmeetup={addMeetupHandler}/>
    </section>;
}
export default Newmeet;