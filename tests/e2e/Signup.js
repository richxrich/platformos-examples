import 'testcafe';
import LayoutPage from './page-objects/Layout';
import HomePage from './page-objects/Homepage';
import SignUp from './page-objects/Signup';

const homePage = new HomePage();
const layoutPage = new LayoutPage();
const signUp = new SignUp();

const userData = {
    NAME: `test_user`,
    USER_EMAIL: `test+${+new Date()}@example.com`,
    PASSWORD: `password`,
    TELEPHONE_NUMBER: `00123456789`,
  };

fixture('Homepage').page(layoutPage.URL.staging);

test('There are no liquid errors on the page', async () => {
  await layoutPage.checkLiquidErrors();
});

test('Create developer account', async t => {
    const userName = userData.NAME;
    const userEmail = userData.USER_EMAIL;
    const userPass = userData.PASSWORD;
    const userPhone = userData.TELEPHONE_NUMBER

    await t 
    .click(homePage.linkSignUp)
    .click(signUp.developerSignUp)
    .typeText(signUp.firstname, userName)
    .typeText(signUp.email, userEmail)
    .typeText(signUp.password, userPass)
    .typeText(signUp.mobileNumber, userPhone)
    .click(signUp.submitButton)
    .expect(layoutPage.alertSuccess.exists).ok();
  });
  