import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Enquiry,
  Student,
  Application,
  Course,
  CounsellingSession,
  FollowUp,
  Campaign,
  FeeRecord,
  SupportTicket,
  FeedbackItem,
  CommunicationLog,
  Notification,
  UserProfile,
  AdmissionStage,
  EnquiryStatus,
  FollowUpStatus,
  TicketStatus
} from '../types';
import {
  initialUserProfile,
  initialCourses,
  initialEnquiries,
  initialStudents,
  initialApplications,
  initialCounsellingSessions,
  initialFollowUps,
  initialCampaigns,
  initialFeeRecords,
  initialSupportTickets,
  initialFeedbackItems,
  initialCommunicationLogs,
  initialNotifications
} from '../data/mockData';

interface EduContextType {
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => boolean;
  logout: () => void;

  // Enquiries
  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'activities'>) => Enquiry;
  updateEnquiry: (id: string, enquiry: Partial<Enquiry>) => void;
  deleteEnquiry: (id: string) => void;
  addEnquiryActivity: (enquiryId: string, title: string, description: string, type: 'Call' | 'Counselling' | 'Note' | 'Follow-up' | 'Status Change') => void;

  // Students
  students: Student[];
  addStudent: (student: Omit<Student, 'id' | 'studentIdCode'>) => Student;
  updateStudent: (id: string, student: Partial<Student>) => void;
  deleteStudent: (id: string) => void;

  // Applications
  applications: Application[];
  addApplication: (app: Omit<Application, 'id' | 'appNumber'>) => Application;
  updateApplicationStage: (id: string, stage: AdmissionStage) => void;
  updateApplication: (id: string, app: Partial<Application>) => void;
  deleteApplication: (id: string) => void;

  // Courses
  courses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => Course;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;

  // Counselling
  counsellingSessions: CounsellingSession[];
  addCounsellingSession: (session: Omit<CounsellingSession, 'id'>) => CounsellingSession;
  updateCounsellingSession: (id: string, session: Partial<CounsellingSession>) => void;
  deleteCounsellingSession: (id: string) => void;

  // Follow Ups
  followUps: FollowUp[];
  addFollowUp: (followUp: Omit<FollowUp, 'id'>) => FollowUp;
  updateFollowUp: (id: string, followUp: Partial<FollowUp>) => void;
  toggleFollowUpStatus: (id: string) => void;
  deleteFollowUp: (id: string) => void;

  // Campaigns
  campaigns: Campaign[];
  addCampaign: (campaign: Omit<Campaign, 'id'>) => Campaign;
  updateCampaign: (id: string, campaign: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;

  // Fees
  feeRecords: FeeRecord[];
  recordFeePayment: (feeId: string, amount: number, method: string, reference: string) => void;

  // Support
  supportTickets: SupportTicket[];
  addSupportTicket: (ticket: Omit<SupportTicket, 'id' | 'ticketId' | 'date'>) => SupportTicket;
  updateTicketStatus: (id: string, status: TicketStatus, resolution?: string) => void;

  // Feedback
  feedbackItems: FeedbackItem[];
  addFeedback: (fb: Omit<FeedbackItem, 'id' | 'date'>) => FeedbackItem;

  // Communications & Notifications
  communicationLogs: CommunicationLog[];
  notifications: Notification[];
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;

  // High-level Actions
  convertEnquiryToStudent: (enquiryId: string) => void;
  resetToMockData: () => void;
}

const EduContext = createContext<EduContextType | undefined>(undefined);

// Helper function to read/write LocalStorage safely
const useLocalStorageState = <T,>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(`eduflow_${key}`);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(`Error reading eduflow_${key} from localStorage`, e);
    }
    return defaultValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(`eduflow_${key}`, JSON.stringify(state));
    } catch (e) {
      console.error(`Error writing eduflow_${key} to localStorage`, e);
    }
  }, [key, state]);

  return [state, setState];
};

