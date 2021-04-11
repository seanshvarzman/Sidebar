import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Home from '../components/Home'

export const Sidebardata = [
    {
        title: "Home",
        Icon: <HomeIcon />,
        Link: "/home",
        Component: <Home/>,
    },

    {
        title: "Mailbox",
        Icon: <MailIcon />,
        Link: "/mailbox"
    },

    {
        title: "Instagram",
        Icon: <InstagramIcon />,
        Link: "/instagram"
    },

    {
        title: "Linkedin",
        Icon: <LinkedInIcon />,
        Link: "/linkedin"
    },
    

]

