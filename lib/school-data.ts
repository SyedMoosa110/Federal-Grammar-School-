// Official School Verified Data & State Store for Federal Grammar Public High School (FGPHS)

export interface Notice {
  id: string;
  title: string;
  category: 'Urgent' | 'Academic' | 'Holiday' | 'Event' | 'Examination';
  date: string;
  content: string;
  priority: 'High' | 'Normal';
  isActive: boolean;
}

export interface Inquiry {
  id: string;
  studentName: string;
  fatherName: string;
  contactNumber: string;
  email?: string;
  selectedClass: string;
  previousSchool?: string;
  gender: 'Male' | 'Female';
  dob?: string;
  address?: string;
  message?: string;
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Rejected';
  submittedAt: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Academics' | 'Labs' | 'Sports' | 'Events';
  imageUrl: string;
  date: string;
  description: string;
}

export interface StudentResult {
  rollNo: string;
  studentName: string;
  fatherName: string;
  classGrade: string;
  group: 'Science' | 'Computer Science' | 'General';
  session: string;
  exam: string;
  subjects: {
    name: string;
    totalMarks: number;
    obtainedMarks: number;
    grade: string;
  }[];
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  overallGrade: string;
  status: 'PASS' | 'PROMOTED' | 'SUPPLEMENTARY';
  issueDate: string;
}

