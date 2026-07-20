import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

export default function MyClock() {
    return (
        <>
            <MyClockImage />
            <div className="mt-4">
                <MyClockTime />
            </div>
        </>
    );
};

// 자동 줄맞춤 shift + alt + F
// 부모가 flex 라면 br 동작 안함.