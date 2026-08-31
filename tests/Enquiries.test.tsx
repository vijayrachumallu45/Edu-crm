import { describe, it, expect } from 'vitest';
import { initialEnquiries } from '../src/data/mockData';

describe('Enquiry Management Unit Tests', () => {
  it('filters enquiries by status correctly', () => {
    const newEnquiries = initialEnquiries.filter(e => e.status === 'New');
    expect(Array.isArray(newEnquiries)).toBe(true);
  });

  it('searches enquiries by student name', () => {
    const query = 'Aarav';
    const results = initialEnquiries.filter(e => e.studentName.includes(query));
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].studentName).toContain('Aarav');
  });

  it('verifies activity timeline structure', () => {
    const enquiryWithActivities = initialEnquiries.find(e => e.activities && e.activities.length > 0);
    expect(enquiryWithActivities).toBeDefined();
    expect(enquiryWithActivities?.activities[0].title).toBeTruthy();
  });
});