export const INITIAL_SCHOOL_PROFILE = {
  name: 'Federal Grammar Public High School',
  shortName: 'FGPHS',
  motto: 'Knowledge is Power • Ilm Roshni Hai',
  establishedYear: '1988',
  affiliation: 'Board of Secondary Education Karachi (BSEK)',
  affiliationCode: 'BSEK-KHI-GUL-4192',
  category: 'High School (Pre-Primary to Class X)',
  address: 'A-17, Block 16, Federal B Area, Gulberg Town, Karachi, 75950, Pakistan',
  town: 'Gulberg Town',
  area: 'Federal B Area, Block 16',
  postalCode: '75950',
  city: 'Karachi',
  country: 'Pakistan',
  mobile: '+92 321 3760773',
  landline: '021-36336037',
  whatsapp: '+923213760773',
  email: 'info@fgphs.edu.pk',
  admissionsEmail: 'admissions@fgphs.edu.pk',
  operatingHours: 'Mon - Sat: 7:30 AM - 1:30 PM (Office until 2:30 PM) | Opens Monday at 7:00 AM',
  principal: 'Prof. Muhammad Tariq Khan (M.Sc, M.Ed)',
  vicePrincipal: 'Mrs. Nighat Sultana',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.356499806465!2d67.0652778!3d24.9297222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4217111111%3A0x1111111111111111!2sBlock%2016%20Federal%20B%20Area%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075950!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  // CMS Editable Website Content
  heroBadge: 'Karachi Board (BSEK) Recognized • Est. 1988',
  heroHeading: 'Federal Grammar',
  heroHeadingHighlight: 'Public High School',
  heroSubheading: 'Empowering Karachi’s youth with academic rigor, high moral discipline, and cutting-edge computer science and STEM education in the heart of Gulberg Town, Federal B Area.',
  heroCampusCaption: 'A-17 Block 16, Federal B Area',
  heroCampusSubcaption: 'Purpose-built secondary campus with advanced science & computer labs',
  heroBadge1Title: 'BSEK Registered',
  heroBadge1Sub: 'Secondary Education Board',
  heroBadge2Title: 'IBA Hour of Code',
  heroBadge2Sub: 'STEM Initiative Participant',
  // Stats
  stat1Value: '1988',
  stat1Label: 'Established Heritage',
  stat1Sub: '38+ Years of Service',
  stat2Value: '100%',
  stat2Label: 'Karachi Board Success',
  stat2Sub: 'Matric Science & CS',
  stat3Value: '1:20',
  stat3Label: 'Teacher-Student Ratio',
  stat3Sub: 'Individual Attention',
  stat4Value: 'STEM',
  stat4Label: 'Coding & Science Labs',
  stat4Sub: 'IBA Karachi Participant',
  // Principal Message
  principalHeading: 'Nurturing Intellect, Morals & Modern Skills in Karachi',
  principalMsg1: 'Welcome to Federal Grammar Public High School. Since 1988, our campus in Block 16 Federal B Area has stood as a beacon of academic excellence in Gulberg Town. Our vision is grounded in providing a holistic learning environment that marries rigorous Karachi Secondary Board academics with contemporary technical skills and strong Islamic ethics.',
  principalMsg2: 'Whether through our well-equipped chemistry and physics laboratories, or our computer labs celebrated in initiatives like the IBA Karachi Hour of Code, we ensure every student leaves our portals ready for higher education and technological leadership.',
  admissionsOpen: true,
  admissionsSession: 'Academic Session 2026-2027'
};

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 'not-01',
    title: 'Admissions Open for Academic Session 2026-2027 (Pre-Primary to Class X)',
    category: 'Urgent',
    date: 'October 12, 2026',
    content: 'Registration and online admission inquiry forms are now being accepted for Pre-School, Primary, Middle, and Matriculation (Science & Computer Science). Limited seats available. Parents are advised to submit forms before the deadline.',
    priority: 'High',
    isActive: true
  },
  {
    id: 'not-02',
    title: 'BSEK Karachi Matric Examination Form Submission for Class IX & X',
    category: 'Examination',
    date: 'October 08, 2026',
    content: 'Students of Class IX & X are reminded to submit their verified B-Form copies, passport-sized photographs (blue background), and signed examination slips to the accounts office by Monday.',
    priority: 'High',
    isActive: true
  },
  {
    id: 'not-03',
    title: 'Annual Science Fair & IBA Hour of Code Robotics Exhibition',
    category: 'Academic',
    date: 'September 28, 2026',
    content: 'Building upon our distinguished participation in the IBA Karachi Hour of Code initiative, FGPHS will hold its Annual Inter-Class Coding & Robotics Exhibition on November 15. Interested students can register with the CS Department.',
    priority: 'Normal',
    isActive: true
  },
  {
    id: 'not-04',
    title: 'Mid-Term Result Card Distribution & Parent-Teacher Meeting (PTM)',
    category: 'Academic',
    date: 'September 20, 2026',
    content: 'PTM for Pre-Primary to Grade 8 will be held on Saturday from 8:30 AM to 12:30 PM. Parents can also check their child’s online result card via our new Online Result Verification Portal.',
    priority: 'Normal',
    isActive: true
  },
  {
    id: 'not-05',
    title: 'Winter Uniform Transition Advisory',
    category: 'Holiday',
    date: 'September 15, 2026',
    content: 'All parents are notified that navy blue blazers/sweaters will become mandatory starting the second week of November. Details available at the campus admin desk.',
    priority: 'Normal',
    isActive: true
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-101',
    studentName: 'Syed Hamza Ali',
    fatherName: 'Syed Zeeshan Ali',
    contactNumber: '+92 300 2489110',
    email: 'zeeshan.ali@gmail.com',
    selectedClass: 'Class IX (Computer Science)',
    previousSchool: 'Habib Public School Karachi',
    gender: 'Male',
    address: 'Block 14, Federal B Area, Karachi',
    message: 'Seeking admission in Class IX Computer Science stream. Would like to inquire about laboratory facilities and Karachi Board registration.',
    status: 'Pending',
    submittedAt: '2026-10-13 10:45 AM',
    notes: 'Called parent; requested previous Class VIII marksheet.'
  },
  {
    id: 'inq-102',
    studentName: 'Ayesha Fatima',
    fatherName: 'Muhammad Salman Khan',
    contactNumber: '+92 321 8294431',
    email: 'salman.khan@yahoo.com',
    selectedClass: 'Class VI',
    previousSchool: 'St. Jude High School',
    gender: 'Female',
    address: 'Block 16, Federal B Area, Gulberg Town',
    message: 'Need information about school bus routes and girl student safety arrangements.',
    status: 'Contacted',
    submittedAt: '2026-10-12 02:15 PM',
    notes: 'Shared fee structure brochure and transport routes.'
  },
  {
    id: 'inq-103',
    studentName: 'Bilal Ahmed',
    fatherName: 'Ahmed Raza',
    contactNumber: '+92 333 9104523',
    email: 'ahmed.raza@outlook.com',
    selectedClass: 'Class I (Primary)',
    previousSchool: 'Kids Garden Montessori',
    gender: 'Male',
    address: 'Block 15, Dastagir, F.B Area',
    message: 'Admission test date and interview schedule requested.',
    status: 'Enrolled',
    submittedAt: '2026-10-10 11:20 AM',
    notes: 'Test passed with 88%. Fee voucher paid.'
  },
  {
    id: 'inq-104',
    studentName: 'Zainab Noor',
    fatherName: 'Noor-ul-Haq',
    contactNumber: '+92 345 6789123',
    email: 'noor.haq@hotmail.com',
    selectedClass: 'Class X (Science - Bio)',
    previousSchool: 'Army Public School Karachi',
    gender: 'Female',
    address: 'Gulberg Block 12, Karachi',
    message: 'Transfer case from Peshawar due to father official relocation.',
    status: 'Pending',
    submittedAt: '2026-10-14 09:10 AM',
    notes: 'Awaiting board migration certificate.'
  },
  {
    id: 'inq-105',
    studentName: 'Muhammad Rayyan',
    fatherName: 'Farhan Siddiqui',
    contactNumber: '+92 312 4567890',
    email: 'farhan.siddiqui@gmail.com',
    selectedClass: 'Montessori / Nursery',
    gender: 'Male',
    address: 'Federal B Area Block 16, Karachi',
    message: 'Very close to our residence in Block 16. Looking forward to early childhood program.',
    status: 'Contacted',
    submittedAt: '2026-10-09 04:30 PM',
    notes: 'Campus visit scheduled for Friday.'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Main Campus Building - Daylight Front Elevation',
    category: 'Campus',
    imageUrl: '/images/campus-building-day.jpg',
    date: 'Official Campus Facility',
    description: 'The authentic 4-story front elevation of Federal Grammar Public High School (Est. 1989) located at A-17, Block 16, Federal B Area, Gulberg Town Karachi.'
  },
  {
    id: 'gal-02',
    title: 'Admissions Gate & Educational Society Signage',
    category: 'Campus',
    imageUrl: '/images/campus-entrance.jpg',
    date: 'Verified Location Photo',
    description: 'Daylight view of the main student entrance displaying registration under Qudsia Educational Society and recognition by Board of Secondary Education Karachi (BSEK).'
  },
  {
    id: 'gal-03',
    title: 'Campus Gate & Uniformed Security Checkpoint',
    category: 'Campus',
    imageUrl: '/images/campus-security.jpg',
    date: 'Campus Administration',
    description: 'Secure entrance gate with dedicated campus security personnel and curriculum banners for Montessori to Matric (Science, Computer Studies & Biology).'
  },
  {
    id: 'gal-04',
    title: 'Evening & Night View - Illuminated Campus Building',
    category: 'Campus',
    imageUrl: '/images/campus-night.jpg',
    date: 'Evening Illumination',
    description: 'Night exterior of Federal Grammar Public High School showcasing illuminated institutional signboards, lit classrooms, and modern exterior lighting.'
  },
  {
    id: 'gal-05',
    title: 'Full Multi-Story Street View Across Boulevard',
    category: 'Campus',
    imageUrl: '/images/campus-street.jpg',
    date: 'Block 16 Gulberg Town',
    description: 'Comprehensive street perspective from across the main road median showing the entire multi-tiered academic facility in Federal B Area.'
  },
  {
    id: 'gal-06',
    title: 'Official Institutional Crest & Golden Monogram',
    category: 'Campus',
    imageUrl: '/images/fgphs-crest.png',
    date: 'Established 1989',
    description: 'The registered crest of Federal Grammar Public High School Karachi featuring the open book of knowledge, radiant rising sun, and traditional academic laurel wreath.'
  }
];

