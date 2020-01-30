import React from 'react';
import { useParams, /* useRouteMatch */ } from 'react-router-dom'

// Short component
// const PostId = () => { return () }

function Error () {
	// get url params
  let { error } = useParams();
  
  console.log(error);  

  return <h3 style={{ textAlign: "center", padding: "10px" }}> Error Page 404! Url /{error} does not exists! </h3>;
}

export default Error;
