import { React } from "react";
import { useState } from "react";

// import { deleteCart } from "../Redux/action";




function Cart({name,brandName,id,image}) {


  let cart;
  let product;
  cart = localStorage.getItem("cart");
  product = JSON.parse(cart);

  let stock=5

  const [count, setCount] = useState(1)

  let contador2=product.filter(e=> e.id === id)
  console.log(contador2[0].cantidad, "con2")




  function counter(e){
  e.preventDefault()
  const {name}=e.target
  
  
  if(name==="mas"){
    if(product.find(p=>p.id === id).cantidad<stock){

      product.find(p=>p.id === id).cantidad+=1
      let contador=product.filter(e=> e.id === id)

      setCount(contador[0].cantidad) 
      
      
      localStorage.setItem("cart",JSON.stringify(product))


    }else{
      alert("No hay mas stock")
    }
  }else if(name==="menos"){
    if(product.find(p=>p.id === id).cantidad<=stock&&product.find(p=>p.id === id).cantidad>1){
 
      
      product.find(p=>p.id ===id).cantidad-=1

      let contador=product.filter(e=> e.id === id
     
        )
  
        setCount(contador[0].cantidad) 


      localStorage.setItem("cart",JSON.stringify(product))

  }
  
}

  }

  function handleDelete(e){
    e.preventDefault()
  // dispatch(deleteCart(id))
  const filter=product.filter((e)=>e.id !==id)
  localStorage.removeItem("cart")
  localStorage.setItem("cart",JSON.stringify(filter))
  
  
  }

  








  return (
    <div>
 
            <>

              <div className="m-1 w-full grid gap-4 grid-cols-4 border-t-2 border-gray-300">
                <img
                  className="pict object-contain w-48 h-36 p-2 "
                  src={image}
                  alt="Pic Not Found"
                />
                <div>
                  <h1 className="capitalize text-2xl mt-4 font-semibold">
                    {name}
                  </h1>
                  <p className="capitalize text-lg">{brandName}</p>
                </div>
              <button name="mas" onClick={(e)=> counter(e)}>+</button>
              <h1>{contador2[0].cantidad>0?contador2[0].cantidad:null}</h1>
              <button name="menos" onClick={(e)=> counter(e)}>-</button>

              <div className="flex justify-end">
                <button onClick={e=> handleDelete(e)} className=" box-content h-4 w-4 p-1 text-xl font-light ">
                  x
                </button>
              </div>
              </div>
            </>
        
    </div>
  );
}

export default Cart;
