import { useState } from "react";

function Lotto645() {
    /**
     * 1. 로또 번호(공 객체들의 배열)를 관리할 React State 정의
     * - 기본값은 빈 배열 `[]` 입니다.
     * - 각 공 객체 구조: { id: "값", number: 숫자나문자, color: "색상" }
     */
    const [balls, setBalls] = useState([]);
    
    /**
     * 2. 화면에 그려질 순서(인덱스)대로 매핑할 스타일 색상 배열 정의
     * - 1~6번째: 로또 일반 공들의 배경색 (알록달록한 파스텔톤 조합)
     * - 7번째 ('+'): 투명하게('transparent') 설정하여 동그란 배경 없이 기호만 노출
     * - 8번째 (보너스 번호): 특별함을 나타내기 위해 반짝이는 골드색('gold') 지정
     */
    const colors = [
        "red",         // 1번째 공 색상
        "orange",      // 2번째 공 색상
        "salmon",      // 3번째 공 색상
        "green",       // 4번째 공 색상
        "blue",        // 5번째 공 색상
        "purple",      // 6번째 공 색상
        "transparent", // 7번째 '+' 기호 자리 (배경 투명화)
        "gold",        // 8번째 보너스 번호 공 색상
    ];

    /**
     * 3. 로또 번호 추출 및 데이터 가공을 처리하는 핵심 함수
     */
    const createLotto = () => {
        // 임시로 숫자를 담아둘 빈 배열 선언
        const lottoNumbers = [];

        /**
         * [단계 A] 중복 없는 7개의 랜덤 숫자 추출하기
         * - 1~6번째 일반 번호 6개와 8번째 보너스 번호 1개를 미리 한꺼번에 뽑아 중복을 원천 차단합니다.
         * - 숫자가 7개가 채워질 때까지 while 루프를 계속 반복 실행합니다.
         */
        while (lottoNumbers.length < 7) {
            // 1 ~ 45 사이의 자연수를 랜덤하게 생성
            const num = Math.floor(Math.random() * 45) + 1;
            
            // 이미 뽑힌 숫자가 아닌 경우(중복 제거)에만 배열에 담아줍니다.
            if (!lottoNumbers.includes(num)) {
                lottoNumbers.push(num);
            }
        }

        /**
         * [단계 B] 실제 로또 추첨처럼 숫자 정렬 처리하기
         * - slice(0, 6)을 통해 추출한 7개의 숫자 중 앞의 6개(일반 번호)만 잘라냅니다.
         * - sort((a, b) => a - b)를 이용해 잘라낸 6개 숫자를 오름차순(작은 수 -> 큰 수)으로 예쁘게 정렬합니다.
         * - 7번째 뽑힌 마지막 숫자(lottoNumbers[6])는 정렬에서 제외하고 보너스 번호로 별도 저장합니다.
         */
        const mainNumbers = lottoNumbers.slice(0, 6).sort((a, b) => a - b);
        // 화살표 함수, a,b 를 비교하여 a-b 가 음수면 자리 바꾸기. (자바 람다 비슷)
        const bonusNumber = lottoNumbers[6];

        /**
         * [단계 C] 최종 화면용 8칸 배열 조립하기
         * - 스프레드 연산자(...) : 객체나 배열을 펼쳐 놓는
         * 를 이용해 정렬된 일반 숫자 6개를 펼쳐놓고,
         * - 7번째 자리에 더하기 기호('+')를 배치한 뒤, 
         * - 맨 마지막 8번째 자리에 보너스 번호를 붙여 최종 8개 요소의 배열을 만듭니다.
         */
        const finalLotto = [
            ...mainNumbers,
            "+",
            bonusNumber
        ];

        /**
         * [단계 D] React 화면 구현을 위한 객체 배열(Object Array) 데이터 변환 작업
         * - 단순 값 배열이었던 `finalLotto`를 map 함수를 사용해 스타일 및 키 속성이 담긴 객체 배열로 변환합니다.
         * - index 인자를 받아와서 위에서 정의한 colors 배열의 인덱스와 1:1 매칭합니다.
         */
        const result = finalLotto.map((num, index) => ({
            // 1) React가 각 요소를 식별할 수 있도록 유니크한 key 값을 '값-인덱스' 형태로 부여 (렌더링 에러 방지)
            id: `${num}-${index}`, 
            // 2) 실제 화면에 렌더링될 숫자 혹은 기호
            number: num,
            // 3) 이 공의 인덱스와 매칭되는 고유 컬러 지정
            color: colors[index] 
        }));

        // 완성된 데이터 객체 배열을 State에 저장하여 화면을 리렌더링(갱신)시킵니다.
        setBalls(result);
    };

    return (
        // 전체 레이아웃: 중앙 정렬 및 위쪽 마진 확보
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>🎱 로또 6/45 번호 생성기</h2>            

            {/* 로또 공들이 배치되는 가로 정렬 컨테이너 */}
            <h3 style={{ 
                display: "flex", 
                justifyContent: "center", // 가로축 중앙 정렬
                alignItems: "center",     // 세로축 중앙 정렬 ('+' 기호와 공들의 높이 조절용)
                marginTop: "30px",
                minHeight: "55px"         // 번호가 아직 없을 때 레이아웃이 찌그러지거나 들썩거리는 현상 방지
            }}>
                {/* State에 저장된 balls 데이터를 순회하며 하나씩 공을 그려줌 */}
                {balls.map((ball, index) => {
                    // 현재 순회 중인 공이 더하기 기호('+')인지 판별하는 플래그 변수
                    const isPlusSign = ball.number === "+";
                    
                    return (
                        <span
                            key={ball.id} // React 고유 식별자 설정
                            style={{
                                display: "inline-block",
                                // '+' 기호는 폭을 좁게(20px), 로또 번호 공은 동그랗게(45px) 크기 동적 분기 처리
                                width: isPlusSign ? "20px" : "45px", 
                                height: "45px",
                                lineHeight: "45px", // 수직 중앙 정렬 처리
                                borderRadius: "50%", // 완벽한 동그라미 모양 형성
                                backgroundColor: ball.color, // 각각 미리 설정해둔 색상 적용
                                
                                // 글자 색상 분기: 
                                // 8번째 보너스 번호(index === 7, 배경이 골드라 흰 글씨는 안보임)이거나 
                                // '+' 기호(배경이 투명함)인 경우 검은색(black)으로 지정하고, 일반 공은 흰색(white) 지정
                                color: (index === 7 || isPlusSign) ? "black" : "white",
                                
                                margin: "5px",
                                fontWeight: "bold",
                                // '+' 기호는 조금 더 굵고 크게 보이도록 폰트 크기 증대
                                fontSize: isPlusSign ? "20px" : "16px",
                                // 번호 생성 및 갱신 시 숫자가 뿅뿅 나타날 때 부드러운 전이(시각) 효과 제공
                                transition: "all 0.3s ease" 
                            }}
                        >
                            {/* 실제 화면에 나타날 로또 번호 또는 '+' 기호 */}
                            {ball.number}
                        </span>
                    );
                })}
            </h3>

            {/* 생성 버튼 스타일 정의 */}
            <button 
                onClick={createLotto} // 클릭 시 위의 createLotto 함수 호출
                style={{
                    padding: "6px 12px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer", // 마우스 올렸을 때 손가락 모양으로 변경
                    marginTop: "20px"
                }}
            >
                로또번호 생성
            </button>
        </div>
    );
}

export default Lotto645;