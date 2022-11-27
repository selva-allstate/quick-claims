import './App.css';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import ClaimsTable from './components/ClaimsTransaction/ClaimsTable';

function App() {
  return (
    <div>
      <Menu />
      <Search />
      <ClaimsTable />
    </div>
  );
}

export default App;
