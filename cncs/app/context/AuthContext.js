"use client";
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const expire = localStorage.getItem('access_token_expire');
    if (accessToken && expire && Date.now() < Number(expire)) {
      setIsLoggedIn(true);
      // 可选：请求用户信息
      fetch('https://cncs.homes/api/auth/user_info/', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
        .then(res => res.json())
        .then(data => {
          setUsername(data.body?.username || null);
          setEmail(data.body?.email || null);
        })
        .catch(() => setUsername(null));
    } else {
      setIsLoggedIn(false);
      setUsername(null);
      setEmail(null);
    }
  }, []);

  const login = (token, expire, username) => {
    localStorage.setItem('access_token', token);
    localStorage.setItem('access_token_expire', expire);
    setIsLoggedIn(true);
    setUsername(username);
    setEmail(null); // 可选：如果需要获取email，可以在登录后请求用户信息
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('access_token_expire');
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, email, setUsername, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};