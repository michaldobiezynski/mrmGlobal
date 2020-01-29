import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: 'Wines',
      imageUrl:
        'https://i.ibb.co/fCmdVBx/kelsey-knight-udj2t-D3-WKs-Y-unsplash.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'Cocktails',
      imageUrl:
        'https://i.ibb.co/c6Hysn2/louis-hansel-Kix0-S25v-JEo-unsplash.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'Beers',
      imageUrl:
        'https://i.ibb.co/qJ5VXfX/lance-anderson-OTsz4-Zq-DA5c-unsplash.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
  ]);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
