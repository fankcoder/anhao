"use client";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Image from 'next/image';

export default function Train() {
    return (
        <div 
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // 水平居中
                justifyContent: "flex-start",
                backgroundColor: "#121a2b",
                color: "#9facc6",
                padding: "20px"
            }}
        >
            <h1>列车停放站(train) 地图报点</h1>
            <div>
                <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={8}
                    >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                        <div 
                        style={{
                            display: "flex",
                            alignItems: "center", // 水平居中
                            justifyContent: "center",
                            backgroundColor: "#121a2b",
                            color: "#9facc6",
                            padding: "20px"
                        }}>
                            <button 
                            style={{
                                    margin: "0 5px",
                                    padding: "5px 10px",
                                    backgroundColor: "#9facc6",
                                    color: "#121a2b",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    }} 
                            onClick={() => zoomIn()}>放大</button>
                            <button 
                            style={{
                                    margin: "0 5px",
                                    padding: "5px 10px",
                                    backgroundColor: "#9facc6",
                                    color: "#121a2b",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    }}
                            onClick={() => zoomOut()}>缩小</button>
                            <button 
                                style={{
                                    margin: "0 5px",
                                    padding: "5px 10px",
                                    backgroundColor: "#9facc6",
                                    color: "#121a2b",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    }}
                            onClick={() => resetTransform()}>重置</button>
                        </div>
                        <TransformComponent wrapperClass="svg-wrapper" contentClass="svg-content">
                            <Image src={require('../../../public/assets/maps/cncs_homes_de_train.svg')} alt="train" />
                        </TransformComponent>
                        </>
                    )}
                    </TransformWrapper>
            </div>
        </div>

    )
}