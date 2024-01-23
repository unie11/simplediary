import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
    {
        id: 1,
        author: "최윤서",
        content: "ㅎㅇ",
        emotion: 1,
        create_date: new Date().getDate(),
    },
    {
        id: 2,
        author: "안정인",
        content: "먼작귀",
        emotion: 2,
        create_date: new Date().getTime(),
    },
    {
        id: 3,
        author: "김진석",
        content: "좀비루팡",
        emotion: 3,
        create_date: new Date().getTime(),
    },
    {
        id: 4,
        author: "구도윤",
        content: "대성 청정 가져가주세요.",
        emotion: 4,
        create_date: new Date().getTime(),
    },
];

function App() {
  return (
    <div className="App">
        <DiaryEditor />
        <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
