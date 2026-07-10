import MyDiv3 from "./MyDiv3";

export default function MyDiv2(props) {
    return(
        <div className="mx-10 bg-lime-700 p-7 rounded max-h-80">
            <p className="p-3">
                {`${props.dname1} > ${props.dname2}`}
                {/* 키보드 좌측 tab 위에 `으로 백틱 표현 */}
            </p>
            <MyDiv3 dname1={props.dname1}
            dname2={props.dname2}
            dname3={props.dname3} />
        </div>
    )    
}