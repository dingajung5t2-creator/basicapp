import { useState, useEffect } from "react";

export default function MyClockTime() {
    // 현재 시간을 상태로 저장
    const [currentTime, setCurrentTime] = useState(() => new Date());

    useEffect(() => {
        // 1초마다 현재 시간 갱신
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // 컴포넌트가 사라질 때 타이머 제거
        return () => clearInterval(timer);
    }, []); // 최초 1회만 실행, 의존성 배열[] 명시 안하면 1초마다 생성과 제거 반복
    // useEffect의 의존성 배열(Dependency Array) 은 언제 useEffect를 다시 실행할지 결정하는 목록
    // 의존성 배열 없다면, 랜더링 때마다 실행.
    // [] 빈 배열, 생성될때 1회만 실행.
    // [cnt] cnt가 변화할때 실행.
    // [cnt,user,...] 명시한 변수중에 하나라도 변경되면 실행.

    return (
        <div>
            현재 시각: {currentTime.toLocaleTimeString("ko-KR")}
        </div>
    );
}

// 문자열(" ") 안에서는 {}가 JSX 표현식으로 동작하지 않습니다.