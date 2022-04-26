import { Provider } from 'react-redux';
import './App.css';
import SearchAppBar from './components/layout/SearchAppBar';
import Main from './pages/Main';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchAppBar >
        </SearchAppBar>
        <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
