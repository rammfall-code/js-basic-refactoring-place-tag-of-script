import { test, expect } from '@playwright/test';
import { join } from 'path';

test('has title', async ({ page }) => {
  await page.goto(`file://${join(__dirname, '../src/index.html')}`);
  const title = await page.getByTestId('title');
  const textContent = (await title.textContent()).trim();
  await expect(title).toHaveCSS('color', 'rgb(0, 255, 255)');
  await expect(textContent).toEqual('Colored title');
});
