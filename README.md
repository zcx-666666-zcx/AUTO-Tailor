# AUTO Tailor 展示站

基于 Astro 的英文优先静态产品展示站。不包含交易、会员、询盘表单或尚未确认的联系方式。

## 本地运行

需要 Node.js 22.23.4 或更高版本（建议 Node.js 24）。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

构建输出为 `dist/`。页面内容和参数在 `src/data.ts`；画册核对及素材来源见 `docs/内容与素材来源.md`。原始画册不属于本仓库。

## 部署与回退

部署到独立 Nginx 虚拟主机，根目录指向 `/srv/autotailor/current`。在本地构建后上传 `dist/` 到带时间戳的新版本目录，确认目录和文件可由 Nginx 读取，再原子更新 `current` 符号链接。部署前记录旧链接、现有站点配置和健康状态；上线后检查 HTTPS、页面、资源与其他站点。

首次配置须先核验 DNS 指向服务器、80/443 可达、Nginx 配置有效且域名未被占用。使用独立的 HTTP 虚拟主机和 webroot 方式签发证书，成功后再添加独立 HTTPS 虚拟主机；每次修改执行 `nginx -t` 后才 reload。证书签发或配置检查失败时停止，不覆盖其他站点。回退时将 `current` 切回先前版本；若首次上线则移除本项目启用的虚拟主机链接，验证 Nginx 后 reload。不要更改现有站点、全局防火墙、SSH 或其他服务配置。

### 2026-11-01 首次上线记录

- 线上域名：`https://autotailor.zhanhui.cloud/`，静态版本目录 `/srv/autotailor/releases/20261101-68ef921`，`/srv/autotailor/current` 指向该目录；对应网站源码提交 `68ef921`。
- 独立配置 `/etc/nginx/sites-available/autotailor.zhanhui.cloud`，启用链接位于 `sites-enabled`；初始 HTTP 配置备份为同目录下的 `autotailor.zhanhui.cloud.http-initial`。停用本站可移除本项目的启用链接并在 `nginx -t` 成功后重载；保留版本文件和证书以便恢复。
- Let's Encrypt 证书签发成功，有效期至 2027-01-30 09:11:35 UTC。使用 webroot `/srv/autotailor/acme`，独立续期重载钩子为 `/etc/letsencrypt/renewal-hooks/deploy/autotailor-reload-nginx`；`certbot.timer` 已启用，尚未执行续期模拟。
- 部署后 HTTP 跳转 HTTPS，首页、示例图片与其他站点首页访问成功；详细内容和素材的限制见来源清单。日后操作前须重新核验服务器和 DNS 的实时状态。

### 2026-11-01 产品资料更新

- 当前静态版本为 `/srv/autotailor/releases/20261101-0be7455`，对应源码提交 `0be7455`；上一版本 `/srv/autotailor/releases/20261101-68ef921` 保留，可在核验当前状态后将 `current` 切回。
- 补充 A75M，修正 T 系列不确定的材料表述，调整车衣图片显示并更新来源记录。构建生成 19 页；上线后确认新增页面和图片可访问，HTTPS 证书校验成功，展会云与 JuAPI 首页均返回 200。
- 桌面及手机逐一查看产品详情首屏，其他页面和共享规格表、菜单、FAQ 进行了浏览器抽查；实际商品规格、型号、各地区质保及第三方图片权利链仍待品牌方确认。一次公网图片请求出现 TLS 连接中断，后续公网和服务器本机请求均返回 200，无法据此确定首次中断原因。

## 待确认

- 取得正式联系方式及其使用授权后再添加可用的询盘入口。
- 产品命名、当地供货、质保条款和窗膜检测条件需要品牌方确认；详见来源清单。
