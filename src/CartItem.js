import React from "react"

class CartItem extends React.Component{
    constructor(){
        super()
        this.state={
            
            price: 999,
            title:'Mobile Phone',
            Qty : 1,
            img:""

        }
        //this.increseQuantity = this.increseQuantity.bind(this);
    }
    increseQuantity = ()=>{
       // console.log("this",this.state)

        // set form 1
        // this.setState({
        //     Qty: this.state.Qty+1  
        // })
        // second method -- if previous state require then use this
        this.setState((prevState)=>
        {
            return{
                Qty:prevState.Qty+1
            }
        })
    }
    decreaseQuantity=()=>{
        //console.log("this",this.state)

       // set form 2

        // this.setState({
        //     Qty : this.state.Qty-1
        // })

        //using second form 2
        this.setState((prevState)=>
        {
            return{
                Qty:prevState.Qty-1
            }
        })
    }
    render(){
        const {price,title,Qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={st.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 30}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty :{Qty} </div>
                    <div className="cart-item-actions"> 
                    {/* button */}
                    <img style={im.icons}alt="increase"
                     className="action-icons" 
                     src="https://img.icons8.com/?size=512&id=1501&format=png"
                     onClick={this.increseQuantity}
                     />
                    <img style={im.icons}alt="decrease"
                     className="action-icons" 
                     src="https://img.icons8.com/?size=512&id=1504&format=png"
                     onClick={this.decreaseQuantity}
                     />
                    <img style={im.icons}alt="delete" className="action-icons" src="https://img.icons8.com/?size=512&id=57061&format=png"/>
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
const im={
    icons:{
        height: 25,
  width: 25,
  marginright: 10,


    }

}
export default CartItem;