import { faker } from '@faker-js/faker';

export function createFullName(): string {
  return faker.name.fullName();
}

export function createJobTitle(): string {
  return faker.name.jobTitle();
}
