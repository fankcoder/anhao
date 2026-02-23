"use client";
import { 
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Chip,
  Avatar,
  Button,
  IconButton
} from '@mui/material';
import {
  SportsEsports,
  RocketLaunch,
  Email,
  LocalCafe,
  Favorite,
  MilitaryTech
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(145deg, #1a2035 0%, #121828 100%)',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
}));

const HighlightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.warning.main,
  display: 'inline',
  fontWeight: 'bold'
}));

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={6}>
        <Chip 
          icon={<SportsEsports />} 
          label="我们的故事" 
          color="primary" 
          sx={{ mb: 2, px: 2, py: 1, fontSize: '1rem' }}
        />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          关于 <HighlightText>CNCS.HOMES</HighlightText>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          一个由热爱CS的老玩家创建的社区平台
        </Typography>
      </Box>

      <StyledPaper elevation={0}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'background.paper', mr: 2 }}>
            <RocketLaunch  color="action" sx={{ color: 'text.primary' }}/>
          </Avatar>
          初心与历程
        </Typography>
        
        <Typography paragraph>
          我的CS旅程始于小学三年级，永远记得在<HighlightText>仓库二楼</HighlightText>击毙冲入大门的反恐精英，赢得人生第一场胜利时的激动心情。那一刻，一颗热爱CS的种子在心中生根发芽。
        </Typography>
        
        <Typography paragraph>
          时光荏苒，当年那个在网吧奋战的小学生，如今已到了培养下一代的年纪。现在游戏时间越来越少，反应速度也不复当年，但对CS的热爱从未减退。
        </Typography>
        
        <Typography paragraph>
          创建<HighlightText>CNCS.HOMES</HighlightText>，是我对这款陪伴我成长的游戏最深情的告白，也是想为国内CS社区贡献一份微薄之力。即使只能带来<HighlightText>一点点</HighlightText>的改变，也值得我全力以赴。
        </Typography>
      </StyledPaper>

      <StyledPaper elevation={0}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
            <Favorite />
          </Avatar>
          本站宗旨
        </Typography>
        
        <Typography paragraph>
          <HighlightText>CNCS.HOMES</HighlightText> 献给所有热爱CS的玩家们。无论你是刚入门的新手，还是征战多年的老兵，这里都欢迎你的到来。
        </Typography>
        
        <Typography paragraph>
          为了更好的环境，更多的中国选手，更多的本土赛事，更多的贴纸，更多的荣誉，一切为了未来更好的CNCS。
        </Typography>
      </StyledPaper>

      <StyledPaper elevation={0}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'info.main', mr: 2 }}>
            <Email />
          </Avatar>
          联系我们
        </Typography>
        
        <Typography paragraph>
          如果您发现网站有任何问题或有改进建议，欢迎随时联系：
        </Typography>
        
        <Box sx={{ 
          bgcolor: 'background.paper', 
          p: 3, 
          borderRadius: 2,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 2
        }}>
          <IconButton color="primary" href="mailto:cncshomes@163.com">
            <Email fontSize="large" />
          </IconButton>
          <Typography variant="h6">
            cncshomes@163.com
          </Typography>
        </Box>
      </StyledPaper>

      {/* <StyledPaper elevation={0}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
            <LocalCafe />
          </Avatar>
          支持本站
        </Typography>
        
        <Typography paragraph>
          如果您觉得本站对您有所帮助，可以选择打赏支持，就当请我儿子喝一杯奶。
        </Typography>
        
        <Typography paragraph sx={{ mb: 3 }}>
          每一份支持都会被后台记录，并永久保留在网站的<HighlightText>贡献者荣誉榜</HighlightText>上。
        </Typography>
        
        <Box sx={{ 
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 3,
          textAlign: 'center'
        }}>
          <MilitaryTech color="warning" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            支持方式
          </Typography>
          <Typography paragraph color="text.secondary">
            支付宝/微信收款码将显示在这里
          </Typography>
          <Button 
            variant="contained" 
            color="warning" 
            size="large"
            startIcon={<LocalCafe />}
            sx={{ mt: 2 }}
          >
            打赏支持
          </Button>
          <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
            * 所有打赏将用于网站维护和开发，感谢您的支持！
          </Typography>
        </Box>
      </StyledPaper> */}
      <Divider sx={{ my: 4 }} />
      
      <Typography 
        variant="h6" 
        align="center" 
        color="text.secondary"
        sx={{ fontStyle: 'italic', letterSpacing: 1 }}
      >
        —— 献给所有热爱CS的玩家们 ——
      </Typography>
    </Container>
  );
}