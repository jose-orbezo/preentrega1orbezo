const CartWidget=(props)=>{

    return(
        <div className="text-center">
            <img src={props.urlImg} width={100} height={100} alt="img"/>
            <span>{props.cantidad}</span>
        </div>
    )
}

export default CartWidget;