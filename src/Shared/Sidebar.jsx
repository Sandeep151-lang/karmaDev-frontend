import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react'
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import React,{useState} from 'react'

const logOut = ()=>{
    localStorage.removeItem('token')
    window.location.replace('/login')
}

export function DefaultSidebar({ children }) {
  const [activeLink, setActiveLink] = useState('/');
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <Card className="h-[calc(100vh)] w-full max-w-[15vw] p-4 shadow-xl bg-slate-200 fixed sidebar">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
            <Link to="/dashboard" className={activeLink === '/dashboard' ? 'active' : ''} onClick={() => handleLinkClick('/dashboard')}>
          <ListItem className='my-2' >
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
            </Link>
            <Link to="/home" className={activeLink === '/home' ? 'active' : ''} onClick={() => handleLinkClick('/home')}>
          <ListItem className='my-2'>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
            </Link>
          <ListItem className='my-2'>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              {/* <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              /> */}
            </ListItemSuffix>
          </ListItem>
          <ListItem className='my-2'>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem className='my-2'>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className='my-2' onClick={logOut}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <div>{children}</div>
    </>
  )
}
