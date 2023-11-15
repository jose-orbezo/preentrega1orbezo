const CartWidget=(props)=>{

    return(
        <div className="text-center">
            <img src={props.urlImg} alt="img"/>
            <span>{props.cantidad}</span>
        </div>
    )
}

export default CartWidget;