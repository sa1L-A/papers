---
title: "Vscode Tips"
date: 2023-09-11T11:00:09+08:00
tags: ["front-end"]
draft: true
---

## 技巧

### 调试前端页面

在`运行与调试`tab中，可以创建一个launch.json文件，用来设定调试方式

例：项目运行在本地的8080端口，则配置文件为

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "针对 localhost 启动 Chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

就可调试运行在本地8080端口的项目，`webRoot`为运行的该项目路径

### 代码查看

在具有复杂层级结构的项目，如果一眼看不出层级，可以按住`shift`后点击一个自然代码块的收起按钮，即可将该代码块的第二级及以下都收起，看到第二层的结构，再一次查看

【图片】

### 查看函数及变量引用处

可以按住`Command`或`Ctrl`后点击一个函数或变量，查看该

### js类型检查

在编写js代码时，如果希望编辑器能对当前代码的变量类型进行检查，可以在文件头部加入`//@ts-check`，即可使vscode支持ts的类型检查

### 1.82版本更新功能

1. 现在可以在保存时对 JSON 或 JSONC（带注释的 JSON）文件进行排序。使用设置 `json.sortOnSave.enable` 启用此功能。
2. 完善了移动代码检测功能。可以使用 `"diffEditor.experimental.showMoves": true` 或在 diff 编辑器上下文菜单中启用它。启用后，将检测从同一文件中的一个位置移动到另一位置的代码块，并绘制箭头以指示代码块移动到的位置。
3. 使用 `"diffEditor.hideUnchangedRegions.enabled": true` 或选择编辑器上下文菜单中的地图图标以启用折叠未更改的代码块。

### 使用`Shift+Command+P`执行快捷命令
