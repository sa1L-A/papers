---
title: "Slice操作"
date: 2024-01-02T11:29:13+08:00
tags: ["algorithom"]
draft: false
---

Algo

## array/list/slice

宁缺毋滥，只记复杂逻辑

1. ### 两个全排列

```go
func SliceUltimate() {
	demoSlice := []int{1, 3, 3, 2, 4}
	toDESC_next_permutation(demoSlice)
	toDESC_next_permutation(demoSlice)
	toDESC_next_permutation(demoSlice)
	toASC_next_permutation(demoSlice)
	toASC_next_permutation(demoSlice)
	toASC_next_permutation(demoSlice)
	//true [1 3 3 4 2]
	//true [1 3 4 2 3]
	//true [1 3 4 3 2]
	//true [1 4 2 3 3]
	//true [1 3 4 3 2]
	//true [1 3 4 2 3]
}

// 从最小到最大排列的一下排列
func toDESC_next_permutation(target []int) bool {
	n := len(target)
	i := n - 2
	for i >= 0 && target[i] >= target[i+1] {
		i--
	}
	if i < 0 {
		return false
	}
	j := n - 1
	for j > i && target[j] <= target[i] {
		j--
	}
	target[i], target[j] = target[j], target[i]
	for k, l := i+1, n-1; k < l; k, l = k+1, l-1 {
		target[k], target[l] = target[l], target[k]
	}
	return true
}

// 从最最大到最大排列的一下排列
func toASC_next_permutation(target []int) bool {
	n := len(target)
	i := n - 2
	for i >= 0 && target[i] <= target[i+1] {
		i--
	}
	if i < 0 {
		return false
	}
	j := n - 1
	for j > i && target[j] >= target[i] {
		j--
	}
	target[i], target[j] = target[j], target[i]
	for k, l := i+1, n-1; k < l; k, l = k+1, l-1 {
		target[k], target[l] = target[l], target[k]
	}
	return true
}

```
