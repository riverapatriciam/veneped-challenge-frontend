import {useQuery, gql} from '@apollo/client';
import { useState } from 'react';

export const useGetData = () => {
    
 const getQueryData = gql`query FetchProducts ( 
    $tax_filter: [String!], 
    $title_filter: String, 
    $order_by: String, 
    $order: String, 
    $page: Int!, 
    $per_page: Int!) { 
        fetchProducts {
            results(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage: $per_page){
                    id 
                    title 
                    price 
                    tax 
                    stock 
                }
            pagination(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage: $per_page) { 
                    totalResults 
                    limitValue 
                    nextPage 
                    prevPage 
                    firstPage 
                    lastPage 
                    outOfRange 
                }
  
        }
  }`;

  
const [filter, setFilter] = useState({
      "tax_filter": ["es_general_21", "es_reduced_10", "es_super-reduced_4", "fr_general_20", "fr_reduced_5.5"],
      "title_filter": "", 
      "order_by": "", 
      "order": "", 
      "page": 1, 
      "per_page": 10 })
      
const {data, loading, error} = useQuery(getQueryData, {variables: filter});

return { data: data?.fetchProducts?.results || [], loading, error, filter, setFilter, pagination: data?.fetchProducts?.pagination.totalResults }

}