// app/providers.js
'use client'; // 因为我们要使用客户端状态

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121a2b', //
    },
    background: {
      default: '#121a2b', // 浅色背景
      paper: '#192234',   // 卡片背景
    },
    text: {
      primary: '#9facc6', // 主要文字颜色
      secondary: '#ffffff', // 次要文字颜色
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#192234',
        },
      },
    },
  },
});

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}