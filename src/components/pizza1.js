import Image from "next/image";
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import merghmerita from '../../public/pizzaimages/merghmeritapizza.jpg';
import '.././app/css/pizza1.css';
import demoproduct from "@/pizzaproduct";
const Pizza1 = () =>{
    return(
        <>
            
            <section className="pizza-wrap">
            <h1 className="pizza-heading">Try Our Testy & delicicous Food</h1>

            {demoproduct.map((pizza)=>{
                return(
                    <>
                
                <div className="pizza-card">
                <div className="image-div">
                  <Image
                    src={pizza.img}
                    alt="pizza"
                    className="pizza-image"
                
                  />
                  </div>
                  <h2 className="pizza-title">{pizza.title}</h2>
                  <div className="ratings">
                    <StarHalfOutlinedIcon className="star-icon"/>
                    <span className="rating">{pizza.rating}</span>
                    <span className="price">{pizza.price}</span>
                  </div>
                
                </div>
                    </>
                )
            })
            }
                
            </section>

        </>
    )
}
export default Pizza1;