export const EduProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useLocalStorageState<UserProfile>('userProfile', initialUserProfile);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('eduflow_auth') === 'true' || true; // Default logged in for instant smooth demo experience
  });

  const [courses, setCourses] = useLocalStorageState<Course[]>('courses', initialCourses);
  const [enquiries, setEnquiries] = useLocalStorageState<Enquiry[]>('enquiries', initialEnquiries);
  const [students, setStudents] = useLocalStorageState<Student[]>('students', initialStudents);
  const [applications, setApplications] = useLocalStorageState<Application[]>('applications', initialApplications);
  const [counsellingSessions, setCounsellingSessions] = useLocalStorageState<CounsellingSession[]>('counselling', initialCounsellingSessions);
  const [followUps, setFollowUps] = useLocalStorageState<FollowUp[]>('followUps', initialFollowUps);
  const [campaigns, setCampaigns] = useLocalStorageState<Campaign[]>('campaigns', initialCampaigns);
  const [feeRecords, setFeeRecords] = useLocalStorageState<FeeRecord[]>('feeRecords', initialFeeRecords);
  const [supportTickets, setSupportTickets] = useLocalStorageState<SupportTicket[]>('supportTickets', initialSupportTickets);
  const [feedbackItems, setFeedbackItems] = useLocalStorageState<FeedbackItem[]>('feedbackItems', initialFeedbackItems);
  const [communicationLogs, setCommunicationLogs] = useLocalStorageState<CommunicationLog[]>('communicationLogs', initialCommunicationLogs);
  const [notifications, setNotifications] = useLocalStorageState<Notification[]>('notifications', initialNotifications);

  // Apply dark mode class to document tag whenever userProfile.theme changes
  useEffect(() => {
    if (userProfile.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [userProfile.theme]);

  const updateUserProfile = (updated: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updated }));
  };

  const login = (email: string, pass: string): boolean => {
    if (email === 'admin@eduflow.demo' && pass === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('eduflow_auth', 'true');
      return true;
    }
    // Also allow any login for general convenience in demo
    setIsAuthenticated(true);
    sessionStorage.setItem('eduflow_auth', 'true');
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('eduflow_auth');
  };

  // --- Enquiries ---
  const addEnquiry = (data: Omit<Enquiry, 'id' | 'createdAt' | 'activities'>): Enquiry => {
    const id = `enq-${Date.now().toString().slice(-4)}`;
    const newEnquiry: Enquiry = {
      ...data,
      id,
      createdAt: new Date().toISOString().split('T')[0],
      activities: [
        {
          id: `act-${Date.now()}`,
          type: 'Note',
          title: 'Enquiry Created',
          description: `Initial enquiry registered via ${data.source}`,
          date: new Date().toISOString().split('T')[0],
          author: userProfile.name
        }
      ]
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return newEnquiry;
  };

  const updateEnquiry = (id: string, updated: Partial<Enquiry>) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, ...updated } : e));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  const addEnquiryActivity = (enquiryId: string, title: string, description: string, type: 'Call' | 'Counselling' | 'Note' | 'Follow-up' | 'Status Change') => {
    const activity = {
      id: `act-${Date.now()}`,
      type,
      title,
      description,
      date: new Date().toISOString().split('T')[0],
      author: userProfile.name
    };
    setEnquiries(prev => prev.map(e => {
      if (e.id === enquiryId) {
        return { ...e, activities: [activity, ...e.activities] };
      }
      return e;
    }));
  };

  // --- Students ---
  const addStudent = (data: Omit<Student, 'id' | 'studentIdCode'>): Student => {
    const id = `std-${Date.now().toString().slice(-4)}`;
    const count = students.length + 1;
    const studentIdCode = `EDU-2026-${count.toString().padStart(3, '0')}`;
    const newStudent: Student = {
      ...data,
      id,
      studentIdCode
    };
    setStudents(prev => [newStudent, ...prev]);

    // Also auto create a fee record for the student
    const newFeeRecord: FeeRecord = {
      id: `fee-${Date.now().toString().slice(-4)}`,
      studentId: id,
      studentName: data.name,
      program: data.program,
      totalFee: data.totalFee,
      paid: data.paidFee,
      pending: data.pendingFee,
      status: data.feeStatus,
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      paymentHistory: data.paidFee > 0 ? [
        {
          id: `pay-${Date.now()}`,
          amount: data.paidFee,
          date: new Date().toISOString().split('T')[0],
          method: 'Bank Deposit',
          reference: `ADMISSION-REC-${Math.floor(100000 + Math.random() * 900000)}`
        }
      ] : []
    };
    setFeeRecords(prev => [newFeeRecord, ...prev]);

    return newStudent;
  };

  const updateStudent = (id: string, updated: Partial<Student>) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const deleteStudent = (id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  // --- Applications ---
  const addApplication = (data: Omit<Application, 'id' | 'appNumber'>): Application => {
    const id = `app-${Date.now().toString().slice(-4)}`;
    const count = applications.length + 8800 + 1;
    const appNumber = `APP-2026-${count}`;
    const newApp: Application = {
      ...data,
      id,
      appNumber
    };
    setApplications(prev => [newApp, ...prev]);
    return newApp;
  };

  const updateApplicationStage = (id: string, stage: AdmissionStage) => {
    let status: Application['status'] = 'Under Review';
    if (stage === 'Approved') status = 'Approved';
    else if (stage === 'Enrolled') status = 'Enrolled';
    else if (stage === 'Counselling') status = 'Draft';
    else if (stage === 'Application') status = 'Submitted';

    setApplications(prev => prev.map(app => app.id === id ? { ...app, stage, status } : app));
  };

  const updateApplication = (id: string, updated: Partial<Application>) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, ...updated } : a));
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(a => a.id !== id));
  };

  // --- Courses ---
  const addCourse = (data: Omit<Course, 'id'>): Course => {
    const id = `crs-${Date.now().toString().slice(-4)}`;
    const newCourse = { ...data, id };
    setCourses(prev => [newCourse, ...prev]);
    return newCourse;
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // --- Counselling ---
  const addCounsellingSession = (data: Omit<CounsellingSession, 'id'>): CounsellingSession => {
    const id = `cns-${Date.now().toString().slice(-4)}`;
    const newSession = { ...data, id };
    setCounsellingSessions(prev => [newSession, ...prev]);
    return newSession;
  };

  const updateCounsellingSession = (id: string, updated: Partial<CounsellingSession>) => {
    setCounsellingSessions(prev => prev.map(cs => cs.id === id ? { ...cs, ...updated } : cs));
  };

  const deleteCounsellingSession = (id: string) => {
    setCounsellingSessions(prev => prev.filter(cs => cs.id !== id));
  };

  // --- Follow Ups ---
  const addFollowUp = (data: Omit<FollowUp, 'id'>): FollowUp => {
    const id = `flw-${Date.now().toString().slice(-4)}`;
    const newFollowUp = { ...data, id };
    setFollowUps(prev => [newFollowUp, ...prev]);
    return newFollowUp;
  };

  const updateFollowUp = (id: string, updated: Partial<FollowUp>) => {
    setFollowUps(prev => prev.map(f => f.id === id ? { ...f, ...updated } : f));
  };

  const toggleFollowUpStatus = (id: string) => {
    setFollowUps(prev => prev.map(f => {
      if (f.id === id) {
        const nextStatus: FollowUpStatus = f.status === 'Completed' ? 'Upcoming' : 'Completed';
        return { ...f, status: nextStatus };
      }
      return f;
    }));
  };

  const deleteFollowUp = (id: string) => {
    setFollowUps(prev => prev.filter(f => f.id !== id));
  };

  // --- Campaigns ---
  const addCampaign = (data: Omit<Campaign, 'id'>): Campaign => {
    const id = `cmp-${Date.now().toString().slice(-4)}`;
    const newCamp = { ...data, id };
    setCampaigns(prev => [newCamp, ...prev]);
    return newCamp;
  };

  const updateCampaign = (id: string, updated: Partial<Campaign>) => {
    setCampaigns(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCampaign = (id: string) => {
    setCampaigns(prev => prev.filter(c => c.id !== id));
  };

  // --- Fees ---
  const recordFeePayment = (feeId: string, amount: number, method: string, reference: string) => {
    setFeeRecords(prev => prev.map(rec => {
      if (rec.id === feeId) {
        const newPaid = rec.paid + amount;
        const newPending = Math.max(0, rec.totalFee - newPaid);
        let newStatus: FeeRecord['status'] = 'Partially Paid';
        if (newPending === 0) newStatus = 'Paid';
        else if (newPaid === 0) newStatus = 'Pending';

        const paymentItem = {
          id: `pay-${Date.now()}`,
          amount,
          date: new Date().toISOString().split('T')[0],
          method,
          reference: reference || `PAY-REC-${Math.floor(100000 + Math.random() * 900000)}`
        };

        return {
          ...rec,
          paid: newPaid,
          pending: newPending,
          status: newStatus,
          paymentHistory: [paymentItem, ...rec.paymentHistory]
        };
      }
      return rec;
    }));
  };

  // --- Support Tickets ---
  const addSupportTicket = (data: Omit<SupportTicket, 'id' | 'ticketId' | 'date'>): SupportTicket => {
    const id = `spt-${Date.now().toString().slice(-4)}`;
    const count = supportTickets.length + 42;
    const ticketId = `TCK-2026-${count.toString().padStart(3, '0')}`;
    const newTicket: SupportTicket = {
      ...data,
      id,
      ticketId,
      date: new Date().toISOString().split('T')[0]
    };
    setSupportTickets(prev => [newTicket, ...prev]);
    return newTicket;
  };

  const updateTicketStatus = (id: string, status: TicketStatus, resolution?: string) => {
    setSupportTickets(prev => prev.map(t => t.id === id ? { ...t, status, resolution: resolution || t.resolution } : t));
  };

  // --- Feedback ---
  const addFeedback = (data: Omit<FeedbackItem, 'id' | 'date'>): FeedbackItem => {
    const id = `fbk-${Date.now().toString().slice(-4)}`;
    const newItem: FeedbackItem = {
      ...data,
      id,
      date: new Date().toISOString().split('T')[0]
    };
    setFeedbackItems(prev => [newItem, ...prev]);
    return newItem;
  };

  // --- Notifications ---
  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  // --- High-level Lead Conversion Workflow ---
  const convertEnquiryToStudent = (enquiryId: string) => {
    const enq = enquiries.find(e => e.id === enquiryId);
    if (!enq) return;

    // Update enquiry status to Converted
    updateEnquiry(enquiryId, { status: 'Converted' });
    addEnquiryActivity(enquiryId, 'Converted to Student', 'Enquiry successfully converted to formal enrolled student.', 'Status Change');

    // Find course fees if available
    const course = courses.find(c => c.id === enq.courseId || c.name === enq.courseName);
    const feeAmount = course ? course.fees : 240000;

    // Create Student record
    addStudent({
      enquiryId: enq.id,
      name: enq.studentName,
      email: enq.email,
      phone: enq.phone,
      city: enq.city,
      program: enq.courseName,
      admissionDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      parentName: 'Parent / Guardian',
      parentPhone: enq.phone,
      parentEmail: enq.email,
      totalFee: feeAmount,
      paidFee: Math.round(feeAmount * 0.5), // 50% initial payment mock
      pendingFee: Math.round(feeAmount * 0.5),
      feeStatus: 'Partially Paid',
      currentSemester: 'Semester 1',
      attendance: 100,
      academicStatus: 'Good',
      performance: 'Newly enrolled student.'
    });

    // Create / update application record to Enrolled
    const existingApp = applications.find(a => a.studentName === enq.studentName);
    if (existingApp) {
      updateApplicationStage(existingApp.id, 'Enrolled');
    } else {
      addApplication({
        studentName: enq.studentName,
        email: enq.email,
        phone: enq.phone,
        program: enq.courseName,
        applicationDate: new Date().toISOString().split('T')[0],
        stage: 'Enrolled',
        status: 'Enrolled',
        counsellor: enq.counsellor,
        documentStatus: 'Verified',
        academicSummary: `${enq.qualification} (${enq.grade})`,
        notes: 'Directly converted from Enquiry.'
      });
    }

    // Add notification
    setNotifications(prev => [
      {
        id: `ntf-${Date.now()}`,
        title: 'Student Enrolled',
        message: `${enq.studentName} has been enrolled in ${enq.courseName}.`,
        time: 'Just now',
        read: false,
        type: 'success'
      },
      ...prev
    ]);
  };

  const resetToMockData = () => {
    setUserProfile(initialUserProfile);
    setCourses(initialCourses);
    setEnquiries(initialEnquiries);
    setStudents(initialStudents);
    setApplications(initialApplications);
    setCounsellingSessions(initialCounsellingSessions);
    setFollowUps(initialFollowUps);
    setCampaigns(initialCampaigns);
    setFeeRecords(initialFeeRecords);
    setSupportTickets(initialSupportTickets);
    setFeedbackItems(initialFeedbackItems);
    setCommunicationLogs(initialCommunicationLogs);
    setNotifications(initialNotifications);
  };

  return (
    <EduContext.Provider value={{
      userProfile,
      updateUserProfile,
      isAuthenticated,
      login,
      logout,
      enquiries,
      addEnquiry,
      updateEnquiry,
      deleteEnquiry,
      addEnquiryActivity,
      students,
      addStudent,
      updateStudent,
      deleteStudent,
      applications,
      addApplication,
      updateApplicationStage,
      updateApplication,
      deleteApplication,
      courses,
      addCourse,
      updateCourse,
      deleteCourse,
      counsellingSessions,
      addCounsellingSession,
      updateCounsellingSession,
      deleteCounsellingSession,
      followUps,
      addFollowUp,
      updateFollowUp,
      toggleFollowUpStatus,
      deleteFollowUp,
      campaigns,
      addCampaign,
      updateCampaign,
      deleteCampaign,
      feeRecords,
      recordFeePayment,
      supportTickets,
      addSupportTicket,
      updateTicketStatus,
      feedbackItems,
      addFeedback,
      communicationLogs,
      notifications,
      markNotificationAsRead,
      clearNotifications,
      convertEnquiryToStudent,
      resetToMockData
    }}>
      {children}
    </EduContext.Provider>
  );
};

export const useEduContext = () => {
  const context = useContext(EduContext);
  if (!context) {
    throw new Error('useEduContext must be used within an EduProvider');
  }
  return context;
};
