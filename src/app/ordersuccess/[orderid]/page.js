'use client';
import { useRouter } from 'next/navigation'
import gif from '../../../../public/upiimages/Animation - 1698410197310.gif';
//Animation - 1698410197310.gif'
import Image from 'next/image';
import '../../css/ordersuccess.css';
const OrderSuccess = ({params})=>{
    const router = useRouter();
    console.log(params);
    const orderId = params.orderid;
    let num = 3;

    setTimeout(() => {
        router.push('/')
    }, 10000);

    /*if(num==3){
        localStorage.removeItem("product")
        localStorage.removeItem("totalamount");
        localStorage.removeItem("totalprice")
    }*/
    return(
        <>
            <div className="order-box">
                 <Image src={gif}
                 alt='loader'
                 />
                 <h2>Order SuccessFully Placed</h2>
                 <span>OrderId: {orderId} </span>
                 <span className='try'>You Will redirected homepage after 10 Second</span>
            </div>
        </>
    )
}
export default OrderSuccess;