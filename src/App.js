import './App.css';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import ClaimsTable from './components/ClaimsTransaction/ClaimsTable';
import ClaimDetail from './components/ClaimsTransaction/ClaimDetail';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AddClaim from './components/AddClaimTransaction/AddClaim';
import FindClaimsPage from './components/ClaimsTransaction/FindClaimsPage';

function App() {
  const [SelectedClaim, setSelectedClaim] = useState(null);
  const [SearchClaim, setSearchClaim] = useState("");
  //setSelectedClaim(SelectedClaim);
   
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/addclaim" element = {<AddClaim />} />
        <Route path="/newclaim" element = {<AddClaim />} />
        <Route path="/findclaim" element ={
         <FindClaimsPage SearchClaim = {SearchClaim} setSearchClaim = {setSearchClaim}
         setSelectedClaim={setSelectedClaim} SelectedClaim={SelectedClaim}/>
        }/>
        <Route path="/findclaim/:claimNo" element ={ 
          <FindClaimsPage SearchClaim = {SearchClaim} setSearchClaim = {setSearchClaim}
          setSelectedClaim={setSelectedClaim} SelectedClaim={SelectedClaim}/>          
        }/>
        <Route path="/searchclaim" element ={
          <>
              <Search SearchClaim = {SearchClaim} setSearchClaim = {setSearchClaim}/>
              <ClaimsTable setSelectedClaim={setSelectedClaim} SearchClaim={SearchClaim}/>
               {SelectedClaim != null && <ClaimDetail claim={SelectedClaim} />}
          </>
        }/>
        <Route path="/" element={ <h1>Welcome to Claims Processing System </h1> }/>
        <Route path="*" element={ <h1>Sorry - that page doesn't exist</h1> }/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
