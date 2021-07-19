---
title: Automating Dental CBCT Segmentation and Lesion Detection
tags: CBCT Reading Prior segmentation
key: a-2021-07-04
typora-root-url: ..
---

* [论文地址1](https://cpb-us-w2.wpmucdn.com/sites.gatech.edu/dist/8/1345/files/2021/04/CBCT.pdf)
* [论文地址2](https://ieeexplore.ieee.org/document/9458865)

# Background
> 在使用 CBCT 的各个牙科领域中，在每个 CBCT 图像上准确分割不同的结构、组织、修复材料和病变是临床医生的一项重要任务。但是，目前基于临床医生对 CBCT 图像的解释缺乏准确性、一致性和客观性。现有的半自动计算机辅助诊断 (CAD) 算法提供有限的临床效用，因为它们严重依赖临床医生进行种子放置和手动调整来完成图像分割。即使经过广泛的培训，人为错误也是常见且不可避免的。此外，由于 CBCT 是3D 图像，要处理的数据的规模是压倒性的，这对临床工作流程构成了障碍。

# Motivation

* 利用人工智能或深度学习方法为口腔CBCT图像分析提供完全自动化的能力，减少主观性和错误，简化和加快临床工作流程
* 在深度学习方法中融入口腔解剖先验知识，利用有限的数据得到合理的解释结果

# Challenges

现在的大部分工作集中在提升CBCT图像质量，重建质量以及牙齿分割，关于分割不同结构（例如，骨骼、牙齿）、修复材料和病变的研究很少，其原因在于：

* CBCT图像上呈现的口腔内容丰富，包含不同的结构、组织、修复材料和病变
* 不同类型的组织结构具有较大的类内差异(形状、大小、强度和纹理)
* 类内差异的识别依赖于大数据，而医学图像数据的获取难度较大

# Methods

* Basic Network
  *  Dense UNet (Tiramisu)
  * 3D UNet
  
* 对后验概率进行似然估计，把先验信息利用可分离约束和不可分离约束融入到损失函数中，具体涉及到变分推理等内容，待填坑。。。

# Results

![image-20210707203521342](/figures/image-20210707203521342.png)

# Future research 

* 多种口腔结构的半监督学习。

* 开发数学编码来解释其他类型的解剖知识，例如大小、形状等。

* 开发对错误分割的手工标签具有鲁棒性的算法。
