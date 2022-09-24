import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import knowMoreImage from '../Images/knowMore.gif'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props:any) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const techStack = ["Mongo DB","Node js"," React"]

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300, height: 420, margin:'10px' }} className='border rounded-md m-2 mb-5' onDoubleClick={()=>setLiked(!liked)}>
      <div className='flex flex-col w-full h-full bg-project1 bg-fit' style={{height:'200px',width: '290px',borderRadius:'5px',margin:'5px'}}>
      </div>

      <div className='flex flex-col ml-5 mr-5 mt-5'>
        <div className='flex flex-col p-2 items-center'>
            <span>Grade Management system</span>
        </div>
        <span style={{fontSize:'12px',textAlign:'center'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </span>
      </div>
      <div className='flex justify-center mt-5'>
        {
            techStack.map(t=> <Button  className='border' style={{fontSize:'14px',height:'15px',textTransform:'none'}}>{t}</Button>)
        }
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>setLiked(!liked)}>
          <FavoriteIcon style={{fill: liked?'red':''}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <>

        <ExpandMore
          expand={false}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
          <img className='w-full' src = {knowMoreImage} alt="profileImage" style={{height:'25px',width:'25px'}}/>
        </ExpandMore>
        </>
      </CardActions>
    </Card>
  );
}
