import Button from "../components/Button";
import Header from "../components/Header";
// import Editor from "../components/Editor";

const Home = () => {
    return (
        <div>
            <Header
                title={"Home"}
                leftChild={
                    <Button
                        type="positive"
                        text={"긍정 버튼"}
                        onClick={() => {
                            alert("positive button");
                        }}/>
                }
                rightChild={
                    <Button
                        type="negative"
                        text={"부정 버튼"}
                        onClick={() => {
                            alert("negative button");
                        }}
                    />
                }
            />
        </div>

        // 에디터 확인 코드
        // <div>
        //     <Editor
        //         initData={{
        //             date: new date().getTime(),
        //             emotionId: 1,
        //             content: "이전에 작성했던 일기",
        //         }}
        //         onSubmit={() => alert("작성 완료")}
        //     />
        // </div>
    );
};
export default Home;