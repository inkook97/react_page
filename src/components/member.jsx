import React from "react";
import styles from './member.module.css';
import { useItemState } from "../context";

function Memberitem({ item }) {
    if (item.id <= 4) {
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
}

function Member() {
    const items = useItemState();
    return (
        <div>
            <div className="subimg_in">
                <p>Home &#62; 프리미엄멤버십 &#62; 프리미엄멤버십 안내 &#62; 소개</p>
                <h2>프리미엄멤버십</h2>
            </div>
            <div className={styles.subimg} style={{ background: 'url(https://shoppingcdn.namyangi.com/attach/site/2020/202011/a0262bb6-6047-47ad-a608-1b8bb5604490.png) 100% center no-repeat', width: '1100px', margin: '0 auto' }}></div>
            <div style={{
                margin: '0 auto',
                width: '1100px',
                height: '1300px',
            }}>
                <div className="event_style" style={{ width: '100%', textAlign: 'center', marginTop: '75px', float: 'left' }}>
                    <span style={{ backgroundColor: 'red', color: '#fff', borderRadius: '30px', width: '70px', height: '30px', display: 'inline-block', lineHeight: '30px' }}>혜택1</span>
                    <h3 style={{ paddingTop: '30px', fontSize: '28px', fontWeight: 600 }}>웰컴 기프트로 가입비 돌려받자 !</h3>
                    <p style={{ marginTop: '-30px', fontSize: '20px', color: '#7e7e7e' }}>가입비 내신 만큼 돌려드립니다 (택 1)</p>
                </div>
                <div className={styles.list_b} style={{ float: 'left' }}>
                    {items.map((item) => (
                        <Memberitem item={item} key={item.id} />
                    ))}
                </div>
                <p style={{ fontSize: '15px', color: '#7e7e7e', textAlign: 'center' }}>가입선물은 유료 가입자에 한하여 지급되며 선택한 사은품은 변경 및 교환이 불가합니다</p>
                <div style={{ width: '100%', display: 'flex', padding: '20px', marginTop: '100px', boxSizing: 'border-box', backgroundColor: '#eeeeee' }}>
                    <div style={{ width: '33.3%' }}>
                        <h3 style={{ padding: '24px' }}>프리미엄멤버십 FAQ</h3>
                        <span style={{ padding: '24px' }}>더보기</span>
                    </div>
                    <div style={{ width: '33.3%', }}>
                        <ul style={{ padding: '20px', boxSizing: 'border-box' }}>
                            <li style={{ textOverflow: 'ellipsis', color: '#444', fontSize: '15px', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}><span>1 </span>프리미엄 멤버십이란 무엇인가요?</li>
                            <li style={{ textOverflow: 'ellipsis', color: '#444', fontSize: '15px', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}><span>2 </span>프리미엄 멤버십 할인이 적용되는 제품은 어떤 것이 있나요?</li>
                            <li style={{ textOverflow: 'ellipsis', color: '#444', fontSize: '15px', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}><span>3 </span>남양유업의 다른 멤버십(다둥이 카드등)혜택과 중복할인이 가능한가요?</li>
                        </ul>
                    </div>
                    <div style={{ width: '33.3%' }}>
                        <ul style={{ padding: '20px', boxSizing: 'border-box' }}>
                            <li style={{ textOverflow: 'ellipsis', color: '#444', fontSize: '15px', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}><span>4 </span>프리미엄 멤버십에 가입할수 있는 조건은 무엇인가요?</li>
                            <li style={{ textOverflow: 'ellipsis', color: '#444', fontSize: '15px', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}><span>5 </span>남양몰의 일반 사은품과 중복 지급되나요? 사은품 종류는 어떤 기준으로 정해지나요?</li>
                            <li style={{ textOverflow: 'ellipsis', color: '#444', fontSize: '15px', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}><span>6 </span>등급별 주문제한 총량은 얼마나 되나요?</li>
                        </ul>
                    </div>
                </div>
                <div style={{ width: '1100px', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                    <h4 style={{ width: '300px', fontSize: '18px', padding: '0 0 0 15px', color: '#444', boxSizing: 'border-box' }}>프리미엄멤버십 가입시 유의사항</h4>
                    <ul style={{ width: '800px', fontSize: '14px', padding: '3px 0 4px 11px', color: '#7e7e7e', margin: '0', boxSizing: 'border-box' }}>
                        <li>
                            &#183; 프리미엄멤버십 할인구간 적용을 위한 구매 횟수는 프리미엄멤버십 상품 구매횟수만 카운팅됩니다.
                        </li>
                        <li>
                            &#183; 웰컴기프트는 유료가입자에 한하여 제공해드립니다.
                        </li>
                        <li>
                            &#183; 프리미엄멤버십 갱신기간은 없으며 탈회 전까지 유지됩니다.
                        </li>
                        <li>
                            &#183; 프리미엄멤버십(유료가입자) 해지는 고객센터를 통해서만 가능합니다. (1522-0130)
                        </li>
                        <li>
                            &#183; 프리미엄멤버십 혜택은 당사의 사정에 따라 변경될 수 있습니다.
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default Member;