import React from "react";
import styles from "./event.module.css"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AiOutlineRightCircle } from "react-icons/ai";
import NoticeList from "./noticeList";



function Event() {
    return (
        <div>
            <div className="subimg">
                <p className="p_event">Home &#62; 기획전 &#62; 이벤트홈</p>
                <Carousel>
                    <Carousel.Item>
                        <div style={{ width: '1100px', height: '400px', background: 'url(https://shoppingcdn.namyangi.com/attach/site/2020/202011/bf81c446-5d7d-483f-af35-35060e037325.png) no-repeat 100%', color: '#fff', margin: '0 auto' }}>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ width: '1100px', height: '400px', background: 'url(https://shoppingcdn.namyangi.com/attach/site/2022/202204/9816f39e-918f-436d-a9f3-ec7cc092c7e5.png) no-repeat 100%', color: '#fff', margin: '0 auto' }}>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ width: '1100px', height: '400px', background: 'url(https://shoppingcdn.namyangi.com/attach/site/2020/202011/a0262bb6-6047-47ad-a608-1b8bb5604490.png) no-repeat 100%', color: '#fff', margin: '0 auto' }}>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="contents">
                <div className={styles.contents_in}>
                    <div className={styles.notice_area}>
                        <div className={styles.notice}>
                            <div className={styles.notice_h}>
                                <h3>이벤트결과</h3>
                                <button>더보기<AiOutlineRightCircle /></button>
                            </div>
                            <div className={styles.notice_b}>
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                                <NoticeList txt='[뉴페이스체험단] 리얼 아몬드음료, 아몬드데이 체험단! 우수 리뷰 당첨자 발표' date="23.01.26" />
                                <NoticeList txt='[뉴페이스체험단] 아몬드데이 체험단 우수 리뷰 당첨자 발표' date="23.01.04" />
                                <NoticeList txt='[10월 임산부의 날] 프리미엄 멤버십 어썸한 쇼핑지원 당첨' date="23.01.04" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.event_tabmn} id='event_tabmn'>
                        <h3>이벤트</h3>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="event1" title="진행중인이벤트" >
                                <ul className="e_item1">
                                    <li>
                                        <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png" alt="" /></span>
                                        <span>
                                            오직 시크릿마켓에서만, 쉿크릿 0원딜!<br />
                                            <span>기간 23.05.16 ~ 23.05.19</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202304/c59164d0-98b2-49f4-8b82-d6eb920e4868.png" alt="" /></span>
                                        <span>
                                            함께하면 대박나는 2023 동행축제<br />
                                            기간 23.03.16 ~ 23.04.19
                                        </span>
                                    </li>
                                    <li>
                                        <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202304/f249255d-5634-473f-ab68-afe7a7e86de5.jpg" alt="" /></span>
                                        <span>
                                            남양몰 포토리뷰 베스트 리뷰어 이벤트<br />
                                            기간 23.03.16 ~ 23.05.11
                                        </span>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="event2" title="종료된이벤트">
                                <ul className="e_item1">
                                    <li>
                                        <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png" alt="" /></span>
                                        <span>
                                            오직 시크릿마켓에서만, 쉿크릿 0원딜!<br />
                                            <span>기간 23.05.16 ~ 23.05.19</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png" alt="" /></span>
                                        <span>
                                            오직 시크릿마켓에서만, 쉿크릿 0원딜!<br />
                                            <span>기간 23.03.16 ~ 23.04.19</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span><img src="https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png" alt="" /></span>
                                        <span>
                                            오직 시크릿마켓에서만, 쉿크릿 0원딜!<br />
                                            <span>기간 23.02.16 ~ 23.03.19</span>
                                        </span>
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Event;