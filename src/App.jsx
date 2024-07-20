import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { messageAtom, jobsAtom,myNetworkAtom,notificationAtom ,sumAllCountSelectorAtom } from './context'
import  {RecoilRoot , useRecoilState , useSetRecoilState ,useRecoilValue} from "recoil"
function App(){
  return (
    <>
    <RecoilRoot>
<MyApp/>
    </RecoilRoot>
    </>
  )
}

function MyApp() {
  const [myNetworkCount,setMynetworkCount] = useRecoilState(myNetworkAtom);
  const [jobsCount, setJobsCount] = useRecoilState(jobsAtom);
  const [messageCount,setMessageCount] = useRecoilState(messageAtom);
  const [notificationCount,setNotificationCount] = useRecoilState(notificationAtom);
  const totalNotification = useRecoilValue(sumAllCountSelectorAtom)
   
 const clearAll = () => {
  setMynetworkCount(0);
  setJobsCount(0);
  setNotificationCount(0);
  setMessageCount(0);
 }
  return (
    <>
    <button>Home </button>
    <button onClick={()=>{ (setMynetworkCount(myNetworkCount+1))}}>My Network({myNetworkCount})</button>
    <button onClick={ () => {(setJobsCount(jobsCount+1))}}>Jobs ({jobsCount})</button>
    <button onClick={ ()=>{(setMessageCount(messageCount+1))}}>Messages({messageCount})</button>
    <button onClick={()=> (setNotificationCount(notificationCount+1))}> Notification({notificationCount})</button>
    <button 
    onClick={() => {
        setNotificationCount(notificationCount + 1);
        setMessageCount(messageCount + 1);
        setMynetworkCount(myNetworkCount + 1);
        setJobsCount(jobsCount + 1);
    }}
>
    Me {totalNotification}
</button >   
<div style={{padding:"top:40px"}}>
 <button  onClick= {clearAll} >clear all</button>
</div>
 </>
  )
}


export default App
