# MyFirstProjectAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

contexte de ce projet: 

Votre entreprise à besoin d'un annuaire des collaborateurs sour forme de Web Application. Pour commencer votre travail, vous disposer d'un fichier JSON. En vous servant des expérimentation fais via le tuto de la documentation d'Angular, mettez en place une petite application permettant d'afficher la liste des utilisateurs présents dans le JSON.

Une page d'accueil permettra de visualiser pour chaque utilisateur : sa photo, son nom et prénom, ainsi que son email, vous pouvez vous inspirer du design donné en ressource.

Toujours sur la page d'acceuil vous afficherez un icon en fonction de l'age de l'utilisateur :

moins de 40 ans : l'icon de rookie.svg (ressource)
entre 40 et 60 ans : l'icon de advance.svg (ressource)
plus de 60 ans : l'icon de expert.svg (ressource)
Chaque carte devra être cliquable et redirigera vers une page de détails de l'utilisateur. La photo devra être plus grande que celle de la card d'accueil (observez bien le JSON vous avez toutes les infos nécessaires). La page de détail de l'utilisateur sera une fiche comportant toute les infos restantes dans le JSON concernant l'utilisateur.