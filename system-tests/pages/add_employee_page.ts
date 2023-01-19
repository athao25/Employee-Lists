import { Locator, Page } from '@playwright/test';

export class AddEmployeePage {
  readonly page: Page;
  readonly addEmployeeHeader: Locator;
  readonly nameField: Locator;
  readonly jobTitleField: Locator;
  readonly juniorRadioButton: Locator;
  readonly midRadioButton: Locator;
  readonly seniorRadioButton: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeHeader = page.locator('h2', {
      hasText: 'Add a New Employee'
    });
    this.nameField = page.getByPlaceholder('Name');
    this.jobTitleField = page.getByPlaceholder('Position');
    this.juniorRadioButton = page.getByLabel('Junior');
    this.midRadioButton = page.getByLabel('Mid');
    this.seniorRadioButton = page.getByLabel('Senior');
    this.addButton = page.getByRole('button', { name: 'Add' });
  }

  async enterName(employeeName: string) {
    await this.nameField.type(employeeName);
  }

  async enterJobTitle(employeePosition: string) {
    await this.jobTitleField.fill(employeePosition);
  }

  async selectJuniorLevel() {
    await this.juniorRadioButton.click();
  }

  async selectMidLevel() {
    await this.midRadioButton.click();
  }

  async selectSeniorLevel() {
    await this.seniorRadioButton.click();
  }

  async clickAddButton() {
    await this.addButton.click();
  }
}
