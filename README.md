<div style="display: flex; justify-content:center; align-items: center">
<h1>  Automated tests using cucumber in Cypress </h1>
</div>
<div align="center" style="display: flex; justify-content:center;">
      <img align="center" alt="cypress" src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png" />
</div>
<br />
<p align="center">
 <a href="#desc">Description</a> •
 <a href="#features">Tests</a> •
 <a href="#tecnologias">Techs</a> • 
 <a href="#executando">Running the tests</a> • 
 <a href="#autor">Author</a>
</p>

<div id="desc"/>

## 📝 Description
This is the repository created for the automation of the vehicle security request service. The system used by the automation can be accessed at this [link](http://sampleapp.tricentis.com/101/app.php).

<div id="features" />

## ✔️ Tests
A feature was guided considering the following scenarios:
1. Access the home page
2. Fill in the form “Enter Vehicle Data” tab
3. Fill in the form “Enter Insurance Data” tab
4. Fill in the form “Enter Product Data” tab
5. Fill in the form “Enter Price Data” tab
6. Fill in the form “Send quote” tab
7. Verify if the message "Sending e-mail success!" is appearing on the screen


<div id="tecnologias"/>

## ✨ Tecnologias

-   [ ] [Cypress](https://www.cypress.io/)
-   [ ] [Cucumber](https://cucumber.io/)
-   [ ] [Page Object](https://selenium-python.readthedocs.io/page-objects.html)
  
<div id="executando" />

## ▶️ Running the tests

Run the commands below in the terminal:

### 1. Opening cypress runner:
```sh
$ git clone https://github.com/MarcosLudgerio/automated-test-cucumber-cypress.git
$ npm install
$ npm run cypress
```
### 2. Selecting the type E2E Testing:

<img src="https://raw.githubusercontent.com/MarcosLudgerio/automated-test-cucumber-cypress/main/screenshots/selecting-type-test.png" alt="Select type text" height="400"/>

### 3. Selecting the browser:
<img src="https://raw.githubusercontent.com/MarcosLudgerio/automated-test-cucumber-cypress/main/screenshots/selecting-browser.png" alt="Select the browser" height="400"/>

### 4. Running the test case:
<img src="https://raw.githubusercontent.com/MarcosLudgerio/automated-test-cucumber-cypress/main/screenshots/running-feature.png" alt="Running a test case" height="400"/>

<div id="autor" />

## 👩‍💻 Author 

<table>
   <tr>
     <td>
        <a href="https://github.com/MarcosLudgerio">
         <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/43012976?s=460&u=1163c04d9f35b577063b3f6550ae520c4dd2f866&v=4" width="150" alt=""/>
        </a>
        <br/><sub><b>Marcos Ludgério</b></sub>
     </td>
   </tr>
</table>
