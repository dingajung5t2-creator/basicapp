import { FcAlarmClock } from "react-icons/fc";

export default function MyClockImage(){
    return(
        <FcAlarmClock
        size={120}
        style={{
              color: "pink"
            }}
            // 첫번째 중괄호 : 자바스크립트 영역이다
            // 두번째 중괄호 : 자바스크립트의 객체
            // React의 style 속성은 문자열이 아니라 JavaScript 객체 전달
        />
    );
};