# SFU 团契网站

这是一个使用 Next.js 构建并部署在 GitHub Pages 上的 SFU 团契双语(中文/英文)网站。

## 技术栈

-   **框架**:

    -   [Next.js 14](https://nextjs.org/) - React 框架，用于服务端渲染和静态网站生成
    -   [React 18](https://reactjs.org/) - 用户界面库

-   **UI 组件**:

    -   [Material UI (MUI) v5](https://mui.com/) - React UI 组件库
    -   [Framer Motion](https://www.framer.com/motion/) - 动画库

-   **样式**:

    -   [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
    -   [Emotion](https://emotion.sh/) - CSS-in-JS 解决方案

-   **国际化**:

    -   [next-intl](https://next-intl-docs.vercel.app/) - Next.js 的国际化方案

-   **开发工具**:
    -   TypeScript - 类型安全的 JavaScript 超集
    -   ESLint - 代码质量检查
    -   Prettier - 代码格式化

## 基础操作教程

### 1. 获取代码

1. 安装 [Git](https://git-scm.com/downloads)
2. 安装 [Node.js](https://nodejs.org/) (推荐使用 LTS 版本)
3. 打开终端（Windows 用户打开 Git Bash）
4. 克隆仓库到本地：

```bash
git clone https://github.com/sfufellowship/sfu-fellowship-website-react.git
cd sfu-fellowship-website-react
```

5. 安装项目依赖：

```bash
npm install
```

6. 准备Git钩子（用于代码质量检查）：

```bash
npm run prepare
```

### 2. 本地测试

1. 启动开发服务器：

```bash
npm run dev
```

2. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站
3. 修改代码后，网站会自动更新
4. 按 `Ctrl + C` 停止开发服务器

### 3. 提交更改

1. 创建并切换到新的分支：

```bash
git checkout -b update-活动内容-2024
```

2. 按照下面的内容管理部分修改相应文件

3. 在提交之前，验证构建是否成功：

```bash
npm run build
```

如果构建失败，请修复错误后再继续。

4. 提交更改：

```bash
git add .
git commit -m "更新：添加2024新春团契活动"
```

5. 推送到 GitHub：

```bash
git push origin update-活动内容-2024
```

6. 在 GitHub 网站上创建 Pull Request：
    - 访问 [仓库页面](https://github.com/sfufellowship/sfu-fellowship-website-react)
    - 点击 "Pull requests" 标签
    - 点击 "New pull request"
    - 选择你的分支
    - 填写更改说明
    - 点击 "Create pull request"

等待管理员审核并合并你的更改。合并后，网站将自动更新。

## 内容管理

### 如何更新活动

活动内容可以通过修改 `src/content/activities.ts` 文件来更新。每个活动的结构如下：

```typescript
{
    title: "活动名称",
    description: "活动描述",
    type: "活动类型",
    image: images.imageName,
}
```

添加或修改活动的步骤：

1. 打开 `src/content/activities.ts` 文件
2. 在 `zh`（中文）和 `en`（英文）部分找到 `items` 数组
3. 按照上述结构添加或修改活动
4. 确保为两种语言都添加翻译

### 如何更新成员信息

成员信息可以通过修改 `src/content/members.ts` 文件来更新。每个成员条目的结构如下：

```typescript
{
    name: "成员姓名",
    role: "成员角色",
    description: "简短描述",
    image: images.memberPhoto,
}
```

添加或修改成员的步骤：

1. 打开 `src/content/members.ts` 文件
2. 在 `zh`（中文）和 `en`（英文）部分找到 `list` 数组
3. 按照上述结构添加或修改成员信息
4. 确保为两种语言都添加翻译

### 添加图片

为活动或成员添加新图片的步骤：

1. 将图片文件放在 `public/images` 目录中
2. 在 `src/constants/images.ts` 中添加图片引用
3. 在内容文件中使用图片引用

例如，如果要添加一张新的活动照片：

1. 将照片 `fellowship-2024.jpg` 放入 `public/images/activities` 目录
2. 在 `src/constants/images.ts` 中添加引用：

```typescript
export const images = {
    // ... 其他图片
    fellowship2024: "/images/activities/fellowship-2024.jpg",
};
```

3. 在 `src/content/activities.ts` 中使用：

```typescript
{
    title: "2024新春团契",
    description: "新春团契活动照片",
    type: "节日活动",
    image: images.fellowship2024,
}
```

### 重要注意事项

-   始终为新内容提供中英文双语翻译
-   将图片文件保存在 `public/images` 目录中
-   将更改推送到 GitHub 后，网站将在几分钟内自动更新
-   在添加图片之前，确保图片文件已经过网页优化（压缩）

## 技术细节

### 部署

网站使用 GitHub Actions 自动部署到 GitHub Pages。工作流程如下：

1. 每次更改推送到 `main` 分支时，部署过程会自动启动
2. GitHub Action 工作流程：
    - 设置 Node.js 环境
    - 安装依赖
    - 构建 Next.js 应用
    - 将构建文件部署到 GitHub Pages

无需手动部署步骤 - 只需将更改推送到 `main` 分支即可。

### SEO 配置

网站通过 `metadata.ts` 进行搜索引擎优化。SEO 配置包括：

1. 双语支持：

    - 中文（`/zh`）和英文（`/en`）版本的规范 URL
    - 特定语言的元数据和 OpenGraph 标签

2. 搜索引擎优化：

    - 两种语言的自定义标题和描述
    - 针对 SFU 团契相关术语的综合关键词
    - 用于更好的社交媒体分享的 OpenGraph 标签
    - Google 站点验证
    - 优化的机器人设置以获得更好的索引效果

3. 社交媒体分享：
    - OpenGraph 图片配置
    - 自定义站点名称和描述
    - 不同地区的区域设置
