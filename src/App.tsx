import { FormEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStarted, fetchProductsThunk, filterProductsThunk } from './store/actions/fetchProducts';

interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}


function App() {
  const [titleFilter, setTitleFilter] = useState<string>('');
  const dispatch = useDispatch();
  const products = useSelector(({ products }: any) => {
    return products
  })

  useEffect(() => {
    fetchProductsThunk()(dispatch);
  }, [])
  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    filterProductsThunk()(dispatch, titleFilter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={(e) => submitForm(e)}>
          <input type="text" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
        {products.isFetching ? (
          <p>Carregando...</p>
        ) : null}
        {products.errorMessage ? (
          <span>{products.errorMessage}</span>
        ) : null}
        {products && products.products.map((product: IProducts) => (
          <p key={product.id}>{product.title}</p>
        ))
        }
      </header>
    </div>
  )
}

export default App
