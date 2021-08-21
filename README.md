# Welcome BITS Candidates
If you're reading this, you've caught our eye! Now its time to show us that you can code and can fill the React Native position available.

The task is simple, build recreate two screens from one of our client apps by consuming an existing API using React Native & Typescript.

&nbsp;
&nbsp;

---
## Preparing The Environment
---
The entire task is prepared to you in a dockerized container. We spent hours preparing this so you dont.  You need to install docker and docker-compose before you begin working:

- https://docs.docker.com/desktop/
- https://docs.docker.com/compose/install/

Once the installation is complete, open up a command line or a terminal and run:

`
docker-compose up
`

The first time you run this command, building the environment can take a few minutes.

Once the environments are up, you will see the messages from expo and the QR code to access the app.

Once this message is displayed, open your favorite browser (or terminal) and go to: http://localhost:19002 to access the EXPO dev tools.

&nbsp;
&nbsp;

---
## Where to write your code
---
The docker-compose mounts the app directory to the docker container, so you can start writing code directly in this folder. This is all you need to get started.

The template provided is the Tab Typescript template provided by Expo. The structure is self explanatory, but here it is in case you need it:

+ `components`: containing all the component/building blocks
+ `constants`: any constsnts you need to use
+ `hooks`: any hooks you need to define. For this task, probably none.
+ `navigation`: this is where you create the navigation stack
+ `screens`: This is where you create the screens (comprising of the components youve created). There should be two there when you finish this task
+ `types.tsx`: Define types that are used by your code across the different files
  

As you code, whatever you develop is immediately refreshed to the simulator or your phone, you do not have to restart the containers or services.

&nbsp;
&nbsp;

---
## The Task
---
Youre building an application for a Financial Bank, specifically, a bank that hands customers loans. The end goal of the application is to have a customer
see his active and closed loans, and the progress of his payments towards the loan.

The customer can see all the payments he has made against a specific loan/account when he taps the account details.

A short screen capture is provided below:

&nbsp;
&nbsp;

![Demo App](./README/app.gif)

&nbsp;
&nbsp;

---
### 1) **Accounts-Screen** 
--

![Accounts Screen](/README/accounts-screen.png)

    The main screen that shows the customers accounts/loans:
   + To start, you have to fetch the loans from the following endpoint:
    ```https://api.cfc-kw.com/customers/584657/loans```
  
   + The gauge/dial can be created in CSS or use an existing component from github
   
   + The only "clickable" component is the guage. Upon click, it should take the user to the Payments Screen. You can ignore the rest of the buttons.
   
   + Each Loan should be in a Page itself, with the entire screen being scrollable (paging enabled).

&nbsp;
&nbsp;

---
### 2) **Payments-Screen**
--    
![Payments Screen](./README/payments-screen.png)

    Shows the payment details of the clicked loan/account:
   + The payments need to be fetched from the following endpoint (replacing the parameter :account_no):
    ``` https://api.cfc-kw.com/customers/584657/loans/{:account_no}/history ```

&nbsp;

---
## What will I be assessed on
---
1. If your code works
2. If you wrote tests
3. Your application structure
4. How you designed your components
5. How complicated is your code, can a junior understand what you did without help 
6. How long it took you to complete the task

&nbsp;
&nbsp;

---
## Questions
---
You can share any question/concern you have on teams. Not all your questions maybe answered, sometimes you may have to assume and justify your decisions.

&nbsp;
&nbsp;


># Good Luck!