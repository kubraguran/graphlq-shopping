import React from 'react'
import { Avatar, Card,Col, Row } from 'antd';
import { GET_RANDOM } from './Data';
import { useQuery, gql } from '@apollo/client';



const { Meta } = Card;

function ImageWrap() {
  const { loading, error, data,title } = useQuery(GET_RANDOM);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
    <div className="site-card-wrapper">

    {
          data.random.map((item,key) => {
          const {image, desc} = item;
          return (
            <Card style= {{  width: 'fit-content'}}cover={ <img alt="example" src= {image} height = {120}/> }
          >
            <Meta description= {desc} style = {{fontSize: "15px", fontWeight: "bolder"}}/>
          </Card>
          )
        })
        
        
      }
  </div>

    </>
  )
}


export default ImageWrap