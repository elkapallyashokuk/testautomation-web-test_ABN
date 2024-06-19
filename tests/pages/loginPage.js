const {test, expect} = require("@playwright/test");
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname,'../../.env')
})

const serveDirectory = path.join(process.cwd(), 'testautomation-web/testautomation-web/index.html');
class LoginPage{    
    
    async navigate(){
       // await global.page.goto(process.env.WEB_URL);
        await global.page.goto(serveDirectory);
   } 


   async userEnterEmailID(emailID){
    await global.page.locator('[id="email"]').fill(emailID);
   }

   async userEnterPassword(password){
    await global.page.locator('[id="password"]').fill(password);
   }

   async userClickLOGIN(){
    await global.page.getByRole('button', { name: 'LOGIN' }).click();
   }

   async redirectToHomepage(){
    //await expect(global.page.locator('')).toHaveText('Home page');
   }


   async verifyErrorMsgInvalidEmail(){
   //await expect(global.page.locator('')).toHaveText('Invalid email address Error message');
   }

   async verifyErrorMsgInvalidPassword(){
     //await expect(global.page.locator('')).toHaveText('Invalid password Error message');
   }

   async verifyErrorMsgEmptyEmailFeild(){
     //await expect(global.page.locator('')).toHaveText('Email is required');
   }

   async verifyErrorMsgEmptypasswordFeild(){
     //await expect(global.page.locator('')).toHaveText('password is required');
   }

   async verifyErrorMessageBothEmptyFeilds(){
    //await expect(global.page.locator('')).toHaveText('Email and Password are required');
   }
}

module.exports={LoginPage}