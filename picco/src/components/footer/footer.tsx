/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import './footer.css'
import { FloatButton } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import FloatGroup from './floatGroup'
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="cs_section">
        <div className="cs_info">
          <p className="info_title">고객센터 1000-1000</p>
          <p className="info_description">운영시간 : 평일 09:00 - 17:00 (점심시간: 12:00-13:00 제외)</p>
        </div>
      </div>
      <div className="cs_button_box">
        <div style={{ display: 'flex' }}>
          <Link href="/mypage/cscenter/faq" className="button_faq">
            FAQ
            <span className="button_faq_arrow">
              <GoArrowRight />
            </span>
          </Link>
          <Link href="/mypage/cscenter/qna" className="button_qna">
            1:1문의
            <span className="button_qna_arrow">
              <GoArrowRight />
            </span>
          </Link>
        </div>
        <div>
          <FloatGroup />
          {/* <ul className="footer_social_list">
            <li className="footer_social_item instagram">
              <button>
                <img src="/footer/social/instagram.png" alt="인스타그램앱" className="social_image" />
              </button>
            </li>
            <li className="footer_social_item youtube">
              <button>
                <img src="/footer/social/youtube.png" alt="회사유튜브" className="social_image" />
              </button>
            </li>
            <li className="footer_social_item apple">
              <button>
                <img src="/footer/social/apple.png" alt="애플스토어" className="social_image" />
              </button>
            </li>
            <li className="footer_social_item playstore">
              <button>
                <img src="/footer/social/playstore.png" alt="구글플레이스토어" className="social_image" />
              </button>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="footer_half">
        <div className="notice_section">
          <h2 className="notice_title">NOTICE</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="menu_section">
          <ul className="menu_list">
            <li className="menu_item">
              <h2 className="menu_title">ABOUT US</h2>
            </li>
            {/* <li className="menu_item">
              <h2 className="menu_title">MY ORDER</h2>
            </li> */}
            <li className="menu_item">
              <h2 className="menu_title">MY ACCOUNT</h2>
            </li>
            <li className="menu_item">
              <h2 className="menu_title">HELP</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_info">
        <div className="footer_documentation">
          <Link href="https://www.29cm.co.kr/home/agreement" className="documentation_privacy">
            개인정보처리방침
          </Link>
          <Link href="https://www.29cm.co.kr/home/private" className="documentation_terms">
            이용약관
          </Link>
        </div>

     {/*    <div className="footer_corp">
          <p>
            <span style={{ padding: '0 0.5rem 0 0' }}>상호명:주식회사 플랜아이 (PLANI Co., Ltd.)</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>사업장소재지:대전 유성구 문지로 282-10 (문지동 659-1)</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>사업자 번호:305-81-72470</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>응용 소프트웨어 개발 및 공급업</span>
          </p>
          <p>
            <span style={{ padding: '0 0.5rem 0 0' }}>TEL.042-934-3508</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>이메일:doremi@plani.co.kr</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>대표:DOREMI</span>
            <span style={{ padding: '0 0.5rem 0 0' }}>서비스:(주)플랜아이</span>
          </p>
          <p>
            <span style={{ padding: '0 0.5rem 0 0' }}>PLANI, 정보를 쉽고 가치있게</span>
          </p>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
