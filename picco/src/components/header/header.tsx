'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import { signIn, signOut, useSession } from 'next-auth/react'
import './header.css'
const Header = () => {
  const { data: session } = useSession()
  
  /* 로그인 상태 */
  if (session && session.user) {
    return (
      <header id="header" role="banner" className="header">
        <Link href="/">
          <div className="header__logo">
            <Image src="/schale/schale_black_crop.png" alt="헤더아이콘" width={48} height={42} />

            <h1 className="header__logo__title">
              <p className="header__logo__title">POCKY</p>
            </h1>
          </div>
        </Link>
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link href="/profile" className="header__menu__item">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/test" className="header__menu__item">
                Test
              </Link>
            </li>
            <li>
              <Link href="/blog" className="header__menu__item">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/bbs" className="header__menu__item">
                BBS
              </Link>
            </li>
            <li>
              <Link href="/youtube" className="header__menu__item">
                Youtube
              </Link>
            </li>
            <li>
              <Link href="/products" className="header__menu__item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/mypage" className="header__menu__item">
                My Account
              </Link>
            </li>
            <li>
              <button className="header__menu__item" onClick={() => signOut()}>
                {/* {session.user.name}님 */} Logout
              </button>
            </li>
          </ul>
        </nav>
        <button className="header__toggle" aria-label="navigation menu toggle">
          <FaBars size={30} color="black" />
        </button>
      </header>
    )
  }
  /* 비 로그인 상태 */
  return (
    <>
      <header id="header" role="banner" className="header">
        <Link href="/">
          <div className="header__logo">
            <Image src="/schale/schale_black_crop.png" alt="헤더아이콘" width={48} height={42} />

            <h1 className="header__logo__title">
              <p className="header__logo__title">POCKY</p>
            </h1>
          </div>
        </Link>
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link href="/profile" className="header__menu__item">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/test" className="header__menu__item">
                Test
              </Link>
            </li>
            <li>
              <Link href="/blog" className="header__menu__item">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/bbs" className="header__menu__item">
                BBS
              </Link>
            </li>
            <li>
              <Link href="/products" className="header__menu__item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/youtube" className="header__menu__item">
                Youtube
              </Link>
            </li>
            <li>
              <Link href="/mypage" className="header__menu__item">
                My Account
              </Link>
            </li>
            <li>
              <div className="space-x-10">
                <button className="header__menu__item" onClick={() => signIn()}>
                  Login
                </button>
              </div>
            </li>
          </ul>
        </nav>
        <button className="header__toggle" aria-label="navigation menu toggle">
          <FaBars size={30} color="black" />
        </button>
      </header>
    </>
  )
}

export default Header
