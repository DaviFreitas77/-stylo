import React, { useState } from "react";
import './style.css'
import { ImUser } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import DrawerSeacrch from "../Drawer";
export default function Header(){

  const [showDrawer,setShowDrawer] = useState(false)

    return(
        <div className="container-header">
            <HiOutlineMenuAlt1 size={35}/>
            {showDrawer?(
                <DrawerSeacrch  showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>

            ):null}
            <div className="div-input">
                <CiSearch size={25}/>
                <input 
                onClick={()=>setShowDrawer(true)}
                type="search" name="" id="input-search" placeholder="ex: Camiseta"/>
            </div>
            <h2>Logo</h2>
            <div className="icons-header">
            <ImUser className="icon iconUser" size={25} />
            <MdFavorite className="icon iconFavorito" size={25} />
            <HiMiniShoppingCart  className="icon" size={25}/>
 

            </div>
        </div>

    )
}