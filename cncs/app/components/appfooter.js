"use client";
import { Typography, IconButton, Link, Box  } from '@mui/material';
import Image from 'next/image';

const styles = {
    footer: {
        marginTop: 'auto',
        backgroundColor: '#192234',
        color: '#ffffff',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
}

function AppFooter() {

    return (
        <footer style={styles.footer}>
        <Typography variant="body2" >
        CNCS之家 © 2025
        </Typography>
        <Box>
            <Link href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#9facc6', ml: 2, mr: 2, textDecoration: 'none' }}
            >
                蜀ICP备2025143639号
            </Link>
            <Link href="https://beian.mps.gov.cn/#/query/webSearch?code=51015602001285"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#9facc6', ml: 2, mr: 2, textDecoration: 'none' }}
            >
                <Image src={require('../../public/police.png')} width={15} height={15} alt="公安网备案"/>
                川公网安备51015602001285号
            </Link>
        </Box>

        <div>
        <Link
            href="/about"
            sx={{
              color: '#9facc6',
              mr: 2,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 16,
              '&:hover': { color: 'text.secondary', textDecoration: 'underline' }
            }}
          >
            关于本站
          </Link>
        <IconButton 
          component="a"
            href="https://www.douyin.com/user/MS4wLjABAAAALJ75sVUBl8LQFjA2BJneok3NTrBWlbqAL8X634lOVww"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="访问抖音官方账号"
            sx={{
                '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s'
                }
        }}
        >
        <Image 
            src="/Tiktok--Streamline-Atlas.svg"
            alt="抖音官方账号"
            width={32}
            height={32}
        />
        </IconButton>
        <IconButton 
          component="a"
            href="https://space.bilibili.com/3494370630175109"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="访问b站官方账号"
            sx={{
                '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s'
                }
        }}
        >
        <Image 
            src="/Bilibili.svg"
            alt="哔哩哔哩官方账号"
            width={32}
            height={32}
        />
        </IconButton>
        </div>
        </footer>
    )
}
export default AppFooter;