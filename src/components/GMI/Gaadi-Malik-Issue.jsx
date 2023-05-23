import React, { useEffect, useState } from "react";
// IMPORT FUNCTIONS
import { fetchData } from "./gmiFunctions";
import { Spinner } from "../Spinner";
import moment from 'moment';

export default function Gaadi_Malik_Issue() {
 
  const [loadedContent, setLoadedContent] = useState([]);
  const [emptyContent, setEmptyContent] = useState([]);
  const [loading, setLoading] = useState(true);
  


  let [type, setType] = useState("all");
  let [count, setCount] = useState({
    rl: 0,
    re: 0,
    al: 0,
    ae: 0,
    ul: 0,
    ue: 0,
    ll: 0,
    le: 0,
    rol: 0,
    roe: 0,
    kl: 0,
    ke: 0,
    cl: 0,
    ce: 0,
    ol: 0,
    oe: 0,
  });

  
  

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setLoadedContent(data[0]);
      setEmptyContent(data[1]);
      setLoading(false);
    })();
  }, []);
  let temp;

  const getCount = () => {
    // get all the elements with id
    let rl = document.querySelectorAll("#rl");
    let re = document.querySelectorAll("#re");
    let al = document.querySelectorAll("#al");
    let ae = document.querySelectorAll("#ae");
    let ul = document.querySelectorAll("#ul");
    let ue = document.querySelectorAll("#ue");
    let ll = document.querySelectorAll("#ll");
    let le = document.querySelectorAll("#le");
    let rol = document.querySelectorAll("#rol");
    let roe = document.querySelectorAll("#roe");
    let kl = document.querySelectorAll("#kl");
    let ke = document.querySelectorAll("#ke");
    let cl = document.querySelectorAll("#cl");
    let ce = document.querySelectorAll("#ce");
    let ol = document.querySelectorAll("#ol");
    let oe = document.querySelectorAll("#oe");

    setTimeout(() => {
      setCount({
        ...count,
        
        rl: rl.length,
        re: re.length,
        al: al.length,
        ae: ae.length,
        ul: ul.length,
        ue: ue.length,
        ll: ll.length,
        le: le.length,
        rol: rol.length,
        roe: roe.length,
        kl: kl.length,
        ke: ke.length,
        cl: cl.length,
        ce: ce.length,
        ol: ol.length,
        oe: oe.length,
      });
    }, 1000);
  };

  getCount();
  
  return (
    <div>
    <>
     <div id="navBar">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <span className="comp_name" style={{color:"red"}}>APML </span>Dashboard
       </a>
    <img className="logo" src="src\agarwal-packers-logo.png" alt="logo" style={{height:"65px", Width: "35px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
     
      <button onClick={() => setType("all")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">ALL</button>

      <button onClick={() => setType("LINE_MXL")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE MXL</button>
      <button onClick={() => setType("LINE_SXL")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE SXL</button>
      <button onClick={() => setType("LINE_TRAILER")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE_TRAILER</button>
      <button onClick={() => setType("LINE_AS")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE_AS</button>
      <button onClick={() => setType("LINE_DOUBLEDECK")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE_SP_DOUBLEDECK</button>
      <button onClick={() => setType("LINE_SP")}className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE_SP</button>
      <button onClick={() => setType("LINE_CAR")}className="btn btn-danger btn-sm my-1 mx-2 " type="button">LINE_CAR</button>
      <button onClick={() => setType("OTHER")} className="btn btn-danger btn-sm my-1 mx-2 " type="button">OTHER</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
    {/* {console.log(count.rl,"count")} */}
      <div id="Section">
             {/* RTO */}
             <div className="SubSection">
    {count.rl >= 0 ? 
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                type="text"
                value={count.rl}
                disabled />
            <span className="title">RTO Issue (Loaded)</span>  
           {/* {console.log(count.rl,"count")} */}
 </div> 

            <table className="table align-middle">
              <thead className="tableHeading">
                <tr className="tableTitle">
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody >
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "RTO") ||
                    (type === "all" && e.prob === "RTO") 
                   
                   ) {
                    return (
    
                      <tr className="table-active" id="rl">
                        <td className="spacing">
                          {e.vecNo || "NA"}{" "}
                          <span>
                            {e.len}{" "}
                            <img src={e.compLogo} width="40px" height="20px" />{" "}
                            | {e.details.year} | {e.details.cover} |{" "}
                            {e.details.type} |{" "}
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                          <textarea className ="textArea" value={e.desc}></textarea>
                        </td>
                        <td className="timeLeft">{moment().format('MMMM Do YYYY, h:mm:ss a')}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            )}
</table>    
          </div>
  :""}

{count.re >= 0 ?
 <div className="Empty">
            <div className="heading" > 
              <input  className="no_of_case"
                value={count.re}
                type="text"
                disabled 
                
              />
            <span className="title"> RTO Issue (Empty)</span> 
            </div>

            <table className=" table align-middle">

              <thead  className="tableHeading">
                <tr className="tableTitle">
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                   
                    (e.len === type && e.prob === "RTO") ||
                    (type === "all" && e.prob === "RTO")
                  ) {
                    return ( 
                      
                      <tr className="table-active" id="re">
                      
                        <td  className="spacing">
                          {e.vecNo || "NA"}{" "}
                          <span>
                            {e.len}{" "}
                            <img src={e.compLogo} width="40px" height="20px" />{" "}
                            | {e.details.year} | {e.details.cover} |{" "}
                            {e.details.type} |{" "}
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                          <textarea className="textArea" value={e.desc}></textarea>
                        </td>
                        <td className="timeLeft">{moment().format('MMMM Do YYYY, h:mm:ss a')}</td>
                      </tr>

                    );
                  }
                })}
              </tbody>
      )}
            </table> 
        </div>
:""}
      </div>

        {/* एडवांस */}

        <div className="SubSection">         
           {count.al >= 0 ?
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.al}
                type="text"
                disabled           
              />
              <span className="title">एडवांस Issue (Loaded)</span> 
            </div>
     
            <table  className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "एडवांस ") ||
                    (type === "all" && e.prob === "एडवांस ")
                  ) {
                    return (
                      <tr className="table-active" id="al">
                        <td className="spacing">
                          {e.vecNo || "NA"}{" "}
                          <span>
                            {e.len}{" "}
                            <img src={e.compLogo} width="40px" height="20px" />{" "}
                            | {e.details.year} | {e.details.cover} |{" "}
                            {e.details.type} |{" "}
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea>
                        </td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
        : " "}


 {count.ae >= 0 ?
          <div  className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value={count.ae}
                type="text"
                disabled 
                
              />
              <span className="title">एडवांस Issue (Empty)</span> 
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "एडवांस ") ||
                    (type === "all" && e.prob === "एडवांस ")
                  ) {
                    return (
                      <tr className="table-active" id="ae">
                        <td className="spacing">
                          {e.vecNo || "NA"}
                        
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                          <textarea className="textArea" value={e.desc}></textarea></td>
                        
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
         : " "}
          
        </div>

        {/* अनलोडिंग समस्या	*/}
        <div className="SubSection">
        {count.ul >= 0 ? 
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.ul}
                type="text"
                disabled
                 
              />
             <span className="title">अनलोडिंग समस्या </span> Issue (Loaded)
            </div>

            <table  className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "अनलोडिंग समस्या ") ||
                    (type === "all" && e.prob === "अनलोडिंग समस्या ")
                  ) {
                    return (
                      <tr className="table-active" id="ul">
                        <td className="spacing">
                          {e.vecNo || "NA"}
                       
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea>
                        </td>
                        <td className="timeLeft">{e.time}</td>
                      
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
           :""}

           {count.ue >= 0 ? 
          <div  className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value= {count.ue}
                type="text"
                disabled
                 
               
              />
              <span className="title"> अनलोडिंग समस्या Issue (Empty)</span>
            </div>

            <table  className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "अनलोडिंग समस्या ") ||
                    (type === "all" && e.prob === "अनलोडिंग समस्या ")
                  ) {
                    return (
                      <tr className="table-active" id="ue">
                         <td className="spacing">
                          {e.vecNo || "NA"}{" "}
                       
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|{""}
                            {e.details.year}|{e.details.cover}|{e.details.type}|{""}
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td><textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
             :" "}
        </div>

        {/* लोडिंग समस्या */}
        <div className="SubSection">
        {count.ll >= 0 ? 
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.ll}
                type="text"
                disabled
                 
               
              />
               <span className="title">लोडिंग समस्या Issue (Loaded)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
                <tr className="tableTitle">
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "लोडिंग समस्या") ||
                    (type === "all" && e.prob === "लोडिंग समस्या")
                  ) {
                    return (
                      <tr className="table-active" id="ll">
                        <td className="spacing">
                          {e.vecNo || "NA"}{""}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|{""}
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea>
                        </td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
         :""}

         {count.le >= 0 ? 
          <div className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value={count.le}
                type="text"
                disabled 
                
               
              />
              <span>लोडिंग समस्या Issue (Empty)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>       
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "लोडिंग समस्या") ||
                    (type === "all" && e.prob === "लोडिंग समस्या")
                  ) {
                    return (
                      <tr className="table-active" id="le">
                        <td className="spacing">
                          {e.vecNo || "NA"}{" "}        
                          <span>
                            {e.len}{""}
                            <img src={e.compLogo} width="40px" height="20px" />|{" "}  
                            {e.details.year}|{e.details.
                            cover}|{" "} 
                            {e.details.type}|{" "}
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
         :" "}
        </div>

        {/* रूट समस्या */}
        <div className="SubSection">
        { count.rol >= 0 ?  
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.rol}
                type="text"
                disabled 
                
               
              />
               <span className="title">रूट समस्या Issue (Loaded)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
        
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "रूट समस्या ") ||
                    (type === "all" && e.prob === "रूट समस्या ")
                  ) {
                    return (
                      <tr className="table-active" id="rol">
                        <td className="spacing">
                          {e.vecNo || "NA"}
                          
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
           :" "}

           {count.roe >= 0 ?
          <div className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value={count.roe}
                type="text"
                disabled
              />
              <span className="title"> रूट समस्या Issue (Empty)</span>
            </div>

            <table  className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "रूट समस्या ") ||
                    (type === "all" && e.prob === "रूट समस्या ")
                  ) {
                    return (
                      <tr className="table-active" id="roe">
                       <td className="spacing">
                          {e.vecNo || "NA"}
                     
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div> 
      :" "}
        </div>
       

        {/* खाली */}
        <div className="SubSection">
        {count.kl >= 0 ? 
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.kl}
                type="text"
                disabled
                 
              />
              <span className="title"> खाली Issue (Loaded)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "खाली ") ||
                    (type === "all" && e.prob === "खाली ")
                  ) {
                    return (
                      <tr className="table-active" id="kl">
                         <td className="spacing">
                          {e.vecNo || "NA"}
                      
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
         : " "}

          {count.ke >= 0 ?  
          <div  className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value={count.ke}
                type="text"
                disabled
                 
              
              />
            <span className="title"> खाली Issue (Empty)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "खाली ") ||
                    (type === "all" && e.prob === "खाली ")
                  ) {
                    return (
                      <tr className="table-active" id="ke">
                       <td className="spacing">
                          {e.vecNo || "NA"}{" "}                    
                          <span>
                            {e.len}{" "}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|{" "}
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
         : ""}
        </div>

        {/* बिल्टी,चलन */}
        <div className="SubSection">
        {count.cl >= 0 ? 
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.cl}
                type="text"
                disabled 
                
               
              />
               <span className="title">बिल्टी,चलन Issue (Loaded)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "बिल्टी,चलन") ||
                    (type === "all" && e.prob === "बिल्टी,चलन")
                  ) {
                    return (
                      <tr className="table-active" id="cl">
                         <td className="spacing">
                          {e.vecNo || "NA"}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                       <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                       
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
          
              :""}

          {count.ce >= 0 ? 
        
          <div  className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value={count.ce}
                type="text"
                disabled
                 
                
              />
               <span className="title">बिल्टी,चलन Issue (Empty)</span>
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "बिल्टी,चलन") ||
                    (type === "all" && e.prob === "बिल्टी,चलन")
                  ) {
                    return (
                      <tr className="table-active" id="ce">                  
                        <td className="spacing">
                        {e.vecNo || "NA"}                   
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
          :" "}
        </div>

        {/* Other issue */}
        <div className="SubSection">
        {count.ol >= 0 ? 
          <div className="Loaded">
            <div className="heading">
              <input className="no_of_case"
                value={count.ol}
                type="text"
                disabled 
                
              />
               <span className="title">Other issue Issue (Loaded)</span>
            </div>

            <table  className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "Other issue") ||
                    (type === "all" && e.prob === "Other issue")
                  ) {
                    return (
                      <tr className="table-active" id="ol">
                         <td className="spacing">
                          {e.vecNo || "NA"}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                        <textarea className="textArea" value={e.desc}></textarea>
                        </td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
      )}
            </table>
          </div>
        :""}
 
    {count.oe >= 0 ? 
             <div className="Empty">
            <div className="heading">
              <input className="no_of_case"
                value={count.oe}
                type="text"
                disabled 
               
              />
              Other issue Issue (Empty)
            </div>

            <table className=" table align-middle">
              <thead className="tableHeading">
              <tr className="tableTitle" >
                  <th>V No.</th>
                  <th>GM</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Time Up </th>
                </tr>
              </thead>
              {loading ? (
        <Spinner />
      ) : (
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "Other issue") ||
                    (type === "all" && e.prob === "Other issue")
                  ) {
                    return (
                      <tr className="table-active" id="oe">
                         <td className="spacing">
                          {e.vecNo || "NA"}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="20px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
                          </span>
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.run}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed > 5
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.speed}
                          </span>{" "}
                          |{" "}
                          <span
                            className={
                              e.rDetails.speed <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="40px" height="20px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                      <td>
                        <textarea className="textArea" value={e.desc}></textarea></td>
                        <td className="timeLeft">{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              )}
            </table>
          </div>
       :" "}
        </div>
    
       </div>
      
    </>
    </div>
  );
}


