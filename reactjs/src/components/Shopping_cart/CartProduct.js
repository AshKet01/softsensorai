import React from 'react';
import { connect } from 'react-redux';
import { increaseQnt, decreaseQnt, removeProduct } from '../../redux/actions/cart.action';

function CartProduct(props) {
    const { product, increaseQnt, decreaseQnt, removeProduct } = props;

    function letsIncreaseQuntity(prodNum) {
        if (product.itemCount > 0) {
            increaseQnt(prodNum)
        }
    }

    function letsDecreaseQuntity(prodNum) {
        if (product.itemCount > 1) {
            decreaseQnt(prodNum)
        }
    }

    return (
        <tr>
            <td >
                <div className="cart-info">
                    <img src={product.product.image} alt="" />
                    <div>
                        <p>{product.product.title}</p>
                        <small>Price: Rs. {product.product.price}/-</small>
                        <br />
                        <button href="" onClick={e => removeProduct(product.productNumber)}><strong>Remove</strong></button>
                    </div>
                </div>
            </td>
            <td>
                <button href="" className="btn" value="" onClick={e => letsDecreaseQuntity(product.productNumber)} >-</button>

                <input type="number" value={product.itemCount} />
                <button href="" className="btn" value="" onClick={e => letsIncreaseQuntity(product.productNumber)}  >+</button>


            </td>
            <td>Rs. {product.product.price} /-</td>
            <td>Rs. {product.product.price * product.itemCount} /-</td>
        </tr>
    )

}

export default connect(null, { increaseQnt, decreaseQnt, removeProduct })(CartProduct)
