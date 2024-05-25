import { Fragment, useEffect, useRef, useState } from "react";
import { useFrame } from "react-frame-component";

const FrameBody = () => {
    const { document, window } = useFrame();
    const exampleRef = useRef(null);
    const [boundingClientRect, setBoundingClientRect] = useState({});
    useEffect(() => {
        function getBoundingClientRect() {
            const { top, right, bottom, left, width, height, x, y } = exampleRef.current.getBoundingClientRect();
            setBoundingClientRect({
                top: top + window.scrollY,
                right,
                bottom: bottom + window.scrollY,
                left,
                width,
                height,
                x,
                y: y + window.scrollY,
            });
        }
        getBoundingClientRect();
        window.addEventListener("scroll", getBoundingClientRect);
        return () => window.removeEventListener("scroll", getBoundingClientRect);
    }, []);

    useEffect(() => {
        console.log("boundingClientRect", boundingClientRect);
    }, [boundingClientRect]);

    return (
        <Fragment>
            {/* <div ref={exampleRef} id="example"></div>
            <div>
                {Object.keys(boundingClientRect).map((property) => (
                    <p key={property}>
                        {property}: {boundingClientRect[property]}{" "}
                    </p>
                ))}
            </div> */}
            <img
                src="https://cdn.pixabay.com/photo/2024/05/14/05/38/gorilla-8760357_640.jpg"
                style={{
                    marginLeft: "200px",
                    paddingRight: "200px",
                    width: "200px",
                    height: "200px",
                }}
                ref={exampleRef}
            />
        </Fragment>
    );
};

export default FrameBody;
