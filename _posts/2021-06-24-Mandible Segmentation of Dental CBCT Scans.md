---
title: Mandible Segmentation of Dental CBCT
tags: CBCT segmentation Coarse2Fine Reading
typora-root-url: ..
key: a-2021-06-24
---
* [论文地址](https://www.mdpi.com/2075-4426/11/6/560/htm)

* Background

  > 口腔CBCT成像的优点为：辐射剂量低，扫描持续时间短
  >
  > 但缺点也明显：与普通CT成像相比具有更低的对比度，更高的噪声和伪影

* Motivation

  > 从受伪影干扰的CBCT图像中准确的分割下颌骨

* Related works

  > 统计形状模型
  >
  > 随机森林投票
  >
  > 直方图阈值及多项式拟合
  >
  > 超像素图聚类
  >
  > 基于标记的分水岭变换
  >
  > [RSegUNet](https://arxiv.org/pdf/2003.06486.pdf)

* Methods

> 利用[课程学习](https://ronan.collobert.com/pub/matos/2009_curriculum_icml.pdf)（先简单后复杂）的思想进行从粗到细的两阶段分割。
>
> **第一阶段目的**是以较高置信度去除被分割为背景的区域，以获得近似的下颌骨：
>
> 具体做法：对全图切块后利用[3D SegUNet](https://ieeexplore.ieee.org/document/8700606)提取下颌骨大致区域, 然后拼回原始图像大小，上采样时既有UNet的skip connection又有SegNet的index guide。
>
> **第二阶段目的**是消除False Positive Predictions：
>
> 具体做法：对每一个slice分别预测，第二阶段的输入有三个，某一层的原始图像slice i+1, 第一阶段的粗mask i+1以及对上一层预测的精细mask i。（i=0表示对第一层进行预测，此时没有上一层的精细mask，所以将其设置为0）
>
> ![网络结构](/figures/QQ%E6%88%AA%E5%9B%BE20210624214901.png)

* Dataset
  * 59 CBCT data: 38 training, 1validation and 20 testing
  * 109 CT data: 52 training, 8 validation and 49 testing
  * PDDCA challenge dataset: 25 training, 8 validation and 15 testing
* Experiments
* ![可视化结果](/figures/QQ截图20210625093802.png)

