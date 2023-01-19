import { expect, Locator, Page } from '@playwright/test';
import config from '../util/config';

export class EmployeePage {
  readonly page: Page;
  readonly employeeHeader: Locator;
  readonly addEmployeeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeHeader = page.locator('h2', { hasText: 'Employees List' });
    this.addEmployeeButton = page.getByRole('button', {
      name: 'Add a New Employee'
    });
  }

  async goto() {
    await this.page.goto(config.urls.base!);
  }

  async clickAddEmployeeButton() {
    await this.addEmployeeButton.click();
  }
}
