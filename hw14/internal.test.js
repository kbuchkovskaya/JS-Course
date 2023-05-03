
const {Builder, By, Key, Actions} = require('selenium-webdriver');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { assert } = require('assert');

describe('hw14 task 1', () => {

    let driver, actions;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        actions = driver.actions();
        await driver.get('https://the-internet.herokuapp.com/dropdown');
        //await driver.findElement(By.name('q')).sendKeys('https://the-internet.herokuapp.com/dropdown', Key.ENTER);
    })

    afterEach(async() => {
        await driver.quit();
    })
    
    xtest('State of element activity (1st element)', async () => {
        await driver.findElement(By.css('#dropdown')).click();
        const firstElementIsEnabled = await driver.findElement(By.css('#dropdown > option:nth-child(1)')).isEnabled();
        expect(firstElementIsEnabled).toBeTruthy();
    })

    xtest('2nd element', async () => {
        await driver.findElement(By.css('#dropdown')).click();
        const secondElementIsEnabled = await driver.findElement(By.css('#dropdown > option:nth-child(1)')).isEnabled();
        expect(secondElementIsEnabled).toBeFalsy();
    })
})

describe('hw14 task2', () => {

    let driver, action;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        action = driver.actions();
        await driver.get('https://the-internet.herokuapp.com/hovers');
        //await driver.findElement(By.name('q')).sendKeys('https://the-internet.herokuapp.com/hovers', Key.ENTER);
    }, 10000)

    afterEach(async() => {
        await driver.quit();
    })

    xtest('Elements have avatar', async () => {
        let users = driver.findElements(By.xpath('//div[@class="figure"]'));
        for(let i = 0; i < users.length; i++){
            let src =  await users[i].findElement(By.xpath('/img')).getAttribute('src');
            if (!src.includes('blank')) {
                await action.move({ origin: users[i] }).perform();
                const name = await driver.findElement(By.xpath('//div[@class="figure"]//h5')).getText();
                expect(name).toContain('name: user1');
            }
        }
    })
})

describe('hw14 task 3', () => {

    let driver, action;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        action = driver.actions();
        await driver.get('http://formy-project.herokuapp.com/form');
        //await driver.findElement(By.name('q')).sendKeys('https://the-internet.herokuapp.com/', Key.ENTER);
    })

    afterEach(async() => {
        await driver.quit();
    })

    test('Filling out the form', () => {
        driver.findElement(By.id('first-name')).sendKeys('Peter');
        driver.findElement(By.id('last-name')).sendKeys('Peterson');
        driver.findElement(By.id('job-title')).sendKeys('tester');
        driver.findElement(By.xpath("//div[input[@type='radio']][contains(., 'High School')]")).click();
        driver.findElement(By.xpath("//div[input[@type='checkbox']][contains(., 'Male')]")).click();
        driver.findElement(By.id('select-menu')).click();
        driver.findElement(By.xpath('//option[@value="2"]')).click();
        driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
        driver.findElement(By.xpath("//a[contains(., 'Submit')]")).click();
        setTimeout(() => {
            assert(elementIsVisible, driver.findElement(By.css('class="alert alert-success"')));
        }, 2000)
        
    })

})




