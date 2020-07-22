import React from 'react';
import MyButton from '../utils/button';
import { connect } from 'react-redux';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const ProdNfo = (props) => {

    const showProdTags = (detail) => (
        <div className="product_tags">
            { detail.shipping ?
                <div className="tag">
                    <div className="shipping_tag"><FontAwesomeIcon icon={faTruck}/></div>
                    <div className="tag_text">
                        <div>Free shipping</div>
                        <div>And return</div>
                    </div> 
                </div>
            :null
            }
            { detail.available ?
                <div className="tag">
                    <div><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="tag_text">
                        <div>Available</div>
                        <div>in store</div>
                    </div>
                </div>
            :
                <div className="tag">
                    <div><FontAwesomeIcon icon={faTimes}/></div>
                    <div className="tag_text">
                        <div>Not in Stock</div>
                   </div>
                   </div> 
                }
              
        </div>
    )

    const showProdActions = (detail) => (
        <div className="product_actions">
            <div className="price"> ₹ { detail.price }</div>
            <div className="cart">
            {detail.available > 0 &&
                <MyButton
                    type="add_to_cart_link"
                    runAction={()=>{ 
                        props.user.userData.isAuth ?
                       props.addToCart(detail._id)
                       : 
                       alert('you need to log in') 
                       }}
                 
                />
            }
             
            </div>
        </div>
    )

    const showProdSpecifications = (detail) => (
        <div className="product_specifications">
            <h2>Specs:</h2>
            <div>
                <div className="item">
                    <strong className="strong_color" >Frets:</strong> {detail.frets}
                </div>
                <div className="item">
                    <strong className="strong_color">Wood:</strong> {detail.wood.name}
                </div>
            </div>
        </div>
    )


    const detail = props.detail;
    return (
        <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>
                {detail.description}
            </p>
            { showProdTags(detail)}
            { showProdActions(detail)}
            { showProdSpecifications(detail)}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps) (ProdNfo);