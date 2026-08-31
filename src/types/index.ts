export type EnquiryStatus = 'New' | 'Contacted' | 'Counselling' | 'Application' | 'Converted' | 'Closed';

export interface ActivityItem {
  id: string;
  type: 'Call' | 'Counselling' | 'Note' | 'Follow-up' | 'Status Change';
  title: string;
  description: string;
  date: string;
  author: string;
}

export interface Enquiry {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  city: string;
  qualification: string;
  prevInstitution: string;
  gradYear: string;
  grade: string;
  courseId: string;
  courseName: string;
  preferredIntake: string;
  source: 'Website' | 'Social Media' | 'Referral' | 'Walk-in' | 'Advertisement';
  status: EnquiryStatus;
  counsellor: string;
  nextFollowUp: string;
  createdAt: string;
  notes: string;
  activities: ActivityItem[];
}

export type StudentStatus = 'Active' | 'On Hold' | 'Completed' | 'Inactive';
export type AcademicStatus = 'Good' | 'Needs Attention' | 'At Risk';

export interface Student {
  id: string;
  studentIdCode: string;
  enquiryId?: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  program: string;
  admissionDate: string;
  status: StudentStatus;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  totalFee: number;
  paidFee: number;
  pendingFee: number;
  feeStatus: 'Paid' | 'Partially Paid' | 'Pending' | 'Overdue';
  currentSemester: string;
  attendance: number; // percentage
  academicStatus: AcademicStatus;
  performance: string;
}

export type AdmissionStage = 'Enquiry' | 'Counselling' | 'Application' | 'Document Review' | 'Approved' | 'Enrolled';
export type ApplicationStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Rejected' | 'Enrolled';
export type DocumentStatus = 'Pending' | 'Submitted' | 'Verified';

export interface Application {
  id: string;
  appNumber: string;
  studentName: string;
  email: string;
  phone: string;
  program: string;
  applicationDate: string;
  stage: AdmissionStage;
  status: ApplicationStatus;
  counsellor: string;
  documentStatus: DocumentStatus;
  academicSummary: string;
  notes: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  programType: 'Undergraduate' | 'Postgraduate' | 'Diploma' | 'Certification';
  duration: string;
  fees: number;
  totalSeats: number;
  availableSeats: number;
  status: 'Active' | 'Upcoming' | 'Closed';
  description: string;
  eligibility: string;
}

export type CounsellingMode = 'Phone' | 'Online' | 'In Person';
export type CounsellingOutcome = 'Interested' | 'Needs Follow-Up' | 'Application Planned' | 'Not Interested';

export interface CounsellingSession {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  counsellor: string;
  date: string;
  time: string;
  mode: CounsellingMode;
  outcome: CounsellingOutcome;
  nextAction: string;
  notes: string;
}

export type FollowUpStatus = 'Upcoming' | 'Completed' | 'Overdue';

export interface FollowUp {
  id: string;
  studentName: string;
  counsellor: string;
  date: string;
  purpose: string;
  status: FollowUpStatus;
  priority: 'High' | 'Medium' | 'Low';
}

export type CampaignStatus = 'Draft' | 'Active' | 'Completed';

export interface Campaign {
  id: string;
  name: string;
  targetAudience: string;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  enquiriesGenerated: number;
  budget: number;
  conversions: number;
}

export interface PaymentRecord {
  id: string;
  amount: number;
  date: string;
  method: string;
  reference: string;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  program: string;
  totalFee: number;
  paid: number;
  pending: number;
  status: 'Paid' | 'Partially Paid' | 'Pending' | 'Overdue';
  dueDate: string;
  paymentHistory: PaymentRecord[];
}

export type TicketCategory = 'Academic' | 'Fee' | 'Hostel/Transport' | 'General' | 'Document';
export type TicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';

export interface SupportTicket {
  id: string;
  ticketId: string;
  studentName: string;
  subject: string;
  category: TicketCategory;
  status: TicketStatus;
  priority: 'Low' | 'Medium' | 'High';
  date: string;
  description: string;
  resolution?: string;
}

export type FeedbackType = 'Counselling' | 'Admission' | 'Course' | 'Support' | 'Overall Experience';

export interface FeedbackItem {
  id: string;
  studentName: string;
  feedbackType: FeedbackType;
  rating: number; // 1-5
  comment: string;
  date: string;
  status: 'Published' | 'Reviewed' | 'Pending';
}

export interface CommunicationLog {
  id: string;
  studentName: string;
  type: 'Email' | 'SMS' | 'WhatsApp' | 'Call';
  messagePreview: string;
  date: string;
  status: 'Sent' | 'Delivered' | 'Received' | 'Failed';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'alert';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  theme: 'light' | 'dark';
  currency: '₹' | '$' | '€' | '£';
  defaultCourse: string;
  defaultAdmissionStage: AdmissionStage;
}
