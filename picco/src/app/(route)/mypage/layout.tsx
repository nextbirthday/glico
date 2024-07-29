import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Sidebar from '@/components/mypage/sidebar'
import './layout.css'
export default function MypageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <div style={{ padding: '2rem 3rem 2rem 3rem' }}>
          <div className="mypage_wrap">
            <div className="mypage_article_left">
              <Sidebar />
            </div>
            <div className="mypage_article_right">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
