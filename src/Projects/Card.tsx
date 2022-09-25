import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
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

type propType = {
  id: number
  name : string,
  description : string,
  techStack : string[],
  knowMoreUrl: string,
  imageUrl : string
}

export default function RecipeReviewCard(props:propType) {
  const [liked, setLiked] = React.useState(false);
  console.log(props.imageUrl)

  const handleExpandClick = () => {
    window.open(props.knowMoreUrl)
  };

  return (
    <Card sx={{ width: 300, height: 420, margin:'10px' }} className='border rounded-md m-2 mb-5' onDoubleClick={()=>setLiked(!liked)}>
      <div className='flex flex-col w-full h-full bg-project1 bg-fit' style={{height:'200px',width: '290px',borderRadius:'5px',margin:'5px'}}>
        <img src={props.imageUrl} alt={props.name} style={{objectFit:'fill',height:'100%'}}></img>
      </div>
      
      <div className='flex flex-col ml-5 mr-5 mt-5'>
        <div className= {`flex p-2 justify-center `+`${props.id===0?`text-rainbow-animation`:''}`} >
            <span>{props.name}</span>
        </div>
        <span style={{fontSize:'12px',textAlign:'center'}}>
          {props.description}
        </span>
      </div>
      <div className='flex justify-center mt-5'>
        {
            props.techStack.map(t=> <Button  className='border' style={{fontSize:'14px',height:'15px',textTransform:'none'}}>{t}</Button>)
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
          aria-label="show more"
        >
          <img className='w-full' src = {knowMoreImage} alt="profileImage" style={{height:'25px',width:'25px'}}/>
        </ExpandMore>
        </>
      </CardActions>
    </Card>
  );
}
