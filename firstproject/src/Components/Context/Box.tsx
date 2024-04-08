import { useContext,useState } from 'react' 


import {ThemeContext} from './ThemeContext'
function Box() {
    const theme = useContext(ThemeContext);
    const [changeTheme, setchangeTheme] = useState(false);

    const handleChange = () => {
        if(changeTheme)
            setchangeTheme(false);
        else 
            setchangeTheme(true);
    }
    return (
        <>
            <button onClick={handleChange}>Change Theme</button>
            {changeTheme ? 
                < div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Box Context Styling</div> : 
                  < div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>Box Context Styling</div>
        }
            </>
  )
}

export default Box