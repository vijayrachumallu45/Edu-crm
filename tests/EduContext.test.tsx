import { describe, it, expect, beforeEach } from 'vitest';
import { initialEnquiries, initialStudents, initialCourses, initialApplications } from '../src/data/mockData';

describe('EduFlow CRM Data Model Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should verify initial mock courses are populated correctly', () => {
    expect(initialCourses).toBeDefined();
    expect(initialCourses.length).toBeGreaterThan(5);
    expect(initialCourses[0].name).toContain('Computer Applications');
  });

  it('should verify initial mock enquiries data structure', () => {
    expect(initialEnquiries).toBeDefined();
    expect(initialEnquiries.length).toBeGreaterThan(5);
    expect(initialEnquiries[0].studentName).toBeTruthy();
    expect(initialEnquiries[0].status).toBeDefined();
  });

  it('should calculate student fee pending amount correctly', () => {
    const student = initialStudents[0];
    const pending = student.totalFee - student.paidFee;
    expect(pending).toBe(student.pendingFee);
  });

  it('should verify application stages mapping', () => {
    const app = initialApplications[0];
    expect(['Enquiry', 'Counselling', 'Application', 'Document Review', 'Approved', 'Enrolled']).toContain(app.stage);
  });
});
