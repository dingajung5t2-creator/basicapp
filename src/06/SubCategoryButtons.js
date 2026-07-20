const data = [
    "횡단중",
    "차도통행중",
    "길가장자리구역통행중",
    "보도통행중",
    "기타"
];

export default function SubCategoryButtons({
    selected,
    onSelect
}) {

    return (
        <div>
            <h2 className="text-2xl mb-4">
                사고유형 중분류
            </h2>
            <div className="flex gap-4">
                {
                    data.map(item =>
                        <button
                            key={item}
                            onClick={() => onSelect(item)}
                            className={`
                                px-8 py-3 rounded
                                ${selected === item ? "bg-red-700 text-white" : "bg-sky-500 text-white"}
                            `}>
                            {item}
                        </button>
                    )
                }
            </div>
        </div>
    )
}