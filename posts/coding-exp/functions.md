---
title: "Functions"
date: 2024-01-08T11:23:56+08:00
tags: ["coding-exp"]
draft: true
---

## functions tips

1. ### 函数组合

   将两个对同样物体做功的逻辑放到里一函数里时可以直接以另一个函数的结果放入另一个函数，并传入目标值

   ```js
   const compose = (f, g) => (x) => f(g(x));

   const g = (num) => num + 1;
   const f = (num) => num * 2;

   const h = compose(f, g);

   h(20); // 42
   ```

   可用范围：js,golang

2. ### 纯函数

   尽量将一个函数的逻辑降到最低

3. ### 函数式编程

   是使用纯函数作为主要单元的编程范式

   如其他范式：面向对象以对象为主要组合单元，过程式编程以过程作为组合单元。

   #### 关键点

   1. 不可变性
   2. 高阶函数
   3. 避免共享可变状态
