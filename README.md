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

## 启用 GitHub Pages（必做，否则 404）

1. 打开 **https://github.com/kaiwei588/gun-race/settings/pages**
2. **Source** 选 **Deploy from a branch**
3. **Branch** 选 `main`，文件夹选 **/ (root)**
4. 点 **Save**，等 2–5 分钟

详细图文说明见 [开启Pages教程.md](./开启Pages教程.md)

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 游戏入口页 |
| `shooter.html` | 火线突围 |
| `game.js` | 枪战逻辑 |
| `style.css` | 枪战样式 |
| `race.html` | 霓虹狂飙赛车 |
