import React from "react";
import { useStyles } from "../../styles/FeatureCardStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Spotify from "../../assets/spotify_large_logo.png";

interface FeatureCardProps {
  text: string;
  title: string;
  // someImage: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  text,
  title,
  // someImage,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Spotify}
          //to edit
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FeatureCard;