export const SAMPLE_STUDENT_RESULTS: Record<string, StudentResult> = {
  'FG-2026-101': {
    rollNo: 'FG-2026-101',
    studentName: 'Syed Hamza Ali',
    fatherName: 'Syed Zeeshan Ali',
    classGrade: 'Class X',
    group: 'Computer Science',
    session: '2025-2026',
    exam: 'Annual Examination (BSEK Pattern)',
    subjects: [
      { name: 'English Compulsory', totalMarks: 100, obtainedMarks: 86, grade: 'A-1' },
      { name: 'Urdu Normal', totalMarks: 100, obtainedMarks: 84, grade: 'A-1' },
      { name: 'Mathematics', totalMarks: 100, obtainedMarks: 94, grade: 'A-1' },
      { name: 'Physics (Theory + Practical)', totalMarks: 100, obtainedMarks: 88, grade: 'A-1' },
      { name: 'Computer Science (Theory + Lab)', totalMarks: 100, obtainedMarks: 96, grade: 'A-1' },
      { name: 'Islamiat Compulsory', totalMarks: 50, obtainedMarks: 47, grade: 'A-1' },
      { name: 'Pakistan Studies', totalMarks: 50, obtainedMarks: 45, grade: 'A-1' }
    ],
    totalMarks: 600,
    obtainedMarks: 539,
    percentage: 89.8,
    overallGrade: 'A-1 (Outstanding)',
    status: 'PASS',
    issueDate: 'October 2026'
  },
  'FG-2026-102': {
    rollNo: 'FG-2026-102',
    studentName: 'Ayesha Fatima',
    fatherName: 'Muhammad Salman Khan',
    classGrade: 'Class IX',
    group: 'Science',
    session: '2025-2026',
    exam: 'Mid-Term Assessment 2026',
    subjects: [
      { name: 'English Compulsory', totalMarks: 100, obtainedMarks: 82, grade: 'A-1' },
      { name: 'Urdu Normal', totalMarks: 100, obtainedMarks: 78, grade: 'A' },
      { name: 'Mathematics', totalMarks: 100, obtainedMarks: 89, grade: 'A-1' },
      { name: 'Biology (Theory + Practical)', totalMarks: 100, obtainedMarks: 85, grade: 'A-1' },
      { name: 'Chemistry (Theory + Practical)', totalMarks: 100, obtainedMarks: 83, grade: 'A' },
      { name: 'Islamiat Compulsory', totalMarks: 50, obtainedMarks: 44, grade: 'A-1' }
    ],
    totalMarks: 550,
    obtainedMarks: 461,
    percentage: 83.8,
    overallGrade: 'A (Excellent)',
    status: 'PASS',
    issueDate: 'October 2026'
  },
  'FG-2026-103': {
    rollNo: 'FG-2026-103',
    studentName: 'Mustafa Tariq',
    fatherName: 'Tariq Mehmood',
    classGrade: 'Class VIII',
    group: 'General',
    session: '2025-2026',
    exam: 'Mid-Term Assessment 2026',
    subjects: [
      { name: 'English', totalMarks: 100, obtainedMarks: 75, grade: 'A' },
      { name: 'Urdu', totalMarks: 100, obtainedMarks: 80, grade: 'A' },
      { name: 'General Science', totalMarks: 100, obtainedMarks: 78, grade: 'A' },
      { name: 'Mathematics', totalMarks: 100, obtainedMarks: 85, grade: 'A-1' },
      { name: 'Social Studies', totalMarks: 100, obtainedMarks: 74, grade: 'B' },
      { name: 'Computer Education', totalMarks: 100, obtainedMarks: 91, grade: 'A-1' },
      { name: 'Islamiat', totalMarks: 50, obtainedMarks: 46, grade: 'A-1' }
    ],
    totalMarks: 650,
    obtainedMarks: 529,
    percentage: 81.4,
    overallGrade: 'A (Excellent)',
    status: 'PASS',
    issueDate: 'October 2026'
  }
};

