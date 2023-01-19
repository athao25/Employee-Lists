import { test, expect, type Page } from '@playwright/test';
import { createFullName, createJobTitle } from '../util/faker-data';
import { EmployeePage } from '../pages/employee_page';
import { AddEmployeePage } from '../pages/add_employee_page';

test.describe('Employee App Functionality', () => {
  test('should add a new employee', async ({ page }) => {
    // Arrange
    const employeePage = new EmployeePage(page);
    const addEmployeePage = new AddEmployeePage(page);
    const fakerEmployeeName: string = createFullName();
    const fakerEmployeePosition: string = createJobTitle();

    // Act
    await employeePage.goto();
    await employeePage.clickAddEmployeeButton();
    await addEmployeePage.enterName(fakerEmployeeName);
    await addEmployeePage.enterJobTitle(fakerEmployeePosition);
    await addEmployeePage.selectSeniorLevel();
    await addEmployeePage.clickAddButton();

    // Assert
    await expect(employeePage.employeeHeader).toBeVisible();
    await expect(page.getByRole('table')).toContainText(fakerEmployeeName);
    await expect(page.getByRole('table')).toContainText(fakerEmployeePosition);
  });
});
