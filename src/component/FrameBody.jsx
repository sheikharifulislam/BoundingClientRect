import { useEffect, useRef } from "react";

const FrameBody = () => {
    const ref1 = useRef(null);

    useEffect(() => {
        const boundingClientRect = ref1.current.getBoundingClientRect();
        console.log(boundingClientRect);
    }, []);
    return (
        <div
            style={{
                width: "100%",
                height: "100px",
            }}
            ref={ref1}
        >
            <h1
                style={{
                    all: "unset",
                }}
            >
                From Iframe
            </h1>
        </div>
    );
};

export default FrameBody;
