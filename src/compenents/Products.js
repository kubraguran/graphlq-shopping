import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Col, Row } from 'antd';
import {React,} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Image } from 'antd';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useQuery, gql } from '@apollo/client';
import {GET_PRODUCTS} from "./Data"
import ImageWrap from './ImageWrap';







const { Meta } = Card;


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function Products({handleAddProducts,handleRemoveProducts}) {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  //console.log(data) 
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;
    
  return (
  <div>
     <ImageWrap/> 

      <div className = 'images'>

   {
    data.products.map((product,key) => {   
    const {image,desc,id,title,prices,currency} = product; 
   { return <span key = {key}> 
      <Card cover = {<Image alt="product" src = {image}  height={200} />}
      actions={[
        <button className='icon' onClick={() => handleAddProducts(product)} ><AddIcon /></button>,
        <StyledRating
          max= {1}
          name="customized-color"
          defaultValue={2}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />,
      ]}>
      

      <Meta
      height = {50}
        className='desc'
        title={title}
        description={desc}
      />
      <br/>
      <p>{prices.prices} {prices.currency}</p>
    </Card> 
      
    
    </span> 
     }
    
    })
    
   }

        </div>
   
  </div>
  )
}

export default Products



