import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useState, useRef} from "react";

// const dummyList = [
//     {
//         id: 1,
//         author: "최윤서",
//         content: "ㅎㅇ",
//         emotion: 1,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 2,
//         author: "안정인",
//         content: "먼작귀",
//         emotion: 2,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 3,
//         author: "김진석",
//         content: "좀비루팡",
//         emotion: 3,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 4,
//         author: "구도윤",
//         content: "대성 청정 가져가주세요.",
//         emotion: 4,
//         created_date: new Date().getTime(),
//     },
// ];

function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current
        }
        dataId.current += 1;
        setData([newItem, ...data]);
    };

    return (
    <div className="App">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
