import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ProductCard(props) {
    return (
        <Card 
            elevation={0} 
            sx={{ 
                maxWidth: 345, 
                p: 0, 
                borderRadius: '1rem', 
                
                ':hover' : {
                    boxShadow: '5px 5px 5px 1px rgba(0, 0, 0, 0.2), -5px -5px 5px 1px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(0, 0, 0, 0.2)'
                }
            }}
        >
            <CardMedia
                component="img"
                height="194"
                image={props.product.imageSrc}
                alt="Paella dish"
                borderRadius='1rem'
            />
            <CardContent sx={{ width: '100%'}}>
                <Typography variant='h6'>{props.product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.product.types}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rs {props.product.price} for one item
                </Typography>

            </CardContent>
            {/* <hr /> */}
            <Typography variant="body2" color="text.secondary">
                    {props.product.notes}
                </Typography>
            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions> */}
        </Card>
    );
}
