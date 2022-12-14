import './App.css';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import ClaimsTable from './components/ClaimsTransaction/ClaimsTable';
import ClaimDetail from './components/ClaimsTransaction/ClaimDetail';
import { useState } from 'react';

function App() {
  const [SelectedClaim, setSelectedClaim] = useState(null);
  return (
    <div>
      <Menu />
      <Search />
      <ClaimsTable setSelectedClaim={SelectedClaim}/>
      {SelectedClaim != null && <ClaimDetail claim={SelectedClaim} />}
    </div>
  );
}

export default App;
