import { useCallback, useEffect, useRef, useState } from 'react'

export default function PasswordGenerator() {
  const [length, setLength] = useState(15);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacter] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if (character) str+= "!@#$%^&*()-_+=[]{}<>?/~"
    
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length)

      pass+=str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, character, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, character])

  const copyPasswordToClipboard = (password:string) => {
    navigator.clipboard.writeText(password)
  }

  return (
    <>
    <div className='w-full h-dvh flex items-center justify-center bg-gray-900'>
      <div className='w-full max-w-lg bg-gray-700 shadow-md rounded-lg px-4 my-8 text-orange-500 flex flex-col justify-center items-center '>
        <h2>Password Generator</h2>
        <div className='flex w-full my-3'>
          <input type="text" value={password} ref={passwordRef} className='border border-gray-700 hover:border-amber-600 outline-amber-600 w-full py-1 px-3'placeholder='password' readOnly/>
          <button className='border border-gray-700 hover:border-amber-600 p-3 cursor-pointer' onClick={() => copyPasswordToClipboard(password)}>Copy</button>
        </div>
        <div className='flex w-full justify-center'>
          <input type="range" min={6} max={50} value={length} className='cursor-pointer' name="lenght-input" id="length-input" onChange={(e) => {setLength(Number(e.target.value))}}/>
          <label htmlFor="length-input" className='mx-1 mr-5'>Length: {length} </label>
          
          <input type="checkbox" defaultChecked={numberAllowed} name="number-input" id="number-input" onChange={() => {setNumberAllowed(prev => !prev)}}/>
          <label htmlFor="number-input" className='mx-1 mr-5'>Numbers</label>
          
          <input type="checkbox" defaultChecked={character} name="char-input" id="char-input" onChange={() => {setCharacter(prev => !prev)}} className='bg-amber-700'/>
          <label htmlFor="char-input" className='mx-1 mr-5'>Characters</label>
        </div>
      </div> 
    </div>
    </>
  )
}