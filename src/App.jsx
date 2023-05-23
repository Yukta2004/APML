import React from "react";
import Gaadi_Malik_Issue from "./components/GMI/Gaadi-Malik-Issue";
import New_Tyre_Issue from "./components/ControlRoom/NTI/New-Tyre-Issue";
import autoScroll from '../src/components/autoScroll';

export default function App() {
  return (
    <>
    <div className="App">
      <Gaadi_Malik_Issue/>
</div>
    </>
  );
}



// let newAPiDate = "2023-05-12T01:33:41z";
// let countfrom = new Date(newAPiDate).getTime();
// let Day = new Date(countfrom).getDate();
// // let Month = new Date(countfrom).getMonth() + 1;
// let Month = new Date(countfrom).toLocaleString('default',{month: 'short'});
// let Year = new Date(countfrom).getFullYear();
// let OurnewDateFormat = `${Day}/${Month}/${Year}`;
// console.log("Countfrom:" + countfrom);
// console.log("Day:" +  Day);
// console.log("Month:" + Month);
// console.log("Year:" + Year );
