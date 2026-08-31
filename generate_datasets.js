import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, 'src', 'data');
const utilsDir = path.join(__dirname, 'src', 'utils');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(utilsDir)) fs.mkdirSync(utilsDir, { recursive: true });

const names = ['Aarav', 'Riya', 'Rohan', 'Ananya', 'Vikram', 'Pooja', 'Kabir', 'Sneha', 'Devansh', 'Ishita', 'Manish', 'Siddharth', 'Kavya', 'Aditya', 'Neha', 'Pranav', 'Shreya', 'Yash', 'Tanvi', 'Rahul', 'Varun', 'Meera', 'Tarun', 'Anika', 'Karan', 'Deepika', 'Arjun', 'Simran', 'Gautam', 'Kriti'];
const surnames = ['Sharma', 'Verma', 'Gupta', 'Patel', 'Singh', 'Hegde', 'Mehta', 'Deshmukh', 'Kulkarni', 'Nair', 'Rawat', 'Rao', 'Pillai', 'Joshi', 'Chawla', 'Kapoor', 'Malhotra', 'Bhat', 'Reddy', 'Saxena', 'Iyer', 'Menon', 'Choudhury', 'Dutta', 'Banerjee', 'Nambiar', 'Ghosh', 'Subramanian', 'Pandey', 'Trivedi'];
const cities = ['New Delhi', 'Mumbai', 'Bengaluru', 'Ahmedabad', 'Chandigarh', 'Hyderabad', 'Pune', 'Nagpur', 'Kochi', 'Dehradun', 'Kolkata', 'Chennai', 'Jaipur', 'Lucknow', 'Indore', 'Bhopal', 'Surat', 'Vadodara', 'Coimbatore', 'Visakhapatnam'];
const courses = [
  { id: 'crs-001', code: 'BCA101', name: 'Bachelor of Computer Applications (BCA)' },
  { id: 'crs-002', code: 'BBA102', name: 'Bachelor of Business Administration (BBA)' },
  { id: 'crs-003', code: 'MCA201', name: 'Master of Computer Applications (MCA)' },
  { id: 'crs-004', code: 'MBA202', name: 'Master of Business Administration (MBA)' },
  { id: 'crs-005', code: 'BTECH103', name: 'B.Tech Computer Science Engineering' },
  { id: 'crs-006', code: 'DS203', name: 'M.Sc Data Science & AI' },
  { id: 'crs-007', code: 'CYB104', name: 'Diploma in Cyber Security & Forensic' },
  { id: 'crs-008', code: 'AI301', name: 'Post Graduate Certificate in Applied AI' }
];
const sources = ['Website', 'Social Media', 'Referral', 'Walk-in', 'Advertisement'];
const statuses = ['New', 'Contacted', 'Counselling', 'Application', 'Converted', 'Closed'];
const counsellors = ['Sarah Jenkins', 'Michael Vance', 'Elena Rostova', 'David Miller'];

