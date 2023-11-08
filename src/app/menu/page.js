import Image from "next/image";
import indian from "@/menurecipe";
import vegmenu from "@/vegmenu";
import nonvegmenu from "@/nonvegmenu";
import "../css/menu.css";
import BottomBar from "@/components/bottombar1";
const Menu = () =>{


    return(
        <>
        <div className="menu-div">
        <h1 className="menu-heading">Menu</h1>
        <span id="menu-icon" class="material-symbols-outlined">
restaurant_menu
</span>
        </div>
            <div className="menu">
          <div className="indian">
          <h3 className="cart-title">Indian Food</h3>
          
          {
            indian.map((item)=>{
                return(
                    <>
                    <div className="item-i">
                <Image
                    src={item.img}
                    alt='item'
                    className="image-i"

                />
                <h4 className="title-i">{item.title}</h4><br/>
                <span className="price-i">₹{item.price}</span>
            </div> 
                    </>
                )
            })
          }
          </div>

          <div className="veg-menu">
          <h3 className="cart-title-v">Vegetarian Food</h3>
          {
            vegmenu.map((item)=>{
                return(
                    <>
                        <div className="item-v">
                        <Image
                    src={item.img}
                    alt='item'
                    className="image-v"

                />
                <h4 className="title-v">{item.title}</h4><br/>
                <span className="price-v">₹{item.price}</span> 
                        </div>
                    </>
                )
            })
          }
          </div>


          <div className="nonveg-menu">
          <h3 className="cart-title-n">Non Vegetarian Food</h3>
          {
            nonvegmenu.map((item)=>{
                return(
                    <>
                        <div className="item-n">
                        <Image
                    src={item.img}
                    alt='item'
                    className="image-n"

                />
                <h4 className="title-n">{item.title}</h4><br/>
                <span className="price-n">₹{item.price}</span> 
                        </div>
                    </>
                )
            })
          }
          </div>
            </div>
            <BottomBar/>
        </>
    )
}
export default Menu;