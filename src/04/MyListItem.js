import { useState } from "react";
import "./MyListItem.css";

const MyListItem = ({ title, imgUrl, content }) => {
  const [cnt, setCnt] = useState(0); // 배열 구조 분해 할당, cnt 현재값, setCnt 값 변경 함수
  // const desc = user.split(".")[0];

  return (
    <div className="border border-solid border-gray-900 p-2 m-2">
      <ul className="userBox">
        {/* 이미지 너비를 30%로 조정하고, 내부 이미지도 부모 너비에 맞게 w-full 추가 */}
        <li className="img1">
          <img src={`${imgUrl}`} alt={`${title}`} className="w-full object-cover" />
        </li>
        {/* 설명 너비를 70%로 조정 */}
        <li className="desc1">{`${content}`}</li>
      </ul>
      <footer className="footer">
        <h2>
          <span
            onClick={() => {
              setCnt(cnt + 1);
              console.log("cnt=", cnt + 1);
            }}
            style={{ cursor: "pointer" }}
          >
            💖좋아요{cnt}
          </span>
        </h2>
        {/* 하트 아이콘 win+. */}
      </footer>
    </div>
  );
};

export default MyListItem;