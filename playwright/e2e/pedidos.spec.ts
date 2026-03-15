import { test, expect } from '@playwright/test';

// AAA: Arrange, Act, Assert

test('deve consultar um pedido aprovado', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint', { timeout: 10_000 });

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido', { timeout: 10_000 });

  // Act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-ZQ07HU');
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();

  // Assert
  await expect(page.getByTestId('order-result-VLO-ZQ07HU')).toBeVisible({ timeout: 10_000 });
  await expect(page.getByTestId('order-result-VLO-ZQ07HU')).toContainText('VLO-ZQ07HU');
  await expect(page.getByTestId('order-result-VLO-ZQ07HU')).toContainText('APROVADO');
});