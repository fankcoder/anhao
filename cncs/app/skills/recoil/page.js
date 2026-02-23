'use client';
import { useRef } from 'react';
import styles from '../../page.module.css';
import Image from "next/image";



// 枪械数据
const weapons = [
  { id: 'ak47', name: 'AK47', logo: require('../../../public/assets/weapons/ak47.png'), sp: require('../../../public/assets/weapons/cs2-sp-ak47.svg'), rc: require('../../../public/assets/weapons/cs2-rc-ak47.svg') },
  { id: 'm4a4', name: 'M4A4', logo: require('../../../public/assets/weapons/m4a4.png'), sp: require('../../../public/assets/weapons/cs2-sp-m4a4.svg'), rc: require('../../../public/assets/weapons/cs2-rc-m4a4.svg') },
  { id: 'm4a1s', name: 'M4A1-S', logo: require('../../../public/assets/weapons/m4a1.png'), sp: require('../../../public/assets/weapons/cs2-sp-m4a1-s.svg'), rc: require('../../../public/assets/weapons/cs2-rc-m4a1-s.svg') },
//   { id: 'sg556', name: 'SG556', logo: require('../../../public/assets/weapons/sg556.png'), sp: require('../../../public/assets/weapons/cs2-sp-sg556.svg'), rc: require('../../../public/assets/weapons/cs2-rc-sg556.svg') },
  { id: 'aug', name: 'AUG', logo: require('../../../public/assets/weapons/aug.png'), sp: require('../../../public/assets/weapons/cs2-sp-aug.svg'), rc: require('../../../public/assets/weapons/cs2-rc-aug.svg') },
  { id: 'galil', name: 'Galil', logo: require('../../../public/assets/weapons/galilar.png'), sp: require('../../../public/assets/weapons/cs2-sp-galil.svg'), rc: require('../../../public/assets/weapons/cs2-rc-galil.svg') },
  { id: 'famas', name: 'Famas', logo: require('../../../public/assets/weapons/famas.png'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-famas.svg') },
  { id: 'ump', name: 'UMP-45', logo: require('../../../public/assets/weapons/ump45.png'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-ump-45.svg') },
  { id: 'mp7', name: 'MP7', logo: require('../../../public/assets/weapons/mp7.png'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-mp7.svg') },
  { id: 'mp9', name: 'MP9', logo: require('../../../public/assets/weapons/mp9.png'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-mp9.svg') },
  { id: 'p90', name: 'P90', logo: require('../../../public/assets/weapons/p90.png'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-p90.svg') },
  { id: 'mp5', name: 'MP5-SD', logo: require('../../../public/assets/weapons/mp5.png'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-mp5.svg') },
  { id: 'pp', name: 'PP-Bizon', logo: require('../../../public/assets/weapons/pp-bizon.svg'), sp: require('../../../public/assets/weapons/fallback.svg'), rc: require('../../../public/assets/weapons/cs2-rc-pp.svg') },
];

// 伤害数据示例
const damageData = {
  ak47: {
    reload: '2.5',
    chest: '44/34',
    head: '143/111',
    kill: '$300',
    ammo: '30/90',
    price: '$2700',
    mile: 22,
    fire: 600,
    speed: 215
  },
  m4a4: {
    reload: '3.1',
    chest: '40/28',
    head: '131/92',
    kill: '$300',
    ammo: '30/90',
    price: '$2900',
    mile: 28,
    fire: 666,
    speed: 225
  },
  m4a1s: {
    reload: '3.1',
    chest: '41/28',
    head: '131/92',
    kill: '$300',
    ammo: '20/90',
    price: '$2900',
    mile: 28,
    fire: 600,
    speed: 225
  },
  aug: {
    reload: '3.8',
    chest: '35/31',
    head: '112/100',
    kill: '$300',
    ammo: '30/90',
    price: '$3300',
    mile: 35,
    fire: 666,
    speed: 220
  },
  galil: {
    reload: '3',
    chest: '37/29',
    head: '120/92',
    kill: '$300',
    ammo: '35/90',
    price: '$1800',
    mile: 16,
    fire: 666,
    speed: 215
  },
  famas: {
    reload: '3.3',
    chest: '37/26',
    head: '120/100',
    kill: '$300',
    ammo: '25/90',
    price: '$1950',
    mile: 15,
    fire: 666,
    speed: 220
  },
  ump: {
    reload: '3.5',
    chest: '43/28',
    head: '140/90',
    kill: '$600',
    ammo: '25/100',
    price: '$1200',
    mile: 11,
    fire: 666,
    speed: 230
  },
  mp7:{
    reload: '3.1',
    chest: '35/22',
    head: '115/71',
    kill: '$600',
    ammo: '30/120',
    price: '$1500',
    mile: 14,
    fire: 750,
    speed: 220
  },
  mp9:{
    reload: '2.1',
    chest: '32/19',
    head: '104/61',
    kill: '$600',
    ammo: '30/120',
    price: '$1250',
    mile: 16,
    fire: 857,
    speed: 240
  },
  p90:{
    reload: '3.3',
    chest: '32/22',
    head: '103/71',
    kill: '$300',
    ammo: '50/100',
    price: '$2350',
    mile: 10,
    fire: 857,
    speed: 230
  },
  mp5:{
    reload: '2.97',
    chest: '33/20',
    head: '107/66',
    kill: '$600',
    ammo: '30/120',
    price: '$1500',
    mile: 15,
    fire: 750,
    speed: 235
  },
  pp:{
    reload: '2.4',
    chest: '33/19',
    head: '108/61',
    kill: '$600',
    ammo: '64/120',
    price: '$1400',
    mile: 10,
    fire: 750,
    speed: 240
  }
};

export default function RecoilPage() {
  const weaponRefs = useRef({});

  const scrollToWeapon = (id) => {
    if (weaponRefs.current[id]) {
      const offset = -120; // 偏移量，向上移动 80 像素
      const elementPosition = weaponRefs.current[id].getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center', padding: '20px' ,color: "#9facc6", backgroundColor: '#121a2b',}}>
      {/* 锚点导航栏 */}
      <nav style={{
        position: 'fixed', // 固定导航栏
        top: 64, // 距离顶部 0
        zIndex: 1000, // 确保导航栏在其他内容上方，
        padding: '10px 0', // 内边距
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        gap: '10px', 
        marginBottom: '10px',
        }}>
        <div>
          {weapons.map((weapon) => (
            <button
              key={weapon.id}
              className={styles.navItem}
              onClick={() => scrollToWeapon(weapon.id)}
              style={{
                backgroundColor: '#121a2b',
                color: '#ffffff',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                border: '1px solid #9facc6',
                cursor: 'pointer',
                textAlign: 'center',
            }}
            >
              {weapon.name}
            </button>
          ))}
        </div>
      </nav>

      {/* 枪械详情部分 */}
      <div  style={{ maxWidth: '800px', textAlign: 'left', width: '100%', margin: '20px auto', paddingTop: 64 }}>
        {weapons.map((weapon) => (
          <section
            key={weapon.id}
            id={weapon.id}
            ref={(el) => (weaponRefs.current[weapon.id] = el)}
            style={{ marginBottom: '40px' }}
          >
        <div style={{ display: 'flex', gap: '20px' }}>
        {/* 左侧区块 */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Image 
              src={weapon.logo} 
              alt={`${weapon.name}`} 
            />
            <h2 style={{ margin: 0 }}>{weapon.name}</h2>
          </div>

          <div>
            <table style={{ borderCollapse: 'separate', borderSpacing: '5px', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>换弹时间</td>
                  <td>{damageData[weapon.id]?.reload || 'N/A'}秒</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>身体伤害</td>
                  <td>{damageData[weapon.id]?.chest || 'N/A'}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>头部伤害</td>
                  <td>{damageData[weapon.id]?.head || 'N/A'}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>击杀奖励</td>
                  <td>{damageData[weapon.id]?.kill || 'N/A'}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>弹夹容量</td>
                  <td>{damageData[weapon.id]?.ammo || 'N/A'}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>价格</td>
                  <td>{damageData[weapon.id]?.price || 'N/A'}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>精准射程</td>
                  <td>{damageData[weapon.id]?.mile || 'N/A'}米</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>开火速率</td>
                  <td>{damageData[weapon.id]?.fire || 'N/A'}发/分钟</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>奔跑速度</td>
                  <td>{damageData[weapon.id]?.speed || 'N/A'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 右侧区块 */}
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>压枪轨迹</h3>
            <div>
                <Image src={weapon.rc} width={200} height={200} alt={`${weapon.name}`} ></Image>
            </div>
            </div>

            <div >
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>弹道走势</h3>
            <div >
                <Image src={weapon.sp} width={200} height={200} alt={`${weapon.name}`} ></Image>
            </div>
            </div>
        </div>
        </div>
          </section>
        ))}
      </div>
    </div>
  );
}