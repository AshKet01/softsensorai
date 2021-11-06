import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCartMain, increaseQnt, decreaseQnt, removeProduct } from '../../redux/actions/cart.action';

function CartProduct(props) {
    const { product, increaseQnt, decreaseQnt, removeProduct } = props;

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
                        {/* <a href="" ><strong>Remove</strong></a> */}
                    </div>
                </div>
            </td>
            <td>
                <button href="" className="btn" value="" onClick={e => decreaseQnt(product.productNumber)} >-</button>

                <input type="number" value={product.itemCount} />
                <button href="" className="btn" value="" onClick={e => increaseQnt(product.productNumber)}  >+</button>


            </td>
            <td>Rs. {product.product.price} /-</td>
            <td>Rs. {product.product.price * product.itemCount} /-</td>
        </tr>
    )

}

// cartProduct.propTypes = {
//     increaseQnt: PropTypes.func.isRequired,
//     decreaseQnt: PropTypes.func.isRequired,
//     removeProduct: PropTypes.func.isRequired,
// }

export default connect(null, { increaseQnt, decreaseQnt, removeProduct })(CartProduct)
