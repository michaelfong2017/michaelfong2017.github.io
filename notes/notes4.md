Temporary notes
================

## Single quotes vs double quotes
In json, only double quotes are allowed.
Single quotes are more popular.

## React Recoil
After using useRecoilValue, the component subscribes to the state and re-render is triggered whenever the state changes.

Selector is not a state itself. It is a read-only computation.

### atom vs context (useContext)
If using only 1 context, it triggers re-render to all components that subcribed to it even though they are not actually affected.
If using 10 contexts, 10 contexts and 10 providers are a nightmare.

## React Bootstrap
```yarn add react-bootstrap bootstrap```
For react-bootstrap styles to appear,
I need to include ```@import "bootstrap/dist/css/bootstrap.css"``` in app.scss.

## css mobile option
Variant depending on screen size:
```
@media (max-width: 900px) {
    .mobile-option {
        display: none;
    }
    // ......
}
```
Then, components with className mobile-option will have the above styles conditionally.

Suppose Navbar already has className "navbar". 
```
.navbar {
    background-color: #26004d
}
```
can directly add styles on top of the original "navbar" css styles.

```<img width="100%" src=......>``` fills parent exactly.

## react-bootstrap navbar
Seems the same:
```<NavBar.Toggle aria-controls="basic-navbar-nav" />```
```<NavBar.Toggle aria-controls="responsive-navbar-nav" />```

```<NavBar.Collapse id="basic-navbar-nav" />```
```<NavBar.Collapse id="responsive-navbar-nav" />```

```<NavDropdown title="Dropdown" id="collasible-nav-dropdown">```

