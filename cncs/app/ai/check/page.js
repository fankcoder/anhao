"use client";
import React, { useState, useContext } from 'react';
import { 
  Container,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Divider,
  Alert,
  Paper,
  Avatar,
  Tooltip,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton
} from '@mui/material';
import { Verified, Info, Casino, Analytics } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // 新增
import { AuthContext } from '../../context/AuthContext'; // 路径根据实际调整

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e1e1e 0%, #121212 100%)',
  color: theme.palette.common.white,
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

const GoldText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #FFD700 0%, #D4AF37 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold'
}));

const StatItem = ({ icon, title, value, tooltip }) => (
  <Grid item xs={6} sm={4} md={3}>
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>
        {icon}
      </Avatar>
      <Typography variant="subtitle1" align="center">{title}</Typography>
      <Tooltip title={tooltip} arrow>
        <GoldText variant="h6" align="center">{value}</GoldText>
      </Tooltip>
    </Box>
  </Grid>
);

const ProbabilityBar = ({ probability }) => {
  const percentage = Math.round(probability * 100 * 100) / 100;
  
  return (
    <Box width="100%" mb={2}>
      <Box display="flex" justifyContent="space-between" mb={0.5}>
        <Typography variant="body2">出金概率</Typography>
        <Typography variant="body2">{percentage}%</Typography>
      </Box>
      <Box width="100%" height={10} bgcolor="grey.800" borderRadius={5} overflow="hidden">
        <Box 
          width={`${percentage}%`} 
          height="100%" 
          bgcolor="gold" 
          borderRadius={5}
          sx={{
            background: 'linear-gradient(90deg, #FFD700 0%, #D4AF37 100%)',
            boxShadow: '0 0 8px rgba(255, 215, 0, 0.6)'
          }}
        />
      </Box>
    </Box>
  );
};

