/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
'use client'
import DefaultLayer from '@/components/layer/defaultLayer'
import ChangePhoto from '@/components/mypage/edit/changePhoto'
import DefaultPopupPanel from '@/components/panels/dafaultPopupPanel'
import ChangeEmail from '@/useClient/mypage/edit/changeEmail'
import ChangeMobile from '@/useClient/mypage/edit/changeMobile'
import ChangeName from '@/useClient/mypage/edit/changeName'
import ChangePassword from '@/useClient/mypage/edit/changePassword'
import { Divider, Spin, Switch } from 'antd'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { CiMobile3, CiViewList, CiLink } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine, RiUserLocationLine } from 'react-icons/ri'
import { SiAuthelia } from 'react-icons/si'
import { IoIosLogIn } from 'react-icons/io'
import { IoEarthOutline } from 'react-icons/io5'
import styles from './edituser.module.css'

/* 회원정보수정 */
const EditUser = () => {
  const { data } = useSession()
  console.log('data', data)
  const [layerType, setLayerType] = useState('')
  const [layerPopupOpen, setLayerPopupOpen] = useState(false)

  const changeName = () => {
    setLayerType('changeName')
    setLayerPopupOpen(true)
  }
  const changeMobile = () => {
    setLayerType('changeMobile')
    setLayerPopupOpen(true)
  }
  const changeEmail = () => {
    setLayerType('changeEmail')
    setLayerPopupOpen(true)
  }
  const changePassword = () => {
    setLayerType('changePassword')
    setLayerPopupOpen(true)
  }
  const changePhoto = () => {
    setLayerType('changePhoto')
    setLayerPopupOpen(true)
  }
  const onOverseaChange = () => {}

  const onLocationChange = () => {}

  /* 솔루션 INSERT pop-up close */
  const handlePopupClose = () => {
    setLayerPopupOpen(false)
    //location.reload()
  }
  if (!data)
    return (
      <>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </>
    )
  return (
    <>
      <section className={styles.edit_header}>
        <h2 className={styles.edit_title}>회원 정보 수정</h2>
      </section>
      <div className={styles.header_wrap}>
        <div className={styles.logo_area}>
          <Image src="/schale/schale_black_crop.png" alt="헤더아이콘" width={48} height={42} />
          <h1 className={styles.logo_text}>
            <Link href="/" className={styles.logo_text}>
              POCKY
            </Link>
          </h1>
        </div>
        <div className={styles.profile_area}>
          <div className={styles.profile_inner}>
            {/*  <Link href="/edit/photo" className={styles.profile_photo}>
              <img src="https://phinf.pstatic.net/contact/20221004_60/1664848950096SFtsP_JPEG/image.jpg?type=s160" alt="프로필사진" />
            </Link> */}
            <button type="button" className={styles.profile_photo} onClick={changePhoto}>
              <img src="https://phinf.pstatic.net/contact/20221004_60/1664848950096SFtsP_JPEG/image.jpg?type=s160" alt="프로필사진" />
            </button>
            <p className={styles.profile_info_id}>{data?.user?.name}</p>
            <p className={styles.profile_info_emial}>{data?.user?.email}</p>
          </div>
        </div>
        <div className={styles.menu_area}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link href="/">
                <h2 className={styles.menu_text}>내프로필</h2>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">
                <h2 className={styles.menu_text}>보안설정</h2>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">
                <h2 className={styles.menu_text}>이력관리</h2>
              </Link>
            </li>
          </ul>
          <Divider />
        </div>
      </div>
      <div className={styles.account_wrap}>
        <section className={styles.profile}>
          <div className={styles.account_box}>
            <Link className={styles.title} href="/">
              <h2 className={styles.title_text}>내프로필</h2>
            </Link>
            <ul className={styles.account_row}>
              <li>
                <div className={`${styles.row_item} ${styles.row_item_name}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <FaRegUser />
                    </span>
                    {data?.user?.name}
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>실명수정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_mobile}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <CiMobile3 />
                    </span>
                    {data?.user?.mobile}
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeMobile}>
                    <span className={styles.text}>수정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <MdOutlineEmail />
                    </span>
                    {data?.user?.email}
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeEmail}>
                    <span className={styles.text}>수정</span>
                  </button>
                </div>
                <Divider style={{ margin: 0 }} />
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.security}>
          <div className={styles.account_box}>
            <Link className={styles.title} href="/">
              <h2 className={styles.title_text}>보안설정</h2>
            </Link>
            <ul className={styles.account_row}>
              <li>
                <div className={`${styles.row_item} ${styles.row_item_name}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <RiLockPasswordLine />
                    </span>
                    비밀번호
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changePassword}>
                    <span className="text">수정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_mobile}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <SiAuthelia />
                    </span>
                    2단계 인증
                  </span>
                  <button type="button" className={styles.button_accent} onClick={changeMobile}>
                    <span className={styles.text}>설정</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <IoEarthOutline />
                    </span>
                    타지역 로그인 차단
                  </span>
                  <Switch onChange={onLocationChange} style={{ float: 'right', width: '48px' }} />
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <RiUserLocationLine />
                    </span>
                    해외 로그인 차단
                  </span>
                  <Switch onChange={onOverseaChange} style={{ float: 'right', width: '48px' }} />
                </div>
                <Divider style={{ margin: 0 }} />
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.history}>
          <div className={styles.account_box}>
            <Link className={styles.title} href="/">
              <h2 className={styles.title_text}>이력관리</h2>
            </Link>
            <ul className={styles.account_row}>
              <li>
                <div className={`${styles.row_item} ${styles.row_item_name}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <IoIosLogIn />
                    </span>
                    로그인 목록
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>확인</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_mobile}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <CiViewList />
                    </span>
                    내 활동 기록 보기
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>확인</span>
                  </button>
                </div>
              </li>
              <Divider style={{ margin: 0 }} />
              <li>
                <div className={`${styles.row_item} ${styles.row_item_email}`}>
                  <span className={styles.item_text}>
                    <span className={styles.item_icon}>
                      <CiLink />
                    </span>
                    연결된 서비스 관리
                  </span>
                  <button type="button" className={styles.button_edit} onClick={changeName}>
                    <span className={styles.text}>확인</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {layerPopupOpen && (
        <DefaultLayer open={layerPopupOpen}>
          <DefaultPopupPanel
            actionClose={() => {
              setLayerPopupOpen(false)
            }}
          >
            <>
              {layerType === 'changeName' && <ChangeName handlePopupClose={handlePopupClose} />}
              {layerType === 'changeMobile' && <ChangeMobile handlePopupClose={handlePopupClose} />}
              {layerType === 'changeEmail' && <ChangeEmail handlePopupClose={handlePopupClose} />}
              {layerType === 'changePassword' && <ChangePassword handlePopupClose={handlePopupClose} />}
              {layerType === 'changePhoto' && <ChangePhoto handlePopupClose={handlePopupClose} />}
            </>
          </DefaultPopupPanel>
        </DefaultLayer>
      )}
    </>
  )
}

export default EditUser
