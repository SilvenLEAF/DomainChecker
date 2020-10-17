import M from 'materialize-css'
import '../../styles/Search.scss';


import React, { useContext, useEffect, useState } from 'react'
import { usePaginatedQuery } from 'react-query'


import { SearchContext } from '../../contexts/SearchContext';
import SearchListItem from '../search/SearchListItem';




const getReactQuery = async (page)=>{
  let language = '';  
  let location = '';

  const ReactQueryRes = await fetch(`https://github-jobs-proxy.appspot.com/positions?description=${ language }&location=${ location }&page=${ page }`)
  const ReactQueryData = await ReactQueryRes.json();

  console.log(ReactQueryData);
  return ReactQueryData
}






function ReactQuery() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const { setSearchResults } = useContext(SearchContext)
  const [page, setPage] = useState(0)

  const { resolvedData, latestData, status } = usePaginatedQuery([page], getReactQuery)
  if(resolvedData) setSearchResults(resolvedData);
  


  



  
  return (
    <div className="container" >
      <div className="pageTitle">All Jobs</div>
    
      <div className="mySearchListItemsHolder">
        {
         !resolvedData && (
           <h1 className="red-text myLoading">
             Loading...
           </h1>
         ) 
        }
        {
          resolvedData && resolvedData.map(((item, index)=>{
            return <SearchListItem key={ index } index={ index } time={ item.created_at } title={ item.title } type={ item.type } company={ item.company } location={ item.location } />
          }))
        }
      </div>
    </div>
  )
}

export default ReactQuery
