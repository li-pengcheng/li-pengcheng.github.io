---
 title: Comparing to Learn Surpassing ImageNet Pretraining on Radiographs By Comparing Image Representations
key: a-2021-10-24
typora-root-url: ..
tags:
  - Contrastive Learning
  - Self-supervised learning
---

在深度学习时代，预训模型在医学图像分析中起着重要作用，其中ImageNet预训练被广泛采用为最佳途径。然而，不可否认的是，自然图像和医学图像之间存在着明显的域间差距。为了弥补这一差距，我们提出了一种新的预训练方法，无需人工注释，可从 70 万张放射图中学习。我们称我们的方法为比较学习 （C2L），因为它通过比较不同的图像表示来学习强大的特征。为了验证 C2L 的有效性，我们进行了全面的消融研究，并根据不同的任务和数据集进行评估。放射成像的实验结果表明，C2L的表现可以明显优于ImageNet预训练和以往最先进的方法。代码和模型在 https://github.com/funnyzhou/C2L_MICCAI2020。

ImageNet [2] 预培训已被证明是进行医疗图像分析的 2D 转移学习的有效方法。许多实验表明，与从零开始学习相比，预培训模型不仅有助于提高准确性，而且加快了模型的融合。这些好处可归因于两个因素：（a） 为深度神经网络设计的有效学习算法和 （b） 从大量自然图像中学到的通用特征表示。然而，自然图像和医学图像之间存在着明显的域间差距，这就提出了一个问题，即我们能否直接从医学图像中建立一个预先训练的模型，以及如何处理这个问题。

众所周知，我们需要领域专家的诊断来产生可靠的医学注释，这肯定有助于提高我们的模型性能。另一方面，考虑到有限的医疗资源以及保护病人的隐私，往往很难得出许多医生的结论。因此，如何开发算法来学习大量的数据，而无需注释，已经引起了医学成像界更多的关注。周等人[13]提出了一种自我监督的预培训方法Model Genesis，它利用医疗图像，而无需手动标记。在胸部X射线分类任务上，Model Genesis能够达到与ImageNet预培训的可比性能，但仍无法击败它。

本文提出了一种新的自我监督预培训方法，重点是从大量未注明数据中为放射成像相关任务提供预培训的 2D 深度模型。我们把我们的方法命名为比较学习 （C2L），因为目标是通过比较不同的图像特征作为监督来学习一般图像表示。 与基于图像恢复为代理任务的Model Genesis [13] 不同，提出的 C2L 的监督信号来自自我定义的表示相似性。[1，9，4]中也采纳了类似的想法，其中大多数利用图像的过渡性不一致来产生自我监督的信号。 相反，本文主要关注特征层次对比，提出通过图像和特征批次的混合来构建同质和异质数据对。此外，还建议为对比式学习建立基于动量的师生结构，教师和学生网络共享相同的结构，但更新方式不同。具体地说，教师模型是使用自身和学生网络进行更新的。对不同数据集和任务的广泛实验表明，建议的 C2L 方法可以以不平凡的边际优势超越 ImageNet 预培训和其他竞争基线。

![](/figures/C2L.png)

![](/figures/C2L algorithm1.png)

Query队列首先通过rand初始化
然后每次迭代计算完loss之后把教师网络中的特征加入到队列中
加入的位置是根据每个batch在训练样本中的索引位置来确定的
即假设有10个样本，batchsize为2，特征图尺寸为（2，128），那么query首先初始化一个（16384，128）大小的vector。
(16384是取得一个较大的值，研究表明队列越大，学得的表示效果越好)
然后第一次迭代后，教师网络中的特征图就替换16384中前2个位置的初始化特征，第二次迭代后替换第3和第4个初始化特征。