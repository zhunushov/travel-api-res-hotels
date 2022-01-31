import React from "react";
import Rating from '@material-ui/lab/Rating'
import PhoneIcon from '@material-ui/icons/Phone'
import useStyle from './style'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyle()
  
  if(selected) refProp?.current?.scrollIntoView( { behavior: "smooth", block: "start"})
  
  return (
    <Card elevation={6}>
      <CardMedia
      style={{height: 350}}
      image={place.photo ? place.photo.images.large.url : 'https://the-norma-adeline-academy.com/wp-content/uploads/2020/12/istockphoto-1018141890-612x612-1.jpg'}
      title={place.name}
      />
      <CardContent>
         <Typography gutterBottom variant="h5">{place.name}</Typography>
         <Box display='flex' justifyContent='space-between'>
         <Rating  value={Number(place.rating)} readOnly />
           <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
         </Box>
         <Box display='flex' justifyContent='space-between'>
           <Typography variant="subtitle1">Price</Typography>
           <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
         </Box>
          <Box display='flex' justifyContent='space-between'>
           <Typography variant="subtitle1">Ranking</Typography>
           <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          </Box>
         {place?.awards ?.map((award)=> (
           <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
             <img  src={award.images.small} alt={award.display_name}/>
             <Typography variant="subtitile2" color="textSecondary">{award.display_name}</Typography>
           </Box>
         ))}
         {place?.cuisine?.map(({ name }) => (
           <Chip key={name} size="small" label={name} className={classes.chip} />
         ))}
         {place?.address && (
           <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
               <LocationOnIcon /> {place.address}
           </Typography>
         )}
         {place?.phone && (
           <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
               <PhoneIcon /> {place.phone}
           </Typography>
         )}
         <CardActions>
           <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}> 
              Trip Advisor
           </Button>
           <Button size="small" color="primary" onClick={() => window.open(place.webside, "_blank")}> 
              WebSite
           </Button>
         </CardActions>
      </CardContent>
    </Card>
  )
};

export default PlaceDetails;
