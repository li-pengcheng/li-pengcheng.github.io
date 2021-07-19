---
title: CBCT image preprocessing
tags: preprocessing
---

1. 窗宽窗位选取 get_threshold 根据数据体素强度值分布进行分析
选取【-500，2500】区间作为强度值范围，在此范围内的体素比例为98.78%（0.987752112892732）

2. 目标ROI区域裁剪，背景沿各方向扩张20slice roi_extraction
   原始图像Z轴256、280、324层不等，层厚为0.4mm×0.4mm×0.4mm
   根据标注结果占图像层数比例进行统计，发现平均占比37.25%，
   即每个病人牙齿大致94~120层不等，故各方向扩张20slice用于降低牙齿形状、尺寸以及背景复杂度的影响

3. 对ROI固定尺寸裁剪 crop_patches
   固定尺寸为128×128×128
   滑动窗口步长为32×32×32

4. 将nii转换为h5 nii2h5 提高网络训练（读取）速度



* Related codes:

> 1.  get_threshold (*)
> 2.  roi_extraction 
> 3.  crop_patches
> 4.  nii2h5
> 5.  files2list
> 6.  training



* Fine step
  * 裁出每个象限的ROI，注意每个象限的取值
  * 数据增强
  * crop固定大小图像
  * 转换nii到h5
  * 读取数据到列表
  * 设置网络参数

