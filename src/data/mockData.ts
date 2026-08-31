import {
  Course,
  Enquiry,
  Student,
  Application,
  CounsellingSession,
  FollowUp,
  Campaign,
  FeeRecord,
  SupportTicket,
  FeedbackItem,
  CommunicationLog,
  Notification,
  UserProfile
} from '../types';

export const initialUserProfile: UserProfile = {
  id: 'usr-001',
  name: 'Sarah Jenkins',
  email: 'admin@eduflow.demo',
  role: 'Senior Admission Lead',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  theme: 'light',
  currency: '₹',
  defaultCourse: 'MBA',
  defaultAdmissionStage: 'Application'
};

export const initialCourses: Course[] = [
  {
    id: 'crs-001',
    code: 'BCA101',
    name: 'Bachelor of Computer Applications (BCA)',
    programType: 'Undergraduate',
    duration: '3 Years',
    fees: 240000,
    totalSeats: 120,
    availableSeats: 34,
    status: 'Active',
    description: 'Comprehensive undergraduate program focused on software development, web engineering, and computer architecture.',
    eligibility: '10+2 with minimum 50% in Mathematics/Computer Science'
  },
  {
    id: 'crs-002',
    code: 'BBA102',
    name: 'Bachelor of Business Administration (BBA)',
    programType: 'Undergraduate',
    duration: '3 Years',
    fees: 220000,
    totalSeats: 100,
    availableSeats: 18,
    status: 'Active',
    description: 'Foundation in management principles, marketing, corporate finance, and business communication.',
    eligibility: '10+2 in any stream with minimum 50% aggregate'
  },
  {
    id: 'crs-003',
    code: 'MCA201',
    name: 'Master of Computer Applications (MCA)',
    programType: 'Postgraduate',
    duration: '2 Years',
    fees: 320000,
    totalSeats: 60,
    availableSeats: 12,
    status: 'Active',
    description: 'Advanced postgraduate degree in cloud computing, database engineering, and full-stack software development.',
    eligibility: 'BCA or B.Sc CS/IT with minimum 55% aggregate'
  },
  {
    id: 'crs-004',
    code: 'MBA202',
    name: 'Master of Business Administration (MBA)',
    programType: 'Postgraduate',
    duration: '2 Years',
    fees: 480000,
    totalSeats: 90,
    availableSeats: 15,
    status: 'Active',
    description: 'Flagship executive management program featuring specializations in Finance, Marketing, HR, and Analytics.',
    eligibility: 'Graduation in any discipline with valid CAT/MAT score'
  },
  {
    id: 'crs-005',
    code: 'BTECH103',
    name: 'B.Tech Computer Science Engineering',
    programType: 'Undergraduate',
    duration: '4 Years',
    fees: 560000,
    totalSeats: 180,
    availableSeats: 42,
    status: 'Active',
    description: 'Premier engineering program covering algorithmic design, systems programming, and modern software paradigms.',
    eligibility: '10+2 PCM with minimum 60% aggregate'
  },
  {
    id: 'crs-006',
    code: 'DS203',
    name: 'M.Sc Data Science & AI',
    programType: 'Postgraduate',
    duration: '2 Years',
    fees: 380000,
    totalSeats: 45,
    availableSeats: 8,
    status: 'Active',
    description: 'Specialized program covering Machine Learning, Deep Learning, Statistical Analysis, and Big Data Technologies.',
    eligibility: 'B.Tech / B.Sc in CS, Math or Statistics'
  },
  {
    id: 'crs-007',
    code: 'CYB104',
    name: 'Diploma in Cyber Security & Forensic',
    programType: 'Diploma',
    duration: '1 Year',
    fees: 110000,
    totalSeats: 50,
    availableSeats: 22,
    status: 'Active',
    description: 'Hands-on practical diploma focusing on network security, ethical hacking, incident response, and forensics.',
    eligibility: '10+2 or Diploma in engineering'
  },
  {
    id: 'crs-008',
    code: 'AI301',
    name: 'Post Graduate Certificate in Applied AI',
    programType: 'Certification',
    duration: '6 Months',
    fees: 85000,
    totalSeats: 40,
    availableSeats: 25,
    status: 'Upcoming',
    description: 'Intensive certification for industry professionals covering Generative AI, LLMs, and Computer Vision.',
    eligibility: 'Working knowledge of Python programming'
  }
];

export const initialEnquiries: Enquiry[] = [
  {
    id: 'enq-101',
    studentName: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    city: 'New Delhi',
    qualification: 'High School (10+2 Science)',
    prevInstitution: 'Delhi Public School, R.K. Puram',
    gradYear: '2026',
    grade: '88.4%',
    courseId: 'crs-005',
    courseName: 'B.Tech Computer Science Engineering',
    preferredIntake: 'Fall 2026',
    source: 'Website',
    status: 'Application',
    counsellor: 'Sarah Jenkins',
    nextFollowUp: '2026-09-02',
    createdAt: '2026-08-15',
    notes: 'Keen on Robotics and Artificial Intelligence specialization. Parents attended the open campus tour.',
    activities: [
      { id: 'act-1', type: 'Call', title: 'Initial Telephonic Inquiry', description: 'Discussed B.Tech curriculum and scholarship opportunities.', date: '2026-08-15', author: 'Sarah Jenkins' },
      { id: 'act-2', type: 'Counselling', title: 'In-person Counselling Session', description: 'Showcased CS labs and campus facilities.', date: '2026-08-20', author: 'Sarah Jenkins' },
      { id: 'act-3', type: 'Status Change', title: 'Moved to Application', description: 'Student submitted draft application form.', date: '2026-08-25', author: 'System' }
    ]
  },
  {
    id: 'enq-102',
    studentName: 'Riya Verma',
    email: 'riya.v@example.com',
    phone: '+91 98123 45678',
    city: 'Mumbai',
    qualification: 'Bachelor of Commerce (B.Com)',
    prevInstitution: 'St. Xavier\'s College, Mumbai',
    gradYear: '2025',
    grade: '8.2 CGPA',
    courseId: 'crs-004',
    courseName: 'Master of Business Administration (MBA)',
    preferredIntake: 'Fall 2026',
    source: 'Referral',
    status: 'Counselling',
    counsellor: 'Michael Vance',
    nextFollowUp: '2026-08-31',
    createdAt: '2026-08-18',
    notes: 'Interested in Marketing & Business Analytics dual major. Score in CAT: 89th percentile.',
    activities: [
      { id: 'act-4', type: 'Call', title: 'Referral Call', description: 'Contacted candidate regarding MBA prospectus.', date: '2026-08-18', author: 'Michael Vance' },
      { id: 'act-5', type: 'Note', title: 'CAT Score Verified', description: 'Scorecard verified. Eligible for Merit Scholarship.', date: '2026-08-22', author: 'Michael Vance' }
    ]
  },
  {
    id: 'enq-103',
    studentName: 'Rohan Gupta',
    email: 'rohan.g@example.com',
    phone: '+91 97654 32109',
    city: 'Bengaluru',
    qualification: '10+2 Commerce',
    prevInstitution: 'National Public School, Indiranagar',
    gradYear: '2026',
    grade: '91.0%',
    courseId: 'crs-001',
    courseName: 'Bachelor of Computer Applications (BCA)',
    preferredIntake: 'Fall 2026',
    source: 'Social Media',
    status: 'New',
    counsellor: 'Elena Rostova',
    nextFollowUp: '2026-08-30',
    createdAt: '2026-08-28',
    notes: 'Filled enquiry form through Instagram campaign for BCA degrees.',
    activities: [
      { id: 'act-6', type: 'Status Change', title: 'New Enquiry Recorded', description: 'Enquiry generated via Instagram Ad Campaign.', date: '2026-08-28', author: 'System' }
    ]
  },
  {
    id: 'enq-104',
    studentName: 'Ananya Patel',
    email: 'ananya.p@example.com',
    phone: '+91 99887 76655',
    city: 'Ahmedabad',
    qualification: 'B.Sc Computer Science',
    prevInstitution: 'Gujarat University',
    gradYear: '2025',
    grade: '85.5%',
    courseId: 'crs-003',
    courseName: 'Master of Computer Applications (MCA)',
    preferredIntake: 'Fall 2026',
    source: 'Website',
    status: 'Converted',
    counsellor: 'Sarah Jenkins',
    nextFollowUp: '2026-09-10',
    createdAt: '2026-08-01',
    notes: 'Completed full admission process. Enrolled in MCA program.',
    activities: [
      { id: 'act-7', type: 'Call', title: 'Follow-up Call', description: 'Sent provisional admission letter.', date: '2026-08-10', author: 'Sarah Jenkins' },
      { id: 'act-8', type: 'Status Change', title: 'Enrolled as Student', description: 'Converted to Student record STD-2026-004.', date: '2026-08-26', author: 'Sarah Jenkins' }
    ]
  },
  {
    id: 'enq-105',
    studentName: 'Vikram Singh',
    email: 'vikram.s@example.com',
    phone: '+91 98450 11223',
    city: 'Chandigarh',
    qualification: '10+2 Arts',
    prevInstitution: 'DAV Public School',
    gradYear: '2026',
    grade: '76.4%',
    courseId: 'crs-002',
    courseName: 'Bachelor of Business Administration (BBA)',
    preferredIntake: 'Fall 2026',
    source: 'Walk-in',
    status: 'Contacted',
    counsellor: 'David Miller',
    nextFollowUp: '2026-08-30',
    createdAt: '2026-08-22',
    notes: 'Visited campus along with father. Requested fee brochure.',
    activities: [
      { id: 'act-9', type: 'Call', title: 'Campus Visit Logged', description: 'Provided campus walkthrough and hostel inspection.', date: '2026-08-22', author: 'David Miller' }
    ]
  },
  {
    id: 'enq-106',
    studentName: 'Pooja Hegde',
    email: 'pooja.h@example.com',
    phone: '+91 99112 23344',
    city: 'Hyderabad',
    qualification: 'B.Tech IT',
    prevInstitution: 'JNTU Hyderabad',
    gradYear: '2024',
    grade: '7.8 CGPA',
    courseId: 'crs-006',
    courseName: 'M.Sc Data Science & AI',
    preferredIntake: 'Spring 2027',
    source: 'Advertisement',
    status: 'Counselling',
    counsellor: 'Michael Vance',
    nextFollowUp: '2026-09-01',
    createdAt: '2026-08-12',
    notes: 'Currently working as junior developer. Wants weekend/flexible batch.',
    activities: [
      { id: 'act-10', type: 'Counselling', title: 'Online Counselling', description: 'Explained curriculum and capstone project options.', date: '2026-08-24', author: 'Michael Vance' }
    ]
  },
  {
    id: 'enq-107',
    studentName: 'Kabir Mehta',
    email: 'kabir.m@example.com',
    phone: '+91 97110 99887',
    city: 'Pune',
    qualification: '10+2 PCM',
    prevInstitution: 'Loyola High School, Pune',
    gradYear: '2026',
    grade: '82.0%',
    courseId: 'crs-007',
    courseName: 'Diploma in Cyber Security & Forensic',
    preferredIntake: 'Fall 2026',
    source: 'Website',
    status: 'Closed',
    counsellor: 'Elena Rostova',
    nextFollowUp: '2026-08-15',
    createdAt: '2026-07-20',
    notes: 'Opted for alternative institution closer to home city.',
    activities: [
      { id: 'act-11', type: 'Status Change', title: 'Enquiry Closed', description: 'Reason: Location preference.', date: '2026-08-15', author: 'Elena Rostova' }
    ]
  },
  {
    id: 'enq-108',
    studentName: 'Sneha Deshmukh',
    email: 'sneha.d@example.com',
    phone: '+91 98980 44332',
    city: 'Nagpur',
    qualification: 'BCA',
    prevInstitution: 'Nagpur University',
    gradYear: '2025',
    grade: '84.0%',
    courseId: 'crs-003',
    courseName: 'Master of Computer Applications (MCA)',
    preferredIntake: 'Fall 2026',
    source: 'Social Media',
    status: 'Application',
    counsellor: 'Sarah Jenkins',
    nextFollowUp: '2026-09-03',
    createdAt: '2026-08-14',
    notes: 'Submitted initial document set for verification.',
    activities: [
      { id: 'act-12', type: 'Call', title: 'Doc Check Completed', description: 'Marksheets verified.', date: '2026-08-25', author: 'Sarah Jenkins' }
    ]
  }
];

