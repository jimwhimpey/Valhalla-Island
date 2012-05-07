---
layout: post
title: "Octopress Image Resizer"
date: 2012-02-27 21:05
external-url: https://github.com/jimwhimpey/Blog-Image-Resizer
---

I've been overwhelmingly happy with [Octopress](http://octopress.org/) since [the switch](http://valhallaisland.com/blog/2012/octopress/). There's just one gap: image resizing and uploading. I didn't realise how much I took this for granted with WordPress and Tumblr.

To fill the gap I've [written a script](https://github.com/jimwhimpey/Blog-Image-Resizer) which takes a local image path, resizes a small and large version to your specification, uploads it to a server and returns a block of HTML of the small image linking to the larger one. I used it for [this post](http://valhallaisland.com/blog/2012/microsoft-apple-web/) and it saved a lot of time. I also like that it decouples my image locations from my blog engine if ever I want to move again.

It's not pretty code and it's been made specifically to cater for my requirements but I hope someone else can find it useful either as it is or as a base for something better.