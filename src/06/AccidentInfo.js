export default function AccidentInfo({ data }) {
    return (
        <div className="mt-10 grid grid-cols-5 text-center">
            <div>
                <p>사고건수</p>
                <h2>{data.사고건수}</h2>
            </div>
            <div>
                <p>사망자수</p>
                <h2>{data.사망자수}</h2>
            </div>
            <div>
                <p>중상자수</p>
                <h2>{data.중상자수}</h2>
            </div>
            <div>
                <p>경상자수</p>
                <h2>{data.경상자수}</h2>
            </div>
            <div>
                <p>부상신고자수</p>
                <h2>{data.부상신고자수}</h2>
            </div>
        </div>
    )
}