export const initialStudents: Student[] = [
  {
    id: 'std-001',
    studentIdCode: 'EDU-2026-001',
    enquiryId: 'enq-099',
    name: 'Devansh Kulkarni',
    email: 'devansh.k@student.eduflow.demo',
    phone: '+91 98220 12345',
    city: 'Pune',
    program: 'Master of Business Administration (MBA)',
    admissionDate: '2026-07-15',
    status: 'Active',
    parentName: 'Sanjay Kulkarni',
    parentPhone: '+91 98220 98765',
    parentEmail: 'sanjay.k@example.com',
    totalFee: 480000,
    paidFee: 240000,
    pendingFee: 240000,
    feeStatus: 'Partially Paid',
    currentSemester: 'Semester 1',
    attendance: 94.5,
    academicStatus: 'Good',
    performance: 'Consistent performer, rank #4 in batch.'
  },
  {
    id: 'std-002',
    studentIdCode: 'EDU-2026-002',
    enquiryId: 'enq-098',
    name: 'Ishita Nair',
    email: 'ishita.n@student.eduflow.demo',
    phone: '+91 97440 33445',
    city: 'Kochi',
    program: 'B.Tech Computer Science Engineering',
    admissionDate: '2026-07-20',
    status: 'Active',
    parentName: 'Ramesh Nair',
    parentPhone: '+91 97440 88990',
    parentEmail: 'ramesh.n@example.com',
    totalFee: 560000,
    paidFee: 560000,
    pendingFee: 0,
    feeStatus: 'Paid',
    currentSemester: 'Semester 1',
    attendance: 88.0,
    academicStatus: 'Good',
    performance: 'Active participant in Coding Club.'
  },
  {
    id: 'std-003',
    studentIdCode: 'EDU-2026-003',
    enquiryId: 'enq-097',
    name: 'Manish Rawat',
    email: 'manish.r@student.eduflow.demo',
    phone: '+91 98111 22334',
    city: 'Dehradun',
    program: 'Bachelor of Computer Applications (BCA)',
    admissionDate: '2026-08-01',
    status: 'Active',
    parentName: 'Harish Rawat',
    parentPhone: '+91 98111 66778',
    parentEmail: 'harish.r@example.com',
    totalFee: 240000,
    paidFee: 120000,
    pendingFee: 120000,
    feeStatus: 'Partially Paid',
    currentSemester: 'Semester 1',
    attendance: 68.2,
    academicStatus: 'Needs Attention',
    performance: 'Low attendance in Data Structures lectures.'
  },
  {
    id: 'std-004',
    studentIdCode: 'EDU-2026-004',
    enquiryId: 'enq-104',
    name: 'Ananya Patel',
    email: 'ananya.p@student.eduflow.demo',
    phone: '+91 99887 76655',
    city: 'Ahmedabad',
    program: 'Master of Computer Applications (MCA)',
    admissionDate: '2026-08-26',
    status: 'Active',
    parentName: 'Bharat Patel',
    parentPhone: '+91 99887 11223',
    parentEmail: 'bharat.p@example.com',
    totalFee: 320000,
    paidFee: 160000,
    pendingFee: 160000,
    feeStatus: 'Partially Paid',
    currentSemester: 'Semester 1',
    attendance: 96.0,
    academicStatus: 'Good',
    performance: 'Top scorer in entrance assessment.'
  },
  {
    id: 'std-005',
    studentIdCode: 'EDU-2025-089',
    enquiryId: 'enq-045',
    name: 'Siddharth Rao',
    email: 'siddharth.r@student.eduflow.demo',
    phone: '+91 98777 55443',
    city: 'Hyderabad',
    program: 'Bachelor of Business Administration (BBA)',
    admissionDate: '2025-08-10',
    status: 'Active',
    parentName: 'Venkatesh Rao',
    parentPhone: '+91 98777 11009',
    parentEmail: 'venkat.r@example.com',
    totalFee: 220000,
    paidFee: 220000,
    pendingFee: 0,
    feeStatus: 'Paid',
    currentSemester: 'Semester 3',
    attendance: 91.2,
    academicStatus: 'Good',
    performance: 'Elected Vice President of Management Society.'
  },
  {
    id: 'std-006',
    studentIdCode: 'EDU-2026-005',
    enquiryId: 'enq-095',
    name: 'Kavya Pillai',
    email: 'kavya.p@student.eduflow.demo',
    phone: '+91 96555 44332',
    city: 'Chennai',
    program: 'M.Sc Data Science & AI',
    admissionDate: '2026-08-05',
    status: 'On Hold',
    parentName: 'Gopalan Pillai',
    parentPhone: '+91 96555 99887',
    parentEmail: 'gopalan.p@example.com',
    totalFee: 380000,
    paidFee: 50000,
    pendingFee: 330000,
    feeStatus: 'Overdue',
    currentSemester: 'Semester 1',
    attendance: 52.0,
    academicStatus: 'At Risk',
    performance: 'Medical leave request pending approval.'
  }
];

export const initialApplications: Application[] = [
  {
    id: 'app-501',
    appNumber: 'APP-2026-8801',
    studentName: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    program: 'B.Tech Computer Science Engineering',
    applicationDate: '2026-08-25',
    stage: 'Document Review',
    status: 'Under Review',
    counsellor: 'Sarah Jenkins',
    documentStatus: 'Submitted',
    academicSummary: '10+2 Science (88.4%), JEE Score: 92 Percentile',
    notes: 'Documents submitted. Pending Dean clearance for merit scholarship.'
  },
  {
    id: 'app-502',
    appNumber: 'APP-2026-8802',
    studentName: 'Riya Verma',
    email: 'riya.v@example.com',
    phone: '+91 98123 45678',
    program: 'Master of Business Administration (MBA)',
    applicationDate: '2026-08-27',
    stage: 'Application',
    status: 'Submitted',
    counsellor: 'Michael Vance',
    documentStatus: 'Submitted',
    academicSummary: 'B.Com (8.2 CGPA), CAT: 89th percentile',
    notes: 'Personal interview scheduled for Sept 1.'
  },
  {
    id: 'app-503',
    appNumber: 'APP-2026-8803',
    studentName: 'Sneha Deshmukh',
    email: 'sneha.d@example.com',
    phone: '+91 98980 44332',
    program: 'Master of Computer Applications (MCA)',
    applicationDate: '2026-08-24',
    stage: 'Approved',
    status: 'Approved',
    counsellor: 'Sarah Jenkins',
    documentStatus: 'Verified',
    academicSummary: 'BCA (84.0%), CET Score Verified',
    notes: 'Offer letter issued. Awaiting fee deposit.'
  },
  {
    id: 'app-504',
    appNumber: 'APP-2026-8804',
    studentName: 'Pooja Hegde',
    email: 'pooja.h@example.com',
    phone: '+91 99112 23344',
    program: 'M.Sc Data Science & AI',
    applicationDate: '2026-08-26',
    stage: 'Counselling',
    status: 'Draft',
    counsellor: 'Michael Vance',
    documentStatus: 'Pending',
    academicSummary: 'B.Tech IT (7.8 CGPA)',
    notes: 'Awaiting graduation degree certificate.'
  },
  {
    id: 'app-505',
    appNumber: 'APP-2026-8805',
    studentName: 'Ananya Patel',
    email: 'ananya.p@example.com',
    phone: '+91 99887 76655',
    program: 'Master of Computer Applications (MCA)',
    applicationDate: '2026-08-12',
    stage: 'Enrolled',
    status: 'Enrolled',
    counsellor: 'Sarah Jenkins',
    documentStatus: 'Verified',
    academicSummary: 'B.Sc CS (85.5%)',
    notes: 'Completed enrollment process and seat allotment.'
  }
];

export const initialCounsellingSessions: CounsellingSession[] = [
  {
    id: 'cns-301',
    studentName: 'Riya Verma',
    email: 'riya.v@example.com',
    phone: '+91 98123 45678',
    counsellor: 'Michael Vance',
    date: '2026-08-28',
    time: '14:30',
    mode: 'In Person',
    outcome: 'Application Planned',
    nextAction: 'Submit official transcripts before Sept 1',
    notes: 'Candidate was very receptive. Clarified doubts regarding hostel & placement packages.'
  },
  {
    id: 'cns-302',
    studentName: 'Vikram Singh',
    email: 'vikram.s@example.com',
    phone: '+91 98450 11223',
    counsellor: 'David Miller',
    date: '2026-08-29',
    time: '11:00',
    mode: 'Phone',
    outcome: 'Needs Follow-Up',
    nextAction: 'Call father on Monday regarding installment options',
    notes: 'Interested in BBA program, requested 3-installment payment breakdown.'
  },
  {
    id: 'cns-303',
    studentName: 'Pooja Hegde',
    email: 'pooja.h@example.com',
    phone: '+91 99112 23344',
    counsellor: 'Michael Vance',
    date: '2026-08-31',
    time: '16:00',
    mode: 'Online',
    outcome: 'Interested',
    nextAction: 'Send syllabus breakdown for Data Science & AI',
    notes: 'Online Google Meet scheduled to review weekend batch schedule.'
  }
];

export const initialFollowUps: FollowUp[] = [
  {
    id: 'flw-201',
    studentName: 'Riya Verma',
    counsellor: 'Michael Vance',
    date: '2026-08-31',
    purpose: 'Collect verified CAT scorecard & transcripts',
    status: 'Upcoming',
    priority: 'High'
  },
  {
    id: 'flw-202',
    studentName: 'Rohan Gupta',
    counsellor: 'Elena Rostova',
    date: '2026-08-30',
    purpose: 'First contact call post Instagram campaign enquiry',
    status: 'Upcoming',
    priority: 'Medium'
  },
  {
    id: 'flw-203',
    studentName: 'Vikram Singh',
    counsellor: 'David Miller',
    date: '2026-08-27',
    purpose: 'Send fee installment schedule PDF via email',
    status: 'Overdue',
    priority: 'High'
  },
  {
    id: 'flw-204',
    studentName: 'Aarav Sharma',
    counsellor: 'Sarah Jenkins',
    date: '2026-08-25',
    purpose: 'Confirm hostel reservation preference',
    status: 'Completed',
    priority: 'Low'
  }
];

export const initialCampaigns: Campaign[] = [
  {
    id: 'cmp-401',
    name: 'MBA Admission Drive 2026',
    targetAudience: 'Final Year Undergraduates & Working Professionals',
    startDate: '2026-07-01',
    endDate: '2026-09-15',
    status: 'Active',
    enquiriesGenerated: 142,
    budget: 150000,
    conversions: 28
  },
  {
    id: 'cmp-402',
    name: 'Engineering Open Day Campaign',
    targetAudience: '10+2 PCM Students (Class of 2026)',
    startDate: '2026-08-01',
    endDate: '2026-08-31',
    status: 'Active',
    enquiriesGenerated: 210,
    budget: 95000,
    conversions: 45
  },
  {
    id: 'cmp-403',
    name: 'Early Bird Scholarship Drive',
    targetAudience: 'Meritorious High-Scorers in Science & Commerce',
    startDate: '2026-06-15',
    endDate: '2026-07-31',
    status: 'Completed',
    enquiriesGenerated: 320,
    budget: 200000,
    conversions: 84
  },
  {
    id: 'cmp-404',
    name: 'Cyber Security Certification Sprint',
    targetAudience: 'IT Professionals & CS Graduates',
    startDate: '2026-09-01',
    endDate: '2026-10-15',
    status: 'Draft',
    enquiriesGenerated: 0,
    budget: 60000,
    conversions: 0
  }
];

