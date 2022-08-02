
import React, { useEffect } from 'react'
import { layoutProps } from '../../model/layout'
import { FaSmileWink, FaChevronCircleDown} from 'react-icons/fa';
import  './layoutAdmin.module.css';

const adminLayout = ({ children }: layoutProps) => {
    
    return (
        <div style={{display: 'flex', gap:'50px'}}>
            <div style={{width:'15%', background:'#4e73df', color: '#fff', height: '100vh', padding:'0px 20px'}}>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a style={{color:'#fff', display:'flex', fontSize:'25px', textDecoration:'none', padding: '10px 24px', borderBottom:'1px solid #fff'}}  href="index.html">
                        <div style={{padding:'6px 0px'}}>
                            <FaSmileWink></FaSmileWink>
                        </div>
                        <div className="sidebar-brand-text mx-3"> Admin</div>
                    </a>
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <span style={{textTransform:'uppercase', fontWeight:'700', fontSize:'12px'}}>Dashboard</span></a>
                    </li>
                    <li className='nav_menu' style={{display:'flex',justifyContent:'space-between', fontWeight:'700', fontSize:'12px', position:'relative' }}>
                            <div className='list'>
                                <span>List  </span>
                            </div>
                            <div style={{padding:'5px 0px'}} className='icon'>
                                <FaChevronCircleDown></FaChevronCircleDown>
                            </div>
                        <ul style={{ position:'absolute', top:'30px', backgroundColor:'#fff',width:'90%', borderRadius:'5px',margin:'10px 5px'}} className='menu'>
                            <li style={{padding: '10px 0px'}}><a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="">Product</a></li>
                            <li style={{padding: '10px 0px'}}><a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="">Category</a></li>
                            <li style={{padding: '10px 0px'}}><a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="">User</a></li>                                                                             
                        </ul>
                    </li>
                </ul>
            </div>
            <div style={{width:'80%'}}>
            {children}
            </div>
        </div>
            
    )
}

export default adminLayout