import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import ProdNfo from './prodNfo';
import ProdImg from './prodImg';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_action';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';
import { Link } from 'react-router-dom';

class ProductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(response=>{
            if(!this.props.products.prodDetail){
                this.props.history.push('/');
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }


    addToCartHandler(id){
        this.props.dispatch(addToCart(id))
    }
    
    render() {
        return (
            <div>
                <PageTop
                    title="Product detail"
                />
                <div className="container">
                {
                    this.props.products.prodDetail ?
                    <div className="product_detail_wrapper">
                        <div className="left">
                        <div className="back-to-page"> 
                        <Link to = "/shop"> <b>BACK TO SHOP </b></Link>
                        </div>
                            <div style={{width:'500px'}}>
                                <ProdImg
                                    detail={this.props.products.prodDetail}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <ProdNfo
                                addToCart={(id)=> this.addToCartHandler(id)}
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>
                    : 'Loading'
                }

                </div>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductPage);