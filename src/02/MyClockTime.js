import { useState, useEffect } from "react";


export default function MyClockTime() {
    const [currentTime, setCurrentTime] = useState(new Date());// 초기값 new Date()
    // const now = new Date();
    useEffect(() => {
        const tm = setInterval(() => {
            setCurrentTime(new Date());// 현재 시간값
        }, 1000);

        return () => {
            clearInterval(tm);
        }

    })
    // useEffect 의 dependency 빈배열[]


    return (
        <div>
            현재 시각: {currentTime.toLocaleTimeString("ko-KR")}
        </div>
    );
};

// 문자열(" ") 안에서는 {}가 JSX 표현식으로 동작하지 않습니다.