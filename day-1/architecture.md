# Building reusable UI components in React

## Component composition & patterns

Objectives for reusable React components:

- composable - they should work well with other components
  - controlled/uncontrolled props
- ease-of-use - principle of "least astonishment" - make them accept styles, DOM props, etc, just like regular HTML/DOM
- fit for purpose - single-responsibility - should do one thing and do it well
- extendable - should allow developers to build other components on top of them
- style-able - easy to style - should not be opinionated on how they should be styled

## Class and lifecycle methods vs function components & hooks

- for new components and apps, adopt function components
- hooks allow sharing behavior much more easily
- UNSAFE: componentWillMount, componentWillUpdate, componentWillReceiveProps - alternatives
- it's easier with hooks - useEffect/useLayoutEffect

Example: having a userId prop and reloading data about the user when the prop changes - would need to do it in didMount AND didUpdate - with hooks, only need to do it in useEffect(() => {...}, [props.userId])

## Managing component props & state - controlled vs uncontrolled props

- avoid prop drilling
- expose both controlled and uncontrolled props

Exercise: Build a reusable TabPanel component

Also see https://gist.github.com/ryanflorence/e5c794e6093d16a69fa88d2112a292f7#one-to-one-rendered-dom-element-to-reach-component
