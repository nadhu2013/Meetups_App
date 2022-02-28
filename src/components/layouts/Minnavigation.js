import {Link} from 'react-router-dom'
import classes from  './Minnavigation.module.css';
import {useContext} from 'react';
import FavorateContext from '../../Store/favorates-context';


function Minnavigation(){
const favoratectx=useContext(FavorateContext);



    return(<header className={classes.header}> 
    
         <div className={classes.logo}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Allmeetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meet'>Newmeet</Link>
                    </li>
                    <li>
                        <Link to='/favorate'>
                            favorate
                        <span className={classes.badge}>{favoratectx.totalFavorate}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
      
    );
}
export default Minnavigation;