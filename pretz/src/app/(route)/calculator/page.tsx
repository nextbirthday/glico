'use client';

import KakaoShareButton from '@/components/KakaoShare';
import React, { useState } from 'react'

const Calculator = () => {

  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [resultTimes, setResultTimes] = useState<String[]>([]);
  const kakaoApiKey= process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
  //console.log(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
  console.log(kakaoApiKey);
  const calculateTime = () => {

    let currentHour = Number(hour);
    let currentMinute = Number(minute);

    let resultTime = [];

    for(let i =0; i < 6; i++){

      currentMinute -=30;
      
      if(currentMinute < 0) {
        currentMinute += 60;
        currentHour -= 1;
      }

      currentHour -= 1;

      if(currentHour < 0) {
        currentHour += 24;
      }

      resultTime.unshift(
      `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2,'0')}`,
      );
    }
    setResultTimes(resultTime);
  };

const renderSelectOptions = (start:number, end:number) => {
 
  const options = [];

  for(let i = start; i<=end; i++){
    const value = i < 10 ? `0${i}` : i.toString();
    options.push(<option key={i}>{value}</option>);
  }

  return options;
}

const shareDescription = `shareDescription\n
${resultTimes.map((time, index) => `${index + 1}번째 : ${time}`)
.join("\n")}`;

  /* return */
  return (
    <div >
      <div>
        <h1 >
          🕖기상 시간을 체크해주세요.🕖
        </h1>
        <div>
          <div>
            <label htmlFor="hour-select">
              시 :
            </label>
            <select
              value={hour}
              onChange={e => setHour(e.target.value)}
            >
              {renderSelectOptions(0, 23)}
            </select>
          </div>
          <div >
            <label htmlFor="minute-select">
              분 :
            </label>
            <select
              id="minute-select"
              value={minute}
              onChange={e => setMinute(e.target.value)}
            >
              {renderSelectOptions(0, 59)}
            </select>
          </div>
        </div>

        {resultTimes.length === 0 ? (
          <button
            onClick={calculateTime}
          >
            계산하기
          </button>
        ) : (
          <div>
            <div >
              <div >잠자기 최적의 시간</div>
              <div >{resultTimes[0]}</div>
            </div>
            <div>
              <p>이후 잠자기 최적의 시간</p>
              {resultTimes.slice(1).map((time, index) => (
                <div key={index}>
                  {index + 2}번째 추천 시간 {time}
                </div>
              ))}
            </div>
            <div >
              <button
                onClick={calculateTime}
              >
                다시 계산하기
              </button>
              <KakaoShareButton description={shareDescription} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculator;