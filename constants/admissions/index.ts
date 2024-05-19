import {
  Atom,
  Calendar,
  Camera,
  CheckCheck,
  ClipboardType,
  Cpu,
  Globe,
  ImageUp,
  IndianRupee,
  Palette,
  ShieldCheck,
  ShoppingCart,
  UserCheck,
  UserRoundPlus,
} from "lucide-react";

export const information = [
  {
    id: 0,
    title: "ADMISSION RULES",
    list: [
      "The Principal reserves the right to grant or refuse admission to any student without assigning any reason.",
      "Admission to the college is made provisionally at the sole risk and responsibility of the student and is subject to the subsequent approval of GNDU. If approval to the admission is withheld by the competent authority for the reason that the student has failed to provide the required information or document in time/has hidden some information/given false information/is not eligible to join the class otherwise, the entire responsibility in such a case will lie with the student himself/herself. No claim whatsoever will be admissible in such a case.",
      "Admission to different courses is made as per eligibility conditions of Guru Nanak Dev University.",
      "Admission to various courses will be made strictly on the basis of merit.",
      "No student whose age is above 20 years will be admitted in B. A. (Sem-I).",
      "Candidates whose results are to be declared late can seek admission in the next higher class provisionally subject to the availability of seat and approval of the university.",
    ],
  },
  {
    id: 1,
    title: "DOCUMENTS REQUIRED",
    list: [
      "Original certificates and marks sheets of the lower examination passed.",
      "Attested Xerox copies of these documents along with the completed admission form.",
      "Four passport size photographs, two for the admission form and one for the Identity Card and one extra.",
      "A copy of Aadhar Card.",
      "Student belonging to Scheduled Caste/ Tribe, Backward Class must attach required caste certificate with Income certificate issued by the competent authorities along with application to avail benefit of Non-payment of non-refundable charges as per Punjab Govt. Instructions. In event of non-production of required documents, students belonging to the relevant category will not be eligible for this exemption.",
      "Eligibility certificate from Guru Nanak Dev University for the students who have passed their qualifying examination from Institution other than GNDU, Panjab University, Punjabi University or PSEB.",
      "Admission of students who fail to submit Eligibility Certificate by the required dates shall stand cancelled without any further notice.",
      "Students whose result is declared late should submit the Eligibility Certificate within 15 days of the declaration of the result.",
    ],
  },
  {
    id: 2,
    title: "ADMISSION PROCEDURE",
    list: [
      "Complete all sections of the application form.",
      "Attach four passport size photographs at relevant palaces in the form and Identity card slip.",
      "Attach a certified copy of all academic certificates and any other relevant documents along with residence proof.",
      "Get the application recommended from the HOD/ Incharge before getting the form stamped for eligibility.",
      "Handover the completed form to the concerned representative of the college for the approval of the Principal.",
      "Submit required fee at the fee window and get due receipt for payment.",
    ],
  },
];

export const infoStep = [
  {
    id: 1,
    title: "Visit www.punjabcollegeadmissions.org",
    icon: Globe,
    step: "Click / Select GNDU Admissions to register for affiliated colleges of GNDU Amritsar.",
  },
  {
    id: 2,
    title:
      "Click at NEW STUDENT REGISTATION LINK to register in the student portal.",
    icon: UserRoundPlus,
    step: "Enter previous class detail. Fill in the next four sections Academic details, personal details, correspondence address and permanent address. After that click of TRANSLATE IN PUNJABI for any correction in Punjabi if required.",
  },
  {
    id: 3,
    title: "Upload Details",
    icon: ImageUp,
    step: "Upload photograph, signature and fill mobile number, parent’s mobile number, email ID and generation of password. ",
  },
  {
    id: 4,
    title: "Submit Details",
    icon: CheckCheck,
    step: "Finally tick on declaration check box and submit details to complete the registration.The unique student ID and password will be sent on students registered mobile number and email ID.",
  },
];

export const manualStep = [
  {
    id: 1,
    title: "Application Form",
    icon: ClipboardType,
    step: "Get application form from reception desk in the Admission and Counseling Hall",
  },
  {
    id: 2,
    title: "Photographs",
    icon: Camera,
    step: "Attach 4 passport size photographs at relevant places in the form and Identity card slip.",
  },
  {
    id: 3,
    title: "Academic Certificates",
    icon: ShieldCheck,
    step: "Attach a certified copy of all academic certificates and any other relevant documents along with residence proof.",
  },
  {
    id: 4,
    title: "Recommendation",
    icon: UserCheck,
    step: "Get the application recommended from the HOD / Incharge before getting the form stamped for eligibility.",
  },
  {
    id: 5,
    title: "Sumbit Application",
    icon: CheckCheck,
    step: "Handover the completed form to the concerned representative of the college for the approval of the Principal.",
  },
  {
    id: 6,
    title: "Fees",
    icon: IndianRupee,
    step: "Submit required fee at the fee window and get due receipt for payment.",
  },
];

export const courses = [
  {
    id: 0,
    title: "under graduate courses",
    list: [
      {
        id: 0,
        title: "computer science & it",
        icon: Cpu,
        list: [
          "BCA",
          "B.Sc (IT)",
          "Bachelor of Design (Multimedia)",
          "B.Voc (Software Development)",
          "B.Voc (Printing Technology)",
        ],
      },
      {
        id: 1,
        title: "commerce & economics",
        icon: ShoppingCart,
        list: [
          "B.Com",
          "B.Com. (Hons.)",
          "B.Com. (Financial Services)",
          "BBA",
          "B.Sc.(Eco.)",
        ],
      },
      {
        id: 2,
        title: "science",
        icon: Atom,
        list: [
          "B.Sc. (Biotech)",
          "B.Sc. (Med)",
          "B.Sc. (Non Med)",
          "B.Sc (Computer Sc.)",
          "BPT-Bachelor of Physiotherapy",
        ],
      },
      {
        id: 3,
        title: "arts & social science",
        icon: Palette,
        list: [
          "BA",
          "BA with Music",
          "BA Psychology",
          "BA Fine Arts",
          "BA (Journalism and Mass Communication)",
          "BA (Physical Education and Sports)",
        ],
      },
      {
        id: 4,
        title: "1 year diploma courses",
        icon: Calendar,
        list: [
          "Diploma in Computer Application",
          "Diploma in Computer Animation",
          "Diploma in Computer Maintenance",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "post graduate courses",
    list: [
      {
        id: 0,
        title: "computer science & it",
        icon: Cpu,
        list: [
          "M.Sc (Computer Science)",
          "M.Voc (Web Technology and Multimedia)",
        ],
      },
      {
        id: 1,
        title: "commerce & economics",
        icon: ShoppingCart,
        list: ["M.Com", "Master in Tourism and Management", "MA (Economics)"],
      },
      {
        id: 2,
        title: "science",
        icon: Atom,
        list: ["M.Sc (Biotech)", "M.Sc (Physics)", "M.Sc (Chemistry)"],
      },
    ],
  },
];
