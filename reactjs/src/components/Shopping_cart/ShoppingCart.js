import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import CartProduct from './CartProduct';

function ShoppingCart(props) {
    const { loading, cartItems } = props.cart;

    let showCartCard, checkoutBtn = true;
    if (cartItems === null || loading) {
        showCartCard = <Spinner />
    } else {
        if (cartItems.length > 0) {
            showCartCard = cartItems.map(item => (<CartProduct product={item} />))
        } else {
            showCartCard = (<tr> <h4>Your Shopping Cart is empty</h4></tr>);
            checkoutBtn = false;
        }
    }

    const [cartSubTotalPrice, setCartSubTotalPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <div className='shopping-cart' >
            <div className="small-container cart-title">
                <div className="row row-2">
                    <h2 className="title-2">Your Shopping Cart</h2>
                    <Link to="/">
                        <p>Go To Store</p>
                    </Link>
                </div>
            </div>
            <div className="small-container cart-page">
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>MRP</th>
                            <th>Amount</th>
                        </tr>
                        {showCartCard}
                    </tbody>
                </table>

                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>SubTotal</td>
                                <td>Rs. {cartSubTotalPrice}/-</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>Rs. 35/-</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>Rs. {totalPrice}/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="checkOut">
                {checkoutBtn ? (
                    <Link to="#" className="btn" >Check Out</Link>
                ) : (
                    <Link to="/" className="btn" >Shop Now</Link>
                )}

            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    cart: state.cart
});


export default connect(mapStateToProps, {})(ShoppingCart);
