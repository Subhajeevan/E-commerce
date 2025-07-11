import React from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';
import app_product_icon from '../../Assets/Product_Cart.svg'
import list_product_icon from '../../Assets/Product_list_icon.svg'

export const Sidebar = () => {
    return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={app_product_icon} alt="" />
                <p>
                    Add Product
                </p>
            </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>
                    Product List
                </p>
            </div>
        </Link>
    </div>
    )
}
