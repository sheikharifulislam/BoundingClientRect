import { useEffect, useRef, useState } from "react";

const css = `
    body {
      margin: 0;
      padding: 0;
      margin-left: 100px;
      margin-top: 700px;
    }

`;

function App() {
    const exampleRef = useRef(null);
    const [boundingClientRect, setBoundingClientRect] = useState({});
    useEffect(() => {
        function getBoundingClientRect() {
            const { top, right, bottom, left, width, height, x, y } = exampleRef.current.getBoundingClientRect();
            setBoundingClientRect({
                top: top + window.scrollY,
                right,
                bottom: bottom + scrollY,
                left,
                width,
                height,
                x,
                y: top + window.scrollY,
            });
        }
        getBoundingClientRect();
        window.addEventListener("scroll", getBoundingClientRect);
        return () => window.removeEventListener("scroll", getBoundingClientRect);
    }, []);

    useEffect(() => {
        console.log(boundingClientRect);
    }, [boundingClientRect]);

    return (
        <div>
            {/* <h1
                style={{
                    padding: "100px 0",
                }}
            >
                This is h1
            </h1>
            <FrameComponent
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
                head={
                    <>
                        <style>{css}</style>
                    </>
                }
            >
                <FrameBody />
            </FrameComponent> */}
            <div ref={exampleRef} id="example"></div>
            <div>
                {Object.keys(boundingClientRect).map((property) => (
                    <p key={property}>
                        {property}: {boundingClientRect[property]}{" "}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;
