import { test, expect } from '@playwright/test';

test.describe('/count page', () => {
  test('should increment the counter correctly', async ({ page }) => {
    
    await page.goto('http://localhost:3000/count');

    
    const counter = page.locator('h1');
    await expect(counter).toHaveText('0');

    
    const button = page.locator('button');
    await button.click();

    
    await expect(counter).toHaveText('5', { timeout: 2500 });

    
    await button.click();
    await expect(counter).toHaveText('10', { timeout: 5000 });
  });

  test('should continue counting on multiple button clicks', async ({ page }) => {
    
    await page.goto('http://localhost:3000/count');

   
    const button = page.locator('button');
    await button.click();
    await button.click();

    
    const counter = page.locator('h1');
    await expect(counter).toHaveText('10', { timeout: 3000 });
  });
});
