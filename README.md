# Gun & Race

两个浏览器 3D 游戏，GitHub Pages 在线即玩。

## 在线游玩

**https://kaiwei588.github.io/gun-race/**

| 游戏 | 链接 |
|------|------|
| 火线突围（FPS） | https://kaiwei588.github.io/gun-race/shooter.html |
| 霓虹狂飙 3D（赛车） | https://kaiwei588.github.io/gun-race/race.html |

## 本地运行

```bash
python3 -m http.server 8099
# 打开 http://localhost:8099
```

或双击 `start.command`。

## 启用 GitHub Pages

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选 **Deploy from a branch**
3. **Branch** 选 `main`，文件夹选 **/ (root)**
4. 保存，约 1–2 分钟后生效

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 游戏入口页 |
| `shooter.html` | 火线突围 |
| `game.js` | 枪战逻辑 |
| `style.css` | 枪战样式 |
| `race.html` | 霓虹狂飙赛车 |
