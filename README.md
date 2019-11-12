<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn4.iconfinder.com/data/icons/star-wars-9/100/general_grievous-512.png" alt="General Grievous"></a>
</p>

<h3 align="center">tb.lx tech challenge - Star wars - <img width=20px height=20px src="https://image.flaticon.com/icons/png/128/86/86488.png" alt="General Grievous"></h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/HenriqueRulez/starwars-tech-challenge.svg)](https://github.com/HenriqueRulez/starwars-tech-challenge/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/HenriqueRulez/starwars-tech-challenge.svg)](https://github.com/HenriqueRulez/starwars-tech-challenge/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [TODO](#todo)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Challenge developed by [tb.lx](https://techhublisbon.io/).

## 💭 How it works <a name = "working"></a>

The site first stracts data from the source API [swapi.co](swapi.co). After the first fetch, all objects used on the site are mapped and store into the memory so the application can be more perfomatic and do less API requisition.

The application is written on HTML5, CSS3 and JavaScrip ES6 and its core being Vue.js

## 🎈 Usage <a name = "usage"></a>

The usage is simple enough:

- Access the application [here](https://henriquerulez.github.io/starwars-tech-challenge/#executor/).
- On the input box, you type your search parameter
- Right below the input box, there are 4 search parameters to search for ships being them:
  - Name (This is the default one, when no parameter is inserted, it's going to list everything)
  - Favorites
  - Id
  - Tag
- Below the 4 search parameters, there are 2 sort parameters (both sort works after the list is filtered)
  - Name
  - Id
- After your search is done, everything that matches your the parameters is going to be show below as a card list
- Selecting a card will lead you to the top of the page with the selected ship and all its attributes
- While the ship is selected, you can add tags to the ship and add ship to your favorites
- To add tags you should simply type a new tag (it must be unique to the ship) and press the button ADD
- To remove tags, simply click on them
- To add or remove the ship from your favorites, you should press the FAVORITE/UNFAVORITE button

#### DISCLAMER

> All photos are made of a huge one using positioning (sprites). Not all ships are there so few of them are wrong and has a _weird_ placement.

---

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First you need to install all dev dependencies on your local machine to be able to run the project

```
Node
NPM
```

### Installing

First step is to install all dependencies

```
npm install
```

after installed there are few tasks you can run to get the project running:

To minify JS and SASS you can run

```
gulp sassProd
gulp mainJS
```

The default task has browser-sync, file-watch (JS, SASS and HTML) and JS/SASS uglify.

```
gulp
```

## ⛏️ Built Using <a name = "built_using"></a>

- SASS
- Eslint
- Vue.js
- Gulp
- Autoprefixer
- Particles.js

## ✍️ Authors <a name = "authors"></a>

- [@HenriqueRulez](https://github.com/HenriqueRulez) - Design and Code

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used, from libraries to frameworks
- Inspiration
- References
- tb.lx for making me push myself using a technology I never used before

## ♻️ Things to do <a name = "todo"></a>

- Optimeze all ships images
- Change LocalStorage for IndexDB
- Save fetched objects into IndexDB to optimize performance (PWA maybe?)
- Add sound easter eggs
- Reduce vue functions
- Transform all functions into modules
- Create separated .scss files
