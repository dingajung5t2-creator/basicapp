export default function MyClockTime() {
    const now = new Date();
    return (
        <div>
            현재 시각: {now.toLocaleTimeString("ko-KR")}
        </div>
    );
};

// 문자열(" ") 안에서는 {}가 JSX 표현식으로 동작하지 않습니다.