import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Spotify from "../assets/spotify_large_logo.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 77,
  },
  media: {
    height: 140,
  },
});

const FeatureCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Spotify}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Spotted
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Spotify is a Swedish audio streaming and media services provider
            founded in 2006 by Daniel Ek.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FeatureCard;
