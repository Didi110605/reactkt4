import {Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/products" element={<ProductListPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;