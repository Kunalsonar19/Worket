// Mock certificate database
export interface Certificate {
  certificateNumber: string;
  studentName: string;
  courseName: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  isValid: boolean;
}

export const certificateDatabase: Certificate[] = [
  {
    certificateNumber: "CERT-2025-157",
    studentName: "Chaitali Gokul Chaudhari",
    courseName: "Professional GUI Development in Python",
    startDate: "2025-06-02",
    endDate: "2025-08-22",
    issueDate: "2025-08-23",
    isValid: true,
  },
  {
    certificateNumber: "CERT-2025-169",
    studentName: "Gauri Manohar Chaudhari",
    courseName: "Professional GUI Development in Python",
    startDate: "2025-06-02",
    endDate: "2025-08-22",
    issueDate: "2025-08-23",
    isValid: true,
  },
  {
    certificateNumber: "CERT-2025-523",
    studentName: "Samruddhi Ramrao Koli",
    courseName: "Professional GUI Development in Python",
    startDate: "2025-06-02",
    endDate: "2025-08-22",
    issueDate: "2025-08-23",
    isValid: true,
  },
];

export const findCertificate = (certificateNumber: string): Certificate | null => {
  const certificate = certificateDatabase.find(
    cert => cert.certificateNumber.toLowerCase() === certificateNumber.toLowerCase()
  );
  return certificate || null;
};