import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const url = new URL(req.url); /* URL 객체 생성 */
    const code = url.searchParams.get('code'); /* code */

    try {
        
        const res = await axios(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${code}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        );

        const data = res.data;
        
        return NextResponse.json({
            data: data,
        });

    } catch (error) {
        return NextResponse.json({
            data: 'fail',
        });
    }
}