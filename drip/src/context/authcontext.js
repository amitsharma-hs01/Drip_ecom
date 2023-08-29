import {useState,useEffect,useContext,createContext} from "react"

const AuthContext=createContext()


const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    })
    useEffect(()=>{
      const authData=localStorage.getItem("authData")
      if(authData){
        const parseData=JSON.parse(authData)
        setAuth({
            ...auth,
            ...parseData
        })
      }
    },[setAuth])
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext)

export {useAuth,AuthProvider};