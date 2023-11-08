'use client';
import productobj from "@/productarray";
import Image from "next/image";
import Searchbar from "@/components/searchbar";
import "../../css/productpage.css";
import Navbar from "@/components/navbar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect, useState } from "react";
import nonveg from '../../../../public/type/icons8-non-veg-48.png';
import veg from '../../../../public/type/icons8-veg-48.png';
import BottomBar from "@/components/bottombar1";
import Tooltip from '@mui/material/Tooltip';
import { useSelector, useDispatch } from "react-redux";
import { add } from "@/app/redux/slice";
import { addprice } from "@/app/redux/cartprice";





const productpage = ({ params }) => {


    // this is a our usestate data the send in our cart page

    const [cartdata, setcartdata] = useState({
        title: "",
        id: "",
        price: 90,
        image: "",
        quantity: "",
        totalprice: 90,
        cartsize:""

    })
    const datas = useSelector((state) => state.cart)
    console.log(datas)
    const item_length = datas.length-1;
    const dispatch = useDispatch();
    const [type, settype] = useState();
    const [item, setitem] = useState({
        title: "ppp",
        price: 200,
        sizes: [
            [{ size: "medium", price: "200" }]
        ],
        type: "veg"
    });
    const _id = params.productpage;
    const fetchdata = async () => {
        const res = await fetch(`http://13.126.118.23:8000/find/${_id}`);
        const data = await res.json();
        console.log(data);
        setitem(data)
    }

    useEffect(() => {
        fetchdata();


    }, [])

    setTimeout(() => {
        if (item.type == "nonveg") {
            settype(nonveg)
        } else if (item.type == "veg") {
            settype(veg);
        } else {
            alert("something went wrong")
        }
    }, 2000);


    const [size,setsize] = useState();
    const [amount, setamount] = useState();
    const [fixedamount, setfixamount] = useState();
    const [hcolor, sethcolor] = useState();
    const [hbgcolor, sethbgcolor] = useState();
    const [qty, setqty] = useState(1);
    const [display, setdisplay] = useState();
    const [bdisplay, bsetdisplay] = useState();
    const [bborder,bsetborder] = useState();
    const [bbackground,bsetbackgroud] = useState();
    const [btext,setbtext] = useState("ADD TO CART")
    const [bcolor,setbcolor]= useState();


    function cartadd() {
        setcartdata({ ...cartdata, title: item.title, id: item._id, price: fixedamount, totalprice: amount, quantity: qty, image: item.image, cartsize:size })
        setTimeout(() => {
            console.log("this is a cart data", cartdata)
        }, 2000);
    }
    //const counter = datas.length;

    const handleadd = () => {

            dispatch(add(cartdata));
            dispatch(addprice(cartdata.totalprice))

        
    }
    return (
        <>


            <div className="product-box">
                <div className="image-box">
                    <img
                        src={item.image}
                        alt="image"
                        className="product-image"
                    />
                </div>

                <div className="title-box">
                    <h3 className="product-title">{item.title}</h3>
                    <h4 className="product-desc">{item.desc}</h4>


                </div>
                <div className="rating-box">
                    <div className="product-rating">
                        <span id="star-icon" className="material-symbols-outlined">
                            star_half
                        </span>
                        <span className="rating-">{item.rating}</span>
                    </div>
                    <div className="product-offer">
                        <span className="discount">{item.offer}%Off</span>
                    </div>

                </div>
                <div className="add-fav-box">
                    <div className="box1">
                        <Image
                            src={type}
                            alt="logo"
                            width={30}
                            height={30}
                            style={{ marginLeft: "14px" }}

                        />
                        <span style={{ fontWeight: "400", fontSize: "13px", color: "black", position: "relative", top: '4px' }}>{item.type}</span>
                    </div>
                    <div onClick={() => { sethcolor('white'); sethbgcolor("red") }} style={{ backgroundColor: hbgcolor, color: hcolor }} className="box2">
                        <span style={{ color: hcolor }} id="fav-icon" class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                </div>
                <h3 className="select-title">Select Size</h3>
                <div className="size-box">
                    {
                        item.sizes[0].map((pro) => {
                            return (
                                <>
                                    <div key={pro.id} className="sizes" onClick={() => {
                                        setamount(parseInt(pro.price)); setfixamount(parseInt(pro.price));
                                        setdisplay("flex"); setsize(pro.size)
                                         setqty(1)
                                        
                                    }}>
                                        <span className="pss">{pro.size}</span>
                                        <span className="pps">₹{parseInt(pro.price)}</span>
                                    </div>


                                </>
                            )
                        })
                    }
                </div>

                <div className="cart-bottom" style={{ display: display }}>
                    <div className="plus-minus-box">
                        <button className="addd-button" onClick={() => { setamount(amount + fixedamount); setqty(qty + 1) }}><span style={{color:'rgb(49, 211, 76)'}} class="material-symbols-outlined">
                            add
                        </span></button>
                        <button onClick={() => {
                            setamount(amount - fixedamount); setqty(qty - 1);
                            if (qty == 1) {
                                setqty(1);
                                setamount(fixedamount);
                            }
                        }} className="remove-button"><span  style={{color:'rgb(49, 211, 76)'}} class="material-symbols-outlined">
                                remove
                            </span></button>

                    </div>
                    <div className="qty-box">
                        <h5>QTY</h5>
                        <span className="qty">{qty}</span>
                    </div>
                    <div className="amount-box">
                        <h5>AMOUNT</h5>
                        <span className="price-title">₹{amount}</span>
                    </div>
                    <div className="add-to-cart-box">
                        <button  onClick={(e) => {cartadd(); bsetdisplay("flex"); setdisplay("none") }} className="cart-button">CONTINUE</button>
                    </div>
                </div>
                <div style={{display:bdisplay}} className="confirm-box">
                <div className="c-img-box">
                <img className="con-img" src={item.image} alt="item" />
                </div>
                    <div className="c-title-box">
                    <span className="item-title">{item.title}</span>
                    </div>
                    <div className="c-size-box">
                        <span  className="size-span">{size}</span>
                    </div>
                    <div className="c-btn-box">
                    <button style={{border:bborder,background:bbackground,color:bcolor}} onClick={()=>{handleadd(); setbtext("CART ADDED"); setbcolor("crimson"); bsetbackgroud("rgb(229, 255, 246)"); bsetborder("1px solid crimson")}} className="confirm-button">{btext}</button>
                    </div>
            
                </div>

            </div>
            <div className="sidebar">
                <Searchbar />
                <Tooltip title='Go To Cart'>
                    <ShoppingCartOutlinedIcon  id="cart-icon" onClick={()=>{window.location.href="/cart"}} />
                </Tooltip>
                <button className="cart-value">{item_length}</button>
            </div>

            
            <BottomBar />

        </>
    )
}
export default productpage;
