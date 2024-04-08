import {useRef, useEffect} from 'react'

function DOMRef() {

    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current.focus()
    }, []);
    return (
      <>
            <div>DOMRef</div>
            <input type='text' ref={inputRef}/>
            </>
  )
}

export default DOMRef