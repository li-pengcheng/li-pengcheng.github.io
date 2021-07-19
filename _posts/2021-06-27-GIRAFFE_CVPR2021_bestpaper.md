---
title: GIRAFFE-Representing Scenes as Compositional Generative Neural Feature Fields
tags: Reading 
typora-root-url: ..
key: a-2021-06-25
---

* [论文地址](https://openaccess.thecvf.com/content/CVPR2021/papers/Niemeyer_GIRAFFE_Representing_Scenes_As_Compositional_Generative_Neural_Feature_Fields_CVPR_2021_paper.pdf), [作者博客解析](https://autonomousvision.github.io/giraffe/), [论文代码](https://github.com/autonomousvision/giraffe)
* Motivation

  * 当前的深度生成模型可以以较高的分辨率生成逼真的2D图像(beyond 1024² pixels)，但是3D生成模型的性能还较差。
  * 生成模型除了有分辨率的要求，生成的图像内容也需要可控(如游戏和3D电影的制作)，但很少有工作关注图像中场景的构成特征(compositional nature of scenes)。
  * 本文提出一种能够在无额外监督信息的情况下生成可控、逼真的3D场景生成方法。
* Contribution
  * 直接将3D场景表示整合到生成模型中使得生成内容更加可控。
  * 将3D特征表示与神经渲染框架结合，提高生成速度和生成的图像清晰度。
* Methods

![GIRAFFE](/figures/GIRAFFE.png)



> 在每次前向传递中，我们为场景和背景中的objects采样单独的潜在代码。这些为我们提供了规范空间中的各个特征字段。特征场是将 3D 点和观察方向映射到密度值和特征向量的函数。然后我们为每个object采样一个姿势，这样我们就可以将它们合成到一个场景中。接下来，我们对相机姿势和volume渲染场景的特征图像进行采样。然后 2D 神经渲染器对特征图像进行上采样并输出最终的 RGB 渲染结果。

* Results

![teaser](/figures/teaser.gif)

* idea
  * 可否借助文中无监督的object representation方法做分割？

