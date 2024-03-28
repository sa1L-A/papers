---
title: "Z Function解决leetcode 3029、3031"
date: 2024-02-05T21:40:50+08:00
tags: ["algorithm"]
draft: false
---

昨天尝试解决 leetcode 周赛题，发现[第二题](https://leetcode.cn/problems/minimum-time-to-revert-word-to-initial-state-i/)有点意思，但是想了半天没想到解决方式。阅读题解时了解到有一个算法很适合解决这个问题，叫 Z 函数（扩展 KMP），听大佬讲解没听明白，只能多去查查资料，花时间去理解，最后看了几遍代码才明白 Z 函数是编写逻辑和用法。以下来梳理一下

## [Z 函数（扩展 KMP）](https://oi-wiki.org/string/z-func/)

定义和设计思路直接去[OI](https://oi-wiki.org/string/z-func/)看,以下是 Z 函数的 golang 实现

```go
// Z-function
func calculateZFunction(s string) []int {
	length := len(s)
	z := make([]int, length)

	// 初始化两个变量 left 和 right，表示当前 Z 值已经计算出来的区间的左右边界
	left, right := 0, 0

	for i := 1; i < length; i++ {
		// 如果当前字符在已经计算出来的 Z 值区间内，那么可以直接得到它的 Z 值
		if i <= right {
			z[i] = min(right-i+1, z[i-left])
		}
		// 通过比较字符来计算 Z 值
		for i+z[i] < length && s[z[i]] == s[i+z[i]] {
			z[i]++
		}
		// 更新 Z 值已经计算出来的区间的左右边界
		if i+z[i]-1 > right {
			left, right = i, i+z[i]-1
		}
	}
	return z
}

```

以下是解决[3029. 将单词恢复初始状态所需的最短时间 I](https://leetcode.cn/problems/minimum-time-to-revert-word-to-initial-state-i/)、[3031. 将单词恢复初始状态所需的最短时间 II 困难](https://leetcode.cn/problems/minimum-time-to-revert-word-to-initial-state-ii/)的代码，一份代码解决两个问题

```go
func minimumTimeToInitialState(s string, k int) int {

	n := len(s)
	z := make([]int, n)
	// 初始化两个变量 left 和 right，表示当前 Z 值已经计算出来的区间的左右边界
	left, right := 0, 0
	for i := 1; i < n; i++ {
		// 如果当前字符在已经计算出来的 Z 值区间内，那么可以直接得到它的 Z 值
		if i <= right {
			z[i] = min(right-i+1, z[i-left])
		}
		// 判断当前偏移量下的字符是否相等，相等Z值+1
		for i+z[i] < n && s[z[i]] == s[i+z[i]] {
			z[i]++
		}
		// 和Z函数代码的不同点，加入判断当前次是否回到初始状态
        // 1. 下标能被K整除说明能在某个时间执行到的
   	    // 2. z[i] >= n-i 这个条件的意义是检查当前前缀（从索引 i 开始）是否可以使字符串回到初始状态。
        // 	  z[i] 是字符串 s 中从位置 i 开始的子串和整个字符串的最长公共前缀的长度，而 n-i 是从位置 i 到字符串末尾的长度。
        //    如果 z[i] >= n-i，这意味着从位置 i 开始的子串和整个字符串的最长公共前缀至少和剩余的字符串长度一样长
        // 	  也就是说，剩余的部分和字符串的开始部分是相同的。这意味着我们可以通过将前 i 个字符移到字符串的末尾来使字符串回到其初始状态。
		if i%k == 0 && z[i] >= n-i {
			return i / k
		}

		// 更新 Z 值已经计算出来的区间的左右边界
		if i+z[i]-1 > right {
			left, right = i, i+z[i]-1
		}
	}

	// 如果遍历完整个字符串都没有找到可以使字符串回到初始状态的操作次数，
	// 那么返回最大的操作次数
	return (n-1)/k + 1
}
```
