"use client";
import { useState, useEffect, useRef } from 'react';
import {
  Button,
  Container,
  Typography,
  CircularProgress,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Alert
} from '@mui/material';
import Head from 'next/head';

// 地图选项
const MAP_OPTIONS = [
  { id: 1, name: '炙热沙城2' },
  { id: 2, name: '炼狱小镇' },
  // { id: 3, name: '远古遗迹' },
  // { id: 4, name: '荒漠迷城' },
  // { id: 5, name: '死亡游乐园' }
];

export default function ListenGame() {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedMap, setSelectedMap] = useState(1);
  const [countdown, setCountdown] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const iframeRef = useRef(null);
  const countdownRef = useRef(null);

  // 获取游戏数据
  const fetchGameData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://cncs.homes/api/pkg/get_listen_game/?map=${selectedMap}`);
      const data = await response.json();
      setGameData(data.body);
      setCurrentRound(0);
      setScore(0);
      setGameStarted(true);
      setGameFinished(false);
      setLoading(false);
    } catch (error) {
      console.error('获取游戏数据失败:', error);
      setLoading(false);
    }
  };
  


  // 开始倒计时
  const startCountdown = () => {
    setIsAnswered(false);
    setSelectedAnswer('');
    setCountdown(9);
    
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownRef.current);
          if (!isAnswered) {
            // 倒计时结束未作答，自动进入下一题
            // handleNextRound();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 处理答案选择
  const handleAnswerSelect = (event) => {
    if (countdown <= 0) return;
    
    const answer = event.target.value;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    clearInterval(countdownRef.current);
    
    // 检查答案
    if (answer === gameData[currentRound].answer) {
      setScore(prev => prev + 1);
    }
  };

  // 进入下一轮
  const handleNextRound = () => {
    if (currentRound < gameData.length - 1) {
      setCurrentRound(prev => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  // 重新开始训练
  const restartTraining = () => {
    clearInterval(countdownRef.current);
    fetchGameData();
  };

  // 当前轮次变化时开始新题目
  useEffect(() => {
    if (gameData && gameStarted && !gameFinished) {
      startCountdown();
    }
  }, [currentRound, gameStarted, gameData, gameFinished]);

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>CS2 听声辨位训练</title>
        <meta name="description" content="CS2 听声辨位训练小游戏" />
      </Head>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            CS2 听声辨位训练
          </Typography>
          {!gameStarted ? (
            <>
              <Box>视频首次加载后请<span style={{color:"#ec5353"}}>手动点击</span>播放器上的<span style={{color:"#ec5353"}}>声音按钮</span></Box>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  选择训练地图:
                </Typography>
                <Select
                  value={selectedMap}
                  onChange={(e) => setSelectedMap(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': '选择地图' }}
                >
                  {MAP_OPTIONS.map(map => (
                    <MenuItem key={map.id} value={map.id}>
                      {map.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={fetchGameData}
                  disabled={loading}
                  sx={{ px: 6, py: 2 }}
                >
                  {loading ? <CircularProgress size={24} /> : '开始训练'}
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Box>视频首次加载后请<span style={{color:"#ec5353"}}>手动点击</span>播放器上的<span style={{color:"#ec5353"}}>声音按钮</span></Box>
                <Typography variant="h6">
                  第 {currentRound + 1} 题 / 共 {gameData?.length} 题 - {MAP_OPTIONS.find(m => m.id === selectedMap)?.name}
                </Typography>
              </Box>

              {!gameFinished && (
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <iframe
                      ref={iframeRef}
                      src={gameData?.[currentRound].uri}
                      style={{ 
                        width: 600,
                        height: 420,
                        border: 'none',
                        borderRadius: '4px'
                      }}
                      allowFullScreen={false}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <Button
                      variant="contained"
                      onClick={handleNextRound}
                      disabled={!isAnswered && countdown > 0}
                    >
                      {currentRound < gameData.length - 1 ? '下一题' : '查看结果'}
                    </Button>
                  </Box>
                  <FormControl component="fieldset" sx={{ width: '100%', mb: 3 }}>
                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                      <Typography variant="h6"  sx={{ mr: 2, mb: 0 }}>
                        声音来自哪个方向?
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 0 }} color={countdown > 3 ? 'text.primary' : 'error'}>
                        剩余选择时间: {countdown}s
                      </Typography>
                    </Box>
                    <RadioGroup
                      row
                      aria-label="answer"
                      name="answer"
                      value={selectedAnswer}
                      onChange={handleAnswerSelect}
                      sx={{ justifyContent: 'center' }}
                    >
                      {['A', 'B', 'C', 'D'].map(option => (
                        <FormControlLabel 
                          key={option}
                          value={option}
                          control={<Radio />}
                          label={option}
                          disabled={countdown <= 0 || isAnswered}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  
                  {isAnswered && (
                    <Alert 
                      severity={selectedAnswer === gameData?.[currentRound].answer ? 'success' : 'error'}
                      sx={{ mb: 2 }}
                    >
                      {selectedAnswer === gameData?.[currentRound].answer ? 
                        '回答正确!' : `回答错误! 正确答案是 ${gameData?.[currentRound].answer}`}
                    </Alert>
                  )}
                  

                </>
              )}
              
              {gameFinished && (
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    训练完成!
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'text.primary.main', mb: 2 }}>
                    正确率: {Math.round((score / gameData.length) * 100)}% ({score}/{gameData.length})
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="large" 
                    onClick={restartTraining}
                    sx={{ mt: 3 }}
                  >
                    重新训练
                  </Button>
                </Box>
              )}
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}