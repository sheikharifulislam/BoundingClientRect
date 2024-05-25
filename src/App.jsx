import FrameComponent from "react-frame-component";
import FrameBody from "./component/FrameBody";

const css = `
    // body {
    //   margin: 0;
    //   padding: 0;
    //   margin-left: 100px;
    //   margin-top: 700px;
    // }
    div#example {
        width: 400px;
        height: 200px;
        padding: 20px;
        margin: 50px auto;
        background: purple;
    }
    html {
        margin-top: 100px;
    }
    body {
        // padding-bottom: 1000px;
        // padding-top: 150px;
        margin: 0;
        // margin-left: 100px;
        // margin-top: 200px;
        // border: 1px solid green;
    }
    p {
        margin: 0;
    }

`;

function App() {
    return (
        <div>
            <FrameComponent
                style={{
                    width: "100vw",
                    height: "100vh",
                    marginTop: "100px",
                    border: "1px solid red",
                }}
                head={
                    <>
                        <style>{css}</style>
                    </>
                }
            >
                <FrameBody />
            </FrameComponent>
        </div>
    );
}

export default App;
