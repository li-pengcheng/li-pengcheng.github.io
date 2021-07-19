---
title: High-level Prior-based Loss Functions for Medical Image Segmentation A Survey
tags: Prior Reading segmentation
typora-root-url: ..
key: a-2021-06-29
---

* [论文地址](https://arxiv.org/pdf/2011.08018.pdf)

# Background

* 医学图像分割的结果可用于计算生物标志物或定量测量，计算图像引导手术的三维解剖模型，以及设计放射治疗计划中的辐射束，以在增强肿瘤束流的同时保护健康器官。因此，分割任务是协助早期疾病检测、诊断、监测治疗和随访的关键步骤。

* 将目标的先验知识（例如形状、外观或位置）嵌入深度学习网络可以提高网络的鲁棒性和准确性，同时生成解剖学上合理的分割。

* 为了在分割过程中结合先验知识，出现了两个主要问题：

  * 如何定义先验信息的类型（怎样对先验信息建模）

    它可以指距离图或图像梯度形式的空间或上下文信息，涉及更复杂的知识，涉及感兴趣对象的解剖结构（例如形状和大小）以及区域之间的连通性。

  * 如何将先验信息嵌入网络

    修改网络架构以集成先验
    
    在损失函数级别将先验合并到分割框架中(问题是如何确保设计的损失函数可微或者具有凸性)

# Motivation

* 对最近侧重于将损失函数级别的先验知识整合到医学图像分割的深度网络中的文章进行概述
* 增加对基于先验损失的设计和实施背后的机制和直觉的理解
* 重点关注‘high-level’先验：将高级先验定义为从目标中提取的有助于表征和解释它的特征。

# Common Loss Functions

* CE loss

  ![CE loss](/figures/QQ截图20210629154701.png)
  
  缺点：由于每个像素与其相邻像素独立处理，因此类不平衡时可能会出现问题，因为训练可能由最普遍的类别主导。
  
  改进：Weighted CE loss, Focal loss

* Dice loss

  ![image-20210629155125453](/figures/image-20210629155125453.png)
  
  缺点：当被分割的目标很小时，Dice loss 对分割错误很敏感
  
  改进：Weighted Dice loss, Kappa coefficient inspired loss

* CE + Dice

  交叉熵和 Dice 损失以及它们的变体和组合广泛用于分割。
  
  缺点：忽略了与感兴趣对象有关的高级特征，例如它们的形状或拓扑结构。

# Methods

* 修改网络结构

* 在优化问题中添加约束

* 在损失函数中添加惩罚项

* 组合上述方法

![Loss function tree](/figures/QQ截图20210629165841.png)

# Low-level prior

* low-level prior：梯度、纹理、距离等

* 添加惩罚项

  * 以利用拉普拉斯算子作为惩罚项来增强图像边缘损失
  
  * 计算距离图Distance map
  
  * Mumford-Shah functional

* 网络结构修改

  * 先一个网络分出所有类别(粗分)，后针对每个类别单独使用一个网络，并将原始图像和粗分结果送入每个单独类别网络进行细分
  * 在分割网络的跳跃连接中引入Bounding-Box(位置先验)
  * 在解码端接超分网络
  * 在解码端接判断边界分割难以的子网络

# High-level prior

​		**High-level prior**：形状、大小、拓扑结构、区域间的相关性等

* 大小约束

  * 针对弱监督分割任务，大小约束可以克服部分标签缺失的问题

    设置最小size和最大size的阈值分别为a和b,此时loss function可以为：

![image-20210629222540406](/figures/image-20210629222540406.png)

​			缺点：离散size情况不能很好的优化

* 拓扑约束
  * 拓扑约束通过抽象目标的连通性来关注目标的空间属性，而忽略它们的详细形式
