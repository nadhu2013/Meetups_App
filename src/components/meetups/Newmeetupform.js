import { useRef } from "react";
import Card from "../UI/Card";
import classes from './Newmeetupform.module.css';



function Newmeetupform(props){
    const titleLisnerRef=useRef();
    const imageLisnerRef=useRef();
    const addressLisnerRef=useRef();
    const discriptionLisnerRef=useRef();

function submithandler(event){
    event.preventDefault();
    const enteredTitle=titleLisnerRef.current.value;
    const enteredImage=imageLisnerRef.current.value;
    const enteredAddress=addressLisnerRef.current.value;
    const enteredDiscription=discriptionLisnerRef.current.value;
   
    const MeetppDate={
        title:enteredTitle,
        image:enteredImage,
        address:enteredAddress,
        discription:enteredDiscription,
    };

    props.onAddmeetup(MeetppDate);
}

    return (
        <Card>
            <form className={classes.form} onSubmit={submithandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id="title" ref={titleLisnerRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup image</label>
                <input type="url" required id="image" ref={imageLisnerRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup address</label>
                <input type="text" required id="address" ref={addressLisnerRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='discription'>Meetup discription</label>
               <textarea id='description' required rows='4' ref={discriptionLisnerRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>ADD</button>
            </div>
            </form>
        </Card>

    );
}
export default Newmeetupform;