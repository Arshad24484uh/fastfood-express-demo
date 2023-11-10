"use client";
import '../app/css/delivery.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState, useEffect } from 'react';


const Searchbar = () => {


  let deliver = "Mumbai G.P.O 400000";
  const [display, setdisplay] = useState();
  const [color, setcolor] = useState();
  const [borderRadius, setborderRadius] = useState();
  const [margin, setmargin] = useState();
  const [position, setposition] = useState();
  const [top, settop] = useState();
  const [data, setdata] = useState();
  const [value, setvalue] = useState(); 
  const [input, setinput] = useState([]);
  const [location,setlocation] = useState({
    area:"",
    pincode:""
  });
  const [deli,setdeli] = useState();

  
  const productsearch = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let sdata = await res.json();
    setdata(sdata);
    console.log(data);
  }
  console.log(data);

  useEffect(() => {
    //let local = JSON.parse(localStorage.getItem("deliverd"));
    //setdeli(local)
    

    if(typeof window !=="undefined"){
      localStorage.setItem("deliverd",JSON.stringify(deliver))
      let local = JSON.parse(localStorage.getItem("deliverd"));
      setdeli(local)

      /*if(deli){
        setdisplay("none")
       }else{
        setdisplay("block")
       }*/
   
     }
  
  },[])
   /*if(typeof window !=="undefined"){
    let local = JSON.parse(localStorage.getItem("deliverd"));
    setdeli(local)
   }*/

  

  setTimeout(() => {
     if(deli){
      setdisplay("none")
     }else{
      setdisplay("block")
     }
  },600);
 





  const fetchdata = async (event) => {
    let query = event.target.value;
    let result = await fetch(`http://13.126.118.23:8000/findarea/${query}`);
    let data = await result.json()
    console.log("this is a console data", data)
    setinput(data)

  }
  console.log(input)
  return (
    <>
      <div className="searchbar" style={{ backgroundColor: color, borderRadius: borderRadius, marginTop: margin }}>
        <div className="deliveryshow">
          <h2 id='delivery-show-heading'> delivered to Mumbai G.P.O 400001{deli?.area} {deli?.pincode} </h2>
          <div className='div-box2'>
            <LocationOnOutlinedIcon className='locationdrop' />
            <p onClick={() => { setdisplay("block"); localStorage.removeItem("deliverd") }} className='change-location-paragaraph'>change location</p>
          </div>

        </div>
        <div className="searching">
          <SearchOutlinedIcon className='search-icon-input' />
          <input type="text" placeholder=" Search items" className="search-input" />
          <button onClick={productsearch} className="search-btn">Search</button>
        </div>
      </div>

      <div className="searching-mob">
        <SearchOutlinedIcon className='search-icon-input-mob' />
        <input onChange={(e) => setvalue(e.target.value)} type="text" placeholder=" Search items" className="search-input-mob" />
        <button className="search-btn-mob">Search</button>
      </div>


      <div style={{ display: display }} className="delivery-box">
        <span onClick={() => { setdisplay('none') }} id='close-icon' class="material-symbols-rounded">
          close
        </span>
        <h3>Search Location</h3><br />
        <span id='search-icon' class="material-symbols-outlined">
          search
        </span>   <input onChange={fetchdata} className="input-div" type="number" placeholder="Enter Pincode to find locality" />
        

        {
          input.map((item) => {
            return (
              <>
                <div onClick={()=> {setlocation({area:item.area,pincode:item.pincode});localStorage.setItem("deliverd",JSON.stringify(item))}} className='result-box'>
                  <div className='icon-box'>
                    <span class="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div className='main-div'>
                  <span>{item?.area}</span><span>{item.city}</span>
                  <h5>{item?.state}</h5>
                  </div>
                  
                </div>
              </>
            )
          })
        }
        <p style={{fontSize:"17px",color:"green",marginTop:"20px",marginLeft:"20px"}}>Try 400001 as Demo</p>
        <span className='bottom-status'></span>

      </div>
    </>
  )
}
export default Searchbar;
