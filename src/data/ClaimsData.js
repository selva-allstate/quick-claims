import axios from "axios"


const headers = new Headers({"Accept" : "application/json"})

//add transaction: POST /api/claim
//update           PUT api/claim/142645

export const addNewClaim = (claim) =>
{
    return axios({url : "http://localhost:8080/api/claims",
                  method:"POST",
                  headers: {"Accept" : "application/json", "Content-Type":"application/json"},
                  data : claim
                })
}
export const addNewTask = (claimNo, task) =>
{
  return axios({url : "http://localhost:8080/api/claims/"+claimNo+"/task",
                method:"POST",
               headers:{"Accept" : "application/json", "Content-type":"application/json"},
               data : task
              })
}

export const getAllTasksForClaimNo = (claimNo) =>
{
  return axios({url : "http://localhost:8080/api/claims/"+claimNo+"/task",
                method:"GET",
                headers: {"Accept" : "application/json"}
              })
}
export const updateClaimTask = ( taskNo, task) =>
{
  return axios({url : "http://localhost:8080/api/claims/task/"+taskNo,
                method:"PUT",
                headers:{"Accept" : "application/json", "Content-Type" : "application/json"},
                data : task
              })
}
export const updateClaimData = (claimNo, claim) =>
{
    return axios({url : "http://localhost:8080/api/claims/"+claimNo,
                  method:"PUT",
                  headers:{"Accept" : "application/json", "Content-Type" : "application/json"},
                  data : claim    
                            })
}
export const getAllClaimsForStatuscode = (statusCode) =>
{
  return axios ( {url : "http://localhost:8080/api/claims/status/"+statusCode,
                  method:"GET",
                  headers: {"Accept" : "application/json"}
                })
}

export const getAllClaims = () =>
{
  return axios ( {url : "http://localhost:8080/api/claims",
                  method:"GET",
                  headers: {"Accept" : "application/json"}
                })
}
export const getStatuscodes = () =>
{
      return axios ( {url : "http://localhost:8080/api/statuscode",
                       method : "GET",
                      headers: {"Accept" : "application/json"}
                     })
}

export const getAllClaimsForClaimNo = (claimNo) => 
{
  return axios({url : "http://localhost:8080/api/claims/"+claimNo,
               method: "GET",
               headers: {"Accept" : "application/json"}
})
}
export const getAllClaimsForPolicyNo = (policyNo) => 
{
  return axios({url : "http://localhost:8080/api/claims?policyNo="+policyNo,
               method: "GET",
               headers: {"Accept" : "application/json"}
})
}

//}