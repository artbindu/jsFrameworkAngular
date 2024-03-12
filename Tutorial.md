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


#### Step-01: Install Node
- Install Node for angular-cli:16
        `nvm install 18.10.0`
        `nvm use 18.10.0`
- Check Node Version:
        `node -v`
        `npm -v`

#### Step-02: Install angular-cli
- uninstall old angular-cli: 
        `npm uninstall @angular/cli`
        `npm cache verify --force`
- install angular-cli with specific version: 
        `npm install -g @angular/cli@16.0.0`
- Check ng version:
        `ng version`

#### Step-03: Create Project
#### Create App
ng new angular-tour-of-heroes

