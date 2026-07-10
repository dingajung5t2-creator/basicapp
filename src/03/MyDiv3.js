export default function MyDiv3(props) {
    // 1개씩 className 적용하면서 변경 확인.
    return (
        <div className="mx-10 bg-lime-400 p-7 rounded">
            <p className="mb-6">
                {`${props.dname1} > ${props.dname2} > ${props.dname3}`}<br/>
                {props.dname1 + " > " + props.dname2 + " > " + props.dname3}
                {/* 키보드 좌측 tab 위에 `으로 백틱 표현 */}
                {/* 백틱은 문자와 변수를 혼용, + 는 문자열 연결 고전 방식 */}
            </p>
        </div>
    )
}