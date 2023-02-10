// const root = document.getElementById("root")

// const el = document.createElement("img")

// el.innerText = "Welcome to react"

// el.style.color = "red"

// el.src="https://images.unsplash.com/photo-1675281362093-bbaf0e9e8c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

// root.appendChild(el)

import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./images/amazon.png";
import Avatar from "./images/avatar.png";

// const el = React.createElement("h1",{
//     id:"title",
//     key:"h1",
//    style:{
//     color:"red"
//  }
// },"Welc ome to React")

// const el2 = React.createElement("h2",{
//     id:"title",
//     key:"h2",
//    style:{
//     color:"grey"
//  }
// },"Welcome to React2")

// const container = React.createElement("div",{},[el,el2])

// const header = React.createElement("h1",{},"Namaste React")

// const list1 = React.createElement("li",{key:"1"},"Home")
// const list2 = React.createElement("li",{key:"2"},"About Us")
// const list3 = React.createElement("li",{key:"3"},"Contact Us")

// const uList = React.createElement("ul",{},[list1,list2,list3])

// const container = React.createElement("div",{},[header,uList])

// const container = <h1>Welcome to React</h1>

// console.log(container)

// const header =  "vijay" // babel to react element

// console.log(header); // js object

// function foo(){
//  return "Rajaduari"
// }

//console.log(foo())

// function Dummy(){
//     return <h4 style={styles={color:"red"}}>dummy from function Component</h4>
// }

//console.log(dummy());
// const HeaderComponent = () =>{
//      let isTrue = false;
//    return (
//         <div>
//             <h1>Welcome to React !!!!</h1>
//             <h2>Hello World</h2>
//         </div>)
// }

//const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<HeaderComponent/>)

//Assignment

//  const header1 = React.createElement("h1",null,"Header1")
//  const header2 = React.createElement("h2",null,"Header2")
//  const header3 = React.createElement("h3",null,"Header3")

//  const container = React.createElement("div",{
//     className:"title"
//  },[header1,header2,header3])

//type 2

// const element = (
//     <div className="title">
//         <h1>Header1</h1>
//         <h2>Header2</h2>
//         <h3>Header3</h3>
//     </div>
// )

//type 3

// const HeaderComponent1 =()=>{
//     return <div>Begining</div>
// }

// const TitleComponent = ()=>{
//     return (
//     <div className="title">
//          <HeaderComponent1/>
//          <h1>Header1</h1>
//          <h2>Header2</h2>
//          <h3>Header3</h3>

//      </div>
//     )
// }

// const HeaderComponent = () => {
//   return (
//     <div className="navbar">
//       <img src={Logo} className="logo" alt="logo" />
//       <input placeholder="Search Items" />
//       <img src={Avatar} className="avatar" alt="myProfile" />
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <div>
//       <h4>Footer</h4>
//     </div>
//   );
// };

