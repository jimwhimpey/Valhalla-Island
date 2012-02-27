---
layout: post
title: "From Tumblr to Octopress"
date: 2012-02-14 20:45
---

The move from WordPress to Tumblr a few years ago felt great. All the focus was on posting content and I was liberated from the need to administer a blog. Since then Tumblr has struggled with stability problems while implementing weird "social features" like photo replies (but no native text replies) and getting obsessed with things like New York Fashion Week. Recently they added these [dumb labels](http://staff.tumblr.com/post/16980189397/highlighted-posts) and I recognised Tumblr is going too far in a direction I'm not interested in.

I first became interested in (well, aware of) generated flat file publishing systems when I read about Brent's [homemade system](http://inessential.com/2009/01/30/new_publishing_system_tour_of_my_head) over three years ago. Only a couple of months after that I got a job working on a site that was using a similar flat file system on a [*much* larger scale](http://www.abc.net.au/news/) (it's only recently been replaced). I was intrigued by the big advantages of such a system: speed and simplicity.

My loss of respect for Tumblr coincided with reading about [Octopress](http://octopress.org/) on [Matt Gemmell's blog](http://mattgemmell.com/2011/09/12/blogging-with-octopress/). It sounded perfect. It's the kind of new wave of "hacker" software that's well designed and a joy to use. I credit Github for this great trend.

### Transistion

Getting my content out of Tumblr was a breeze with Jekyll's [blog mirgration script](https://github.com/mojombo/jekyll/wiki/blog-migrations). I had to make a few wholesale modifications to some paths and similar things in the post files the script created but this is where Octopress imediately demonstrated it's advantages. I was able to do regex find and replaces across 500+ posts in a few seconds using TextMate. Doing something similar to posts stored in a database would be a real pain in the ass.

### Redesign

The default Octopress theme is the most elegant default theme shipping with any CMS I've seen but it offers more than I need and in any case, I want a unique look for my blog. The CSS of the default theme is made to be customised and continuing the for hackers ideology its organised into *25* (yes twenty-five) [Sass](http://sass-lang.com/) files which compile down to one CSS file. Every feature of Sass is used, everything is modular, everything is a variable. I was hoping to reuse some of the responsive stuff but it was too complex and I ended up throwing it all out and starting again with my own CSS.

Logic in the template files is handled by [Liquid](http://liquidmarkup.org/) which made them easy to modify and generally work with.

When I first started out blogging with WordPress around 8 or 9 years ago I would compulsively redesign my site. Looking back this was fantastic, with every new redesign I'd learn so much. It might say something about my maturity or current state of mind that even though I've been using this design for over a year and moving to Octopress was an ideal opportunity to change it, I've kept everything the same with only some subtle updates.

I'd love to create some publicly available Octopress themes just as I did for WordPress and then Tumblr.

### Images

The only thing missing is a simple way to process images. I need something that I can easily pass through an original, have it resize to a small and a large, upload them to a server somewhere and return some Markdown pointing to the large surrounded by a link to the larger one. I'll write a simple script to do this for me and the result will be images decoupled from my publishing system.

**Update**: I solved this problem with an [image resizing script](http://valhallaisland.com/blog/2012/octopress-image-resizer/).

### Conclusion

I've been using Octopress for a week now and I've immediately noticed the blazing speed. I don't write much that gets big traffic but I can rest assured know that if I do it'll no doubt handle the load with room to spare. Another great advantage is the simple ability to use proper version control for the *whole* site, both the code that generates it and the generated blog. I love the whole workflow.

While I'm not publishing with Tumblr anymore I still use it to read the Tumblr blogs I follow. All week I've been seeing [this](http://cl.ly/3d3C3W2I0l0t1P2X3q1E) promoted in the dashboard sidebar. It feels like I left just in time.