export const FEE_STRUCTURE_DATA = [
  {
    grade: 'Montessori / Nursery / Prep',
    section: 'Pre-Primary',
    admissionFee: 8000,
    monthlyTuition: 4500,
    annualResourceFee: 3500,
    labCharges: 0,
    features: ['Activity based learning', 'Phonics & audio-visual teaching', 'Safe & air-ventilated classrooms', 'Personal care & hygiene guidance']
  },
  {
    grade: 'Class I to Class V',
    section: 'Primary Section',
    admissionFee: 10000,
    monthlyTuition: 5200,
    annualResourceFee: 4000,
    labCharges: 500,
    features: ['Sindh Board + Oxford English syllabus', 'Early computer literacy in computer lab', 'Weekly arts, physical sports & moral training', 'Quranic studies & basic Arabic phonetics']
  },
  {
    grade: 'Class VI to Class VIII',
    section: 'Middle Section',
    admissionFee: 12000,
    monthlyTuition: 6000,
    annualResourceFee: 4500,
    labCharges: 800,
    features: ['Preparation for BSEK Secondary transition', 'Practical science lab demonstrations', 'Hands-on coding, typing & computer applications', 'Inter-school speech & debate competitions']
  },
  {
    grade: 'Class IX & X (Secondary)',
    section: 'Matriculation (BSEK Affiliated)',
    admissionFee: 15000,
    monthlyTuition: 7200,
    annualResourceFee: 5000,
    labCharges: 1200,
    features: ['BSEK Karachi registered center & preparation', 'Science (Biology/Chemistry/Physics) & Computer Science options', 'Weekly past paper test sessions & mock exams', 'Career counseling & higher secondary guidance']
  }
];

export const CLIENT_PROPOSAL_DATA = {
  projectTitle: 'Federal Grammar Public High School (FGPHS) Official Website & Admin Portal',
  clientName: 'Federal Grammar Public High School Management',
  preparedBy: 'CodexPlus Development Team',
  date: 'October 2026',
  status: 'Pending Client Approval / In Review',
  estimatedLaunch: 'Q4 2026',
  coreDeliverables: [
    { title: 'Verified School Profile Integration', desc: 'Displaying A-17 Block 16 Federal B Area Gulberg Town Karachi address, verified phone numbers (+92 321 3760773, 021-36336037), and Karachi Board credentials.' },
    { title: 'High-Performance Next.js Frontend', desc: 'App Router architecture with mobile-responsive UI, lightning-fast SSR, and Google Search SEO optimization.' },
    { title: 'Restricted Admin Control Panel', desc: 'Secure management portal to review admission inquiries, publish urgent notice board bulletins, and manage campus gallery.' },
    { title: 'Interactive Fee & Inquiry Engine', desc: 'Online application submission with instant notification, printable fee voucher simulator, and parent assistance.' },
    { title: 'Online Student Result Portal', desc: 'Roll-number based marksheet verification with Karachi Board standard grading and instant printable student card.' },
    { title: 'Security & Integrity', desc: 'Protected endpoints, encrypted sessions, strict data validation, and automated offline/online database synchronization.' }
  ]
};
