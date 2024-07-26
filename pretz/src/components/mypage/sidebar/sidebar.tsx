'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import './sidebar.css'
const Sidebar = () => {
  const { data } = useSession()

  console.log('data', data)
  return (
    <ul className="mypage_list">
      <section className="my_my">
        <div className="my_myin">
          <h1 className="mypage_username">{data?.user?.name}</h1>
        </div>
        <ul>
          <li>
            <Link href="/mypage/heart" className="heart_button">
              <span className="heart_text">좋아요</span> <span className="heart_count">3</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className="my_account">
        <h3 className="menu_title">나의 계정설정</h3>
        <ul className="account_menu_list">
          <li className="account_menu_item">
            <Link href="/mypage/edit/info">회원정보수정</Link>
          </li>
          <li className="account_menu_item">
            <Link href="/channel/settings">채널 관리</Link>
          </li>
          <li className="account_menu_item">
            <Link href="/channel/create">채널 만들기</Link>
          </li>
          <li className="account_menu_item">
            <Link href="/mypage/grade">멤버쉽등급</Link>
          </li>
          <li className="account_menu_item">
            <Link href="/product/insert">제품 등록</Link>
          </li>
        </ul>
        <h3 className="menu_title">고객센터</h3>
        <ul className="cs_menu_list">
          <li className="cs_menu_item">
            <Link href="/mypage/cscenter/qna">1:1 문의내역</Link>
          </li>
          <li className="cs_menu_item">
            <Link href="/mypage/cscenter/notice">공지사항</Link>
          </li>
          <li className="cs_menu_item">
            <Link href="/mypage/cscenter/faq">FAQ</Link>
          </li>
        </ul>
      </section>
    </ul>
  )
}

export default Sidebar
