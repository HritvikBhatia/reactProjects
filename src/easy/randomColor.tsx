import { useState } from "react";

function RandomColor() {
    const [currColor, setCurrColor] = useState("ffffff")
    const str = "abcdef0123456789";
    
    const generateColor = () => {
        
        let newColor = ""
        for(let i = 0; i < 6; i++){
            const char = Math.floor(Math.random() * str.length);
            newColor += str[char]
        }
        setCurrColor(newColor);

    }

    return <div className="w-full h-dvh" style={{
        backgroundColor: `#${currColor}`
    }}>

        <div onClick={generateColor} className="flex flex-col  items-center justify-around h-full">
            <button className="border border-b-black m-2 p-2 text-lg">GenerateColor</button>
            <h2 className="text-3xl">#{currColor}</h2>
        </div>

    </div>;
}

export default RandomColor;
