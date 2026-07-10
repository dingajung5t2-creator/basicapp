import MyListData from './MyListData.json';
import MyListItem from "./MyListItem";
// import "./MyDiv1.css";

export default function MyList() {
    console.log(MyListData);

    // 4개 배열 요소 하나씩 꺼내서 태그 요소 생성.
    const tags = MyListData.map(item =>
        <MyListItem 
            title={item.title}
            imgUrl={item.imgUrl}
            content={item.content}
        />
    )

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tags}
        </div>
    )
    // 자동 줄맞춤 shift + alt + F
}