import { useEffect } from "react"
import { useState } from "react"
import "../styles/home.css"

const Home = () => {


    let [food,setFood]=useState([])
    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch("http://localhost:3000/food")
            let data= await response.json()
            setFood(data)
        }
        fetchData()
    },[food])  
    let handleClick = (id,title)=>{   
        fetch(`http://localhost:3000/food/${id}`,{
            method:"DELETE"
        })
        alert(`${title} will be deleted permently`)


    }
    let[price,setPrice]=useState(681)
    let[count,setCount]=useState(1)
    let handleIns=()=>{
        setPrice(price+681)
        setCount(count+1)
    }
    let handleDes=()=>{
        setPrice(price-681)
        setCount(count-1)
    }

    return ( 
        <div className="mainn">
        <div className="main">
            <div className="left">
                <div className="prt">
                <h1>Shopping Continue</h1>
                <hr />
                <h3>Shopping Cart</h3>
                <p>You have 3 item in your cart</p>
                </div>
                <div className="down">
                    {food.map(data=>(
                        <div className="dat">
                            <img height="80" width="82" src={data.img} alt="" />
                            <div className="deta">
                            <h3>{data.head}</h3>
                        <p>{data.des}</p>
                            </div>
                            <h4>{count}</h4>
                            <button onClick={handleIns}><img height="20" width="20" src="./images/but.png" alt="" /></button>
                            <button onClick={handleDes}><img height="20" width="20" src="./images/but.png" alt="" /></button>
                            <h5>{price}</h5>
                            <button onClick={()=>handleClick(data.id)}><img height="20" width="20" src="./images/Trash Can.png" alt="" /></button>
                        </div>
                    ))}
                    
                </div>
</div>
                <div className="right">
                    <div className="one">
                    <h3>Card Details</h3>
                    <img height="50" width="50" src="./images/prf.png" alt="" />
                    </div>
                    <div className="two">
                        <h6>Card type</h6>
                    </div>
                    <div className="thre">
                        <img height="55" width="75" src="./images/r9.png" alt="" />
                        <img height="55" width="75" src="./images/r10.png" alt="" />
                        <img height="55" width="75" src="./images/r11.png" alt="" />
                        <h6 height="55" width="75">See all</h6>
                    </div>
                    <div className="four">
                        <h6>Name on card</h6>
                        <input type="text" placeholder="Name" name="" id="" />
                        <h6>Card Number</h6>
                        <input type="text" placeholder="1111.222.333.444" name="" id="" />
                        
                        </div>
                        <div className="ten">
                            <div id="one" className="tenn">
                            <h6>Expiration date</h6>
                        <input type="text" placeholder="mon/yy" name="" id="" />
                            </div>
                        <div className="tennn">
                        <h6>CVV</h6>
                        <input type="text" placeholder="123" name="" id="" />
                        </div>
                        
                        </div>
                        <div className="five">

                        <div className="le">
                        <h6>Subtotal(3 items)</h6>
                        <h6>Shipping</h6>
                        <h6>Total(Tax Inct.)</h6>
                        </div>
                        <div className="ri">
                            <h6>$1,668</h6>
                            <h6>$4</h6>
                            <h6>$1,672</h6>
                        </div>
                        </div>
                        
                       <div className="six">
                        <h6>$1,672</h6>
                        <h6>Checkout--</h6>
                       </div>
                    </div>
                    

                </div>

               
            </div>
          
     
     );
}
 
export default Home;