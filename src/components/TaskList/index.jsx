import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormTask from '../FormTask'
import './TaskList.css'
import { Button } from '@mui/material';

const initSession = (id) => ({
  id: id,
  title: '',
  link: '',
  fields: []
})

const AccordionItem = ({ title, session, updateSessionList, indexItem }) => (
  <Accordion className='item'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormTask session={session} updateSessionList={updateSessionList} indexItem={indexItem} />
    </AccordionDetails>
  </Accordion>
)


const SimpleAccordion = () => {
  const [state, setState] = React.useState([initSession(1)])

  const addSession = () => {
    setState([...state, initSession(state.length + 1)])
  }

  const updateSessionList = (index, sessionItem) => {
    let a = [...state]
    a[index] = sessionItem
    setState(a)
  }

  const renderReport = () => {
    const report = state.map(item => {
      const fields = item.fields.filter(field => field.value)
      return `- ${item.title} ${item.link ? `(${item.link})` : ''}\n${fields.length && fields.map(field => {
        return `  + ${field.value}\n`
      }).join('')}`
    }).join('')

    return navigator.clipboard.writeText(report)
  }

  return (
    <div className='tasklist'>
      <div className='listItem'>
        <div>
          <Button onClick={addSession} style={{ marginBottom: '20px', marginRight: '10px' }} variant="contained">Add Session</Button>
          <Button onClick={renderReport} style={{ marginBottom: '20px' }} variant="contained">Copy</Button>
        </div>
        {state.map((item, index) => <AccordionItem key={item.id} title={`Session ${item.id}`} session={item} updateSessionList={updateSessionList} indexItem={index} />)}
      </div>
    </div>
  );
}

export default SimpleAccordion
