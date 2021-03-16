/** @format */
import "./App.css"
import React, { useEffect, useState } from "react"
import { getSingleFiles, singleFileUpload } from "./api"
const SingleUpload = () => {
 const [files, setFile] = useState("")
 const [singleimgs, setsingleimgs] = useState("")
const [is,setIS] = useState('');

const {name} =files;
const [nameis,setnmaeis] = useState(name)

 const inputHander = (r) => {
  setFile(r.target.files[0])
  console.log(r.target.files[0])
 }

 const clickHander = (e) => {
  e.preventDefault()
  const data = new FormData()
  data.append("file", files)
  singleFileUpload(data)
  setnmaeis("")
setIS(true);
setTimeout(() => {
  setIS(false);
},1000)

 }

 useEffect(() => {
  const data = getSingleFiles()
  data
   .then((data) => {
    setsingleimgs(data)
   })
   .catch((err) => err)
 }, [singleimgs,files])

 return (
  <>
   <div className="d-flex justify-content-center align-items-center my-4 flex-column">
    <h4>upload Your Memories✔</h4>
    {is?'Upoad SuccesFull':''}
    <form className="shadow-lg p-4 my-5" onSubmit={clickHander}>
     <input
      name="file"
      type="file"
      value={nameis}
      onChange={inputHander}
      className="from-control my-5"
     />
     <button className="btn btn-primary">submit</button>
    </form>

    <div className="Gridmain">
     {!singleimgs ? <h1>Loading....</h1> : ""}
     {singleimgs
      ? singleimgs.map((da) => (
         <div className="view">
          <img
           width="450px"
           height="px"
           src={`https://uploade-file-pip-pipo.herokuapp.com/${da.filePath}`}
           alt=""
          />
         </div>
        ))
      : ""}
    </div>
   </div>
  </>
 )
}

export default SingleUpload
