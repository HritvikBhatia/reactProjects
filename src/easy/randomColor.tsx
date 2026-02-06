import { useState } from "react";

type ofColor = "rgb" | "hex";

function RandomColor() {
    const [currColor, setCurrColor] = useState("#ffffff")
    const [_typeOfColor, setTypeOfColor ] = useState<ofColor>("hex")
    

    const randomNumberUtility = (length: number) => {
        return Math.floor(Math.random() * length)
    }
    
    const generateHexColor = () => {        
        let newColor = "#"
        const str = "abcdef0123456789";

        for(let i = 0; i < 6; i++){
            const char = randomNumberUtility(str.length)
            newColor += str[char]
        }
        setCurrColor(newColor);

    }

    const generateRgbColor = () => {
        const r = randomNumberUtility(256);
        const g = randomNumberUtility(256);
        const b = randomNumberUtility(256);
        
        setCurrColor(`rgb(${r},${g},${b})`)
    }

    return <div className="w-full h-dvh" style={{
        backgroundColor: currColor
    }}>
        <div className="flex flex-col  items-center justify-around h-full">
            <div>
                <button className="border border-b-black m-2 p-2 text-lg" onClick={() => (setTypeOfColor("hex"), generateHexColor())} >Generate HEX Color</button>
                <button className="border border-b-black m-2 p-2 text-lg" onClick={() => (setTypeOfColor("rgb"), generateRgbColor())} >Generate RGB Color</button>
            </div>
            <h2 className="text-3xl">
                {currColor}
            </h2>
        </div>

    </div>;
}

export default RandomColor;
                                       