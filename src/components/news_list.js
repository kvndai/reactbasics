import React from 'react';

import Newsitem from './news_list_item';

const newsList = (props) => {
  // console.log('news_list props', props)

  const items = props.news.map(item => {
    return (
      <Newsitem key={item.id} item={item}/>
    )
  })

  return (
    <div>
      News List:
      {items}
    </div>
  );
};

export default newsList;