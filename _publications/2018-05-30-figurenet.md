---
title: "A Question-Answering framework for plots using Deep learning"
collection: publications
permalink: /publications/questionansweringplots
excerpt: 'This paper details the approach which achieved state-of-the-art performance on [<span style="color:blue">FigureQA</span>](https://datasets.maluuba.com/FigureQA) Dataset'
date: 2018-07-15
venue: '2019 International Joint Conference on Neural Networks (IJCNN)'
paperurl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8851830'
# citation: 'Reddy, R., Ramesh, R., Deshpande, A., & Khapra, M. M. (2018). A Question-Answering framework for plots using Deep learning. arXiv preprint arXiv:1806.04655.'
---

## Paper
- [Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8851830) to paper.

## Short Summary
- Created a novel architecture comprising depth-wise, 1-D convolutions and LSTMs, for question-answering on scientific plots.
\item Achieved state-of-the-art accuracy (83.95%) on FigureQA Dataset (Maluuba-Microsoft), bettering Relational Networks (Google DeepMind) by 8.53% and reducing the training time by 93% with 75% lesser computational resources.

## Abstract

Deep Learning has managed to push boundaries in
a wide variety of tasks. One area of interest is to
tackle problems in reasoning and understanding,
in an aim to emulate human intelligence. In this
work, we describe a deep learning model that addresses
the reasoning task of question-answering
on bar graphs and pie charts. We introduce a novel
architecture that learns to identify various plot elements,
quantify the represented values and determine
a relative ordering of these statistical values.
We test our model on the recently released FigureQA
dataset, which provides images and accompanying
questions, for bar graphs and pie charts,
augmented with rich annotations. Our approach
outperforms the state-of-the-art Relation Networks
baseline and traditional CNN-LSTM models when
evaluated on this dataset. Our model also has a considerably
faster training time of approximately 2
days on 1 GPU compared to the Relation Networks
baseline which requires around two weeks to train
on 4 GPUs.

<hr />