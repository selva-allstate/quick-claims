import './App.css';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import ClaimsTable from './components/ClaimsTransaction/ClaimsTable';
import ClaimDetail from './components/ClaimsTransaction/ClaimDetail';
import ClaimsRow from './components/ClaimsTransaction/ClaimsRow';

import { useState } from 'react';
import AddClaim from './components/AddClaimTransaction/AddClaim';

function App() {
  const [SelectedClaim, setSelectedClaim] = useState(null);
 
  //setSelectedClaim(SelectedClaim);
   
  return (
    <div>
      <Menu />
      <AddClaim />
      <Search />
      <ClaimsTable SelectedClaim={SelectedClaim}/>
      {SelectedClaim != null && <ClaimDetail claim={SelectedClaim} />}
    </div>
  );
}

export default App;
