# accessible_spa_examples
Various single-page example apps that implement an accessible solution to improve view change awareness.

This repo provides working examples of single-page applications (SPA's) with improved accessibility.

##The Accessibility Problem with SPA's

SPA's seek to improve overall performance and efficiency by dynamically loading only the content and UI that needs to change vs. reloading and requesting all of the same assets with each page load.

One basic issue concerning SPA accessibilty is that assistive technology (screen readers in this case) are not aware of dynamically loaded content. Screen readers are tuned to document refreshes. It is up to us as UX designers and developers to ensure that pertinent, dynamic content or UI changes are brought to the attention of users.

In particular, when navigating from one view to another, no indication is provided to the user that anything has changed. This is unlike traditional page navigation via page refresh, where the screen reader provides a consistent pattern of alerting the user to the page refresh.

Generally, a page refresh is announced to the user by some aubible "loading" cue, the new page title, and often a spoken loading progress indicator.


##A Solution

One solution is to emulate a page refresh by announcing when a view/page loaded

##Frameworks

The following framework examples are provided:

- React (0.14) - based on https://github.com/reactjs/react-router-tutorial
- Angular 2 - based on https://github.com/mgechev/angular2-seed
- Ember (2.4) - based on git@github.com:zoltan-nz/library-app.git

Each project folder contains a Readme.md with instructions for installing and running each project.

Each of these frameworks provides lifecycle event hooks that allow us to determine when the view update is complete.

### React



### Angular 2



### Ember


