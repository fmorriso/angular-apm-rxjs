# Angular Apm Rxjs

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

It has been upgraded to the following:
* Angular/CLI 9.0.6
* Angular 9.0.6
* Angular Material 9.1.2
* Angular Flex Layout 9.0.0-beta.29
     RxJS 6.5.4
    # Problems and Solutions
    nvoking `ng build` or `ng serve` sometimes results in the following issue:
```
ERROR in ngcc is already running at process with id 7452.
    ``

Stop `ng serve` if it is running and then delete this file:
    ``
    ode_modules/@angular/compiler-cli/ngcc/_ngcc_lock_file
    ``
## TSLint 6.x special upgrade instructions
    fter upgrading Angular to 9.1, to upgrade TSlint to version 6.x:
    ``
         update @angular/cli --migrate-only tslint-version-6
        `
    # Routing

        e raw JSON route.config looks like this:
            json

                    "path":"welcome","data":{"label":"Home"}},
                    "path":"products","data":{"label":"Product List"}},
             {"path":"","redirectTo":"welcome","pathMatch":"full"},
          {"path":"**"}]
        `

            Development server

    un `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

    # Code scaffolding

        n `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

            Build

    un `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

    # Running unit tests

        n `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

        n `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

         get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
