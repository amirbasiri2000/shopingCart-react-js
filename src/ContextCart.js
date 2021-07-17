import React , { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
// import { Products } from './Products';
import Item from './Item';
import { cartContext } from './Cart'; 


const ContextCart = () => {

    const { item , clearCart } = useContext(cartContext);
    if(item.length === 0 ){
        return(
            <div className="cart">
                    <header>
                        <div className="continue-shopping">
                            <img src="./images/arrow-left.svg" alt="arrow-left" className="arrow-icon" />
                            <h3 className="title">Continue shopping</h3>
                        </div>
                        <div className="cart-icon">
                            <img src="./images/cart-icon.svg" alt="cart-icon"/>
                            <p>0</p>
                        </div>
                    </header>
                    <section className="main-cart-section">
                        <h2>shopping cart</h2>
                        <p className="total-item">you have <span className="total-item-count">0</span> items in shopping cart</p>
                    </section>
            </div>
        )
    }
    return (
        <>
            <div className="cart">
                <header>
                    <div className="continue-shopping">
                        <img src="./images/arrow-left.svg" alt="arrow-left" className="arrow-icon" />
                        <h3 className="title">Continue shopping</h3>
                    </div>
                    <div className="cart-icon">
                        <img src="./images/cart-icon.svg" alt="cart-icon"/>
                        <p>{item.length}</p>
                    </div>
                </header>
                <section className="main-cart-section">
                    <h2>shopping cart</h2>
                    <p className="total-item">you have <span className="total-item-count">{item.length}</span> items in shopping cart</p>
                    <div className="cart-items">
                        <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((curItem) =>{
                                    return <Item key={curItem.id} {...curItem} />
                                })
                            }
                        </Scrollbars>
                        </div>
                        <div className="cart-total">
                            <h3>Cart Total : <span>200000 rs</span></h3>
                            <button>checkout</button>
                            <button className="clear-cart" onClick={clearCart} >clear cart</button>
                        </div>
                    </div>
                </section>
            </div>   
        </>
    )
}

export default ContextCart