// 1. Generate Extended Enquiries Data (750 items)
let enquiriesCode = `import { Enquiry } from '../types';\n\nexport const extendedEnquiriesList: Enquiry[] = [\n`;
for (let i = 1; i <= 750; i++) {
  const name = names[i % names.length] + ' ' + surnames[(i * 7) % surnames.length];
  const email = `${name.toLowerCase().replace(/\s+/g, '.')}${i}@example.com`;
  const phone = `+91 98${String(10000000 + i * 4731).slice(0, 8)}`;
  const city = cities[i % cities.length];
  const course = courses[i % courses.length];
  const source = sources[i % sources.length];
  const status = statuses[i % statuses.length];
  const counsellor = counsellors[i % counsellors.length];
  const day = (i % 28) + 1;
  const dayStr = day < 10 ? `0${day}` : `${day}`;

  enquiriesCode += `  {\n`;
  enquiriesCode += `    id: 'enq-gen-${i}',\n`;
  enquiriesCode += `    studentName: '${name}',\n`;
  enquiriesCode += `    email: '${email}',\n`;
  enquiriesCode += `    phone: '${phone}',\n`;
  enquiriesCode += `    city: '${city}',\n`;
  enquiriesCode += `    qualification: 'Graduation / 10+2 Grade ${(70 + (i % 25)).toFixed(1)}%',\n`;
  enquiriesCode += `    prevInstitution: 'Public Academy School, ${city}',\n`;
  enquiriesCode += `    gradYear: '${2024 + (i % 3)}',\n`;
  enquiriesCode += `    grade: '${(72 + (i % 26)).toFixed(1)}%',\n`;
  enquiriesCode += `    courseId: '${course.id}',\n`;
  enquiriesCode += `    courseName: '${course.name}',\n`;
  enquiriesCode += `    preferredIntake: 'Fall 2026',\n`;
  enquiriesCode += `    source: '${source}',\n`;
  enquiriesCode += `    status: '${status}',\n`;
  enquiriesCode += `    counsellor: '${counsellor}',\n`;
  enquiriesCode += `    nextFollowUp: '2026-09-${dayStr}',\n`;
  enquiriesCode += `    createdAt: '2026-08-${dayStr}',\n`;
  enquiriesCode += `    notes: 'Candidate expressed high interest in campus hostels and merit scholarship evaluation for ${course.name}.',\n`;
  enquiriesCode += `    activities: [\n`;
  enquiriesCode += `      {\n`;
  enquiriesCode += `        id: 'act-${i}-a',\n`;
  enquiriesCode += `        type: 'Call',\n`;
  enquiriesCode += `        title: 'Initial Telephonic Discussion',\n`;
  enquiriesCode += `        description: 'Provided overview of curriculum and fee structure.',\n`;
  enquiriesCode += `        date: '2026-08-10',\n`;
  enquiriesCode += `        author: '${counsellor}'\n`;
  enquiriesCode += `      },\n`;
  enquiriesCode += `      {\n`;
  enquiriesCode += `        id: 'act-${i}-b',\n`;
  enquiriesCode += `        type: 'Note',\n`;
  enquiriesCode += `        title: 'Prospect Status Updated',\n`;
  enquiriesCode += `        description: 'Moved enquiry lifecycle stage to ${status}.',\n`;
  enquiriesCode += `        date: '2026-08-20',\n`;
  enquiriesCode += `        author: '${counsellor}'\n`;
  enquiriesCode += `      }\n`;
  enquiriesCode += `    ]\n`;
  enquiriesCode += `  }${i === 750 ? '' : ','}\n`;
}
enquiriesCode += `];\n`;
fs.writeFileSync(path.join(dataDir, 'mockExtendedEnquiries.ts'), enquiriesCode);

