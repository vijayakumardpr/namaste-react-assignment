const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {

    //console.log(cloudinaryImageId);
    // console.log(useState);
   return (
     <div className="restaurant-card">
       <img
         className="card-image"
         src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
         alt="dish"
       />
       <h3>{name}</h3>
       <h5 style={{color:"rgba(0,0,0,0.5)"}}>{cuisines.join(",")}</h5>
       <h5 className={+avgRating >=4 ?"positive-review": +avgRating >=3 ?"moderate-review" :"" }>{avgRating}</h5>
       <h5 className="prompt-display">QUICK VIEW</h5>
     </div>
   );
 };


 export default RestaurantCard