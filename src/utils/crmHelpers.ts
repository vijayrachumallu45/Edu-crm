import { Enquiry, Student, FeeRecord } from '../types';

export const calculateConversionRate = (enquiries: Enquiry[], status: string): number => {
  if (!enquiries || enquiries.length === 0) return 0;
  const count = enquiries.filter(e => e.status === status).length;
  return Number(((count / enquiries.length) * 100).toFixed(1));
};

export const formatCurrency = (amount: number, symbol: string = '₹'): string => {
  return `${symbol}${amount.toLocaleString('en-IN')}`;
};

export const generateStudentInvoiceSummary = (fee: FeeRecord): string => {
  return `INVOICE SUMMARY FOR ${fee.studentName} (${fee.program})
Total Fee Billed: ${formatCurrency(fee.totalFee)}
Amount Paid: ${formatCurrency(fee.paid)}
Pending Balance: ${formatCurrency(fee.pending)}
Payment Status: ${fee.status}
Due Date: ${fee.dueDate}`;
};

export const filterRecordsByQuery = <T extends Record<string, any>>(items: T[], query: string, keys: (keyof T)[]): T[] => {
  if (!query || query.trim() === '') return items;
  const lower = query.toLowerCase();
  return items.filter(item => {
    return keys.some(key => {
      const val = item[key];
      return val && String(val).toLowerCase().includes(lower);
    });
  });
};
