import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';

import "./WebCard.scss";

const WebCard = props => (
  <Card className="{maxWidth: 450}" variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <div className="cardTitle">{props.title}</div>
        </Typography>
        <Typography className="{marginBottom: 12}" color="textSecondary">
          {props.children}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
);

export default WebCard;