import React from 'react';

const Postsitem = ({match}) => {
  console.log({match})
  return (
    <div>
      {match.params.id}
    </div>
  );
};

export default Postsitem;