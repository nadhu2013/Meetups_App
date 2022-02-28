import classes from './Layout.module.css';
import Minnavigation from './Minnavigation';

function Layout(props){
    return (<div>
        <Minnavigation/>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>

    );
}
export default Layout;