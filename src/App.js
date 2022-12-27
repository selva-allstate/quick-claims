import './App.css';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import ClaimsTable from './components/ClaimsTransaction/ClaimsTable';
import ClaimDetail from './components/ClaimsTransaction/ClaimDetail';


import { useState } from 'react';
import AddClaim from './components/AddClaimTransaction/AddClaim';

function App() {
  const [SelectedClaim, setSelectedClaim] = useState(null);
  const [SearchClaim, setSearchClaim] = useState("");
  //setSelectedClaim(SelectedClaim);
   
  return (
    <div>
      <Menu />
      <AddClaim />
      <Search SearchClaim = {SearchClaim} setSearchClaim = {setSearchClaim}/>
      <ClaimsTable setSelectedClaim={setSelectedClaim} SearchClaim={SearchClaim}/>
      {SelectedClaim != null && <ClaimDetail claim={SelectedClaim} />}
    </div>
  );
}

export default App;
