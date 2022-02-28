import {useContext} from 'react';
import FavorateContext from '../Store/favorates-context';
import Meetuplist from '../components/meetups/Meetuplist';

function Favorate(){
    const favoratectxw=useContext(FavorateContext);
    
    let content;
    if(favoratectxw.totalFavorate === 0){
        content=<p>There is no favorates!!!!</p>
    }else{
        content=<Meetuplist meetups={favoratectxw.favorates}/>
    }

return (
    <section>
        <h1>Favorate</h1>
        {content}
    </section>);
}
export default Favorate;
