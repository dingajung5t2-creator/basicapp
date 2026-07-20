const data = [
    "차대사람",
    "차대차",
    "차량단독",
    "철길건널목"
];

export default function CategoryButtons({
    selected,
    onSelect
}) {

    return (
        <div>
            <h2 className="text-2xl mb-4">
                사고유형 대분류
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