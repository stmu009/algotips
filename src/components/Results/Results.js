import React from 'react'
import Typography from '@mui/material/Typography'


const Results = () => {
    return (
        <div>
        <Typography variant="h3" color="initial">Results</Typography>
        <br/>
        <Typography variant="h6" color="initial">
        It took you 15 tries to answer 10 questions in 24 minutes.<br/>
        Next time aim for 10 and try to beat your time.
        </Typography>    
        
        </div>
    )
}

export default Results
