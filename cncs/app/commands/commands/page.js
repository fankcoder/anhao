// components/CS2Commands.js
"use client";
import { useState, useEffect } from 'react';
import styles from './CS2Commands.module.css';
import commands from './commands.json';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // 新增
import IconButton from '@mui/material/IconButton'; // 新增
import Tooltip from '@mui/material/Tooltip'; // 新增
import Snackbar from '@mui/material/Snackbar'; // 新增

export default function CS2Commands() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [snackbarOpen, setSnackbarOpen] = useState(false); // 新增

  // 复制功能
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnackbarOpen(true);
    } catch (err) {
      alert('复制失败，请手动复制');
    }
  };

  // 分类列表
  const categories = [
    { id: 'all', name: '所有命令' },
    { id: 'fov', name: '视角设置' },
    { id: 'bot', name: 'bot设置' },
    { id: 'training', name: '跑图训练' },
    { id: 'crosshair', name: '准星设置' },
  ];

  // 过滤命令
  const filteredCommands = commands.filter(cmd => {
    const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || cmd.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CS2 控制台命令</h1>
      
      {/* 搜索框 */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="搜索命令..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      
      {/* 分类导航 */}
      <div className={styles.categoryNav}>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`${styles.categoryButton} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
        {/* 复制成功提示 */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={1500}
          onClose={() => setSnackbarOpen(false)}
          message="命令已复制到剪贴板"
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      {/* 命令表格 */}
      <div className={styles.commandsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>命令</div>
          <div className={styles.headerCell}>描述</div>
          <div className={styles.headerCell}>示例</div>
        </div>
        
        {filteredCommands.length > 0 ? (
          filteredCommands.map((cmd, index) => (
            <div key={index} className={styles.commandRow}>
              <div className={styles.commandCell}>
                <code>{cmd.command}</code>
                <Tooltip title="复制命令">
                  <IconButton
                    size="small"
                    onClick={() => handleCopy(cmd.example)}
                    aria-label="复制命令"
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </div>
              <div className={styles.descCell}>{cmd.description}</div>
              <div className={styles.exampleCell}>
                <code>{cmd.example}</code>
            </div>
  
            </div>
          ))
        ) : (
          <div className={styles.noResults}>没有找到匹配的命令</div>
        )}
      </div>
    </div>
  );
}