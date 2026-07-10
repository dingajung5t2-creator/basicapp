import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
    const div1Name = "div1";
    const div2Name = "div2";
    const div3Name = "div3";

    return (
        <div className="items-center w-4/5 max-h-96 bg-lime-900 text-white text-2xl rounded p-7">
            <p className="p-3">{div1Name}</p>
            <MyDiv2 dname1={div1Name}
                dname2={div2Name}
                dname3={div3Name} />
        </div>
    )
// 자동 줄맞춤 shift + alt + F
}