// 2. Generate Extended Students Data (600 items)
let studentsCode = `import { Student } from '../types';\n\nexport const extendedStudentsList: Student[] = [\n`;
for (let i = 1; i <= 600; i++) {
  const name = names[(i * 3) % names.length] + ' ' + surnames[(i * 5) % surnames.length];
  const email = `${name.toLowerCase().replace(/\s+/g, '.')}@student.eduflow.demo`;
  const phone = `+91 97${String(10000000 + i * 5923).slice(0, 8)}`;
  const city = cities[(i * 2) % cities.length];
  const course = courses[i % courses.length];
  const totalFee = (course.id === 'crs-004' || course.id === 'crs-005') ? 480000 : 240000;
  const paidFee = Math.round(totalFee * ((i % 3 === 0) ? 1.0 : (i % 2 === 0) ? 0.5 : 0.25));
  const pendingFee = Math.max(0, totalFee - paidFee);
  const feeStatus = pendingFee === 0 ? 'Paid' : paidFee === 0 ? 'Pending' : (i % 7 === 0) ? 'Overdue' : 'Partially Paid';
  const acadStatus = (i % 9 === 0) ? 'At Risk' : (i % 5 === 0) ? 'Needs Attention' : 'Good';
  const attendance = (70 + (i % 30) + (acadStatus === 'At Risk' ? -25 : 0));

  studentsCode += `  {\n`;
  studentsCode += `    id: 'std-ext-${i}',\n`;
  studentsCode += `    studentIdCode: 'EDU-2026-${String(i).padStart(3, '0')}',\n`;
  studentsCode += `    enquiryId: 'enq-gen-${i}',\n`;
  studentsCode += `    name: '${name}',\n`;
  studentsCode += `    email: '${email}',\n`;
  studentsCode += `    phone: '${phone}',\n`;
  studentsCode += `    city: '${city}',\n`;
  studentsCode += `    program: '${course.name}',\n`;
  studentsCode += `    admissionDate: '2026-07-${(i % 25) + 1}',\n`;
  studentsCode += `    status: '${i % 10 === 0 ? 'On Hold' : 'Active'}',\n`;
  studentsCode += `    parentName: '${surnames[i % surnames.length]} Parent',\n`;
  studentsCode += `    parentPhone: '+91 98${String(10000000 + i * 1111).slice(0, 8)}',\n`;
  studentsCode += `    parentEmail: 'parent.${i}@example.com',\n`;
  studentsCode += `    totalFee: ${totalFee},\n`;
  studentsCode += `    paidFee: ${paidFee},\n`;
  studentsCode += `    pendingFee: ${pendingFee},\n`;
  studentsCode += `    feeStatus: '${feeStatus}',\n`;
  studentsCode += `    currentSemester: 'Semester ${(i % 4) + 1}',\n`;
  studentsCode += `    attendance: ${Math.min(100, Math.max(40, attendance))},\n`;
  studentsCode += `    academicStatus: '${acadStatus}',\n`;
  studentsCode += `    performance: 'Academic tracking note for ${name}: Current GPA ${(3.0 + (i % 15) * 0.06).toFixed(2)}'\n`;
  studentsCode += `  }${i === 600 ? '' : ','}\n`;
}
studentsCode += `];\n`;
fs.writeFileSync(path.join(dataDir, 'mockExtendedStudents.ts'), studentsCode);

// 3. Generate Full Syllabi Data across all courses (200+ modules)
let courseSyllabiCode = `export interface CourseModuleDetail {\n  id: string;\n  courseCode: string;\n  moduleCode: string;\n  title: string;\n  credits: number;\n  semester: number;\n  description: string;\n  topicsCovered: string[];\n  textbooks: string[];\n}\n\nexport const fullCourseSyllabusRegistry: CourseModuleDetail[] = [\n`;
let modCounter = 1;
for (const crs of courses) {
  for (let sem = 1; sem <= 6; sem++) {
    for (let m = 1; m <= 4; m++) {
      courseSyllabiCode += `  {\n`;
      courseSyllabiCode += `    id: 'mod-${modCounter}',\n`;
      courseSyllabiCode += `    courseCode: '${crs.code}',\n`;
      courseSyllabiCode += `    moduleCode: '${crs.code}-S${sem}M${m}',\n`;
      courseSyllabiCode += `    title: '${crs.name} - Specialization Module ${sem}.${m}',\n`;
      courseSyllabiCode += `    credits: 4,\n`;
      courseSyllabiCode += `    semester: ${sem},\n`;
      courseSyllabiCode += `    description: 'Comprehensive academic module providing core theoretical background and practical hands-on laboratory experience for ${crs.name}.',\n`;
      courseSyllabiCode += `    topicsCovered: ['Fundamentals and Theory', 'Advanced Case Studies', 'Practical System Implementation', 'Industry Project Evaluation'],\n`;
      courseSyllabiCode += `    textbooks: ['Standard Academic Textbook Vol ${sem}', 'Advanced Reference Manual ${m}']\n`;
      courseSyllabiCode += `  }${modCounter === (courses.length * 24) ? '' : ','}\n`;
      modCounter++;
    }
  }
}
courseSyllabiCode += `];\n`;
fs.writeFileSync(path.join(dataDir, 'mockCourseSyllabiExtended.ts'), courseSyllabiCode);

