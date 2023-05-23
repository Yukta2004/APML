import React, { useEffect, useState } from "react";

// IMPORT FUNCTIONS
import { fetchData } from "./ntiFunction";

export default function New_Tyre_Issue() {
  const [loadedContent, setLoadedContent] = useState([]);
  
  //  const [lC, setLC] = useState(null);
  //  const [eC, setEC] = useState(null);

  useEffect(() => {
    (async () => {
      setLoadedContent(await fetchData());
    })();
  }, []);

  return (
    <>
      <div id="Section1">
        <div className="SubSection">
        <div className="Loaded">
          <div className="new_tyre_heading" >
            <p className="caseno" 
            type="text" disabled>
 
           <span> New Tyre issue(Loaded)</span></p> 
          </div>
            
          <table className="table table-borderless">
            <thead className="tableHeading">
            <tr className="tableTitle" >
                <th>V No.</th>
                <th>GM</th>
                <th>Work Place</th>
                <th>Status</th>
                <th>Description</th>
                <th>Time Up </th>
              </tr>
            </thead>
            <tbody>
              {loadedContent.map((e) => {
                return (
                  <tr className="table-active">
                    <td className="spacing">
                     <td>{e.vecNo || "NA"}</td> 
                      <span>
                        {e.len}
                        <img
                          // style="background-color: black"
                          src={e.compLogo}
                          width="40px"
                          height="20px"
                        />
                        |{e.details.year}|{e.details.cover}|{e.details.type}|
                      </span>
                      <span
                        className={
                          e.rDetails.speed > 5
                            ? "working-rotated-thing"
                            : "speed-o"
                        }
                      >
                        {e.run}
                      </span>
                      |
                      <span
                        className={e.rDetails.speed > 5 ? "speed" : "speed-o"}
                      >
                        {e.rDetails.speed}
                      </span>{" "}
                      |{" "}
                      <span
                        className={
                          e.rDetails.halt < 1 ? "halt-hrs1" : "halt-hrs"
                        }
                      >
                        {e.rDetails.halt}
                      </span>{" "}
                      |{" "}
                      <span>
                        <img
                          // style="background-color: black"
                          src={e.shipLogo}
                          width="40px"
                          height="20px"
                        />
                      </span>
                    </td>
                    <td>{e.gm}</td>
                    <td>{e.workPlace}</td>
                    <td>{e.currStatus}</td>
                    <td> <textarea className="textArea" value={e.desc}></textarea>
                        </td>
                    <td className="timeLeft">{e.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          </div>
          </div>
    </>
  );
}

{/* {id.ne > 0 ? */}
          {/* <div className="Empty" >
            <div className="new_tyre_heading" >
            <span className="caseno"
            //  value ={id.ne}
              type="text" disabled>
            New Tyre issue(Empty)</span> 
            </div> */}

          {/* <table className="table table-borderless">
            <thead className="tableHeading">
            <tr className="tableTitle" >
                <th>V No.</th>
                <th></th>
                <th>GM</th>
                <th>Work Place</th>
                <th>Status</th>
                <th>Description</th>
                <th>Time Up </th>
              </tr>
            </thead>
            <tbody>
              {emptyContent.map((e) => {
                return (
                  <tr className="table-active">
                    <td className="spacing">
                      {e.vecNo || "NA"}
                      <span>
                        {e.len}
                        <img
                          // style="background-color: black"
                          src={e.compLogo}
                          width="40px"
                          height="20px"
                        />
                        |{e.details.year}|{e.details.cover}|{e.details.type}|
                      </span>
                      <span
                        className={
                          e.rDetails.speed > 5
                            ? "working-rotated-thing"
                            : "speed-o"
                        }
                      >
                        {e.run}
                      </span>
                      |
                      <span
                        className={e.rDetails.speed > 5 ? "speed" : "speed-o"}
                      >
                        {e.rDetails.speed}
                      </span>{" "}
                      |{" "}
                      <span
                        className={
                          e.rDetails.halt < 1 ? "halt-hrs1" : "halt-hrs"
                        }
                      >
                        {e.rDetails.halt}
                      </span>{" "}
                      |{" "}
                      <span>
                        <img
                          // style="background-color: black"
                          src={e.shipLogo}
                          width="40px"
                          height="20px"
                        />
                      </span>
                    </td>
                    <td>{e.gm}</td>
                    <td>{e.workPlace}</td>
                    <td>{e.currStatus}</td>
                    <td>
                          <textarea className="textArea" defaultValue={e.desc}></textarea></td>
                        
                        <td className="timeLeft">{e.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          {/* </div> */}
          {/* :""} */}