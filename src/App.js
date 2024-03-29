import './App.css';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import ClaimsTable from './components/ClaimsTransaction/ClaimsTable';
import ClaimDetail from './components/ClaimsTransaction/ClaimDetail';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AddClaim from './components/AddClaimTransaction/AddClaim';
import FindClaimsPage from './components/ClaimsTransaction/FindClaimsPage';
import { Provider } from 'react-redux';
import store from './components/store';
import UpdateClaimPage from './components/UpdateClaimTransaction/UpdateClaimPage';
import SearchPolicy from './components/Search/SearchPolicy';
import FindClaimsForPolicy from './components/ClaimsTransaction/FindClaimsForPolicy';
import Help from './components/Help/Help';
import AddTask from './components/AddTaskTransaction/AddTask';
import UpdateTask from './components/UpdateTaskTransaction/UpdateTask';

function App() {
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [searchClaim, setSearchClaim] = useState("");
  const [searchPolicyClaim, setSearchPolicyClaim] = useState("");
  //setSelectedClaim(SelectedClaim);
   
  return (
    <BrowserRouter>
    <Provider store = {store} >
      <Menu />
      <Routes>
        <Route path="/addclaim" element = {<AddClaim />} />
        <Route path="/findclaim" element ={
          <>
         <FindClaimsPage SearchClaim = {searchClaim} setSearchClaim = {setSearchClaim}
         setSelectedClaim={setSelectedClaim} SelectedClaim={selectedClaim}/>
         {selectedClaim != null && <ClaimDetail claim={selectedClaim} />}
        </>}/>
        <Route path="/findclaim/:claimNo" element ={ 
         <> <FindClaimsPage SearchClaim = {searchClaim} setSearchClaim = {setSearchClaim}
          setSelectedClaim={setSelectedClaim} SelectedClaim={selectedClaim}/>  
        {selectedClaim != null && <ClaimDetail claim={selectedClaim} />}
         </>
        }/>
        <Route path="/searchclaim" element ={
          <>
              <Search SearchClaim = {searchClaim} setSearchClaim = {setSearchClaim}/>
              <ClaimsTable setSelectedClaim={setSelectedClaim} SearchClaim={searchClaim}/>
               {selectedClaim != null && <ClaimDetail claim={selectedClaim} />}
          </>
        }/>
         <Route path="/updateclaim/:upclNo" element={
        <>
        <UpdateClaimPage SearchClaim = {searchClaim} setSearchClaim = {setSearchClaim}
        setSelectedClaim={setSelectedClaim} claim={selectedClaim}/>
        
        </>

        } />
         <Route path="updateclaim/:upclNo1/task" element={
          <>
          <AddTask searchClaim = {searchClaim} setSearchClaim = {setSearchClaim}
          setSelectedClaim = {setSelectedClaim} claim={selectedClaim} />
          </>
        }/>
        <Route path="updateclaim/:upclNo2/task/:task1" element={
          <>
          <UpdateTask searchClaim = {searchClaim} setSearchClaim = {setSearchClaim}
          setSelectedClaim = {setSelectedClaim} claim={selectedClaim} />
          
          </>
        } />
       
        <Route path="/searchpolicy" element = {
          <>
        <SearchPolicy searchPolicyClaim = {searchPolicyClaim} setSearchPolicyClaim = {setSearchPolicyClaim}
        setSelectedClaim={setSelectedClaim} claim={selectedClaim}/>
         
        </>
        } />
         <Route path="/findpolicy" element = {
          <>
        <FindClaimsForPolicy searchPolicyClaim = {searchPolicyClaim} setSearchPolicyClaim = {setSearchPolicyClaim}
        setSelectedClaim={setSelectedClaim} claim={selectedClaim}/>
        {selectedClaim != null && <ClaimDetail claim={selectedClaim} />}
        </>
      }/>
         <Route path="/findpolicy/:srchpol" element = {
          <>
        <FindClaimsForPolicy searchPolicyClaim = {searchPolicyClaim} setSearchPolicyClaim = {setSearchPolicyClaim}
        setSelectedClaim={setSelectedClaim} claim={selectedClaim}/>
        {selectedClaim != null && <ClaimDetail claim={selectedClaim} />}
        </>
      }/>
      <Route path="/help" element = {<Help />} />
        <Route path="/" element={ <h1>Welcome to Claims Processing System </h1> }/>
        <Route path="*" element={ <h1>Sorry - that page doesn't exist</h1> }/>
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
