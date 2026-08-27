# dsh-skill-hell-grind-video-prompt

DeepSeek Harness (DSH) 的 Cordis 插件，打包了「AI 视频提示词撰写规范」技能 —— 基于《地狱磨砺》(Hell Grind) 制作方法论精炼出的 29 条命令式规则（已移除原文的「压力测试」阶段）。

## 功能

- 触发即加载：模型在用户要求生成/优化 AI 视频提示词、写分镜、设计角色表演时自动加载；用户也可显式指定。
- 29 条可直接照做的命令式规则，覆盖四大阶段：
  1. 资产与一致性（规则 1–8）
  2. 场景与空间关系（规则 9–12）
  3. 角色表演设计（规则 13–20）
  4. 视频生成 / 逐镜提示词（规则 21–29）
- 保留原文关键示例：GEO SPATIAL LAYOUT、VIKTOR 表演档案、Roco 物理动作、走廊戏时间轴、30 米石头守卫尺度锚点、风格预设等。

## 安装

把本包加进 DSH profile 的 bundles：

```jsonc
{
  "bundles": [
    "dsh-skill-hell-grind-video-prompt"
  ]
}
```

或用 cordis.patch.yml 的 insert 语法：

```yaml
insert:
  - position: before
    target: some-plugin
    plugin: dsh-skill-hell-grind-video-prompt
```

> 本插件依赖 DSH 自带的服务：`@deepseek-ai/dsh-skill`（skill 注册服务）与 `@deepseek-ai/cordis`（插件基座），随 DSH 提供、无需额外安装。具体配置方式以所用 DSH 版本为准。

## 触发方式

技能名 `hell-grind-video-prompt` 同时支持模型调用（modelInvocable）与用户调用（userInvocable）：

- **模型调用**：用户在对话中要求「生成/优化 AI 视频提示词」「写分镜」「设计角色表演」「把故事转成视频生成提示词」，或提到 Seedance / Sora / 可灵 / Runway 等视频模型时，模型自动加载本技能。
- **用户调用**：直接说「使用 hell-grind-video-prompt 技能」。

更多用法见 [EXAMPLES.md](EXAMPLES.md)。

## 目录结构

```
dsh-skill-hell-grind-video-prompt/
├── lib/
│   └── index.js                      # Cordis 插件入口，注册 bundled skill provider
├── assets/
│   ├── SKILL.md                      # skill 纲领与模块路由
│   └── references/
│       ├── assets-consistency.md     # 规则 1–8（资产与一致性）
│       ├── scene-spatial.md          # 规则 9–12（场景与空间关系）
│       ├── character-performance.md  # 规则 13–20（角色表演设计）
│       └── shot-generation.md        # 规则 21–29（视频生成 + 风格预设 + 速查清单）
├── package.json
├── README.md
├── EXAMPLES.md
├── LICENSE                           # MIT
└── .gitignore
```

## License

MIT
