import Image from "next/image";
import '../app/css/categories.css';
import cheesepizza from '../../public/pizzaimages/cheespizza.jpg';
import Mergerita from '../../public/pizzaimages/merghmeritapizza.jpg';
import chickenpizza from '../../public/pizzaimages/chickenpizza.jpg';
import vegpizza from '../../public/pizzaimages/vegpizza.jpg';
import italianpizza from '../../public/pizzaimages/italianpizza.jpg';
import americanapizza from '../../public/pizzaimages/americana.jpg';
import neapolitanpizza from '../../public/pizzaimages/neapolitan.jpg';
import peppronipizza from '../../public/pizzaimages/peppronipizza.jpg';
const Categories = () =>{
    return(
        <>
        <h1 className="category-heading">Categories</h1>
            <div className=" categories-slice">
                <div className="category1">
                    
                <Image
                className="image1"
                    src={cheesepizza}
                    width={140}
                    height={140}
                    alt="cheesepizza"
                />
                <span className="cat-title">Cheese Pizza</span>
                </div>

                <div className="category2">
                    
                <Image
                className="image2"
                    src={Mergerita}
                    width={140}
                    height={140}
                    alt="merghmerita"
                />
                <span className="cat-title">Margherita pizza</span>
                
                </div>

                <div className="category3">
                    
                <Image
                className="image3"
                    src={chickenpizza}
                    width={140}
                    height={140}
                    alt="chickenpizza"
                />
                <span className="cat-title">Chicken Pizza</span>
                </div>

                <div className="category4">
                    
                <Image
                className="image4"
                    src={vegpizza}
                    width={140}
                    height={140}
                    alt="vegpizza"
                />
                <span className="cat-title">veg Pizza</span>
                </div>

                <div className="category5">
                    
                    <Image
                    className="image5"
                        src={italianpizza}
                        width={140}
                        height={140}
                        alt="italianpizza"
                    />
                    <span className="cat-title" >italian Pizza</span>
                    
                    </div>

                    <div className="category6">
                    
                <Image
                className="image6"
                    src={americanapizza}
                    width={140}
                    height={140}
                    alt="americanapizza"
                />
                <span className="cat-title">americana pizza</span>
                </div>

                <div className="category7">
                    
                <Image
                className="image7"
                    src={neapolitanpizza}
                    width={140}
                    height={140}
                    alt="chickenpizza"
                />
                <span className="cat-title">Neapolitan pizza</span>
                </div>

                <div className="category8">
                    
                <Image
                className="image8"
                    src={peppronipizza}
                    width={140}
                    height={140}
                    alt="peppronipizza"
                />
                <span  className="cat-title">pepproni pizza</span>
                </div>
                



            </div>
        </>
    )
}
export default Categories;