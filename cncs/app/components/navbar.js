"use client";
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Container,
  Divider,
  List,
  Link,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  ExpandLess,
  AccountCircle
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const router = useRouter();

  const { isLoggedIn, username, logout } = useContext(AuthContext);

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('access_token_expire');
    setUsername(null);
    handleUserMenuClose();
    router.refresh?.(); // Next.js 13+刷新页面，兼容老版本可用window.location.reload()
  };

  // 导航菜单数据
  const menuItems = [
    {
      title: '地图报点',
      subItems: [
        { title: '炙热沙城2', href: '/maps/dust2'},
        { title: '炼狱小镇', href: '/maps/inferno'},
        { title: '荒漠迷城', href: '/maps/mirage'},
        { title: '远古遗迹', href: '/maps/ancient'},
        { title: '阿努比斯', href: '/maps/anubis'},
        { title: '核子危机', href: '/maps/nuke'},
        { title: '列车停放站', href: '/maps/train'},
        // { title: '战术路线', href: '/maps/strategies' },
      ],
    },

    {
      title: 'CS2小游戏',
      subItems: [
        // { title: '职业哥的下一步', href: '/games/pronext' },
        { title: '听声变位', href: '/game/listen' },
      ],
    },
    {
      title: 'steam号品检测',
      subItems: [
        { title: 'AI号品检测', href: '/ai/check' },
      ],
    },
    {
      title: '游戏基本功',
      subItems: [
        { title: '定位', href: '/skills/aiming' },
        { title: '预瞄', href: '/skills/pre-aim' },
        { title: '急停', href: '/skills/counter-strafing' },
        { title: '压枪', href: '/skills/recoil' },
        { title: '经济系统', href: '/skills/economy' },
        // { title: '热身打卡', href: '/skills/warm-up' },
      ],
    },
    {
      title: '控制台命令',
      subItems: [
        { title: '常用命令', href: '/commands/commands' },
        { title: '绑定命令', href: '/commands/binds' },
      ],
    },
    {
      title: 'steam防盗指南',
      subItems: [
        { title: '防盗指南', href: '/steam/safe' },
        { title: '申诉邮件模版', href: '/steam/email' },
      ],
    },
  ];

  const handleMenuOpen = (event, menuTitle) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuTitle);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 4 }}>
      {menuItems.map((item) => (
        <Button
          key={item.title}
          color="inherit"
          aria-haspopup="true"
          onMouseEnter={(e) => handleMenuOpen(e, item.title)}
          sx={{ mx: 1, fontWeight: 'medium' }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: '#192234',
        color: '#9facc6',
        zIndex: theme.zIndex.drawer,
        pt: 8,
        overflow: 'auto',
      }}
    >
      <IconButton
        size="large"
        onClick={() => setMobileMenuOpen(false)}
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        <CloseIcon />
      </IconButton>
      
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.title}>
            <ListItem 
              button 
              onClick={() => setCurrentMenu(currentMenu === item.title ? '' : item.title)}
              sx={{ color: '#9facc6' }}
            >
              <ListItemText primary={item.title} primaryTypographyProps={{ fontWeight: 'medium' }} />
              {currentMenu === item.title ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            
            <Collapse in={currentMenu === item.title} timeout="auto" unmountOnExit  sx={{ bgcolor: '#192234' }}>
              <List component="div" disablePadding  >
                {item.subItems.map((subItem) => (
                  <Link key={subItem.href} href={subItem.href}>
                    <ListItem 
                      button 
                      component="a"
                      onClick={() => setMobileMenuOpen(false)}
                      sx={{ pl: 4, color: '#9facc6'  }}
                    >
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
            <Divider  sx={{ borderColor: '#9facc6' }}/>
          </React.Fragment>
        ))}
        
        <Box sx={{ p: 2 }}>
          <Link href="auth/register">
            <Button 
              fullWidth 
              variant="contained" 
              sx={{ backgroundColor: '#222c3e', color: '#9facc6' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <AccountCircle sx={{ mr: 1 }} />
              登录/注册
            </Button>
          </Link> 
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" elevation={0} color="default" style={{ backgroundColor: '#192234', color: '#9facc6' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters underline="none">
          {/* 移动端菜单按钮 */}
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          {/* Logo */}
          <Link href="/" underline="none">
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'inherit',
                mr: 2
              }}
            >
              <Image 
                src={require("../assets/cncslogo.svg")}
                alt="CNCS之家"
                width={40}
                height={40}
                style={{ marginRight: 8 }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#fff', textDecoration: 'none',}}>
                CNCS之家
              </Typography>
            </Box>
          </Link>
          
          {/* 桌面端菜单 */}
          {!isMobile && renderDesktopMenu()}
          
          {/* 登录按钮 */}
          <Box sx={{ flexGrow: 0, ml: 'auto' }}>
            {!isMobile && (
              isLoggedIn ? (
                  <>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#222c3e', color: '#9facc6' }}
                    onMouseEnter={handleUserMenuOpen}
                    onClick={handleUserMenuOpen}
                  >
                    <AccountCircle sx={{ mr: 1 }} />
                    {username}
                  </Button>
                  <Menu
                    anchorEl={userMenuAnchor}
                    open={Boolean(userMenuAnchor)}
                    onClose={handleUserMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    MenuListProps={{
                      onMouseLeave: handleUserMenuClose,
                      sx: { p: 0 }
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        router.push('/auth/profile');
                        setUserMenuAnchor(null);
                      }}
                    >个人资料</MenuItem>
                    <MenuItem onClick={() => { logout(); setUserMenuAnchor(null)}}>退出登录</MenuItem>
                  </Menu>
                </>
              ) : (
              <Link href="/auth/register">
                <Button variant="contained" sx={{ backgroundColor: '#222c3e', color: '#9facc6' }}>
                  <AccountCircle sx={{ mr: 1 }} />
                  登录/注册
                </Button>
              </Link>
              )
            )}
          </Box>
          
          {/* 菜单弹出框 */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            slotProps={{
              list:{
                onMouseLeave: handleMenuClose,
                sx: { p: 0 }
              }
            }}
            PaperProps={{
              sx: { mt: 0.5 } // 让菜单下移，避免遮住一级菜单
            }}
            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          >
            {menuItems
              .find((item) => item.title === currentMenu)
              ?.subItems.map((subItem) => (
                <Link key={subItem.href} href={subItem.href}>
                  <MenuItem component="a" onClick={handleMenuClose}  style={{ color: '#9facc6'}}>
                    {subItem.title}
                  </MenuItem>
                </Link>
              ))}
          </Menu>
        </Toolbar>
      </Container>
      
      {/* 移动端菜单 */}
      {isMobile && mobileMenuOpen && renderMobileMenu()}
    </AppBar>
  );
};

export default Navbar;