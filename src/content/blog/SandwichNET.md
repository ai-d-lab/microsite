---
title: "SandwichNET"
subtitle: "An interactive tool to teach and understand the training process of neural networks."
description: "Inspired by a particularly simple and memorable example from the textbook: 'You Look like a Thing and I Love You' from Janelle Shane (Wildfire, 2020), we implemented a tool which enables students to imitate the behavior of a training algorithm."
pubDate: "Mar 04 2023"
author: "Felix Sewing, Aeneas Stankowski"
heroImage: "/sandwich.jpg"
tags: Design Education, Artificial Intelligence
draft: false
---
A computer can calculate within seconds what takes humans hours to process. But for long the opposite was also the case. In many simple classification problems, humans were superior to computers in speed and accuracy, for example, in the domains of image and sound classification. Today, humans still outcompete computers in some complex classification problems, in others we don’t stand a chance against modern machine learning algorithms. What makes this possible is, besides many other innovations, the fascinating back-propagation algorithm, which incrementally improves a randomly initiated model towards the goal it has been programmed to achieve.

Teaching neural nets and machine learning to students of non-technical disciplines often gets specifically difficult when looking into what goes on within the training process of a model.

While already quite complex, the students often struggle less to understand the resulting model and its functionality - a parametric model consisting of thousands to billions of parameters which are configured in a way to output, correct approximate predictions.

When looking deeper into what is the overarching principle that makes modern machine learning algorithms possible, understanding the back propagation algorithm is central.

![An image of the SandwichNET interface.](/SandwichNET_hero_img.jpg)

Inspired by a particularly simple and memorable example from the textbook: "You Look like a Thing and I Love You" from Janelle Shane (Wildfire, 2020), we implemented a tool which enables students to imitate the behavior of a training algorithm.

We are using and testing it in our foundational machine learning courses to help students better understand the possibilities and limitations of the technology further down the road. We are convinced that the combination of hands-on teaching of highly technical concepts provides great benefits for the students when they engage in technologically complex problems and projects in the future.

The abilities of classification algorithms can seem like magic. But when we look at a bit closer, at least for the forward pass, all the magic consists only of familiar multiplications and additions, as well as quite simple methods that introduce non-linear functionality. The history of neural nets, such as the mathematically simple Perceptron, can help to mitigate the suspicion that deep learning is beyond understandable for design students.  

But what is needed to put our neurons to use is some training data and an algorithm, which is able to bend our neurons to our will. At this point talking about derivatives and slopes will introduce technical jargon that is nontrivial. Still, we think it advantageous to zoom in on this optimization process instead of treating it as a black box. For this we implemented a very simple neural net:  

## The SandwichNET
 
In a fictional universe, mysterious random sandwiches emerge from a magic portal. We now want to train an algorithm that is able to estimate if a sandwich that just entered our dimension will be tasty or disgusting.

Unfortunately, we all have different tastes, so each of the students needs to train their own Perceptron to solve this problem. We visualized a most simple neural net consisting of a few fully connected layers, including weights and biases, which students are able to manipulate by increasing or decreasing their values.

By consecutively generating you sandwiches with different toppings, and then adjusting the words and biases towards the correct classification, tasty or nasty, the neural net manually gets trained by the students.  

You can try it out yourself on the following links. Feel free to use it in your own classes and come up with your own adaptations - the code is provided via the p5js sandbox. We will follow up our initial tests with students with her GitHub repository that you will find here later.

<div style="display: block; height: 43.75rem; margin: 1.25rem 0 1.25rem 0; z-index: 1;!important" class="invisible lg:visible">
    <iframe style="display: block; z-index: 0; position: absolute; width: 80vw; height: 43.75rem; left: 10vw; border: 1px solid black" src="https://editor.p5js.org/FelixSewing/full/Fwn5E_dDk"></iframe>
</div> 

#### Ressources 

- Shane, Janelle. You Look like a Thing and I Love You. Wildfire, 2020. 
- The SandwichNET's on p5js.org:
    - SandwichNET 1:
        - https://editor.p5js.org/FelixSewing/sketches/1ks1mKr5z
    - SandwichNET 2:
        - https://editor.p5js.org/FelixSewing/sketches/Fwn5E_dDk
    - SandwichNET3:
        - https://editor.p5js.org/FelixSewing/sketches/3k-1MbKp8

---

> - This article was written with the support of [ChatGPT](https://chat.openai.com/)
