import React from 'react';
import moment from 'moment';
// import Product from '../../Product';

// {moment(product.dateOfPurchase).format("MM-DD-YYYY")}

const UserHistoryBlock = (props) => {

    // const removeData = (i) => {

    //     axios.delete(`${URL}/${i}`).then(res => {
    //         const del = product.filter(Product => i !== props.i)
    //         setEmployees(del)
    //     })
    // }

    const renderBlocks = () => (
        props.products ?
            props.products.map((product,i)=>(
                <tr key={i}>
                    <td>{moment(product.dateOfPurchase).format("MM-DD-YYYY")}</td>
                    <td>{product.porder}</td>
                    <td>{product.brand} {product.name}</td>
                    <td> ₹{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>

                    <button className='button' >Delete</button>
                    </td>
                </tr>
            ))
        :null
    )
    const renderHeader = () => {
        let headerElement = ['Date', 'Order Number', 'Product', 'Price paid', 'Quantity', 'Cancel']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    return (
        <div className="history_blocks">
            <table>
                <thead>
                    <tr> 
                        {/* <th>Date</th>
                        <th>Order number</th>
                        <th>Product</th>
                        <th>Price paid</th>
                        <th>Quantity</th>
                        <th> Cancel</th> */}
                        {renderHeader()}
                    </tr>
                </thead>
                <tbody>
                    {renderBlocks()}
                </tbody>
            </table>
        </div>
    );
};

export default UserHistoryBlock;