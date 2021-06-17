# treelink

To run respository:
`yarn start`

To run storybook:
`yarn storybook`

To run visual regression testing:
`yarn storybook`
`yarn loki`

To run interaction testing:
`yarn test`
NOTE: This currently doesn't work because Jest isn't willing to cooperate parse my moduleNameMapper aliases properly :(
If you want to see my testing code, see `App.test.tsx`.

## **Testing Notes**

**Visual Regression Testing**
I opted for [Loki](https://loki.js.org/) as a visual testing tool for my storybook components. Often times we create stories for our components and then forget about updating them as we update our components in the main src. This came in handy when I decided to make a reusable ExpandableLink component AFTER having created the ShowsLink component. Loki would have brought to my attention of any differences that would have emerged when refactoring ShowsLink with ExpandableLink would have created.

**Interaction Testing**
This currently doesn't work because Jest isn't willing to cooperate parse my moduleNameMapper aliases properly :(
If you want to see my testing code, see `App.test.tsx`.

The concept was to test the interactions of the expandable links - Music and Shows - as a user would interact with the items. For example, ensuring that the music player is triggered on click of the a platform list item.

## **Checklist:**

-   ~~Set up project React Typescript Webpack Babel~~
-   ~~Set up ESLint and Prettier~~
-   ~~Add CSS-in-JS library and Storybook~~
-   ~~Create typings folder~~
-   ~~Add assets~~
-   ~~Add mock data and typings for User and Links~~
-   ~~Add mock data and typings for Songs and Shows~~
-   ~~Set up visual regression testing~~
-   ~~Set up interaction testing XX NEED DEBUGGING
-   ~~Create base Link component~~
-   ~~Create **Shows** Link variant component~~
-   ~~Create **Music** Link variant component~~
-   Integrate music player
-   ...
