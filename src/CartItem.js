import React from "react"

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={st.image}/>
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div> 9999</div>
                    <div>Qlt : 1</div>
                    <div className="cart-item-actions"> 
                    {/* button */}
                    </div>

                </div>
            </div>
        )
    }
}

const st ={
    image:{
        height: 110,
        width : 110,
        bordorRadius: 4
    }
}
export default CartItem;