

/******
  All emails must be in quotes, either single ' or double ".
  The list needs to be seperated by a comma. 
  All emails must first be verified via the email tab. 
  Note if successful, in Cloudflare dashboard, emails may say dropped. This is the default state. 
  If it says forwarded you have the email address set to go to a single addresses in the email routes tab. 
  Change it to send to worker you created. 
  Only modify the lines between EMAIL START and EMAIL END. Otherwise you could run into issues if you don't under stand how to debug. 
  
*****/

const emailAddresses = [
  /***** Add email addresses below ****/
  /****** EMAIL START *******/



  /****** EMAIL END  *******/
]



/***********

DO NOT EDIT ANYTHING BELOW HERE

***********/


/******************

WARNING: Really do not edit below this line

**************/

/****************

You just have to keep scrolling don't you.

*****************/


/****************

  ugggg

*****************/






/****************

  Ok I guess you don't want to listen

*****************/





/****************

  Don't say I didn't warn you.

*****************/



/****************

  You are on your own now.

*****************/

/****
  Email script for sending the emails

  This takes a list of emails from an array and will forward the emails to all verified email accounts. 
*****/
export default {
  async email(message, env, ctx) {
    const forwardList = emailAddresses;
    for(const email of forwardList){
      await message.forward(email);
    }
  }
}
