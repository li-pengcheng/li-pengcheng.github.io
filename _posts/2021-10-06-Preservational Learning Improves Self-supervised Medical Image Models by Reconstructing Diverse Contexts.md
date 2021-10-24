---
title: Preservational Learning Improves Self-supervised Medical Image Models by Reconstructing Diverse Contexts
key: a-2021-10-06
typora-root-url: ..
tags:
  - Self-supervised
---

[论文地址](https://arxiv.org/abs/2109.04379)       [代码地址](https://github.com/Luchixiang/PCRL/tree/5643696578679ea5d1f82cff9d8141b0ba8a6f7f)

# Motivation

* 可靠的医学图像标注通常来自于领域专家的诊断，而由于目标疾病的稀缺性、患者隐私的保护以及医疗资源有限，这些诊断信息难以获得。
* 希望从上下文重建的角度学到的自监督表示能够充分描述输入图像的属性，最大化的保留输入图像的特征

# Method

![PCRL](/figures/PCRL.png)

# Contribution

* 引入保存对比表示学习(Preservational Contrastive Representation Learning)，通过重建不同的上下文，将更多信息编码到从对比损失中学到的表示中。
* 为了恢复不同的图像，提出了两个模块：基于条件转换的注意力机制和跨模型混合(Cross-model Mixup)，以建立一个三重编码器和共享单解码器的架构，用于自我监督学习。
* 广泛的实验和分析表明，提出的PCRL在5项分类/分割任务中相比基于自监督和全监督的方法具有明显的优势。

# Conclusion 

* 重建(保留)多样化的上下文信息有助于学到更多的representation，提升下游任务的性能。

# Future work

* 本文表明，通过重建不同的上下文，在医学图像分析中，使用对比损失的学习表现可以大大改善。该方法在各种医疗任务和数据集中显示了自我监督学习的积极成果。但有些问题值得进一步讨论和核实。例如，**保存更多信息是导致对比损失改善的唯一原因吗？**
