---
title: "go 语言之禅"
date: 2023-10-30T10:54:49+08:00
tags: ["golang"]
draft: false
---

- **Each package fulfils a single purpose**

  每个包都实现一个目的

  **A well designed Go package provides a single idea, a set of related behaviours. A good Go package starts by choosing a good name. Think of your package’s name as an elevator pitch to describe what it provides, using just one word.**

  一个设计良好的 Go 包提供了一个单一的想法，一组相关的行为。一个好的 Go 包首先要选择一个好名字。将您的软件包名称视为一种电梯推销，仅使用一个词来描述它所提供的内容。

  ***

- **Handle errors explicitly**

  明确地处理错误

  Robust programs are composed from pieces that handle the failure cases before they pat themselves on the back. The verbosity of `if err != nil { return err }` is outweighed by the value of deliberately handling each failure condition at the point at which they occur. Panic and recover are not exceptions, they aren’t intended to be used that way.

  健壮的程序是由一些片段组成的，这些片段可以在失败案例自我肯定之前对其进行处理。 `if err != nil { return err }` 的冗长程度与在故障发生时进行处理的价值相比，更为重要。恐慌和恢复也不例外，它们不应该这样使用。

  ***

- **Return early rather than nesting deeply**
  早回归而不是深层嵌套

  Every time you indent you add another precondition to the programmer’s stack consuming one of the 7 ±2 slots in their short term memory. Avoid control flow that requires deep indentation. Rather than nesting deeply, keep the success path to the left using guard clauses.

  每次缩进时，都会向程序员的堆栈添加另一个前提条件，消耗其短期内存中的 7 ±2 个插槽之一。避免需要深缩进的控制流。不要深度嵌套，而是使用保护子句将成功路径保持在左侧。

- **Leave concurrency to the caller**
  将并发留给调用者

  Let the caller choose if they want to run your library or function asynchronously, don’t force it on them. If your library uses concurrency it should do so transparently.

  让调用者选择是否要异步运行您的库或函数，不要强迫他们这样做。如果您的库使用并发，那么它应该透明地这样做。

  ***

- **Before you launch a goroutine, know when it will stop**

  在启动 goroutine 之前，知道它何时会停止

  Goroutines own resources; locks, variables, memory, etc. The sure fire way to free those resources is to stop the owning goroutine.

  Goroutine拥有自己的资源；锁、变量、内存等。释放这些资源的可靠方法是停止所属的 goroutine。

  ***

- **Avoid package level state**

  避免包级状态

  Seek to be explicit, reduce coupling, and spooky action at a distance by providing the dependencies a type needs as fields on that type rather than using package variables.

  通过提供类型所需的依赖关系作为该类型上的字段而不是使用包变量，寻求显式的、减少耦合和远距离的幽灵操作。

  ***

- **Simplicity matters**

  简单很重要

  Simplicity is not a synonym for unsophisticated. Simple doesn’t mean crude, it means _readable_ and _maintainable_. When it is possible to choose, defer to the simpler solution.

  简单并不是简单的同义词。简单并不意味着粗糙，它意味着可读和可维护。当可以选择时，请遵循更简单的解决方案。

  ***

- **Write tests to lock in the behaviour of your package’s API**

  编写测试来锁定包 API 的行为

  Test first or test later, if you shoot for 100% test coverage or are happy with less, regardless your package’s API is your contract with its users. Tests are the guarantees that those contracts are written in. Make sure you test for the behaviour that users can observe and rely on.

  如果您追求 100% 的测试覆盖率或对更少的测试覆盖率感到满意，请先测试或稍后测试，无论您的包的 API 是您与其用户的合同。测试是写入这些合约的保证。确保测试用户可以观察和依赖的行为。

  ***

- **If you think it’s slow, first prove it with a benchmark**

  如果您认为它很慢，请先用基准测试来证明它

  So many crimes against maintainability are committed in the name of performance. Optimisation tears down abstractions, exposes internals, and couples tightly. If you’re choosing to shoulder that cost, ensure it is done for good reason.

  许多危害可维护性的罪行都是以性能的名义犯下的。优化拆除抽象，暴露内部结构，并紧密结合。如果您选择承担这笔费用，请确保这样做有充分的理由。

  ***

- **Moderation is a virtue**

  适度是一种美德

  Use goroutines, channels, locks, interfaces, embedding, in moderation.

  适度使用 goroutine、通道、锁、接口、嵌入。

  ***

- **Maintainability counts**

  可维护性很重要

  Clarity, readability, simplicity, are all aspects of maintainability. Can the thing you worked hard to build be maintained after you’re gone? What can you do today to make it easier for those that come after you?

  清晰度、可读性、简单性都是可维护性的方面。你辛辛苦苦建立起来的东西在你离开后还能维持吗？今天你可以做些什么来让你的后继者变得更容易？
