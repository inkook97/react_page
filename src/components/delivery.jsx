import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Delivery() {
    return (
        <div>
            <div className="subimg" style={{ height: '1000px', width: '1100px' }}>
                <p className="p_event">Home &#62; 가정배달</p>
                <img src="https://shoppingcdn.namyangi.com/attach/site/2021/202111/1d77283d-eb9d-4db0-8609-cbfc6365efab.jpg?03bba6c" alt="" />
                <ul style={{ padding: ' 60px 0px', boxSizing: 'border-box', float: 'left' }}>
                    <li style={{ float: 'left' }}><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202302/453196af-77e1-4937-b825-ae7399e1300e.jpg?03bba6c" alt="" /></li>
                    <li style={{ float: 'left' }}><img src="https://shoppingcdn.namyangi.com/attach/site/2021/202103/c98937de-e26c-4494-ad4b-bf32337df803.png?03bba6c" alt="" /></li>
                </ul>
            </div>
            <div className="contents">
                <div style={{
                    margin: '0 auto',
                    width: '1100px',
                    height: '1000px',
                }}>
                    <div className="event_tabmn" id='event_tabmn'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="delivery1" title="가정배달 추천제품">
                                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px' }}>
                                    <ul style={{ padding: 0, margin: 0, width: '250px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2022/202210/09710662-1367-4fdf-b0cc-6f30c6c7f9a6.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                    <ul style={{ padding: 0, margin: 0, width: '250px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2021/202111/66d0430e-5b53-4578-9b85-1f94eeec969b.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                    <ul style={{ padding: 0, margin: 0, width: '250px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2021/202111/f84d85fa-2711-49d0-96b7-c58a4a824fa1.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                    <ul style={{ padding: 0, margin: 0, width: '250px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2019/201908/2c94a5f5-135f-4357-a3b5-999f53be5970.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                    <ul style={{ padding: 0, margin: 0, width: '250px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px', marginTop: '30px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2020/202004/74b07f79-8da7-422a-be7b-d2559b9d29a0.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab eventKey="delivery2" title="아이를 위한 제품">
                                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', marginTop: '60px' }}>
                                    <ul style={{ padding: 0, margin: 0, width: '250px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2022/202210/09710662-1367-4fdf-b0cc-6f30c6c7f9a6.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                    <ul style={{ padding: 0, margin: 0, width: '250px', marginLeft: '20px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2021/202111/66d0430e-5b53-4578-9b85-1f94eeec969b.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                    <ul style={{ padding: 0, margin: 0, width: '250px', marginLeft: '20px' }}>
                                        <li style={{ border: '1px solid #ccc', padding: '15px' }}>
                                            <span><img src="https://shoppingcdn.namyangi.com/attach/item/2021/202111/f84d85fa-2711-49d0-96b7-c58a4a824fa1.jpg?03bba6c" alt="" width='100%' style={{ paddingTop: '30px' }} /></span>
                                            <span>[가정배달] 아침의 선물 불가리스
                                                골드 (150ml)</span><br />
                                            <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ fontWeight: 800 }}>1,550</span>원</span>
                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Delivery;