// 4. Generate Faculty & Department Profiles (100 faculty members)
let facultyCode = `export interface FacultyMember {\n  id: string;\n  name: string;\n  designation: string;\n  department: string;\n  email: string;\n  phone: string;\n  qualification: string;\n  specialization: string;\n  officeHours: string;\n}\n\nexport const facultyRegistryList: FacultyMember[] = [\n`;
for (let i = 1; i <= 100; i++) {
  const fName = `Dr. ${names[i % names.length]} ${surnames[(i * 2) % surnames.length]}`;
  const dept = i % 4 === 0 ? 'Computer Science & Engineering' : i % 3 === 0 ? 'Business Administration' : i % 2 === 0 ? 'Data Science & AI' : 'Cyber Security';
  facultyCode += `  {\n`;
  facultyCode += `    id: 'fac-${i}',\n`;
  facultyCode += `    name: '${fName}',\n`;
  facultyCode += `    designation: '${i % 5 === 0 ? 'Professor & HOD' : i % 2 === 0 ? 'Associate Professor' : 'Assistant Professor'}',\n`;
  facultyCode += `    department: '${dept}',\n`;
  facultyCode += `    email: '${fName.toLowerCase().replace(/[^a-z]/g, '.')}@eduflow.demo',\n`;
  facultyCode += `    phone: '+91 98${String(20000000 + i * 3333).slice(0, 8)}',\n`;
  facultyCode += `    qualification: 'Ph.D. in ${dept} (IIT/IISc)',\n`;
  facultyCode += `    specialization: 'Advanced Research in ${dept}',\n`;
  facultyCode += `    officeHours: 'Mon/Wed 2:00 PM - 4:00 PM'\n`;
  facultyCode += `  }${i === 100 ? '' : ','}\n`;
}
facultyCode += `];\n`;
fs.writeFileSync(path.join(dataDir, 'mockFacultyRegistry.ts'), facultyCode);

// 5. Generate Audit Trail & Activity Logs (300 logs)
let auditCode = `export interface AuditLogEntry {\n  id: string;\n  timestamp: string;\n  user: string;\n  action: string;\n  module: string;\n  details: string;\n  ipAddress: string;\n}\n\nexport const auditTrailLogs: AuditLogEntry[] = [\n`;
for (let i = 1; i <= 300; i++) {
  auditCode += `  {\n`;
  auditCode += `    id: 'audit-${i}',\n`;
  auditCode += `    timestamp: '2026-08-${(i % 28) + 1} 10:${String(i % 60).padStart(2, '0')}:00',\n`;
  auditCode += `    user: 'Sarah Jenkins (Admission Lead)',\n`;
  auditCode += `    action: '${i % 4 === 0 ? 'ENQUIRY_CREATED' : i % 3 === 0 ? 'STAGE_UPDATED' : i % 2 === 0 ? 'FEE_PAYMENT_RECORDED' : 'NOTE_ADDED'}',\n`;
  auditCode += `    module: '${i % 3 === 0 ? 'Enquiries' : i % 2 === 0 ? 'Admissions' : 'Fees'}',\n`;
  auditCode += `    details: 'System operation executed for transaction record #${1000 + i}',\n`;
  auditCode += `    ipAddress: '192.168.1.${(i % 250) + 1}'\n`;
  auditCode += `  }${i === 300 ? '' : ','}\n`;
}
auditCode += `];\n`;
fs.writeFileSync(path.join(dataDir, 'mockAuditLogs.ts'), auditCode);

console.log('Finished updating datasets!');
