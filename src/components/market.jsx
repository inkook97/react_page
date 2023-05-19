import React from "react";

function Market() {
    return (
        <div>
            <div className="subimg">
                <p className="p_event">Home &#62; 시크릿마켓</p>
                <img src="https://shoppingcdn.namyangi.com/attach/editor/2022/202204/da996901-fef3-4eb4-aef5-ee776c83ba99.jpg" alt="" width="100%" height="1540px" />
            </div>
            <div className="contents">
                <div style={{
                    margin: '0 auto',
                    width: '1100px',
                    height: '550px',
                }}>
                    <div className="code_title" style={{ marginTop: '100px', width: '1100px', height: '100px' }}>
                        <h3 style={{ fontWeight: '600', float: 'left' }}>시크릿코드 입력 <span style={{ color: 'red', fontWeight: '400', float: 'right' }}>(오놀라운특가)</span></h3>
                        <span style={{ float: 'right' }}><span style={{ color: 'red' }}>*</span>필수입력 항목</span>
                    </div>
                    <ul style={{ float: 'left', marign: 0, padding: '0 20px', width: '1100px', height: '100px', lineHeight: '100px', borderTop: '3px solid #000', borderBottom: '1px solid #000' }}>
                        <li style={{ float: 'left' }}><span style={{ color: 'red' }}>*</span>시크릿코드</li>
                        <li style={{ float: 'left', paddingLeft: '70px' }}><input type="text" placeholder="시크릿코드를 입력해주세요." title="시크릿코드 입력" style={{ height: '38px', width: '430px', padding: '10px 15px' }} /></li>
                    </ul>
                    <div style={{ float: 'left', width: '100%', textAlign: 'center', marginTop: '30px' }}>
                        <button style={{ backgroundColor: 'red', color: '#fff', border: 'none', width: '190px', height: '60px', fontWeight: '600', fontSize: '18px' }}>확인</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Market;