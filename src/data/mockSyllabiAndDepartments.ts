export interface SyllabusModule {
  id: string;
  moduleCode: string;
  moduleTitle: string;
  credits: number;
  semester: string;
  description: string;
  instructor: string;
  learningOutcomes: string[];
}

export interface Department {
  id: string;
  code: string;
  name: string;
  headOfDepartment: string;
  email: string;
  building: string;
  facultyCount: number;
}

export const departmentRegistry: Department[] = [
  { id: 'dept-1', code: 'CS', name: 'Department of Computer Science & Engineering', headOfDepartment: 'Dr. Aris Thorne', email: 'cs.head@eduflow.demo', building: 'Turing Hall, 3rd Floor', facultyCount: 42 },
  { id: 'dept-2', code: 'MGMT', name: 'School of Management & Business Studies', headOfDepartment: 'Dr. Eleanor Vance', email: 'mgmt.head@eduflow.demo', building: 'Drucker Building, 2nd Floor', facultyCount: 35 },
  { id: 'dept-3', code: 'DS', name: 'Center for Artificial Intelligence & Data Science', headOfDepartment: 'Dr. Marcus Vance', email: 'ai.head@eduflow.demo', building: 'Ada Lovelace Tech Center', facultyCount: 28 },
  { id: 'dept-4', code: 'CYB', name: 'Department of Cyber Security & Digital Forensics', headOfDepartment: 'Dr. Sophia Reyes', email: 'cyber.head@eduflow.demo', building: 'Mitnick Security Wing', facultyCount: 19 }
];

export const courseSyllabiDatabase: Record<string, SyllabusModule[]> = {
  BCA101: [
    {
      id: 'bca-s1-m1',
      moduleCode: 'BCA-101',
      moduleTitle: 'Module 1.1: Advanced Topic 6',
      credits: 4,
      semester: 'Semester 1',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 1',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s1-m2',
      moduleCode: 'BCA-102',
      moduleTitle: 'Module 1.2: Advanced Topic 7',
      credits: 4,
      semester: 'Semester 1',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 2',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s1-m3',
      moduleCode: 'BCA-103',
      moduleTitle: 'Module 1.3: Advanced Topic 8',
      credits: 4,
      semester: 'Semester 1',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 3',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s1-m4',
      moduleCode: 'BCA-104',
      moduleTitle: 'Module 1.4: Advanced Topic 9',
      credits: 4,
      semester: 'Semester 1',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 4',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s1-m5',
      moduleCode: 'BCA-105',
      moduleTitle: 'Module 1.5: Advanced Topic 10',
      credits: 4,
      semester: 'Semester 1',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 5',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s2-m1',
      moduleCode: 'BCA-201',
      moduleTitle: 'Module 2.1: Advanced Topic 11',
      credits: 4,
      semester: 'Semester 2',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 1',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s2-m2',
      moduleCode: 'BCA-202',
      moduleTitle: 'Module 2.2: Advanced Topic 12',
      credits: 4,
      semester: 'Semester 2',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 2',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s2-m3',
      moduleCode: 'BCA-203',
      moduleTitle: 'Module 2.3: Advanced Topic 13',
      credits: 4,
      semester: 'Semester 2',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 3',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s2-m4',
      moduleCode: 'BCA-204',
      moduleTitle: 'Module 2.4: Advanced Topic 14',
      credits: 4,
      semester: 'Semester 2',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 4',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s2-m5',
      moduleCode: 'BCA-205',
      moduleTitle: 'Module 2.5: Advanced Topic 15',
      credits: 4,
      semester: 'Semester 2',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 5',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s3-m1',
      moduleCode: 'BCA-301',
      moduleTitle: 'Module 3.1: Advanced Topic 16',
      credits: 4,
      semester: 'Semester 3',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 1',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s3-m2',
      moduleCode: 'BCA-302',
      moduleTitle: 'Module 3.2: Advanced Topic 17',
      credits: 4,
      semester: 'Semester 3',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 2',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s3-m3',
      moduleCode: 'BCA-303',
      moduleTitle: 'Module 3.3: Advanced Topic 18',
      credits: 4,
      semester: 'Semester 3',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 3',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s3-m4',
      moduleCode: 'BCA-304',
      moduleTitle: 'Module 3.4: Advanced Topic 19',
      credits: 4,
      semester: 'Semester 3',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 4',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s3-m5',
      moduleCode: 'BCA-305',
      moduleTitle: 'Module 3.5: Advanced Topic 20',
      credits: 4,
      semester: 'Semester 3',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 5',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s4-m1',
      moduleCode: 'BCA-401',
      moduleTitle: 'Module 4.1: Advanced Topic 21',
      credits: 4,
      semester: 'Semester 4',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 1',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s4-m2',
      moduleCode: 'BCA-402',
      moduleTitle: 'Module 4.2: Advanced Topic 22',
      credits: 4,
      semester: 'Semester 4',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 2',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s4-m3',
      moduleCode: 'BCA-403',
      moduleTitle: 'Module 4.3: Advanced Topic 23',
      credits: 4,
      semester: 'Semester 4',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 3',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s4-m4',
      moduleCode: 'BCA-404',
      moduleTitle: 'Module 4.4: Advanced Topic 24',
      credits: 4,
      semester: 'Semester 4',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 4',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s4-m5',
      moduleCode: 'BCA-405',
      moduleTitle: 'Module 4.5: Advanced Topic 25',
      credits: 4,
      semester: 'Semester 4',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 5',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s5-m1',
      moduleCode: 'BCA-501',
      moduleTitle: 'Module 5.1: Advanced Topic 26',
      credits: 4,
      semester: 'Semester 5',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 1',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s5-m2',
      moduleCode: 'BCA-502',
      moduleTitle: 'Module 5.2: Advanced Topic 27',
      credits: 4,
      semester: 'Semester 5',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 2',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s5-m3',
      moduleCode: 'BCA-503',
      moduleTitle: 'Module 5.3: Advanced Topic 28',
      credits: 4,
      semester: 'Semester 5',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 3',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s5-m4',
      moduleCode: 'BCA-504',
      moduleTitle: 'Module 5.4: Advanced Topic 29',
      credits: 4,
      semester: 'Semester 5',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 4',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s5-m5',
      moduleCode: 'BCA-505',
      moduleTitle: 'Module 5.5: Advanced Topic 30',
      credits: 4,
      semester: 'Semester 5',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 5',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s6-m1',
      moduleCode: 'BCA-601',
      moduleTitle: 'Module 6.1: Advanced Topic 31',
      credits: 4,
      semester: 'Semester 6',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 1',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s6-m2',
      moduleCode: 'BCA-602',
      moduleTitle: 'Module 6.2: Advanced Topic 32',
      credits: 4,
      semester: 'Semester 6',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 2',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s6-m3',
      moduleCode: 'BCA-603',
      moduleTitle: 'Module 6.3: Advanced Topic 33',
      credits: 4,
      semester: 'Semester 6',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 3',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s6-m4',
      moduleCode: 'BCA-604',
      moduleTitle: 'Module 6.4: Advanced Topic 34',
      credits: 4,
      semester: 'Semester 6',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 4',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
    {
      id: 'bca-s6-m5',
      moduleCode: 'BCA-605',
      moduleTitle: 'Module 6.5: Advanced Topic 35',
      credits: 4,
      semester: 'Semester 6',
      description: 'Comprehensive study of computer application principles covering algorithms and systems.',
      instructor: 'Prof. Faculty Member 5',
      learningOutcomes: ['Master theoretical principles', 'Implement practical lab projects', 'Analyze performance algorithms']
    },
  ]
};
