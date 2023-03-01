import { Button, CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from 'react-router-dom';
import SelectField from "./blocks/SelectField"
import TextFieldComp from "./blocks/TextFieldComp"
import UseAxios from "./hooks/UseAxios"

const Settings = (props) => {

  const history = useNavigate();
  
  const {response,error,loading} = UseAxios({url:"/api_category.php"})

  if(loading){
    return(
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  }

  if(error){
    <Typography variant="h6" mt={20} color="red">
      Something went wrong!!
    </Typography>
  }
  const handleSubmit= (e) =>{
    e.preventDefault();
    history('/quiz');
  }
  const difficultOptions= [
    {id:'easy', name: 'Easy'},
    {id:'medium', name: 'Medium'},
    {id:'hard', name: 'Hard'},
  ]

  const typeOptions = [
    {id:'multiple', name:'Multiple Choice'},
    {id:'boolean', name:'True/False'},
  ]

  return (
    <form onSubmit={handleSubmit}>
      <SelectField option= {response.trivia_categories} label="Categoery" />
      <SelectField option= {difficultOptions} label="Difficulty" />
      <SelectField option= {typeOptions} label="Type" />
      <TextFieldComp/>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">Get Started</Button>
      </Box>
    </form>
    
  )
}

export default Settings