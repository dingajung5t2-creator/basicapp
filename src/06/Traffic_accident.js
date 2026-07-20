import { useState, useEffect } from 'react';
import { getTrafficData } from './trafficApi';
import CategoryButtons from './CategoryButtons';
import SubCategoryButtons from './SubCategoryButtons';
import AccidentInfo from './AccidentInfo';

export default function Traffic() {
    const [bigType, setBigType] = useState("");
    const [smallType, setSmallType] = useState("");

    const [result, setResult] = useState(null);

    useEffect(() => {
        if (bigType && smallType) {
            getTrafficData(bigType, smallType)
                .then(res => {
                    console.log("API 응답:", res);
                    setResult(res);
                });
        }
    }, [bigType, smallType]);

    return (
        <div className="max-w-5xl mx-auto p-10">
            <CategoryButtons
            // 대분류
                selected={bigType}
                onSelect={setBigType}
            />
            <SubCategoryButtons
            // 중분류
                selected={smallType}
                onSelect={setSmallType}
            />
            {
                result &&
                <AccidentInfo data={result} />
            }
        </div>
    )
}