import '../App.css'
import Tool from './tool';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import CodeIcon from '@mui/icons-material/Code';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ListIcon from '@mui/icons-material/List';

function Toolbar(){
    return(
      <div className='bg-backdark-100'>
        <ul className='menu menu-horizontal bg-base-100 rounded-box'>
          <Tool icon={FormatBoldIcon} />
          <Tool icon={FormatItalicIcon} />
          <Tool icon={CodeIcon} />
          <Tool icon={FormatUnderlinedIcon} />
          <Tool icon={ListIcon} />
        </ul>
      </div>
    )
}

export default Toolbar