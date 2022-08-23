
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import Face5OutlinedIcon from '@mui/icons-material/Face5Outlined';
import React from 'react'
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));


const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem"
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const NavBar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    NavBar
                </Typography>
                <Face5OutlinedIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://placeimg.com/200/200/people' />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://placeimg.com/200/200/people' />
                    <Typography variant="span" >John</Typography>
                </UserBox>
            </StyledToolBar>
        </AppBar>
    )
}

export default NavBar