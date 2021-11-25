import React from 'react'
import Typography from '@mui/material/Typography'


const Results = (props) => {

    const {correct, incorrect, time} = props;

    return (
        <div>
        <Typography variant="h3" color="initial">Results</Typography>
        <br/>
        <Typography variant="h6" color="initial">
        It took you {incorrect+correct} tries to answer {correct} questions in {time/60} minutes.<br/>
        Next time aim for 5 tries and try to beat your time.
        </Typography>    
        
        </div>
    )
}

export default Results