export const initialFeeRecords: FeeRecord[] = [
  {
    id: 'fee-601',
    studentId: 'std-001',
    studentName: 'Devansh Kulkarni',
    program: 'Master of Business Administration (MBA)',
    totalFee: 480000,
    paid: 240000,
    pending: 240000,
    status: 'Partially Paid',
    dueDate: '2026-10-15',
    paymentHistory: [
      { id: 'pay-1', amount: 240000, date: '2026-07-15', method: 'Bank Transfer', reference: 'TXN99281726' }
    ]
  },
  {
    id: 'fee-602',
    studentId: 'std-002',
    studentName: 'Ishita Nair',
    program: 'B.Tech Computer Science Engineering',
    totalFee: 560000,
    paid: 560000,
    pending: 0,
    status: 'Paid',
    dueDate: '2026-07-20',
    paymentHistory: [
      { id: 'pay-2', amount: 280000, date: '2026-07-20', method: 'UPI / Online', reference: 'UPI77123982' },
      { id: 'pay-3', amount: 280000, date: '2026-08-10', method: 'Cheque', reference: 'CHQ445102' }
    ]
  },
  {
    id: 'fee-603',
    studentId: 'std-003',
    studentName: 'Manish Rawat',
    program: 'Bachelor of Computer Applications (BCA)',
    totalFee: 240000,
    paid: 120000,
    pending: 120000,
    status: 'Partially Paid',
    dueDate: '2026-09-15',
    paymentHistory: [
      { id: 'pay-4', amount: 120000, date: '2026-08-01', method: 'Debit Card', reference: 'DC99102834' }
    ]
  },
  {
    id: 'fee-604',
    studentId: 'std-004',
    studentName: 'Ananya Patel',
    program: 'Master of Computer Applications (MCA)',
    totalFee: 320000,
    paid: 160000,
    pending: 160000,
    status: 'Partially Paid',
    dueDate: '2026-09-30',
    paymentHistory: [
      { id: 'pay-5', amount: 160000, date: '2026-08-26', method: 'Net Banking', reference: 'NB8819203' }
    ]
  },
  {
    id: 'fee-605',
    studentId: 'std-006',
    studentName: 'Kavya Pillai',
    program: 'M.Sc Data Science & AI',
    totalFee: 380000,
    paid: 50000,
    pending: 330000,
    status: 'Overdue',
    dueDate: '2026-08-20',
    paymentHistory: [
      { id: 'pay-6', amount: 50000, date: '2026-08-05', method: 'Cash', reference: 'REC100293' }
    ]
  }
];

