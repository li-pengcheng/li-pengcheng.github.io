---
 title: Contrastive Learning of Relative Position Regression for One-Shot Object Localization in 3D Medical Images
key: a-2021-10-13
typora-root-url: ..
tags:
  - Contrastive Learning
  - One-shot
---

[论文地址](https://arxiv.org/abs/2012.07043)  [代码地址](https://github.com/HiLab-git/RPR-Loc)

# Insight

不同的器官和组织之间存在相似的相对位置和上下文信息，因此可以通过预测图像中非局部块之间的相对位置来定位目标器官。

# Motivation

* 医学图像标注困难
* Oneshot learning在训练期间不需要对目标进行注释，在推理时间只需要一个注释支持图像。

* 在Volumetric医学图像中，关于one-shot object localization的作品很少，例如计算机断层扫描 （CT） 和磁共振图像 （MRI）

# Method

![](/figures/PNet.png)

* 上述方式可以用于计算任意两个patch之间的距离。



* 整体网络结构

![](/figures/RPR-Loc.png)

* 将organ detection转化为landmark localization：利用角点或者6个极值点检测organ的bounding-box

  ![](/figures/B-box.png)

# Idea

* 可以利用这种方法定位上下颌骨，然后裁剪出这部分ROI区域，不需要特别准确，但能保证所有牙齿都能被裁剪到。