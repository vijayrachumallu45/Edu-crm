export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  details: string;
  ipAddress: string;
}

export const auditTrailLogs: AuditLogEntry[] = [
  {
    id: 'audit-1',
    timestamp: '2026-08-2 10:01:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1001',
    ipAddress: '192.168.1.2'
  },
  {
    id: 'audit-2',
    timestamp: '2026-08-3 10:02:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1002',
    ipAddress: '192.168.1.3'
  },
  {
    id: 'audit-3',
    timestamp: '2026-08-4 10:03:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1003',
    ipAddress: '192.168.1.4'
  },
  {
    id: 'audit-4',
    timestamp: '2026-08-5 10:04:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1004',
    ipAddress: '192.168.1.5'
  },
  {
    id: 'audit-5',
    timestamp: '2026-08-6 10:05:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1005',
    ipAddress: '192.168.1.6'
  },
  {
    id: 'audit-6',
    timestamp: '2026-08-7 10:06:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1006',
    ipAddress: '192.168.1.7'
  },
  {
    id: 'audit-7',
    timestamp: '2026-08-8 10:07:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1007',
    ipAddress: '192.168.1.8'
  },
  {
    id: 'audit-8',
    timestamp: '2026-08-9 10:08:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1008',
    ipAddress: '192.168.1.9'
  },
  {
    id: 'audit-9',
    timestamp: '2026-08-10 10:09:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1009',
    ipAddress: '192.168.1.10'
  },
  {
    id: 'audit-10',
    timestamp: '2026-08-11 10:10:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1010',
    ipAddress: '192.168.1.11'
  },
  {
    id: 'audit-11',
    timestamp: '2026-08-12 10:11:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1011',
    ipAddress: '192.168.1.12'
  },
  {
    id: 'audit-12',
    timestamp: '2026-08-13 10:12:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1012',
    ipAddress: '192.168.1.13'
  },
  {
    id: 'audit-13',
    timestamp: '2026-08-14 10:13:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1013',
    ipAddress: '192.168.1.14'
  },
  {
    id: 'audit-14',
    timestamp: '2026-08-15 10:14:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1014',
    ipAddress: '192.168.1.15'
  },
  {
    id: 'audit-15',
    timestamp: '2026-08-16 10:15:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1015',
    ipAddress: '192.168.1.16'
  },
  {
    id: 'audit-16',
    timestamp: '2026-08-17 10:16:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1016',
    ipAddress: '192.168.1.17'
  },
  {
    id: 'audit-17',
    timestamp: '2026-08-18 10:17:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1017',
    ipAddress: '192.168.1.18'
  },
  {
    id: 'audit-18',
    timestamp: '2026-08-19 10:18:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1018',
    ipAddress: '192.168.1.19'
  },
  {
    id: 'audit-19',
    timestamp: '2026-08-20 10:19:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1019',
    ipAddress: '192.168.1.20'
  },
  {
    id: 'audit-20',
    timestamp: '2026-08-21 10:20:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1020',
    ipAddress: '192.168.1.21'
  },
  {
    id: 'audit-21',
    timestamp: '2026-08-22 10:21:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1021',
    ipAddress: '192.168.1.22'
  },
  {
    id: 'audit-22',
    timestamp: '2026-08-23 10:22:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1022',
    ipAddress: '192.168.1.23'
  },
  {
    id: 'audit-23',
    timestamp: '2026-08-24 10:23:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1023',
    ipAddress: '192.168.1.24'
  },
  {
    id: 'audit-24',
    timestamp: '2026-08-25 10:24:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1024',
    ipAddress: '192.168.1.25'
  },
  {
    id: 'audit-25',
    timestamp: '2026-08-26 10:25:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1025',
    ipAddress: '192.168.1.26'
  },
  {
    id: 'audit-26',
    timestamp: '2026-08-27 10:26:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1026',
    ipAddress: '192.168.1.27'
  },
  {
    id: 'audit-27',
    timestamp: '2026-08-28 10:27:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1027',
    ipAddress: '192.168.1.28'
  },
  {
    id: 'audit-28',
    timestamp: '2026-08-1 10:28:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1028',
    ipAddress: '192.168.1.29'
  },
  {
    id: 'audit-29',
    timestamp: '2026-08-2 10:29:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1029',
    ipAddress: '192.168.1.30'
  },
  {
    id: 'audit-30',
    timestamp: '2026-08-3 10:30:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1030',
    ipAddress: '192.168.1.31'
  },
  {
    id: 'audit-31',
    timestamp: '2026-08-4 10:31:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1031',
    ipAddress: '192.168.1.32'
  },
  {
    id: 'audit-32',
    timestamp: '2026-08-5 10:32:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1032',
    ipAddress: '192.168.1.33'
  },
  {
    id: 'audit-33',
    timestamp: '2026-08-6 10:33:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1033',
    ipAddress: '192.168.1.34'
  },
  {
    id: 'audit-34',
    timestamp: '2026-08-7 10:34:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1034',
    ipAddress: '192.168.1.35'
  },
  {
    id: 'audit-35',
    timestamp: '2026-08-8 10:35:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1035',
    ipAddress: '192.168.1.36'
  },
  {
    id: 'audit-36',
    timestamp: '2026-08-9 10:36:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1036',
    ipAddress: '192.168.1.37'
  },
  {
    id: 'audit-37',
    timestamp: '2026-08-10 10:37:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1037',
    ipAddress: '192.168.1.38'
  },
  {
    id: 'audit-38',
    timestamp: '2026-08-11 10:38:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1038',
    ipAddress: '192.168.1.39'
  },
  {
    id: 'audit-39',
    timestamp: '2026-08-12 10:39:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1039',
    ipAddress: '192.168.1.40'
  },
  {
    id: 'audit-40',
    timestamp: '2026-08-13 10:40:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1040',
    ipAddress: '192.168.1.41'
  },
  {
    id: 'audit-41',
    timestamp: '2026-08-14 10:41:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1041',
    ipAddress: '192.168.1.42'
  },
  {
    id: 'audit-42',
    timestamp: '2026-08-15 10:42:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1042',
    ipAddress: '192.168.1.43'
  },
  {
    id: 'audit-43',
    timestamp: '2026-08-16 10:43:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1043',
    ipAddress: '192.168.1.44'
  },
  {
    id: 'audit-44',
    timestamp: '2026-08-17 10:44:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1044',
    ipAddress: '192.168.1.45'
  },
  {
    id: 'audit-45',
    timestamp: '2026-08-18 10:45:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1045',
    ipAddress: '192.168.1.46'
  },
  {
    id: 'audit-46',
    timestamp: '2026-08-19 10:46:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1046',
    ipAddress: '192.168.1.47'
  },
  {
    id: 'audit-47',
    timestamp: '2026-08-20 10:47:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1047',
    ipAddress: '192.168.1.48'
  },
  {
    id: 'audit-48',
    timestamp: '2026-08-21 10:48:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1048',
    ipAddress: '192.168.1.49'
  },
  {
    id: 'audit-49',
    timestamp: '2026-08-22 10:49:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1049',
    ipAddress: '192.168.1.50'
  },
  {
    id: 'audit-50',
    timestamp: '2026-08-23 10:50:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1050',
    ipAddress: '192.168.1.51'
  },
  {
    id: 'audit-51',
    timestamp: '2026-08-24 10:51:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1051',
    ipAddress: '192.168.1.52'
  },
  {
    id: 'audit-52',
    timestamp: '2026-08-25 10:52:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1052',
    ipAddress: '192.168.1.53'
  },
  {
    id: 'audit-53',
    timestamp: '2026-08-26 10:53:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1053',
    ipAddress: '192.168.1.54'
  },
  {
    id: 'audit-54',
    timestamp: '2026-08-27 10:54:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1054',
    ipAddress: '192.168.1.55'
  },
  {
    id: 'audit-55',
    timestamp: '2026-08-28 10:55:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1055',
    ipAddress: '192.168.1.56'
  },
  {
    id: 'audit-56',
    timestamp: '2026-08-1 10:56:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1056',
    ipAddress: '192.168.1.57'
  },
  {
    id: 'audit-57',
    timestamp: '2026-08-2 10:57:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1057',
    ipAddress: '192.168.1.58'
  },
  {
    id: 'audit-58',
    timestamp: '2026-08-3 10:58:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1058',
    ipAddress: '192.168.1.59'
  },
  {
    id: 'audit-59',
    timestamp: '2026-08-4 10:59:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1059',
    ipAddress: '192.168.1.60'
  },
  {
    id: 'audit-60',
    timestamp: '2026-08-5 10:00:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1060',
    ipAddress: '192.168.1.61'
  },
  {
    id: 'audit-61',
    timestamp: '2026-08-6 10:01:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1061',
    ipAddress: '192.168.1.62'
  },
  {
    id: 'audit-62',
    timestamp: '2026-08-7 10:02:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1062',
    ipAddress: '192.168.1.63'
  },
  {
    id: 'audit-63',
    timestamp: '2026-08-8 10:03:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1063',
    ipAddress: '192.168.1.64'
  },
  {
    id: 'audit-64',
    timestamp: '2026-08-9 10:04:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1064',
    ipAddress: '192.168.1.65'
  },
  {
    id: 'audit-65',
    timestamp: '2026-08-10 10:05:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1065',
    ipAddress: '192.168.1.66'
  },
  {
    id: 'audit-66',
    timestamp: '2026-08-11 10:06:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1066',
    ipAddress: '192.168.1.67'
  },
  {
    id: 'audit-67',
    timestamp: '2026-08-12 10:07:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1067',
    ipAddress: '192.168.1.68'
  },
  {
    id: 'audit-68',
    timestamp: '2026-08-13 10:08:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1068',
    ipAddress: '192.168.1.69'
  },
  {
    id: 'audit-69',
    timestamp: '2026-08-14 10:09:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1069',
    ipAddress: '192.168.1.70'
  },
  {
    id: 'audit-70',
    timestamp: '2026-08-15 10:10:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1070',
    ipAddress: '192.168.1.71'
  },
  {
    id: 'audit-71',
    timestamp: '2026-08-16 10:11:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1071',
    ipAddress: '192.168.1.72'
  },
  {
    id: 'audit-72',
    timestamp: '2026-08-17 10:12:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1072',
    ipAddress: '192.168.1.73'
  },
  {
    id: 'audit-73',
    timestamp: '2026-08-18 10:13:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1073',
    ipAddress: '192.168.1.74'
  },
  {
    id: 'audit-74',
    timestamp: '2026-08-19 10:14:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1074',
    ipAddress: '192.168.1.75'
  },
  {
    id: 'audit-75',
    timestamp: '2026-08-20 10:15:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1075',
    ipAddress: '192.168.1.76'
  },
  {
    id: 'audit-76',
    timestamp: '2026-08-21 10:16:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1076',
    ipAddress: '192.168.1.77'
  },
  {
    id: 'audit-77',
    timestamp: '2026-08-22 10:17:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1077',
    ipAddress: '192.168.1.78'
  },
  {
    id: 'audit-78',
    timestamp: '2026-08-23 10:18:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1078',
    ipAddress: '192.168.1.79'
  },
  {
    id: 'audit-79',
    timestamp: '2026-08-24 10:19:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1079',
    ipAddress: '192.168.1.80'
  },
  {
    id: 'audit-80',
    timestamp: '2026-08-25 10:20:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1080',
    ipAddress: '192.168.1.81'
  },
  {
    id: 'audit-81',
    timestamp: '2026-08-26 10:21:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1081',
    ipAddress: '192.168.1.82'
  },
  {
    id: 'audit-82',
    timestamp: '2026-08-27 10:22:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1082',
    ipAddress: '192.168.1.83'
  },
  {
    id: 'audit-83',
    timestamp: '2026-08-28 10:23:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1083',
    ipAddress: '192.168.1.84'
  },
  {
    id: 'audit-84',
    timestamp: '2026-08-1 10:24:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1084',
    ipAddress: '192.168.1.85'
  },
  {
    id: 'audit-85',
    timestamp: '2026-08-2 10:25:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1085',
    ipAddress: '192.168.1.86'
  },
  {
    id: 'audit-86',
    timestamp: '2026-08-3 10:26:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1086',
    ipAddress: '192.168.1.87'
  },
  {
    id: 'audit-87',
    timestamp: '2026-08-4 10:27:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1087',
    ipAddress: '192.168.1.88'
  },
  {
    id: 'audit-88',
    timestamp: '2026-08-5 10:28:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1088',
    ipAddress: '192.168.1.89'
  },
  {
    id: 'audit-89',
    timestamp: '2026-08-6 10:29:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1089',
    ipAddress: '192.168.1.90'
  },
  {
    id: 'audit-90',
    timestamp: '2026-08-7 10:30:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1090',
    ipAddress: '192.168.1.91'
  },
  {
    id: 'audit-91',
    timestamp: '2026-08-8 10:31:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1091',
    ipAddress: '192.168.1.92'
  },
  {
    id: 'audit-92',
    timestamp: '2026-08-9 10:32:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1092',
    ipAddress: '192.168.1.93'
  },
  {
    id: 'audit-93',
    timestamp: '2026-08-10 10:33:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1093',
    ipAddress: '192.168.1.94'
  },
  {
    id: 'audit-94',
    timestamp: '2026-08-11 10:34:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1094',
    ipAddress: '192.168.1.95'
  },
  {
    id: 'audit-95',
    timestamp: '2026-08-12 10:35:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1095',
    ipAddress: '192.168.1.96'
  },
  {
    id: 'audit-96',
    timestamp: '2026-08-13 10:36:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1096',
    ipAddress: '192.168.1.97'
  },
  {
    id: 'audit-97',
    timestamp: '2026-08-14 10:37:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1097',
    ipAddress: '192.168.1.98'
  },
  {
    id: 'audit-98',
    timestamp: '2026-08-15 10:38:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1098',
    ipAddress: '192.168.1.99'
  },
  {
    id: 'audit-99',
    timestamp: '2026-08-16 10:39:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1099',
    ipAddress: '192.168.1.100'
  },
  {
    id: 'audit-100',
    timestamp: '2026-08-17 10:40:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1100',
    ipAddress: '192.168.1.101'
  },
  {
    id: 'audit-101',
    timestamp: '2026-08-18 10:41:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1101',
    ipAddress: '192.168.1.102'
  },
  {
    id: 'audit-102',
    timestamp: '2026-08-19 10:42:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1102',
    ipAddress: '192.168.1.103'
  },
  {
    id: 'audit-103',
    timestamp: '2026-08-20 10:43:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1103',
    ipAddress: '192.168.1.104'
  },
  {
    id: 'audit-104',
    timestamp: '2026-08-21 10:44:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1104',
    ipAddress: '192.168.1.105'
  },
  {
    id: 'audit-105',
    timestamp: '2026-08-22 10:45:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1105',
    ipAddress: '192.168.1.106'
  },
  {
    id: 'audit-106',
    timestamp: '2026-08-23 10:46:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1106',
    ipAddress: '192.168.1.107'
  },
  {
    id: 'audit-107',
    timestamp: '2026-08-24 10:47:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1107',
    ipAddress: '192.168.1.108'
  },
  {
    id: 'audit-108',
    timestamp: '2026-08-25 10:48:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1108',
    ipAddress: '192.168.1.109'
  },
  {
    id: 'audit-109',
    timestamp: '2026-08-26 10:49:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1109',
    ipAddress: '192.168.1.110'
  },
  {
    id: 'audit-110',
    timestamp: '2026-08-27 10:50:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1110',
    ipAddress: '192.168.1.111'
  },
  {
    id: 'audit-111',
    timestamp: '2026-08-28 10:51:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1111',
    ipAddress: '192.168.1.112'
  },
  {
    id: 'audit-112',
    timestamp: '2026-08-1 10:52:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1112',
    ipAddress: '192.168.1.113'
  },
  {
    id: 'audit-113',
    timestamp: '2026-08-2 10:53:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1113',
    ipAddress: '192.168.1.114'
  },
  {
    id: 'audit-114',
    timestamp: '2026-08-3 10:54:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1114',
    ipAddress: '192.168.1.115'
  },
  {
    id: 'audit-115',
    timestamp: '2026-08-4 10:55:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1115',
    ipAddress: '192.168.1.116'
  },
  {
    id: 'audit-116',
    timestamp: '2026-08-5 10:56:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1116',
    ipAddress: '192.168.1.117'
  },
  {
    id: 'audit-117',
    timestamp: '2026-08-6 10:57:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1117',
    ipAddress: '192.168.1.118'
  },
  {
    id: 'audit-118',
    timestamp: '2026-08-7 10:58:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1118',
    ipAddress: '192.168.1.119'
  },
  {
    id: 'audit-119',
    timestamp: '2026-08-8 10:59:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1119',
    ipAddress: '192.168.1.120'
  },
  {
    id: 'audit-120',
    timestamp: '2026-08-9 10:00:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1120',
    ipAddress: '192.168.1.121'
  },
  {
    id: 'audit-121',
    timestamp: '2026-08-10 10:01:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1121',
    ipAddress: '192.168.1.122'
  },
  {
    id: 'audit-122',
    timestamp: '2026-08-11 10:02:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1122',
    ipAddress: '192.168.1.123'
  },
  {
    id: 'audit-123',
    timestamp: '2026-08-12 10:03:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1123',
    ipAddress: '192.168.1.124'
  },
  {
    id: 'audit-124',
    timestamp: '2026-08-13 10:04:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1124',
    ipAddress: '192.168.1.125'
  },
  {
    id: 'audit-125',
    timestamp: '2026-08-14 10:05:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1125',
    ipAddress: '192.168.1.126'
  },
  {
    id: 'audit-126',
    timestamp: '2026-08-15 10:06:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1126',
    ipAddress: '192.168.1.127'
  },
  {
    id: 'audit-127',
    timestamp: '2026-08-16 10:07:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1127',
    ipAddress: '192.168.1.128'
  },
  {
    id: 'audit-128',
    timestamp: '2026-08-17 10:08:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1128',
    ipAddress: '192.168.1.129'
  },
  {
    id: 'audit-129',
    timestamp: '2026-08-18 10:09:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1129',
    ipAddress: '192.168.1.130'
  },
  {
    id: 'audit-130',
    timestamp: '2026-08-19 10:10:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1130',
    ipAddress: '192.168.1.131'
  },
  {
    id: 'audit-131',
    timestamp: '2026-08-20 10:11:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1131',
    ipAddress: '192.168.1.132'
  },
  {
    id: 'audit-132',
    timestamp: '2026-08-21 10:12:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1132',
    ipAddress: '192.168.1.133'
  },
  {
    id: 'audit-133',
    timestamp: '2026-08-22 10:13:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1133',
    ipAddress: '192.168.1.134'
  },
  {
    id: 'audit-134',
    timestamp: '2026-08-23 10:14:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1134',
    ipAddress: '192.168.1.135'
  },
  {
    id: 'audit-135',
    timestamp: '2026-08-24 10:15:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1135',
    ipAddress: '192.168.1.136'
  },
  {
    id: 'audit-136',
    timestamp: '2026-08-25 10:16:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1136',
    ipAddress: '192.168.1.137'
  },
  {
    id: 'audit-137',
    timestamp: '2026-08-26 10:17:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1137',
    ipAddress: '192.168.1.138'
  },
  {
    id: 'audit-138',
    timestamp: '2026-08-27 10:18:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1138',
    ipAddress: '192.168.1.139'
  },
  {
    id: 'audit-139',
    timestamp: '2026-08-28 10:19:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1139',
    ipAddress: '192.168.1.140'
  },
  {
    id: 'audit-140',
    timestamp: '2026-08-1 10:20:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1140',
    ipAddress: '192.168.1.141'
  },
  {
    id: 'audit-141',
    timestamp: '2026-08-2 10:21:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1141',
    ipAddress: '192.168.1.142'
  },
  {
    id: 'audit-142',
    timestamp: '2026-08-3 10:22:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1142',
    ipAddress: '192.168.1.143'
  },
  {
    id: 'audit-143',
    timestamp: '2026-08-4 10:23:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1143',
    ipAddress: '192.168.1.144'
  },
  {
    id: 'audit-144',
    timestamp: '2026-08-5 10:24:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1144',
    ipAddress: '192.168.1.145'
  },
  {
    id: 'audit-145',
    timestamp: '2026-08-6 10:25:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1145',
    ipAddress: '192.168.1.146'
  },
  {
    id: 'audit-146',
    timestamp: '2026-08-7 10:26:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1146',
    ipAddress: '192.168.1.147'
  },
  {
    id: 'audit-147',
    timestamp: '2026-08-8 10:27:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1147',
    ipAddress: '192.168.1.148'
  },
  {
    id: 'audit-148',
    timestamp: '2026-08-9 10:28:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1148',
    ipAddress: '192.168.1.149'
  },
  {
    id: 'audit-149',
    timestamp: '2026-08-10 10:29:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1149',
    ipAddress: '192.168.1.150'
  },
  {
    id: 'audit-150',
    timestamp: '2026-08-11 10:30:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1150',
    ipAddress: '192.168.1.151'
  },
  {
    id: 'audit-151',
    timestamp: '2026-08-12 10:31:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1151',
    ipAddress: '192.168.1.152'
  },
  {
    id: 'audit-152',
    timestamp: '2026-08-13 10:32:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1152',
    ipAddress: '192.168.1.153'
  },
  {
    id: 'audit-153',
    timestamp: '2026-08-14 10:33:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1153',
    ipAddress: '192.168.1.154'
  },
  {
    id: 'audit-154',
    timestamp: '2026-08-15 10:34:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1154',
    ipAddress: '192.168.1.155'
  },
  {
    id: 'audit-155',
    timestamp: '2026-08-16 10:35:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1155',
    ipAddress: '192.168.1.156'
  },
  {
    id: 'audit-156',
    timestamp: '2026-08-17 10:36:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1156',
    ipAddress: '192.168.1.157'
  },
  {
    id: 'audit-157',
    timestamp: '2026-08-18 10:37:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1157',
    ipAddress: '192.168.1.158'
  },
  {
    id: 'audit-158',
    timestamp: '2026-08-19 10:38:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1158',
    ipAddress: '192.168.1.159'
  },
  {
    id: 'audit-159',
    timestamp: '2026-08-20 10:39:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1159',
    ipAddress: '192.168.1.160'
  },
  {
    id: 'audit-160',
    timestamp: '2026-08-21 10:40:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1160',
    ipAddress: '192.168.1.161'
  },
  {
    id: 'audit-161',
    timestamp: '2026-08-22 10:41:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1161',
    ipAddress: '192.168.1.162'
  },
  {
    id: 'audit-162',
    timestamp: '2026-08-23 10:42:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1162',
    ipAddress: '192.168.1.163'
  },
  {
    id: 'audit-163',
    timestamp: '2026-08-24 10:43:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1163',
    ipAddress: '192.168.1.164'
  },
  {
    id: 'audit-164',
    timestamp: '2026-08-25 10:44:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1164',
    ipAddress: '192.168.1.165'
  },
  {
    id: 'audit-165',
    timestamp: '2026-08-26 10:45:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1165',
    ipAddress: '192.168.1.166'
  },
  {
    id: 'audit-166',
    timestamp: '2026-08-27 10:46:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1166',
    ipAddress: '192.168.1.167'
  },
  {
    id: 'audit-167',
    timestamp: '2026-08-28 10:47:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1167',
    ipAddress: '192.168.1.168'
  },
  {
    id: 'audit-168',
    timestamp: '2026-08-1 10:48:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1168',
    ipAddress: '192.168.1.169'
  },
  {
    id: 'audit-169',
    timestamp: '2026-08-2 10:49:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1169',
    ipAddress: '192.168.1.170'
  },
  {
    id: 'audit-170',
    timestamp: '2026-08-3 10:50:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1170',
    ipAddress: '192.168.1.171'
  },
  {
    id: 'audit-171',
    timestamp: '2026-08-4 10:51:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1171',
    ipAddress: '192.168.1.172'
  },
  {
    id: 'audit-172',
    timestamp: '2026-08-5 10:52:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1172',
    ipAddress: '192.168.1.173'
  },
  {
    id: 'audit-173',
    timestamp: '2026-08-6 10:53:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1173',
    ipAddress: '192.168.1.174'
  },
  {
    id: 'audit-174',
    timestamp: '2026-08-7 10:54:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1174',
    ipAddress: '192.168.1.175'
  },
  {
    id: 'audit-175',
    timestamp: '2026-08-8 10:55:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1175',
    ipAddress: '192.168.1.176'
  },
  {
    id: 'audit-176',
    timestamp: '2026-08-9 10:56:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1176',
    ipAddress: '192.168.1.177'
  },
  {
    id: 'audit-177',
    timestamp: '2026-08-10 10:57:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1177',
    ipAddress: '192.168.1.178'
  },
  {
    id: 'audit-178',
    timestamp: '2026-08-11 10:58:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1178',
    ipAddress: '192.168.1.179'
  },
  {
    id: 'audit-179',
    timestamp: '2026-08-12 10:59:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1179',
    ipAddress: '192.168.1.180'
  },
  {
    id: 'audit-180',
    timestamp: '2026-08-13 10:00:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1180',
    ipAddress: '192.168.1.181'
  },
  {
    id: 'audit-181',
    timestamp: '2026-08-14 10:01:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1181',
    ipAddress: '192.168.1.182'
  },
  {
    id: 'audit-182',
    timestamp: '2026-08-15 10:02:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1182',
    ipAddress: '192.168.1.183'
  },
  {
    id: 'audit-183',
    timestamp: '2026-08-16 10:03:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1183',
    ipAddress: '192.168.1.184'
  },
  {
    id: 'audit-184',
    timestamp: '2026-08-17 10:04:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1184',
    ipAddress: '192.168.1.185'
  },
  {
    id: 'audit-185',
    timestamp: '2026-08-18 10:05:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1185',
    ipAddress: '192.168.1.186'
  },
  {
    id: 'audit-186',
    timestamp: '2026-08-19 10:06:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1186',
    ipAddress: '192.168.1.187'
  },
  {
    id: 'audit-187',
    timestamp: '2026-08-20 10:07:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1187',
    ipAddress: '192.168.1.188'
  },
  {
    id: 'audit-188',
    timestamp: '2026-08-21 10:08:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1188',
    ipAddress: '192.168.1.189'
  },
  {
    id: 'audit-189',
    timestamp: '2026-08-22 10:09:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1189',
    ipAddress: '192.168.1.190'
  },
  {
    id: 'audit-190',
    timestamp: '2026-08-23 10:10:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1190',
    ipAddress: '192.168.1.191'
  },
  {
    id: 'audit-191',
    timestamp: '2026-08-24 10:11:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1191',
    ipAddress: '192.168.1.192'
  },
  {
    id: 'audit-192',
    timestamp: '2026-08-25 10:12:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1192',
    ipAddress: '192.168.1.193'
  },
  {
    id: 'audit-193',
    timestamp: '2026-08-26 10:13:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1193',
    ipAddress: '192.168.1.194'
  },
  {
    id: 'audit-194',
    timestamp: '2026-08-27 10:14:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1194',
    ipAddress: '192.168.1.195'
  },
  {
    id: 'audit-195',
    timestamp: '2026-08-28 10:15:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1195',
    ipAddress: '192.168.1.196'
  },
  {
    id: 'audit-196',
    timestamp: '2026-08-1 10:16:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1196',
    ipAddress: '192.168.1.197'
  },
  {
    id: 'audit-197',
    timestamp: '2026-08-2 10:17:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1197',
    ipAddress: '192.168.1.198'
  },
  {
    id: 'audit-198',
    timestamp: '2026-08-3 10:18:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1198',
    ipAddress: '192.168.1.199'
  },
  {
    id: 'audit-199',
    timestamp: '2026-08-4 10:19:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1199',
    ipAddress: '192.168.1.200'
  },
  {
    id: 'audit-200',
    timestamp: '2026-08-5 10:20:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1200',
    ipAddress: '192.168.1.201'
  },
  {
    id: 'audit-201',
    timestamp: '2026-08-6 10:21:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1201',
    ipAddress: '192.168.1.202'
  },
  {
    id: 'audit-202',
    timestamp: '2026-08-7 10:22:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1202',
    ipAddress: '192.168.1.203'
  },
  {
    id: 'audit-203',
    timestamp: '2026-08-8 10:23:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1203',
    ipAddress: '192.168.1.204'
  },
  {
    id: 'audit-204',
    timestamp: '2026-08-9 10:24:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1204',
    ipAddress: '192.168.1.205'
  },
  {
    id: 'audit-205',
    timestamp: '2026-08-10 10:25:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1205',
    ipAddress: '192.168.1.206'
  },
  {
    id: 'audit-206',
    timestamp: '2026-08-11 10:26:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1206',
    ipAddress: '192.168.1.207'
  },
  {
    id: 'audit-207',
    timestamp: '2026-08-12 10:27:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1207',
    ipAddress: '192.168.1.208'
  },
  {
    id: 'audit-208',
    timestamp: '2026-08-13 10:28:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1208',
    ipAddress: '192.168.1.209'
  },
  {
    id: 'audit-209',
    timestamp: '2026-08-14 10:29:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1209',
    ipAddress: '192.168.1.210'
  },
  {
    id: 'audit-210',
    timestamp: '2026-08-15 10:30:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1210',
    ipAddress: '192.168.1.211'
  },
  {
    id: 'audit-211',
    timestamp: '2026-08-16 10:31:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1211',
    ipAddress: '192.168.1.212'
  },
  {
    id: 'audit-212',
    timestamp: '2026-08-17 10:32:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1212',
    ipAddress: '192.168.1.213'
  },
  {
    id: 'audit-213',
    timestamp: '2026-08-18 10:33:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1213',
    ipAddress: '192.168.1.214'
  },
  {
    id: 'audit-214',
    timestamp: '2026-08-19 10:34:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1214',
    ipAddress: '192.168.1.215'
  },
  {
    id: 'audit-215',
    timestamp: '2026-08-20 10:35:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1215',
    ipAddress: '192.168.1.216'
  },
  {
    id: 'audit-216',
    timestamp: '2026-08-21 10:36:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1216',
    ipAddress: '192.168.1.217'
  },
  {
    id: 'audit-217',
    timestamp: '2026-08-22 10:37:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1217',
    ipAddress: '192.168.1.218'
  },
  {
    id: 'audit-218',
    timestamp: '2026-08-23 10:38:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1218',
    ipAddress: '192.168.1.219'
  },
  {
    id: 'audit-219',
    timestamp: '2026-08-24 10:39:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1219',
    ipAddress: '192.168.1.220'
  },
  {
    id: 'audit-220',
    timestamp: '2026-08-25 10:40:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1220',
    ipAddress: '192.168.1.221'
  },
  {
    id: 'audit-221',
    timestamp: '2026-08-26 10:41:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1221',
    ipAddress: '192.168.1.222'
  },
  {
    id: 'audit-222',
    timestamp: '2026-08-27 10:42:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1222',
    ipAddress: '192.168.1.223'
  },
  {
    id: 'audit-223',
    timestamp: '2026-08-28 10:43:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1223',
    ipAddress: '192.168.1.224'
  },
  {
    id: 'audit-224',
    timestamp: '2026-08-1 10:44:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1224',
    ipAddress: '192.168.1.225'
  },
  {
    id: 'audit-225',
    timestamp: '2026-08-2 10:45:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1225',
    ipAddress: '192.168.1.226'
  },
  {
    id: 'audit-226',
    timestamp: '2026-08-3 10:46:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1226',
    ipAddress: '192.168.1.227'
  },
  {
    id: 'audit-227',
    timestamp: '2026-08-4 10:47:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1227',
    ipAddress: '192.168.1.228'
  },
  {
    id: 'audit-228',
    timestamp: '2026-08-5 10:48:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1228',
    ipAddress: '192.168.1.229'
  },
  {
    id: 'audit-229',
    timestamp: '2026-08-6 10:49:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1229',
    ipAddress: '192.168.1.230'
  },
  {
    id: 'audit-230',
    timestamp: '2026-08-7 10:50:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1230',
    ipAddress: '192.168.1.231'
  },
  {
    id: 'audit-231',
    timestamp: '2026-08-8 10:51:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1231',
    ipAddress: '192.168.1.232'
  },
  {
    id: 'audit-232',
    timestamp: '2026-08-9 10:52:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1232',
    ipAddress: '192.168.1.233'
  },
  {
    id: 'audit-233',
    timestamp: '2026-08-10 10:53:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1233',
    ipAddress: '192.168.1.234'
  },
  {
    id: 'audit-234',
    timestamp: '2026-08-11 10:54:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1234',
    ipAddress: '192.168.1.235'
  },
  {
    id: 'audit-235',
    timestamp: '2026-08-12 10:55:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1235',
    ipAddress: '192.168.1.236'
  },
  {
    id: 'audit-236',
    timestamp: '2026-08-13 10:56:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1236',
    ipAddress: '192.168.1.237'
  },
  {
    id: 'audit-237',
    timestamp: '2026-08-14 10:57:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1237',
    ipAddress: '192.168.1.238'
  },
  {
    id: 'audit-238',
    timestamp: '2026-08-15 10:58:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1238',
    ipAddress: '192.168.1.239'
  },
  {
    id: 'audit-239',
    timestamp: '2026-08-16 10:59:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1239',
    ipAddress: '192.168.1.240'
  },
  {
    id: 'audit-240',
    timestamp: '2026-08-17 10:00:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1240',
    ipAddress: '192.168.1.241'
  },
  {
    id: 'audit-241',
    timestamp: '2026-08-18 10:01:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1241',
    ipAddress: '192.168.1.242'
  },
  {
    id: 'audit-242',
    timestamp: '2026-08-19 10:02:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1242',
    ipAddress: '192.168.1.243'
  },
  {
    id: 'audit-243',
    timestamp: '2026-08-20 10:03:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1243',
    ipAddress: '192.168.1.244'
  },
  {
    id: 'audit-244',
    timestamp: '2026-08-21 10:04:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1244',
    ipAddress: '192.168.1.245'
  },
  {
    id: 'audit-245',
    timestamp: '2026-08-22 10:05:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1245',
    ipAddress: '192.168.1.246'
  },
  {
    id: 'audit-246',
    timestamp: '2026-08-23 10:06:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1246',
    ipAddress: '192.168.1.247'
  },
  {
    id: 'audit-247',
    timestamp: '2026-08-24 10:07:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1247',
    ipAddress: '192.168.1.248'
  },
  {
    id: 'audit-248',
    timestamp: '2026-08-25 10:08:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1248',
    ipAddress: '192.168.1.249'
  },
  {
    id: 'audit-249',
    timestamp: '2026-08-26 10:09:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1249',
    ipAddress: '192.168.1.250'
  },
  {
    id: 'audit-250',
    timestamp: '2026-08-27 10:10:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1250',
    ipAddress: '192.168.1.1'
  },
  {
    id: 'audit-251',
    timestamp: '2026-08-28 10:11:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1251',
    ipAddress: '192.168.1.2'
  },
  {
    id: 'audit-252',
    timestamp: '2026-08-1 10:12:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1252',
    ipAddress: '192.168.1.3'
  },
  {
    id: 'audit-253',
    timestamp: '2026-08-2 10:13:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1253',
    ipAddress: '192.168.1.4'
  },
  {
    id: 'audit-254',
    timestamp: '2026-08-3 10:14:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1254',
    ipAddress: '192.168.1.5'
  },
  {
    id: 'audit-255',
    timestamp: '2026-08-4 10:15:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1255',
    ipAddress: '192.168.1.6'
  },
  {
    id: 'audit-256',
    timestamp: '2026-08-5 10:16:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1256',
    ipAddress: '192.168.1.7'
  },
  {
    id: 'audit-257',
    timestamp: '2026-08-6 10:17:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1257',
    ipAddress: '192.168.1.8'
  },
  {
    id: 'audit-258',
    timestamp: '2026-08-7 10:18:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1258',
    ipAddress: '192.168.1.9'
  },
  {
    id: 'audit-259',
    timestamp: '2026-08-8 10:19:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1259',
    ipAddress: '192.168.1.10'
  },
  {
    id: 'audit-260',
    timestamp: '2026-08-9 10:20:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1260',
    ipAddress: '192.168.1.11'
  },
  {
    id: 'audit-261',
    timestamp: '2026-08-10 10:21:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1261',
    ipAddress: '192.168.1.12'
  },
  {
    id: 'audit-262',
    timestamp: '2026-08-11 10:22:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1262',
    ipAddress: '192.168.1.13'
  },
  {
    id: 'audit-263',
    timestamp: '2026-08-12 10:23:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1263',
    ipAddress: '192.168.1.14'
  },
  {
    id: 'audit-264',
    timestamp: '2026-08-13 10:24:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1264',
    ipAddress: '192.168.1.15'
  },
  {
    id: 'audit-265',
    timestamp: '2026-08-14 10:25:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1265',
    ipAddress: '192.168.1.16'
  },
  {
    id: 'audit-266',
    timestamp: '2026-08-15 10:26:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1266',
    ipAddress: '192.168.1.17'
  },
  {
    id: 'audit-267',
    timestamp: '2026-08-16 10:27:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1267',
    ipAddress: '192.168.1.18'
  },
  {
    id: 'audit-268',
    timestamp: '2026-08-17 10:28:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1268',
    ipAddress: '192.168.1.19'
  },
  {
    id: 'audit-269',
    timestamp: '2026-08-18 10:29:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1269',
    ipAddress: '192.168.1.20'
  },
  {
    id: 'audit-270',
    timestamp: '2026-08-19 10:30:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1270',
    ipAddress: '192.168.1.21'
  },
  {
    id: 'audit-271',
    timestamp: '2026-08-20 10:31:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1271',
    ipAddress: '192.168.1.22'
  },
  {
    id: 'audit-272',
    timestamp: '2026-08-21 10:32:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1272',
    ipAddress: '192.168.1.23'
  },
  {
    id: 'audit-273',
    timestamp: '2026-08-22 10:33:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1273',
    ipAddress: '192.168.1.24'
  },
  {
    id: 'audit-274',
    timestamp: '2026-08-23 10:34:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1274',
    ipAddress: '192.168.1.25'
  },
  {
    id: 'audit-275',
    timestamp: '2026-08-24 10:35:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1275',
    ipAddress: '192.168.1.26'
  },
  {
    id: 'audit-276',
    timestamp: '2026-08-25 10:36:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1276',
    ipAddress: '192.168.1.27'
  },
  {
    id: 'audit-277',
    timestamp: '2026-08-26 10:37:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1277',
    ipAddress: '192.168.1.28'
  },
  {
    id: 'audit-278',
    timestamp: '2026-08-27 10:38:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1278',
    ipAddress: '192.168.1.29'
  },
  {
    id: 'audit-279',
    timestamp: '2026-08-28 10:39:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1279',
    ipAddress: '192.168.1.30'
  },
  {
    id: 'audit-280',
    timestamp: '2026-08-1 10:40:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1280',
    ipAddress: '192.168.1.31'
  },
  {
    id: 'audit-281',
    timestamp: '2026-08-2 10:41:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1281',
    ipAddress: '192.168.1.32'
  },
  {
    id: 'audit-282',
    timestamp: '2026-08-3 10:42:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1282',
    ipAddress: '192.168.1.33'
  },
  {
    id: 'audit-283',
    timestamp: '2026-08-4 10:43:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1283',
    ipAddress: '192.168.1.34'
  },
  {
    id: 'audit-284',
    timestamp: '2026-08-5 10:44:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1284',
    ipAddress: '192.168.1.35'
  },
  {
    id: 'audit-285',
    timestamp: '2026-08-6 10:45:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1285',
    ipAddress: '192.168.1.36'
  },
  {
    id: 'audit-286',
    timestamp: '2026-08-7 10:46:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1286',
    ipAddress: '192.168.1.37'
  },
  {
    id: 'audit-287',
    timestamp: '2026-08-8 10:47:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1287',
    ipAddress: '192.168.1.38'
  },
  {
    id: 'audit-288',
    timestamp: '2026-08-9 10:48:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1288',
    ipAddress: '192.168.1.39'
  },
  {
    id: 'audit-289',
    timestamp: '2026-08-10 10:49:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1289',
    ipAddress: '192.168.1.40'
  },
  {
    id: 'audit-290',
    timestamp: '2026-08-11 10:50:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1290',
    ipAddress: '192.168.1.41'
  },
  {
    id: 'audit-291',
    timestamp: '2026-08-12 10:51:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1291',
    ipAddress: '192.168.1.42'
  },
  {
    id: 'audit-292',
    timestamp: '2026-08-13 10:52:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1292',
    ipAddress: '192.168.1.43'
  },
  {
    id: 'audit-293',
    timestamp: '2026-08-14 10:53:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1293',
    ipAddress: '192.168.1.44'
  },
  {
    id: 'audit-294',
    timestamp: '2026-08-15 10:54:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1294',
    ipAddress: '192.168.1.45'
  },
  {
    id: 'audit-295',
    timestamp: '2026-08-16 10:55:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1295',
    ipAddress: '192.168.1.46'
  },
  {
    id: 'audit-296',
    timestamp: '2026-08-17 10:56:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1296',
    ipAddress: '192.168.1.47'
  },
  {
    id: 'audit-297',
    timestamp: '2026-08-18 10:57:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'STAGE_UPDATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1297',
    ipAddress: '192.168.1.48'
  },
  {
    id: 'audit-298',
    timestamp: '2026-08-19 10:58:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'FEE_PAYMENT_RECORDED',
    module: 'Admissions',
    details: 'System operation executed for transaction record #1298',
    ipAddress: '192.168.1.49'
  },
  {
    id: 'audit-299',
    timestamp: '2026-08-20 10:59:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'NOTE_ADDED',
    module: 'Fees',
    details: 'System operation executed for transaction record #1299',
    ipAddress: '192.168.1.50'
  },
  {
    id: 'audit-300',
    timestamp: '2026-08-21 10:00:00',
    user: 'Sarah Jenkins (Admission Lead)',
    action: 'ENQUIRY_CREATED',
    module: 'Enquiries',
    details: 'System operation executed for transaction record #1300',
    ipAddress: '192.168.1.51'
  }
];
