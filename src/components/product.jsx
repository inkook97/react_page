import React from "react";
import styles from "./product.module.css";
import { useItemState } from "../context";

function ProductItem({ item }) {
    return (
        <div>
            <div>
                <span>※냉장</span>
            </div>
            <img src={item.src} alt=" " />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
        </div>
    )
}

function Product() {
    const items = useItemState()
    return (
        <div>
            <div className="subimg">
                <div className="subimg_in">
                    <p>Home &#62; 냉장제품</p>
                    <h2>냉장제품</h2>
                </div>
                <div style={{ marginTop: '100px', float: 'left', width: '100%' }}>
                    <p style={{ float: 'left', width: '100%' }}>총 <span style={{ color: 'red' }}>26</span>개의 상품이 있습니다.
                        <button style={{ float: 'right', border: '1px solid #000', backgroundColor: '#fff', padding: '10px', boxSizing: 'border-box' }}>상세검색</button></p>
                </div>
            </div>
            <div className="contents">
                <div className="contents_in">
                    <div className={styles.list_h}>
                        <ul>
                            <li>인기상품순</li>
                            <li>신상품순</li>
                            <li>낮은가격순</li>
                            <li>높은가격순</li>
                            <li>상품평순</li>
                        </ul>
                        <div>200개씩 보기</div>
                    </div>
                    <div className={styles.list_b}>
                        {items.map((item) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Product;