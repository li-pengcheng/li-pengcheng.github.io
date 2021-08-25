---
title: Cervical Vertebral Maturation Stage Classification
key: a-2021-08-24
typora-root-url: ..
tags:
  - Cervical Vertebral
  - Classification
---

# Paper List

* Comparison of Deep Learning Models for Cervical Vertebral Maturation Stage Classification on Lateral Cephalometric Radiographs  [*Journal of Clinical Medicine*, IF:4.241   [PDF]](https://www.mdpi.com/2077-0383/10/16/3591/htm) 2021.08
* Cervical Vertebral Maturation Method: Reproducibility and Efficiency of Chronological Age Estimation[[PDF]](https://www.mdpi.com/2076-3417/11/7/3160/)
* Cervical vertebral maturation assessment on lateral cephalometric radiographs using artificial intelligence: comparison of machine learning classifier models[[PDF]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7333473/)
* Deep Learning and Artificial Intelligence for the
  Determination of the Cervical Vertebra Maturation
  Degree from Lateral Radiography[[PDF]](https://www.mdpi.com/1099-4300/21/12/1222)
* 基于计算机颈椎辅助分析系统进行颈椎骨龄量化分期的初步探索
* 基于锥形线束CT数据的智能颈椎骨龄评估系统的建立
* 颈椎片判断青春快速生长发育期研究进展

# Motivation

* 正畸治疗的对象多为青少年，如果能选择最佳矫治时机，往往可获得事半功倍的效果。
* 判断患者的发育状况，评估青春生长快速期，对确定正畸治疗计划，选择治疗方法以及预估治疗预后等，都是必不可少的。
* 头颅侧位片是正畸术前常规的检查手段，除了了解牙颌，颅面软硬组织形态结构等特征外，还可用2~4颈椎形态作为判断青春期下颌生长的指标。

# Cervical Vertebral Maturation Stage Classification

<img src="/figures/CVM.png" style="zoom: 80%;" />

<img src="/figures/cvmstage.png" style="zoom:60%;" />

# Method1

* 每个stage的图片数量100，训练集共计600张

<img src="/figures/image-20210825193544880.png" alt="image-20210825193544880" style="zoom:90%;" />

* 手动裁剪椎骨C2-C4
* 加载预训练模型，fine tune 最后的分类层+模型集成
* 分类结果的混淆矩阵

![](/figures/CVM_ROC.png)

# Method2

* 基于锥形线束CT数据的智能颈椎骨龄评估系统的建立

![image-20210825200144597](/figures/image-20210825200142125.png)

