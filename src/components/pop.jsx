import React from "react";

function Pop() {
    return (
        <div>
            <div className="subimg" style={{ width: '100%', height: '500px', backgroundColor: '#fff' }}>
                <div className="pop_in">
                    <p>Home &#62; 기획전</p>
                    <div className="pop_banner"></div>
                    <ul>
                        <li>남양 기획전</li>
                        <li>총 <span>7</span>건의 기획전이 있습니다.</li>
                    </ul>
                </div>
            </div>
            <div className="contents">
                <div style={{
                    margin: '0 auto',
                    width: '1100px',
                    height: '1000px',
                }} >
                    <ul className="pl-img">
                        <li>
                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202305/19c1d8ba-6871-4588-91b3-5c0e54ee8da1.png" alt="" /></span><br />
                            <span>테이크핏 퓨어프로틴 신제품 출시! 수분충전 완전 단백질 플랜</span><br />
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </li>
                        <li>
                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202304/6c205439-e307-4d42-abb8-f099a5617735.png" alt="" /></span><br />
                            <span>루카스나인 리저브 드립스틱 신제품 출시</span><br />
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </li>
                        <li>
                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202302/7a666558-7a70-499d-9b5d-403d548aa6c4.png" alt="" /></span><br />
                            <span>분유에 진심을 영양에 과학을_ 남양 분유 기획전</span><br />
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </li>
                        <li>
                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202301/f51165d8-6e0e-4463-bdaa-da6fa933a895.png" alt="" /></span><br />
                            <span>테이크핏 케어, 9가지 필수 아미노산이 함유된 단백질 플랜</span><br />
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </li>
                        <li>
                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2022/202211/3d8bd170-f24b-42f7-958f-eee11cfe77f1.png" alt="" /></span><br />
                            <span>우리아이 성장의 KEY를 찾다 키플러스 (성장기어린이/청소년)</span><br />
                            <span>2023.05.09 ~ 2023.06.30</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default Pop;