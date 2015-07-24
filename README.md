A clone of reddit, built on [Sails](http://sailsjs.org) and Angular.

I built this app for my presentation at [SQL Saturday 2015 in Baton Rouge](http://www.sqlsaturday.com/423/Sessions/Details.aspx?sid=37125).

# To run the app:

Install node and npm and put them on your path.
``` bash
npm install
node app.js
```

### Screenshots

![Front Page](http://i.imgur.com/bwBKYj2.png)

![Front Page Create post](http://i.imgur.com/ybAsFb8.png)

![Comments Section of post](http://i.imgur.com/dEfuiMW.png)


### Setting up the presentation:

run

``` bash
git config --global alias.next '!git checkout `git rev-list HEAD..demo-end | tail -1`'
```

Checkout the demo branch, then checkout the "demo-start" tag

``` bash
git checkout demo
git checkout demo-start

```

At this point, you're at the first "slide" of the slideshow. You can either fill out the code yourself, or use the command:

``` bash
git next
```

to checkout the next slide in the slideshow.

This allows you to do live coding, one feature at a time, but with the assurance that if you mess up, you can checkout the next commit and just continue on.

# Branches:

## master: 

the code of the completed app

## pres-test:

I erased the code of the complete app and then replaced it one feature per commit to create a sort of slide show with the help of [this article](http://www.jayway.com/2015/03/30/using-git-commits-to-drive-a-live-coding-session/).

I chose to keep this branch and the demo branch separate so I could rebase the demo branch on master if needed to fix bugs, but still keep the "slide show" commits. 

## demo: 

This is the actual branch we'd present on. I check out this branch at the tag demo-start. If I ever update the master branch, I delete the tags and force-push to this branch.
