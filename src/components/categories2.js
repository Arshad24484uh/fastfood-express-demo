'use client';
import category2 from "@/productcategory2";
import Image from "next/image";
import '../app/css/category2.css';
const Categories2 = ()=>{
    return(
        <>
        <h2 className="categories-title">Categories</h2>
            <div className="box-wrapper">

            {
                category2.map((item)=>{
                    return(
                        <>
                            <div className="box">

                                <div onClick={()=>{window.location.href=`search-result/${item.category}`}} className="image-box">
                                    <Image className="item-image" src={item.img}
                                        alt="item"

                                    />
                                </div>
                                <p className="item-title">{item.title}</p>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
}
export default Categories2;