---
title: "Guiding Attention for Self-Supervised Learning with Transformers"
collection: publications
permalink: /publications/attentionguidance
excerpt: 'We introduce a method called attention-guidance, which uses intuitive priors to modify self-attention heads in Transformer models. Our approach gives faster convergence and better downstream performance, and allows convergence of large models on as little as 4 GPUs.'
date: 2020-11-17
venue: 'Findings of EMNLP , EMNLP-2020, Virtual Event'
paperurl: 'https://arxiv.org/pdf/2010.02399.pdf'
---

## Paper
- [Link](https://arxiv.org/pdf/2010.02399.pdf) to paper.

## Abstract

In this paper, we propose a simple and effective technique to allow for efficient self-supervised learning with bi-directional Transformers. Our approach is motivated by recent
studies demonstrating that self-attention patterns in trained models contain a majority of
non-linguistic regularities. We propose a computationally efficient auxiliary loss function to
guide attention heads to conform to such patterns. Our method is agnostic to the actual pre-training objective and results in faster convergence of models as well as better performance
on downstream tasks compared to the baselines, achieving state of the art results in low-resource settings. Surprisingly, we also find
that linguistic properties of attention heads are
not necessarily correlated with language modeling performance.

<hr />