const listOfRes = [
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "72467",
        "name": "AXN Briyani Center",
        "uuid": "5f4c057d-335b-4e91-902b-d29ce11be9d0",
        "city": "71",
        "area": "Karuvampalayam",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "lsr5rppj8fbj4pb32fme",
        "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 8.5,
        "slugs": {
        "restaurant": "axn-briyani-center-kangayam-road-central-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "No 19 KNB Colony 2nd Street Kangayam Cross Cut Road Tirupur",
        "locality": "Kangayam Road",
        "parentId": 10194,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
        {
        "meta": "20% off | Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 5200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 5200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5885642~p=1~eid=00000186-3ba0-7eb1-2a10-215a00e30169",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "8.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "72467",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "573559",
        "name": "Madras Biriyani",
        "uuid": "25e95083-dcbf-4360-98b3-b8c51ed431cc",
        "city": "71",
        "area": "Pooluvapatti Pirivu",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "czouywarvbbwh9ef3ilc",
        "cuisines": [
        "Biryani",
        "Chinese",
        "Grill"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
        "restaurant": "biriyani-brothers-north-tirupur-north-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "Door No.8/1165, P.N.Road, Pooluvapatti Pirivu, Tiruppur -",
        "locality": "North Tirupur",
        "parentId": 9010,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
        {
        "meta": "20% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 1900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "573559",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "548347",
        "name": "Chicken Only Chicken",
        "uuid": "494e9c00-47b6-4d72-b66e-934e25a9b11b",
        "city": "71",
        "area": "North Tirupur",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "oqaowbxzjggcrikiky6q",
        "cuisines": [
        "Lebanese",
        "Barbecue",
        "Snacks"
        ],
        "tags": [],
        "costForTwo": 19900,
        "costForTwoString": "₹199 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
        "restaurant": "chicken-only-chicken-north-tirupur-north-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "8/3160, Pandian Nagar, Tiruppur, Tamil Nadu 641602, India",
        "locality": "North Tirupur",
        "parentId": 60688,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
        {
        "meta": "20% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 1900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "548347",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1.2000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "508885",
        "name": "Grameen Kulfi",
        "uuid": "3e14be4f-3256-49d2-bffe-435239091a14",
        "city": "71",
        "area": "Kumar Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "dr14v3rnfns48xplb0ay",
        "cuisines": [
        "Ice Cream",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 12000,
        "costForTwoString": "₹120 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 6.900000095367432,
        "slugs": {
        "restaurant": "grameen-kulfi-kumar-nagar-north-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "141, Valayangadu Main Rd, Kumar Nagar, Kumar Nagar South, Tiruppur, Tamil Nadu 641603",
        "locality": "Valayangadu Main Rd",
        "parentId": 12175,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "FLAT125 off",
        "shortDescriptionList": [
        {
        "meta": "FLAT125 off | Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "FLAT125 off | Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
        {
        "meta": "Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "FLAT125 off | Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 4200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5923943~p=4~eid=00000186-3ba0-7eb1-2a10-215b00e3044f",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.9 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "508885",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 6.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.7",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "215837",
        "name": "Friends Buffay",
        "uuid": "e3e0cc32-6732-46a6-af08-4d68223fd407",
        "city": "71",
        "area": "Pandian Nagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "x6qtf41atpseimkkw6jm",
        "cuisines": [
        "Continental",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
        "restaurant": "friends-buffay-north-tirupur-north-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "Pooluvampatti Pirivu, Tirupur, 641602",
        "locality": "North Tirupur",
        "parentId": 84163,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
        {
        "meta": "20% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 1900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "215837",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 500,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "71238",
        "name": "Arafa Chicken Park",
        "uuid": "68ff764e-7b77-48ad-9625-5942eb6918e8",
        "city": "71",
        "area": "Poyampalayam",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "wv2zt44jwkgyrkpqzbsr",
        "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Burgers",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
        "restaurant": "arafa-chicken-park-near-old-busstand-test-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "No 35 , Boyampalayam ,karan medical oppsite ,PN road ,New bus stand , Tirupur - 03",
        "locality": "No 35 , Boyampalayam , Tirupur - 03",
        "parentId": 5520,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off | Use MISSEDYOU",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code MISSEDYOU",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use MISSEDYOU",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code MISSEDYOU",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 1900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "71238",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "226592",
        "name": "Dindigul Sri Alagappa Briyani",
        "uuid": "111441a2-70ed-4cd3-aa02-36994de8fca0",
        "city": "71",
        "area": "North Tirupur",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "jqyy6ya2rabczexfwkzm",
        "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 5.699999809265137,
        "slugs": {
        "restaurant": "dindigul-sri-alagappa-briyani-north-tirupur-north-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "161/100, PN Road, KVB Bilding, Tirupur - 641602",
        "locality": "North Tirupur",
        "parentId": 18072,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
        {
        "meta": "Flat ₹125 off on orders above ₹199",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Flat ₹100 off on orders above ₹299 | Use code FLAT100",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
        {
        "meta": "Use SWIGGYWEEKENDS",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Flat ₹100 off on orders above ₹299 | Use code FLAT100",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 2900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 2900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5838812~p=7~eid=00000186-3ba0-7eb1-2a10-215c00e3070a",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "5.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "226592",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 5.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "223308",
        "name": "Arafa Hot n Spicy Grill & Briyani",
        "uuid": "dba0e4fb-2828-406f-ac19-ee07fe0f76b6",
        "city": "71",
        "area": "Poyampalayam",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "dk0j5yowc98d2ztit1gc",
        "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Burgers",
        "Ice Cream",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
        "restaurant": "hot-in-spicy-grill-&-briyani-north-tirupur-north-tirupur",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "No:5/278/2A,Boyyampalayam,saran medical opp,pn road,Tirupur-641602",
        "locality": "North Tirupur",
        "parentId": 18075,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 1900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "223308",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "497764",
        "name": "Harin Home Foods",
        "uuid": "03779ebc-f348-441c-8f97-81d2a217382d",
        "city": "71",
        "area": "North Tirupur",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "sasijfdjxiwn40hj9u2x",
        "cuisines": [
        "South Indian",
        "Indian",
        "Healthy Food",
        "Home Food"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
        "restaurant": "harin-home-foods-south-tirupur-south-tirupur-2",
        "city": "tirupur"
        },
        "cityState": "71",
        "address": "ANNA NAGAR,TIRUPUR CORPORATION WARD-14,TIRUPUR",
        "locality": "South Tirupur",
        "parentId": 93920,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
        {
        "meta": "30% off | Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "30% off up to ₹75 | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "30% off up to ₹75 | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 1900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "497764",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
        },
        "subtype": "basic"
        }
]

const Header = () => {
  return (
    <div className="res-header">
      <a href="/">
        <img
          className="restaurent-logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"
          alt="res-logo"
        />
      </a>
      <nav className="res-navbar">
        <ul className="res-list-items">
          <li>Offers</li>
          <li>Help</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {

   //console.log(cloudinaryImageId);
  return (
    <div className="restaurant-card">
      <img
        className="card-image"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
        alt="dish"
      />
      <h3>{name}</h3>
      <h5 style={{color:"rgba(0,0,0,0.5)"}}>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-container">
        {listOfRes.map((items,i) =>{
            return <RestaurantCard key={items.data.id} {...items.data}/>
        })}
      
    </div>
  );
};
const Footer = () => {};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
