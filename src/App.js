import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
    <BrowserRouter>
    
      <Header></Header>
      <Switch>
      
    <Route exact path='/shop'>
      <Shop></Shop>
    </Route>

    <Route exact path='/inventory'>
      <Inventory></Inventory>
    </Route>
    <Route exact path ='/order'>
      <OrderReview></OrderReview>
    </Route>

    <Route path='*'>
      <NotFound></NotFound>
    </Route>
    
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
