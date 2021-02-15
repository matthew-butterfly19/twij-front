import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import ListItemIconMt from '@material-ui/core/ListItemIcon';
import ListItemTextMt from '@material-ui/core/ListItemText';
import DrawerMt from '@material-ui/core/Drawer';
import InboxIconMt from '@material-ui/icons/MoveToInbox';
import {HomeOutlined} from "@material-ui/icons";
import ListItemMt from '@material-ui/core/ListItem';
import MailIconMt from '@material-ui/icons/Mail';
import ToolbarMt from '@material-ui/core/Toolbar';
import ListMt from '@material-ui/core/List';

import styles from './MenuNav.module.scss';

interface MenuItemProps {
  key: string;
  label: string;
  path: string;
  icon: JSX.Element;
}

const menuContent: MenuItemProps[] = [
  {
    key: 'dashboard',
    label: 'Strona główna',
    path: '/admin',
    icon: (<HomeOutlined />)
  },
  {
    key: 'quizes',
    label: 'Quizy',
    path: '/admin/quizy',
    icon: (<InboxIconMt />)
  },
  {
    key: 'quiz-history',
    label: 'Historia',
    path: '/admin/historia',
    icon: (<MailIconMt />)
  },
]

const MenuNav = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const onMenuItemClick = (path: string) => {
    history.push(path);
  }

  const isItCurrentPath = (path: string) => {
    return location.pathname === path;
  }
  return (
    <DrawerMt
      variant="permanent"
      className={styles.drawer}
      classes={{
        paper: styles.drawer
      }}
    >
      <ToolbarMt />
      <div>
        <ListMt>
          {menuContent.map((menuItem) => (
            <ListItemMt
              button
              key={menuItem.key}
              selected={isItCurrentPath(menuItem.path)}
              onClick={() => onMenuItemClick(menuItem.path)}
            >
              <ListItemIconMt> { menuItem.icon } </ListItemIconMt>
              <ListItemTextMt primary={menuItem.label} />
            </ListItemMt>
          ))}
        </ListMt>
      </div>
    </DrawerMt>
  )
};

export default MenuNav;
