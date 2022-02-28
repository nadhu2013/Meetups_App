import {Route, Routes} from 'react-router-dom';
import Allmeetups from './pages/Allmeetups';
import Newmeet from './pages/Newmeet';
import Favorate from './pages/Favorate';
import Layout from './components/layouts/Layout';


function App() {

  return(
  <Layout>
        <Routes>
          <Route path='/' element={<Allmeetups/>} />
          <Route path='/new-meet' element={<Newmeet/>}/>
          <Route path='/favorate' element={<Favorate/>}/>
        </Routes>
   </Layout>
  
    
  );
   
  
}

export default App;
