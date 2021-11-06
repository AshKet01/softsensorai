import React from 'react'
import { connect } from 'react-redux';
import { addToCartMain } from '../redux/actions/cart.action';


function Card(props) {
    const { product } = props;

    function addToCart(e, product) {
        e.preventDefault()
        props.addToCartMain(product)
    }

    return (
        <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img src={product.image} alt="" />
            </div>
            <div className="product-details">
                <span className="product-catagory">Women,bag</span>
                <h4><a href="#">{product.title}</a></h4>
                <p>{product.description}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>$96.00</small>${product.price}</div>
                    <div className="product-links">
                        {/* <a href="#"><i className="fa fa-heart"></i></a> */}
                        <button className="add-to-cart" onClick={e => addToCart(e, product)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default connect(null, { addToCartMain })(Card)
