# Angular Learning

## Angular Installation:
- Step-01
  - `npm install -g @angular/cli`
  - `ng my-todo-list`
  - `cd my-first-project`
  - `ng serve`
- Step-02: Install Required packages
  - `npm install bootstrap`
  - `npm install jquery`
    - update bootstrap in angular.json:
       ```
        // angular.json --> projects.architect
        "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css" // add
        ],
        "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.js" // add
        ],
        ```
- Step-03: Create angular Components & others:
  - generate component: `ng generate component myCompnents/todos`

## 1. Function Based Component (TODO List)
- [Tutorial](https://www.youtube.com/watch?v=0LhBvp8qpro)
