/* 아래 코드만 적어도 미들웨어 작동 */
export { default } from 'next-auth/middleware'

/* config 부분에 matcher 부분을 추가해 로그인한 상태만 볼 수 있는 페이지를 계속 추가할 수 있다. */
export const config = {
  // matcher: ['/posts/:path*']
  // matcher: ['/mypage/:path*', '/bbs/:path/write'],
  matcher: ['/bbs/:path/write'],
}
