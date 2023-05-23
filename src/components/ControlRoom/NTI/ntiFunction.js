import axios from "axios";
// import "./ntiStyles.css";

let x;
let z;

// URLS
const issueUrl =
  'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType":["Driver Issue"],"status.keyword":["Open"]}';

const vehicleUrl = "https://apis.fretron.com/partner-fleet/v2/allVehiclesList/";

const logoUrl =
  "https://script.google.com/macros/s/AKfycbyzz-dKS85zqH8Hzim81SIm-7wKvvafbAVdPikeL9oc9tumXzqZKWP2k73mYRkF1zmy/exec";

// AUTH HEADER
const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w`,
};

export const fetchData = async () => {
  try {
    let issueData;
    let vehicleData;
    let sheetData;

    let content = [];

    const issueRes = await axios.get(issueUrl, { headers });
    issueData = issueRes.data;

    const vehRes = await axios.get(vehicleUrl, { headers });
    vehicleData = vehRes.data.data;

    const sheetRes = await axios.get(logoUrl);
    sheetData = sheetRes.data.data;

    vehicleData = vehicleData.map((vehicle) => ({
      ...sheetData.find(
        (element) => vehicle.vehicleRegistrationNumber === element[0]
      ),
      ...vehicle,
    }));

    for (let i = 0; i < issueData.length; i++) {
      for (let j = 0; j < vehicleData.length; j++) {
        if (
          issueData[i]["issueNo"] != null &&
          issueData[i]["issueType"] == "Driver Issue" &&
          (kbd(issueData[i]["customFields"]).includes("Tyre") ||
            kbd(issueData[i]["customFields"]) == "New Tyre" ||
            kbd(issueData[i]["customFields"]) == "NEW TYRE") &&
          kad(issueData[i]["customFields"]).includes("Loaded") &&
          !currentStatus(issueData[i]["customFields"]).includes(
            "ONWAY DOCUMENTATION PENDING"
          ) &&
          vec(issueData[i]["customFields"]) ==
            vehicleData[j]["vehicleRegistrationNumber"] &&
          vehicleData[j]["customFields"] != null
        ) {
          console.log("hi");
          let elementData = {
            vecNo: vecNo(issueData[i]["customFields"]),
            len: len(vehicleData[j]["customFields"]),
            compLogo: vehicleImg(vehicleData[j]["vehicleMake"]),
            details: {
              year: makeVehicle(vehicleData[j]["customFields"]),
              cover: AMCCover(vehicleData[j]["customFields"]),
              type: local(vehicleData[j]["customFields"]),
            },
            run: "⚙️",
            rDetails: {
              speed: vehicleData[j][24],
              halt: vehicleData[j][23],
            },
            shipLogo: vehicleData[j][27],
            gm: gad(vehicleData[j]["customFields"]),
            workPlace: workPlaceSplit(workP(issueData[i]["customFields"])),
            currStatus: currentStatus(issueData[i]["customFields"]),
            desc: issueData[i]["issueDescription"],
            time: issueData[i]["createdAt"],
          };
          content.push(elementData);
        }
      }
    }

    // console.log(content.length);
    return content;
  } catch (err) {
    console.log(err);
  }
};

export function wp(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Work Place") {
      console.log(a[i]["fieldKey"]);
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    }
  }
  return x;
}

export function kad(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Vehicle Status Bot") {
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    }
  }
  return x;
}

export function kbd(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Problem Is") {
      x = a[i]["indexedValue"][0].split("_")[1].split("/")[0];
      break;
    }
  }
  return x;
}

export function vecNo(a) {
  let x;
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Vehicle Number") {
      x = a[i]["value"];
      // return x.replace(/[^0-9]/g, "").substring(2);
      return x;
    } else {
      x = a[i]["value"];
    }
  }
  return x;
}

export function vec(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Vehicle Number") {
      x = a[i]["indexedValue"][0].split("_")[1];

      break;
    }
  }
  return x;
}

export function currentStatus(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Current Status") {
      z = a[i]["value"];
      break;
    }
  }
  if (z == "UNATTENDED") {
    z = "❌";
  } else if (z == "WIP" || z == " WIP") {
    z = "🔧⚙️";
  } else if (z == "PAYMENT PENDING" || z == " PAYMENT PENDING") {
    z = "💲";
  } else if (z == "ON WAY PAYMENT PENDING") {
    z = "🔄💲";
  } else if (
    z == "ONWAY DOCUMENTATION PENDING" ||
    z == "ONWAY DOCUMENTATION PENDING "
  ) {
    z = "🟢";
  } else if (z == "WAIT FOR APPROVAL") {
    z = "✋";
  } else {
    return z;
  }
  return z;
}

export function len(a) {
  var xz;
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "VehicleDescription") {
      xz = a[i]["value"];

      break;
    } else {
      xz = "-";
    }
  }

  z = xz;
  if (z.includes("MXL")) {
    z = "🚛";
  } else if (z.includes("SXL") || z == "SXL") {
    z = "🚚";
  } else if (z.includes("TRAILER") || z == "TRAILER") {
    z = "🚍";
  } else {
    z = "🚜";
  }
  return z;
}

export function vehicleImg(a) {
  if (a == "TATA") {
    a = "https://logos-marques.com/wp-content/uploads/2021/02/Tata-Logo.png";
  } else if (a == "ASHOK LEYLAND") {
    a = "https://i.ibb.co/XFdTXJH/ashok-leyland.png";
  } else if (a == "EICHER") {
    a =
      "https://i.pinimg.com/originals/c5/d1/4f/c5d14ff09fa2785206d54031091950d7.jpg";
  } else if (a == "BHARAT BENZ") {
    a =
      "https://i.pinimg.com/originals/73/06/ad/7306ad1a0d868aaef1229848caf5d905.jpg";
  } else if (a == "MAHINDRA & MAHINDRA") {
    a = "https://i.ibb.co/bK4DRLt/Screenshot-2.png";
  } else {
    a = a;
  }
  return a;
}

export function makeVehicle(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "MakeDate") {
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    }
  }

  var date = new Date(Number(x));
  return date.getFullYear();
}

export function AMCCover(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "AMC") {
      x = a[i]["indexedValue"][0].split("_")[1];
      break;
    } else {
      x = "-";
    }
  }
  return x;
}

export function local(a) {
  var xz;
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "VehicleDescription") {
      xz = a[i]["value"];

      break;
    } else {
      xz = "-";
    }
  }
  if (xz.includes("LOCAL") || xz.includes("Local")) {
    xz = xz.split("_")[1];
  } else if (xz.includes("LINE")) {
    xz = xz.split("_")[0];
  }
  return xz;
}

export function gad(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "FleetZoneResponsiblePerson") {
      x = a[i]["indexedValue"][0].split("_")[1];
      var op = "";
      for (let j = 0; j < a[i]["value"].split(" ").length; j++) {
        op = op + a[i]["value"].split(" ")[j].substring(0, 1);
      }

      x = op;
      break;
    }
  }
  return x;
}

export function getTime(a) {
  var countFrom = new Date(a).getTime();
  let now = new Date();
  let b = new Date(countFrom);
  let distance = now - b;

  var secondsInADay = 60 * 60 * 1000 * 24;
  var secondsInAHour = 60 * 60 * 1000;

  let days = Math.floor((distance / secondsInADay) * 1);
  let hours = Math.floor(((distance % secondsInADay) / secondsInAHour) * 1);
  let mins = Math.floor(
    (((distance % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
  );
  let secs = Math.floor(
    ((((distance % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000) * 1
  );
  let xyz = days + "d " + hours + "h " + mins + "m " + secs + "s ";
  return xyz;
}

export function workP(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]["fieldKey"] == "Work Place") {
      z = a[i]["value"];
      break;
    }
  }

  return z;
}
export function workPlaceSplit(a) {
  z = a;
  var data;
  if (z == "Local") {
    data = z;
  } else if (z == "Apml Workshop- KWS" || z == "Apml Workshop- CWK") {
    data = z.split("Workshop-")[1];
  } else if (z == "Workshop-(Tata)" || z == "Workshop-(Eicher)") {
    data = z.split("(")[1].split(")")[0];
  } else if (z == "Workshop-(Ashok Leyland)") {
    data = z.split("(")[1].split(")")[0].split(" ")[1];
  }
  return data;
}
