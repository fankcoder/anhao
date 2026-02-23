"use client";
import { useState } from 'react';
import { 
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Alert,
  CircularProgress
} from '@mui/material';
import { 
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Google as GoogleIcon,
} from '@mui/icons-material';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // 模拟登录API请求
      console.log('登录信息:', { email, password, rememberMe });
      // 实际应用中这里应该是API调用
      const res = await fetch('https://cncs.homes/api/auth/login/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) });
        const data = await res.json();
        console.log('登录响应:', res.ok && data.code === 0);
        if (res.ok && data.code === 0) {
            const access = data.body?.token.access;
            console.log('Access Token:', access);
            if (access) {
                const expireAt = Date.now() + 160 * 24 * 60 * 60 * 1000; // 160天后时间戳
                localStorage.setItem('access_token', access);
                localStorage.setItem('access_token_expire', expireAt.toString());
                window.location.href = '/';
            }
        } else {
            setErrors({...errors, confirmPassword: data.msg || '登陆失败`'});
        }  
    } catch (err) {
      setError('登录失败，请检查邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // 实际应用中这里应该是Google OAuth跳转
    window.location.href = '/api/auth/google';
  };

  const handleSteamLogin = () => {
    // 实际应用中这里应该是Steam OpenID跳转
    window.location.href = '/api/auth/steam';
  };

  return (
    <>
      <Head>
        <title>登录 | 您的网站名称</title>
        <meta name="description" content="登录您的账户" />
      </Head>

      <Container maxWidth="sm" sx={{ my: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            欢迎回来
          </Typography>

          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
            请登录您的账户继续
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="邮箱地址"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="密码"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={rememberMe} 
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary" 
                  />
                }
                label="记住我"
              />
              
              <Button 
                size="small" 
                sx={{ textTransform: 'none' , color: 'text.primary' }}
                onClick={(e) => {
                  alert('不会真有人忘记密码吧，还没做这个功能呢！');
                }}
              >
                忘记密码?
              </Button>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading || !email || !password}
              sx={{ mt: 1, mb: 2, py: 1.5,
                    '&.Mui-disabled': {
                    color: '#5c6a85', // 你想要的禁用文字颜色
                    }  }}
            >
              {loading ? <CircularProgress size={24} /> : '登录'}
            </Button>

            {/* <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                或使用以下方式登录
              </Typography>
            </Divider>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                sx={{
                  py: 1.5,
                  color: '#DB4437',
                  borderColor: '#DB4437',
                  '&:hover': {
                    borderColor: '#DB4437',
                    backgroundColor: 'rgba(219, 68, 55, 0.04)'
                  }
                }}
              >
                Google
              </Button>
              
              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<SteamIcon />}
                onClick={handleSteamLogin}
                sx={{
                  py: 1.5,
                  color: '#171A21',
                  borderColor: '#171A21',
                  '&:hover': {
                    borderColor: '#171A21',
                    backgroundColor: 'rgba(23, 26, 33, 0.04)'
                  }
                }}
              >
                Steam
              </Button>
            </Box> */}

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="body2" color="text.secondary">
                还没有账户? <Button href="/auth/register" size="small" sx={{ textTransform: 'none', color:'text.primary' }}>立即注册</Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

//Steam图标组件 (需要自行添加)
function SteamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.943.77 1.781 1.46 2.447 1.816 1.775 4.757 1.768 6.558-.018.273-.273.51-.571.71-.891l-1.5-.62c-.969 1.089-2.429 1.632-3.912 1.32-1.472-.309-2.706-1.433-3.043-2.908zm3.543-8.262c.819 0 1.483-.665 1.483-1.484 0-.819-.664-1.483-1.483-1.483-.82 0-1.484.664-1.484 1.483 0 .819.665 1.484 1.484 1.484zm6.604 2.378c.077.411.11.836.09 1.25l-1.562-1.26v-1.5c0-1.24-1.01-2.25-2.25-2.25-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25h1.5l1.502 1.125c-.872.249-1.84.375-2.842.375-1.058 0-2.081-.148-3.047-.424l-1.997 1.339c.485.26.994.482 1.524.658 1.897.615 3.93.677 5.822.159 1.699-.465 3.194-1.5 4.221-2.906.5-.69.881-1.476 1.112-2.306l-4.093-2.916z"/>
    </svg>
  );
}