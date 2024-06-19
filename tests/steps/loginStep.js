const { When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../tests/pages/loginPage');

let lp = new LoginPage();

When('The user is on the login page', async () => {
    await lp.navigate();
})

  When('The user enters a valid email {string} in the "User" field', async (string)=> {
    await lp.userEnterEmailID(string);
  });


  When('The user enters a valid password {string} in the "Password" field', async (string)=> {
   await lp.userEnterPassword(string);
  });
  When('The user clicks the "LOGIN" button', async ()=> {
   await lp.userClickLOGIN();
  });


  Then('The user should be redirected to the homepage', async ()=> {
    await lp.redirectToHomepage();
  });
  
  Then('The user should see an error message "Invalid email address"', async () =>{
    await lp.verifyErrorMsgInvalidEmail();
   
  });
  Then('The user should see an error message "Incorrect password"',  async() =>{
    await lp.verifyErrorMsgInvalidPassword();
   
  });
  Then('The user should see an error message "Email is required"', async  () =>{
    await lp.verifyErrorMsgEmptyEmailFeild();
   
  });
  Then('The user should see an error message "Password is required"',  async()=> {
    await lp.verifyErrorMsgEmptypasswordFeild();
    });

    Then('The user should see an error message "Email and Password are required"', async () =>{
        await lp.verifyErrorMessageBothEmptyFeilds();
         });