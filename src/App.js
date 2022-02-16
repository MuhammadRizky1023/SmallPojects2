
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import { DetailProduct }  from './pages/DetailProduct';
import { ListProducts } from './pages/ListProducts';


function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route path="/" component={HomePage}  exact />
          <Route path="/products" component={ListProducts} />
            <Route path="/products-detail/:id" component={DetailProduct} />
          </Switch>
      </Router>
      </div>
      
  );
}

export default App;

