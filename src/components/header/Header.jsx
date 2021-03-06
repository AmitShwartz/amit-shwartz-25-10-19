import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import history from "../../history";
import './Header.scss';

const Header = () => {
  const [active, setActive] = useState('');

  return (
    <Menu className='site-header' inverted attached='top'>
      <Link to="/">
        <Menu.Item>
          <Icon name='cloud' />
          Forecast
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item
          name='home'
          active={active === 'home'}
          color='blue'
          onClick={(e, { name }) => { setActive(name); history.push('/') }}
        >
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='favorites'
          active={active === 'favorites'}
          color='blue'
          onClick={(e, { name }) => { setActive(name); history.push('/favorites') }}
        >
          <Icon name='favorite' color='yellow' />
          Favorites
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default Header;