const CSGOPredictionTool = () => {
  const [steamId, setSteamId] = useState('');
  const [Boxes, setBoxes] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openSteamIdHelp, setOpenSteamIdHelp] = useState(false);
  const { isLoggedIn } = useContext(AuthContext); // 用全局登录状态

  const handlePredict = async () => {
    if (!steamId.trim()) {
      setError('请输入有效的Steam ID');
      return;
    }
    // 检查登录状态
    if (!isLoggedIn) {
      setOpenLoginDialog(true);
      return;
    }
    setIsLoading(true);
    setError(null);
    
    try {
        // 这里应该是调用API的代码
        const res = await fetch('https://cncs.homes/api/pkg/ai/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ steam_id:steamId, n_boxes:Boxes}) });
        const data = await res.json();
        if (res.ok && data.code === 0) {
            const box_count = data.body?.box_count;
            const predict_gold = data.body?.predict_gold;
            const predict_rate = data.body?.predict_rate;
            const _data = {
                steamId,
                predictRate: predict_rate, // 出金概率
                predictGold: predict_gold, // 预测出金数量
                boxCount: box_count,
                modelRMSE: 0.005913, // RMSE 1.2箱
                modelAccuracy: 0.7383, // 模型准确度89%
                confidence: 0.80, // 置信度80%
                sampleSize: 4392017, // 样本总数
                goldCount: 11757, // 金的总数
                lastUpdated: "2025-05-15" // 数据最后更新时间
            }
            setPrediction(_data);
        } else if (data.code === 101) {
            setError(data.message || '请求次数过多，请稍后再试');
        }else {
            setErrors({...errors, confirmPassword: data.msg || '预测失败`'});
        }
    } catch (err) {
      setError('预测失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  const handleLogin = () => {
    // 这里应该是实际的登录逻辑
    setIsLoggedIn(true);
    setOpenLoginDialog(false);
    // 可以在这里自动触发预测
    // handlePredict();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* SteamID 获取帮助弹窗 */}
      <Dialog
        open={openSteamIdHelp}
        onClose={() => setOpenSteamIdHelp(false)}
        aria-labelledby="SteamID-help-title"
      >
        <DialogTitle id="SteamID-help-title">如何获取你的 SteamID？</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography sx={{ mt: 2, mb: 1 }}>方式一：</Typography>
            <ol>
              <li>打开 <strong>Steam 个人资料</strong></li>
              <li>查看网址，若网址包含<strong>76561</strong>开头的数字ID复制即可，比如<code>https://steamcommunity.com/profiles/76561199001234567/</code>其中76561199001234567就是你的SteamID</li>
            </ol>
           <Typography sx={{ mt: 2, mb: 1 }}>方式二：</Typography>
            <ol start={1}>
              <li>使用浏览器访问你的 <strong>Steam 个人资料</strong></li>
              <li>复制你的完整steam URL到输入框</li>
              <li>例如：<code>https://steamcommunity.com/profiles/76561199001234567/</code></li>
            </ol>
            <Typography sx={{ mt: 2, mb: 1 }}>方式三：</Typography>
            <ol start={1}>
              <li>若网址包含自定义URL，则需要转换为SteamID</li>
              <li>访问你的 Steam 个人资料</li>
              <li>在页面空白处 右键 → 查看页面源代码（或使用快捷键 Ctrl+U）</li>
              <li>使用快捷键 Ctrl+F，搜索关键词：g_steamID</li>
              <li>你会看到一行类似这样的代码 var g_steamID = 76561198012345678; 其中的 数字 就是你的 SteamID64</li>
            </ol>
            <Typography sx={{ mt: 2, mb: 1 }}>方式四：</Typography>
            <ol start={1}>
              <li>
                使用第三方网站查看（无需登陆steam），打开 <a href="https://steamid.io" target="_blank" rel="noopener noreferrer">https://steamid.io</a>
              </li>
              <li>
                在输入框中粘贴你要查询的用户主页链接，点击查询，将查询结果中的 SteamID 复制到输入框
              </li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSteamIdHelp(false)}>关闭</Button>
        </DialogActions>
      </Dialog>
      {/* 登录提示对话框 */}
      <Dialog
        open={openLoginDialog}
        onClose={handleCloseLoginDialog}
        aria-labelledby="login-dialog-title"
      >
        <DialogTitle id="login-dialog-title">
          <Box display="flex" alignItems="center">
            <span>需要登录</span>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <DialogContentText sx={{ mt: 2 }}>
            
          </DialogContentText>
          <Box mt={2}>
            <Alert severity="info">
              由于当前服务器算力有限，未登录用户暂时无法使用预测功能。
              请登录后重试，或联系管理员获取更多信息。
            </Alert>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLoginDialog} color='text.primary'>稍后再说</Button>
          <Link href="/auth/login">
            <Button 
                onClick={handleLogin} 
                variant="contained" 
                color="primary"
            >
                立即登录
            </Button>
          </Link>
        </DialogActions>
      </Dialog>

      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          CS2 AI开箱预测工具
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          基于4,392,017次开箱数据分析 · 机器学习模型预测
        </Typography>
      </Box>
      
      <StyledCard>
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                输入你的SteamID
                <Tooltip title="如何获取SteamID？">
                  <IconButton
                    size="small"
                    color="text.primary"
                    sx={{ ml: 1 }}
                    onClick={() => setOpenSteamIdHelp(true)}
                  >
                    <HelpOutlineIcon />
                  </IconButton>
                </Tooltip>
              </Typography>
              
              <TextField
                fullWidth
                label="SteamID"
                variant="outlined"
                value={steamId}
                onChange={(e) => setSteamId(e.target.value)}
                placeholder="例如: 76561198123456789 或 https://steamcommunity.com/profiles/76561199001234567/"
                sx={{ mb: 2 }}
                InputLabelProps={{
                    sx: { '&.Mui-focused': {
                        color: '#9facc6' // 选中时的label颜色
                    } } // 这里设置label颜色
                }}
              />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                输入预测开箱次数
              </Typography>
              
              <TextField
                fullWidth
                label="开箱次数"
                variant="outlined"
                value={Boxes}
                defaultValue={100}
                onChange={(e) => {
                    const val = Number(e.target.value.replace(/[^\d]/g, ''));
                    if (val > 10000) setBoxes(10000);
                    else if (val < 100) setBoxes(100);
                    else setBoxes(val);
                }
                }
                placeholder="开箱次数大于100次以获得更准确的预测"
                sx={{ mb: 2 }}
                InputLabelProps={{
                    sx: { '&.Mui-focused': {
                        color: '#9facc6' // 选中时的label颜色
                    } } // 这里设置label颜色
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handlePredict}
                disabled={isLoading}
                startIcon={isLoading ? <CircularProgress size={20} /> : <Casino />}
                sx={{ py: 1.5, borderRadius: '8px', fontWeight: 'bold' }}
              >
                {isLoading ? '预测中...' : '预测开箱结果'}
              </Button>
              
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
              
              <Box mt={4}>
                <Alert severity="info" icon={<Info />}>
                  我们不会存储您的Steam ID或任何个人信息。预测结果基于公开数据和统计模型。
                </Alert>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              {prediction ? (
                <Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      预测结果
                    </Typography>
                    {/* <Tooltip title="预测置信度" arrow>
                      <Box ml={1} display="flex" alignItems="center">
                        <Verified color="primary" />
                        <Typography variant="body2" color="primary" ml={0.5}>
                          高可信度
                        </Typography>
                      </Box>
                    </Tooltip> */}
                  </Box>
                  
                  <ProbabilityBar probability={prediction.predictRate} />
                  
                  <Box mb={3}>
                    <GoldText variant="h5" gutterBottom>
                        高于平均账号{prediction.predictRate - 0.26}
                    </GoldText>
                  </Box>
                    <Box mb={3}>
                    <Typography variant="body1" gutterBottom>
                      预测该账号的前{prediction.boxCount}箱出金数量:
                    </Typography>
                    <GoldText variant="h5" gutterBottom>
                        {prediction.predictGold}个金色物品
                    </GoldText>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="subtitle2" gutterBottom>
                    模型性能指标:
                  </Typography>
                  <Grid container spacing={1}>
                    {/* <Grid item xs={6}>
                      <Typography variant="body2">
                        <Box component="span" color="text.secondary">模型准确度:</Box> {Math.round(prediction.modelAccuracy * 100)}%
                      </Typography>
                    </Grid> */}
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        <Box component="span" color="text.secondary">模型 RMSE（单位箱误差）:</Box> {prediction.modelRMSE}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="center" 
                  justifyContent="center" 
                  height="100%"
                  textAlign="center"
                  p={4}
                >
                  <Analytics color="disabled" sx={{ fontSize: 64, mb: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    输入您的Steam ID获取个性化开箱预测
                  </Typography>
                  <Typography variant="body2" color="text.primary" mt={1}>
                    基于数百万次真实开箱数据的机器学习模型
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
      
      {prediction && (
        <Box mt={4}>
          <StyledCard>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                统计数据概览
              </Typography>
              
              <Grid container spacing={0}>
                <StatItem 
                  icon={<Typography>📊</Typography>}
                  title="分析样本"
                  value={`${prediction.sampleSize.toLocaleString()}`}
                  tooltip="我们分析的总开箱数量"
                />
                <StatItem 
                  icon={<Typography>💰</Typography>}
                  title="金色物品"
                  value={`${prediction.goldCount.toLocaleString()}`}
                  tooltip="统计中出现的金色物品总数"
                />
                <StatItem 
                  icon={<Typography>📈</Typography>}
                  title="平均出金率"
                  value={`${Math.round((prediction.goldCount / prediction.sampleSize) * 100 * 100) / 100}%`}
                  tooltip="所有用户平均出金概率"
                />
                <StatItem 
                  icon={<Typography>🔄</Typography>}
                  title="最后更新"
                  value={prediction.lastUpdated}
                  tooltip="数据最后更新时间"
                />
              </Grid>
            </CardContent>
          </StyledCard>
        </Box>
      )}
      
      <Box mt={4}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: '12px', bgcolor: 'background.paper' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            关于预测模型
          </Typography>
          <Typography variant="body2" paragraph>
            我们的预测模型基于对4,392,017次真实开箱数据的分析，使用机器学习算法识别开箱结果的潜在模式。
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>RMSE (均方根误差):</strong> 1.2箱表示我们的预测平均误差为±1.2箱。例如，如果我们预测您将在第50箱出金，实际结果可能在48-52箱之间。
          </Typography>
          <Typography variant="body2">
            请注意，这仍然是概率预测，不能保证100%准确。
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default CSGOPredictionTool;