import React from "react";
import './style.css';
import { HiMiniShoppingCart } from "react-icons/hi2";

export default function DrawerCarrinho() {
    return (
        <div>
            <div className="iconsMobile">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <HiMiniShoppingCart className="icon " size={30} />
                </button>
            </div>


            <div className="offcanvas  offcanvas-end offcanvas-custom" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    );
}
