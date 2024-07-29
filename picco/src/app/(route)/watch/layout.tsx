import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function WatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <div style={{ padding: '2rem 3rem 2rem 3rem' }}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
