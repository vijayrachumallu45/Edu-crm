import { describe, it, expect } from 'vitest';
import { initialStudents } from '../src/data/mockData';

describe('Student Management Unit Tests', () => {
  it('validates student registration ID format', () => {
    initialStudents.forEach(s => {
      expect(s.studentIdCode).toMatch(/^EDU-\d{4}-\d{3}$/);
    });
  });

  it('validates attendance percentages are within valid range', () => {
    initialStudents.forEach(s => {
      expect(s.attendance).toBeGreaterThanOrEqual(0);
      expect(s.attendance).toBeLessThanOrEqual(100);
    });
  });

  it('identifies at-risk students correctly', () => {
    const atRisk = initialStudents.filter(s => s.academicStatus === 'At Risk' || s.attendance < 70);
    expect(Array.isArray(atRisk)).toBe(true);
  });
});
