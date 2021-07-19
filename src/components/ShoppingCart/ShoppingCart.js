import React from 'react';

const ShoppingCart = () => {
    return (
        <div className="shop-cart">
            <div className="container">
                    <h3>Redux Shopping Cart</h3>
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="cart-item">
                    <div className="row ">
                        <div className="col-md-7 center-item">
                            <img className="img-fluid" src="https://i.ibb.co/GHpxPnL/product-1.png" alt="iphone 11" />
                            <h4>iPhone 11 128GB Black</h4>
                        </div>
                        <div className="col-md-5 center-item">
                            <div className="input-group number-spinner">
                                <button className="btn">➖</button>
                                <input type="text" className="form-control text-center disabled"  value="1"/>
                                <button className="btn">➕</button>
                            </div>
                            <h4>$<span>1219</span></h4>
                            <img style={{ width:"30px",cursor:"pointer",marginTop:"-10px",marginLeft:"10px"}} src="https://i.ibb.co/8xS1xvH/remove.png" alt="cross" />
                        </div>
                    </div>
                    </div>

                    <div className="cart-item">
                    <div className="row ">
                        <div className="col-md-7 center-item">
                            <img className="img-fluid" src="https://i.ibb.co/2FBvQZF/product-2.png" alt="iphone 11 case" />
                            <h4>iPhone 11 Silicone Case - Black</h4>
                        </div>
                        <div className="col-md-5 center-item">
                            <div className="input-group number-spinner">
                                <button className="btn">➖</button>
                                <input type="text" className="form-control text-center disabled"  value="1"/>
                                <button className="btn">➕</button>
                            </div>
                            <h4>$<span>59</span></h4>
                            <img style={{ width:"30px",cursor:"pointer",marginTop:"-10px" ,marginLeft:"10px"}} src="https://i.ibb.co/8xS1xvH/remove.png" alt="cross" />
                        </div>
                    </div>
                    </div>

                    <div className="cart-item">
                    <div className="row ">
                        <div className="col-md-8">
                           <h4>Subtotal</h4>
                           <h4>Tax</h4>
                           <h4>Total</h4>
                        </div>
                        <div className="col-md-4 text-right">
                        <h4>$<span>1278</span></h4>
                        <h4>$<span>0</span></h4>
                        <h4>$<span>1278</span></h4>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
          
        </div>
    );
};

export default ShoppingCart;