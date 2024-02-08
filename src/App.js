import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import NewSale from './pages/NewSale';
import OtherPage from './pages/OtherPage';
import { ClientProvider } from './context/ClientContext';
import { BranchProvider } from './context/BranchContext';
import { ProductProvider } from './context/ProductContext';
import Login from './pages/Login';
import RefProvider from './context/RefContext';
import { SaleProvider } from './context/SaleContext';
import Sales from './pages/Sales';

function App() {
  return (
    <div className="App">
      <RefProvider>
        <ClientProvider>
          <BranchProvider>
            <ProductProvider>
              <SaleProvider>
                <Router>
                  <Routes>
                    <Route path='/' element={ <Landing />} />
                    <Route path='login' element={ <Login />}/>
                    <Route path='/dashboard/new-sale' element={ <NewSale /> }/>
                    <Route path='/sales' element={ <Sales />}/>
                    <Route path='/dashboard/other-page' element={ <OtherPage /> }/>
                  </Routes>
                </Router>
              </SaleProvider>
            </ProductProvider>
          </BranchProvider>
        </ClientProvider>
      </RefProvider>
    </div>
  );
}

export default App;
