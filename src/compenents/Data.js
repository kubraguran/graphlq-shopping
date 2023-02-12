import React from 'react'
import { useQuery, gql } from '@apollo/client';

export const GET_PRODUCTS= gql`
query products{
  products{
    desc
    id
    image
    title
    prices_id
    prices{
      id
      currency
      prices
    }
  }
}
`;

export const GET_RANDOM = gql `
query random {
  random{
    id
    image
    desc
  }
}`



