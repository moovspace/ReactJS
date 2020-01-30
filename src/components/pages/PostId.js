import React from 'react';
import { useParams, /* useRouteMatch */ } from 'react-router-dom'

// Short component
// const PostId = () => { return () }

function PostId() {
	// get url params
  let { postid, imageid } = useParams();
  
  console.log(postid);
  console.log(imageid);

  return <h3 style={{ textAlign: "center", padding: "10px" }}>Requested post id: { postid } and the image id: { imageid }</h3>;
}

export default PostId;