import React from 'react';
import Topics from "../../data/tips";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Tip = (props) => {
    const { sectionLabel, key = 0 } = props;
    const tips = Topics[sectionLabel]?.tips || []
    const tip = tips[key]
    const tipReferences = tip?.tipReferences;
    const media = tip?.media;
    const mediaReference = tip?.mediaReference;
    const intro = tip?.intro;
    const code = tip?.code;
    const explanation = tip?.explanation;


    return (
        <Card sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            width: '90%',
            margin: '0 auto'
          }}>
            <CardHeader title={sectionLabel} /* subheader="subheader for multiple questions in the same section"*/ />
            {media && 
                <CardMedia component="img" 
                height="10%"
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 2,
                    width: '80%',
                    margin: '0 auto'
                  }}
                image={media} alt="Random" />}
            {mediaReference &&
                <Typography variant="caption"
                sx={{
                    
                    width: '80%',
                    marginLeft: '10%',
                  }}
                >
                    <em>media source:{mediaReference}</em>
                </Typography>}
            <CardContent>
                <Typography align="left" variant="span" color="text.secondary">
                    {intro}
                    {code}
                    {explanation}
                    {tipReferences?.length > 0 &&
                        <Typography variant="caption">
                            <em>reference(s):
                                <ul style={{ listStyle: 'none' }}>
                                    {tipReferences.map((ref, i) => (
                                        <li key={i}>{ref}</li>))}
                                </ul>
                            </em>
                        </Typography>}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Tip