export const initialSupportTickets: SupportTicket[] = [
  {
    id: 'spt-701',
    ticketId: 'TCK-2026-041',
    studentName: 'Manish Rawat',
    subject: 'Request for LMS Portal Login Reset',
    category: 'Academic',
    status: 'Open',
    priority: 'Medium',
    date: '2026-08-28',
    description: 'Unable to sign in to student LMS portal for viewing recorded Data Structures lectures.'
  },
  {
    id: 'spt-702',
    ticketId: 'TCK-2026-039',
    studentName: 'Devansh Kulkarni',
    subject: 'Fee Receipt Receipt Confirmation Copy',
    category: 'Fee',
    status: 'Resolved',
    priority: 'Low',
    date: '2026-08-22',
    description: 'Requesting formal GST invoice receipt for Semester 1 tuition fee payment.',
    resolution: 'Official stamped digital fee receipt issued to student registered email address.'
  },
  {
    id: 'spt-703',
    ticketId: 'TCK-2026-035',
    studentName: 'Kavya Pillai',
    subject: 'Medical Leave Sanction Application',
    category: 'Academic',
    status: 'In Progress',
    priority: 'High',
    date: '2026-08-18',
    description: 'Submitted doctor certificate for 2-week leave due to viral fever.'
  }
];

export const initialFeedbackItems: FeedbackItem[] = [
  {
    id: 'fbk-801',
    studentName: 'Aarav Sharma',
    feedbackType: 'Counselling',
    rating: 5,
    comment: 'Sarah Jenkins provided exceptional guidance regarding course structure and lab facilities!',
    date: '2026-08-21',
    status: 'Published'
  },
  {
    id: 'fbk-802',
    studentName: 'Ananya Patel',
    feedbackType: 'Admission',
    rating: 5,
    comment: 'Smooth document verification and hassle-free onboarding experience.',
    date: '2026-08-27',
    status: 'Published'
  },
  {
    id: 'fbk-803',
    studentName: 'Devansh Kulkarni',
    feedbackType: 'Course',
    rating: 4,
    comment: 'Great professors and practical business case studies in MBA modules.',
    date: '2026-08-15',
    status: 'Published'
  },
  {
    id: 'fbk-804',
    studentName: 'Manish Rawat',
    feedbackType: 'Support',
    rating: 3,
    comment: 'LMS reset support took slightly longer than expected.',
    date: '2026-08-29',
    status: 'Reviewed'
  }
];

export const initialCommunicationLogs: CommunicationLog[] = [
  {
    id: 'com-901',
    studentName: 'Aarav Sharma',
    type: 'Email',
    messagePreview: 'Provisional Admission Offer Letter for B.Tech CS Program',
    date: '2026-08-25 10:30 AM',
    status: 'Delivered'
  },
  {
    id: 'com-902',
    studentName: 'Riya Verma',
    type: 'WhatsApp',
    messagePreview: 'Reminder: MBA Personal Interview scheduled on Sept 1 at 2:00 PM',
    date: '2026-08-28 04:15 PM',
    status: 'Sent'
  },
  {
    id: 'com-903',
    studentName: 'Vikram Singh',
    type: 'SMS',
    messagePreview: 'Your enquiry for BBA at EduFlow CRM has been received. Counsellor David will call shortly.',
    date: '2026-08-22 11:00 AM',
    status: 'Delivered'
  }
];

export const initialNotifications: Notification[] = [
  {
    id: 'ntf-1',
    title: 'New Enquiry Generated',
    message: 'Rohan Gupta submitted an enquiry for BCA via Instagram.',
    time: '10 mins ago',
    read: false,
    type: 'info'
  },
  {
    id: 'ntf-2',
    title: 'Application Approved',
    message: 'Sneha Deshmukh\'s MCA application document review passed.',
    time: '2 hours ago',
    read: false,
    type: 'success'
  },
  {
    id: 'ntf-3',
    title: 'Overdue Follow-Up',
    message: 'Follow-up with Vikram Singh is pending since yesterday.',
    time: '1 day ago',
    read: true,
    type: 'warning'
  }
];
