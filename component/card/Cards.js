import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    height:350,
    
    marginBottom:'20px',
    boxShadow: '0px 3px 11px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
        height:250,
       
    },

  },
  content: {
   
    padding:'15px',
    fontFamily: 'Cormorant Infant,-apple-system',
  },
  name: {
    fontFamily: 'Cormorant Infant,-apple-system',
    [theme.breakpoints.down('sm')]: {
      fontSize:'20px'
     
  },
  },
  img: {
    transition : 'transform 1s ease-in, opacity .7s ease-in-out',
    
'&:hover': {
    opacity:0.5,
    transform:'scale(1.1)'
}
  },
  desc: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%'
  },
}));

 function Cards({data,handleClick,i}) {
   const {src,collection, name,price,id}=data
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() =>handleClick(data)}>
    
      <Image
      className={classes.img}
        src={src}
        alt={'title'}
        width={300}
        height='auto'
        layout='responsive'
        />
        <div className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
           {collection}
          </Typography>
            <div className={classes.desc}>
                <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                    ${price}
                </Typography>

            </div>
        </div>
      
    </div>
  );
}
export default Cards