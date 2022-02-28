import Card from '../UI/Card';
import classes from './Meetupitem.module.css'
import {useContext} from 'react'
import FavorateContext from '../../Store/favorates-context'

function Meetupitem(props){
     const favoratectx=useContext(FavorateContext);

     const mitemisfav = favoratectx.itemisfav(props.id);

 function toggleFavorateStausHandler(){
    if(mitemisfav){
        favoratectx.removeFavate(props.id);
    }
    else{
        favoratectx.addFavorate({
            id:props.id,
            title:props.title,
            description:props.discription,
            image:props.image,
            address:props.address,
        });
    }
}


    return (
        <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                {/* <button>To ADD</button> */}
                <button onClick={toggleFavorateStausHandler}>{mitemisfav?'remove from Fav':'To favorate'}</button>
            </div>
         </Card>
        </li>
    );
}
export default Meetupitem;
