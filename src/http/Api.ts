/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Permission {
  permission: string;
  description: string;
}

export interface PermissionGroup {
  entity: string;
  permissions: Permission[];
}

export interface SignUpDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
  /** @example "password" */
  password: string;
  /** @example "password" */
  confirmPassword: string;
}

export interface FileDto {
  fileId: string;
  url: string;
}

export interface AuthUserDto {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  avatar: FileDto;
  roles: string[];
  /** @format date-time */
  emailVerifiedAt: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TokenDto {
  /** @example "string" */
  accessToken: string;
  user: AuthUserDto;
}

export interface SignInDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "password" */
  password: string;
}

export interface TokenWithMessageDto {
  /** @example "Success Message!" */
  message?: string;
  accessToken: string;
  user: AuthUserDto;
}

export interface TwoFAOtpDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example 123456 */
  otp: string;
  /** @example "Two Factor Authentication" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
}

export interface VerifyEmailDto {
  /** @default "example@example.com" */
  email?: string;
  otp: string;
  /** @example "Email Verification" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
}

export interface MessageDto {
  /** @example "Success Message!" */
  message: string;
}

export interface UnlockAccountDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example 123456 */
  otp: string;
  /** @example "Account Unlock" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
}

export interface SendOtpDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "Reset Password" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
}

export interface VerifyOtpDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example 123456 */
  otp: string;
  /** @example "Email Verification" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
}

export interface ForgotPasswordDto {
  /** @default "example@example.com" */
  email?: string;
}

export interface ResetPasswordDto {
  /** @default "example@example.com" */
  email?: string;
  /** @default "123456" */
  otp: string;
  /** @example "Reset Password" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
  password: string;
  confirm_password: string;
}

export interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export interface UpdateProfileDto {
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
}

export interface RefreshTokenDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "Reset Password" */
  type: "Reset Password" | "Email Verification" | "Two Factor Authentication" | "Account Unlock";
}

export interface SocialLoginUrlDto {
  url: string;
}

export interface User {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: FileDto;
  roles: string[];
  /** @default null */
  fullName: string;
}

export interface ActivityLogReference {
  reference: string;
  name: string | null;
  type: string;
}

export interface ActivityLogChange {
  field: string;
  oldValue: string | boolean | number | object | null;
  newValue: string | boolean | number | object | null;
}

export interface ActivityLog {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  subject: string;
  verb: string;
  object: ActivityLogReference;
  changes: ActivityLogChange[];
  context: ActivityLogReference;
}

export interface UpdateInterviewDto {
  /** @example "2025-01-05T10:00:00Z" */
  interviewDate?: string;
  /** @example "Passed" */
  status?: string;
}

export interface PersonalInfoDto {
  /** @example "+1" */
  countryCode: string;
  /** @example "+1234567890" */
  contact: string;
  gender: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
  religion: string;
  /** @example "2000-01-01T00:00:00.000Z" */
  dob: string;
  /** @example "123 Main Street, Springfield, USA" */
  addressLine1: string;
  /** @example "123 Main Street, Springfield, USA" */
  addressLine2: string;
}

export interface EmergencyContactDto {
  /** @example "John" */
  name: string;
  /** @example "+1234567890" */
  contact: string;
  /** @example "+123" */
  countryCode: string;
  /** @example "Father" */
  relationShip: string;
}

export interface MedicalInformationDTO {
  /** @example "A+" */
  bloodGroup: string;
  /** @example "Diabetes" */
  disease: string;
  /** @example "Dogs, Jellyfish, Peanuts" */
  allergies: string;
  /** @example "Your medical status" */
  medicalStatus: string;
}

export interface Education {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  schoolName: string;
  degree: string;
  document: FileDto;
}

export interface InternshipPreferencesDto {
  /** @example ["Technology"] */
  industryPreferences?: string[];
  /** @example ["Software Developer Intern"] */
  desiredInternshipRoles?: string[];
  /** @example "Remote" */
  jobType?: string;
  /** @example "No" */
  areYouOpenToInternshipInAnyCity?: string;
  /** @example "No" */
  handicapAccessability?: string;
  /** @example "Workplace with a mentorship program" */
  specificRequirements?: string;
  /** @example "Berlin" */
  preferredCity?: string;
  /** @example false */
  hasAlreadyInternship?: boolean;
}

export interface StudentPartnerDTO {
  /** @example "John" */
  name: string;
  /** @example "john.doe@example.com" */
  email: string;
  /** @example "+1" */
  countryCode: string;
  /** @example "123-456-7890" */
  contact: string;
}

export interface HostPreferenceDto {
  /** @example ["Apartment"] */
  accommodationTypes?: string[];
  /** @example "Shared" */
  preferredPrivateOrSharedAccommodation?: string;
  partnerDetails?: StudentPartnerDTO;
  /** @example ["Arab"] */
  preferredEthnicity?: string[];
  /** @example ["Islam"] */
  preferredReligion?: string[];
  /** @example "No" */
  mealIncluded?: string;
  preferredDietary?: string;
  /** @example "No" */
  preferredSmoking?: string;
  /** @example "No" */
  preferredPets?: string;
  /** @example "lorem ipsum dolor sit , consectetur " */
  additionalRequirements?: string;
  /** @example false */
  hasAlreadyHost?: boolean;
}

export interface Document {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  /** @example "Passport" */
  name: "Passport" | "Training Agreement" | "Travel Insurance" | "CV" | "Cover Letter";
  file: FileDto;
}

export interface Student {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  personalInfo: PersonalInfoDto;
  emergencyContacts: EmergencyContactDto[];
  medicalInformation: MedicalInformationDTO;
  educations: Education[];
  internshipPreferences: InternshipPreferencesDto;
  hostPreferences: HostPreferenceDto;
  status: string;
  profileStatus: string;
  internshipStatus: string;
  planName: string;
  paymentStatus: string;
  paymentInvoice: FileDto;
  user: User;
  additionalDocuments: Document;
}

export type JobCounts = object;

export interface Business {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  name: string;
  phone: string;
  logoUrl: string;
  certificateUrl: string;
  addressLine1: string;
  /** @default null */
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  businessType: string;
  employeesCount: number;
  description: string;
  operationSite: string;
  nearestBusStop: string;
  nextStation: string;
  busRoute: string;
  isArchived: boolean;
  members: string[];
  shouldBringLaptop: boolean;
  howDidYouHearAboutMPACoaching: string;
  onWhichPlatform: string;
  officeHasStamp: boolean;
  code: number;
  /** @default "Pending For Approval" */
  status: "Active" | "Blocked" | "Pending For Approval";
  jobCounts: JobCounts;
}

export interface Interview {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  scheduledWith: string;
  scheduledBy: string;
  student: Student;
  business: Business;
  status: string;
  /** @format date-time */
  date: string;
  duration: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  pages: number;
  records: number;
}

export interface StudentPagination {
  data: Student[];
  pagination: PaginationMeta;
}

export interface StudentData {
  matched: Student[];
  matchedCount: number;
  others: Student[];
  othersCount: number;
}

export interface StudentDataPagination {
  data: StudentData;
  pagination: PaginationMeta;
}

export interface AuthStudent {
  id: string;
  personalInfo: PersonalInfoDto;
  emergencyContacts: EmergencyContactDto[];
  medicalInformation: MedicalInformationDTO;
  educations: Education[];
  internshipPreferences: InternshipPreferencesDto;
  hostPreferences: HostPreferenceDto;
  user: User;
  status: string;
  paymentStatus: string;
  planName: string;
  profileStatus: string;
  additionalDocuments: Document[];
  internshipStatus: string;
}

export interface UpdateStudentDto {
  personalInfo?: PersonalInfoDto;
  emergencyContacts?: EmergencyContactDto[];
  medicalInformation?: MedicalInformationDTO;
  internshipPreferences?: InternshipPreferencesDto | null;
  hostPreferences?: HostPreferenceDto | null;
  planName?: string;
}

export interface PatchStudentStatus {
  /** Paid | Unpaid */
  paymentStatus?: "Paid" | "Unpaid" | "Pending for approval";
  /** Not Approved | Approved | Blocked | Active | Inactive */
  status?: string;
}

export interface EducationPagination {
  data: Education[];
  pagination: PaginationMeta;
}

export interface CreateEducationDto {
  degree: string;
  schoolName: string;
  /** @format binary */
  documentFile: File;
}

export interface UpdateEducationDto {
  degree?: string;
  schoolName?: string;
  /** @format binary */
  documentFile?: object;
}

export interface DocumentIdsDto {
  fileIds: string[];
}

export interface DocumentPagination {
  data: Document[];
  pagination: PaginationMeta;
}

export interface CreateDocumentDto {
  name: "Passport" | "Training Agreement" | "Travel Insurance" | "CV" | "Cover Letter";
  /** @format binary */
  file: File;
}

export interface UpdateDocumentDto {
  name: "Passport" | "Training Agreement" | "Travel Insurance" | "CV" | "Cover Letter";
  /** @format binary */
  file?: File;
}

export interface BusinessPagination {
  data: Business[];
  pagination: PaginationMeta;
}

export interface CreateBusinessDto {
  /** @format binary */
  logoFile: File;
  /** @format binary */
  certificateFile: File;
  /** @example "My Business" */
  name: string;
  /** @example 420304050607 */
  phone: string;
  /** @example "7211 Jewel Lake Rd" */
  addressLine1: string;
  /** @example "Jewel Lake Rd" */
  addressLine2: string;
  /** @example "Anchorage" */
  city: string;
  /** @example "Alaska" */
  state: string;
  /** @example "United States" */
  country: string;
  /** @example "99502" */
  zip: string;
  /** @example "Education" */
  businessType: string;
  /** @example 10 */
  employeesCount: number;
  description: string;
  /** @example "Office" */
  operationSite: "Office" | "Shop" | "Home";
  /** @example "456 Elm St" */
  nearestBusStop: string;
  /** @example "625 8th Avenue" */
  nextStation: string;
  /** @example "625 8th Avenue" */
  busRoute: string;
  shouldBringLaptop?: boolean;
  howDidYouHearAboutMPACoaching?: string;
  onWhichPlatform?: string;
  officeHasStamp?: boolean;
}

export interface SignedBusinessDto {
  token: string;
  business: Business;
}

export interface BusinessTypeDto {
  types: string[];
}

export interface RootBusinessSignInDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "password" */
  password: string;
}

export interface CodeBasedSignInDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "BUS-1002" */
  code: string;
  /** @example "password" */
  password: string;
}

export interface UpdateBusinessDto {
  name?: string;
  phone?: string;
  /** @format binary */
  logoFile?: File;
  /** @format binary */
  certificateFile?: File;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  businessType?: string;
  employeesCount?: number;
  description?: string;
  operationSite?: "Office" | "Shop" | "Home";
  nearestBusStop?: string;
  nextStation?: string;
  busRoute?: string;
  isArchived?: boolean;
  shouldBringLaptop?: boolean;
  howDidYouHearAboutMPACoaching?: string;
  onWhichPlatform?: string;
  officeHasStamp?: boolean;
}

export interface UpdateBusinessStatusDTO {
  /** @example "Active" */
  status: "Active" | "Blocked" | "Pending For Approval";
}

export interface BusinessArchiveDto {
  /** @example true */
  archive: boolean;
}

export interface OfficeReportingDto {
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
  /** @example "Manager" */
  position: string;
}

export interface Job {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  industryPreference: string;
  desiredInternshipRole: string;
  jobType: string;
  isFareIncluded: boolean;
  isLunchIncluded: boolean;
  isArchived: boolean;
  reportingInformation: OfficeReportingDto;
  whatTimeOfYearAreYouMostLikelyToRequireInterns: string[];
  daysOfWork: string[];
  dailyStartTime: string;
  dailyFinishTime: string;
  /** @default null */
  onWhichPlatform: string;
  status: "Pending For Approval" | "Approved" | "Published" | "Archived" | "Paused" | "Rejected";
  business: Business;
  interns: Student;
}

export interface JobPagination {
  data: Job[];
  pagination: PaginationMeta;
}

export interface JobData {
  matched: Job[];
  matchedCount: number;
  others: Job[];
  othersCount: number;
}

export interface JobIndexDataPagination {
  data: JobData;
  pagination: PaginationMeta;
}

export interface CreateJobDto {
  /** @example "Sr. Software Engineer" */
  title: string;
  /** @example "2025-01-24T13:17:56.616Z" */
  start: string;
  /** @example "2025-01-24T13:17:56.616Z" */
  end: string;
  /** @example "Sr. Software Engineer who knows also databases, creative mind" */
  description: string;
  /** @example "Science and Technology" */
  industryPreference: string;
  /** @example "Sr. Fullstack Developer" */
  desiredInternshipRole: string;
  /** @example "Remote" */
  jobType: string;
  /** @example false */
  isFareIncluded: boolean;
  /** @example false */
  isLunchIncluded: boolean;
  /** @example ["Summer"] */
  whatTimeOfYearAreYouMostLikelyToRequireInterns: string[];
  /** @example ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] */
  daysOfWork: string[];
  /** @example "2025-01-24T13:17:56.617Z" */
  dailyStartTime: string;
  /** @example "2025-01-24T21:17:56.617Z" */
  dailyFinishTime: string;
  /** @example "Facebook" */
  onWhichPlatform?: string;
  reportingInformation: OfficeReportingDto;
}

export interface UpdateJobDto {
  /** @example "Sr. Software Engineer" */
  title?: string;
  /** @example "2025-01-24T13:17:56.706Z" */
  start?: string;
  /** @example "2025-01-24T13:17:56.706Z" */
  end?: string;
  /** @example "Sr. Software Engineer who knows also databases, creative mind" */
  description?: string;
  /** @example "Health and Medicine" */
  industryPreference?: string;
  /** @example "Sr. Fullstack Developer" */
  desiredInternshipRole?: string;
  /** @example "On-site" */
  jobType?: string;
  isFareIncluded?: boolean;
  isLunchIncluded?: boolean;
  /** @example ["Winter"] */
  whatTimeOfYearAreYouMostLikelyToRequireInterns?: string[];
  /** @example ["Monday","Tuesday","Wednesday","Thursday","Friday"] */
  daysOfWork?: string[];
  /** @example "2025-01-24T13:17:56.707Z" */
  dailyStartTime?: string;
  /** @example "2025-01-24T21:17:56.707Z" */
  dailyFinishTime?: string;
  /** @example "LinkedIn" */
  onWhichPlatform?: string;
  reportingInformation?: OfficeReportingDto;
  isArchived?: boolean;
  status?: "Pending For Approval" | "Approved" | "Published" | "Archived" | "Paused" | "Rejected";
}

export interface UpdateJobStatusDTO {
  /** @example "Approved" */
  status: "Pending For Approval" | "Approved" | "Published" | "Archived" | "Paused" | "Rejected";
}

export interface Property {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  name: string;
  type: string;
  city: string;
  location: string;
  areaUnit: string;
  propertySize: number;
  currency: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  kitchen: number;
  garage: string;
  description: string;
  condition: string;
  photos: FileDto[];
  status: string;
  availability: string;
}

export interface Application {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  achievedStatuses: string[];
  student: Student;
  job: Job;
  property: Property;
  status: string;
  agreementUrl: string;
  type: string;
  isCreatedByCompanyInvitation: boolean;
}

export interface ApplicationPagination {
  data: Application[];
  pagination: PaginationMeta;
}

export interface Invitation {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  student: Student;
  job: Job;
  status: "Pending" | "Accepted" | "Rejected" | "Archived";
}

export interface InvitationPagination {
  data: Invitation[];
  pagination: PaginationMeta;
}

export interface CreateApplicationDto {
  jobId?: string | null;
  propertyId?: string | null;
  /** @example "Job" */
  type: "Job" | "Property";
}

export interface UpdateApplicationStatus {
  /** @example "Approved" */
  status?: string;
  /** @example "https://ik.imagekit.io/xf3wbji6t/docx.png?updatedAt=1710992680045" */
  agreementUrl?: string;
}

export interface CreateInvitationDTO {
  /** @example "678253817674a9a4f93cdf31" */
  studentId: string;
  /** @example "678255de091a3496948fee8e" */
  jobId: string;
}

export interface UpdateInvitationDTO {
  /** @example "Accepted" */
  status?: string;
}

export interface PersonalInformationDto {
  /** @example "Mr" */
  title: string;
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
  city: string;
  /** @example "111-1111111-111" */
  contact: string;
  /** @example "+92" */
  countryCode: string;
  /** @example "john@gmail.com" */
  email: string;
  /** @example "123 Maple Street, Apt 4B, Springfield, IL 62701" */
  address: string;
  /** @example "Springfield" */
  town: string;
  /** @example "62701" */
  postalCode: string;
}

export interface LivingInformationDto {
  /**
   * @default null
   * @example "flat"
   */
  residenceType: string;
  /**
   * @default null
   * @example "Bus Route 45, 5-minute walk from the house"
   */
  nearestBusRoute: string;
  /**
   * @default null
   * @example "Springfield Station"
   */
  nearestTubeStation: string;
}

export interface LifestyleAndBackgroundDto {
  /**
   * @default null
   * @example "Software Developer"
   */
  occupation: string;
  /**
   * @default null
   * @example ["Reading","Traveling","Photography"]
   */
  hobbies: string[];
  /**
   * @default null
   * @example "Asian"
   */
  ethnicity: string;
  /**
   * @default null
   * @example "Christian"
   */
  religion: string;
}

export interface PetsTypeAndQuantityDTO {
  /**
   * @default null
   * @example "Dog"
   */
  typeOfPet: string;
  /**
   * @default null
   * @example 2
   */
  numberOfPets: number;
}

export interface PetsAndHouseholdInformationDto {
  /**
   * @default null
   * @example "Yes"
   */
  hasPets: string;
  pets: PetsTypeAndQuantityDTO[];
}

export interface HostChildrenDto {
  /**
   * @default null
   * @example "John"
   */
  name: string;
  /**
   * @default null
   * @example 28
   */
  age?: number;
  /**
   * @default null
   * @example "Male"
   */
  gender: string;
  /**
   * @format date-time
   * @default null
   * @example 23
   */
  dob: string;
  /**
   * @default null
   * @example "Student"
   */
  occupation: string;
  /**
   * @default false
   * @example false
   */
  livingAtHome: string;
}

export interface HostFamilyAndReferralsDto {
  hostFamilyChildren: HostChildrenDto[];
  /**
   * @default null
   * @example "word of mouth"
   */
  sourceOfReferral: string;
}

export interface HostingPreferenceDto {
  /** @example ["Single"] */
  roomTypes: string[];
  /** @example ["Half-Board"] */
  mealPlanOffered: string[];
  /** @example ["Single bed"] */
  roomDescription: string[];
  /**
   * @default null
   * @example "Yes"
   */
  acceptMeatEaters: string;
  /**
   * @default null
   * @example "Yes"
   */
  hasHostingExperience: string;
  /** @example ["Male"] */
  preferredGender: string[];
  /** @example ["Junior 12+","Young Adult 16+"] */
  guestCategoryAccepted: string[];
  /**
   * @default null
   * @example "Checked"
   */
  dbsChecked: string;
  /**
   * @default null
   * @example "Yes"
   */
  canPresentFamilyRules: string;
  /**
   * @default null
   * @example "Yes"
   */
  houseKeyAccess: string;
  /**
   * @default null
   * @example "Yes"
   */
  doesHouseholdSmoke: string;
  /**
   * @default null
   * @example "Yes"
   */
  smokingAllowed: string;
  /**
   * @default null
   * @example "Yes"
   */
  acceptStudentAsFamily: string;
  /**
   * @default null
   * @example "Yes"
   */
  hasCriminalConvictionInHouseHold: string;
  /**
   * @default null
   * @example ["2 Weeks"]
   */
  preferredHostingDuration: string[];
  /**
   * @default null
   * @example ["Flexible working hours"]
   */
  preferredWorkingHoursOption: string[];
}

export interface ReferenceDto {
  /**
   * @default null
   * @example "John Doe"
   */
  fullName?: string;
  /**
   * @default null
   * @example "+1-234-567-890"
   */
  mobileNumber?: string;
  /**
   * @default null
   * @example "john.doe@example.com"
   */
  email?: string;
  /**
   * @default null
   * @example "US"
   */
  countryCode?: string;
}

export interface BankDetailsDto {
  /**
   * @default null
   * @example "John Doe"
   */
  bankAccountHolderName: string;
  /**
   * @default null
   * @example "12345678"
   */
  bankAccountNumber: string;
  /**
   * @default null
   * @example "12-34-56"
   */
  bankSortCode: string;
  /**
   * @default null
   * @example "GB29NWBK60161331926819"
   */
  IBan: string;
  /**
   * @default null
   * @example "NWBKGB2L"
   */
  bicCode: string;
}

export interface DataProtectionDto {
  /**
   * @default "Yes"
   * @example "Yes"
   */
  dataProtectionConsent: string;
  /**
   * @default "Yes"
   * @example "Yes"
   */
  homeStayRulesAcknowledgment: string;
  /**
   * @default "Yes"
   * @example "Yes"
   */
  termsAndConditionsAgreement: string;
}

export interface Host {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  personalInformation: PersonalInformationDto;
  livingArrangements: LivingInformationDto;
  lifeStyleAndBackground: LifestyleAndBackgroundDto;
  petsAndHouseholdInformation: PetsAndHouseholdInformationDto;
  hostFamilyAndReferrals: HostFamilyAndReferralsDto;
  hostingPreference: HostingPreferenceDto;
  references: ReferenceDto[];
  bankDetail: BankDetailsDto;
  dataProtection: DataProtectionDto;
  paymentStatus: "Paid" | "Unpaid";
  planName: string;
  default: boolean;
  status: "Draft" | "Active" | "Blocked" | "Approved" | "Pending For Approval" | "Rejected";
}

export interface HostAuthenticatedDto {
  /** @example "Success Message!" */
  message?: string;
  accessToken?: string;
  user?: AuthUserDto;
  host: Host | null;
}

export interface AuthHost {
  id: string;
  personalInformation: PersonalInformationDto;
  livingArrangements: LivingInformationDto;
  lifeStyleAndBackground: LifestyleAndBackgroundDto;
  petsAndHouseholdInformation: PetsAndHouseholdInformationDto;
  hostFamilyAndReferrals: HostFamilyAndReferralsDto;
  hostingPreference: HostingPreferenceDto;
  references: ReferenceDto[];
  bankDetail: BankDetailsDto;
  dataProtection: DataProtectionDto;
  default: boolean;
  property: Property;
  status: "Draft" | "Active" | "Blocked" | "Approved" | "Pending For Approval" | "Rejected";
  planName: string;
  paymentStatus: "Paid" | "Unpaid";
  createdAt: string;
  updatedAt: string;
}

export interface UpdateHostDto {
  personalInformation?: PersonalInformationDto;
  livingArrangements?: LivingInformationDto;
  lifeStyleAndBackground?: LifestyleAndBackgroundDto;
  petsAndHouseholdInformation?: PetsAndHouseholdInformationDto;
  hostFamilyAndReferrals?: HostFamilyAndReferralsDto;
  hostingPreference?: HostingPreferenceDto;
  references?: ReferenceDto[];
  bankDetail?: BankDetailsDto;
  dataProtection?: DataProtectionDto;
}

export interface HostPagination {
  data: Host[];
  pagination: PaginationMeta;
}

export interface UpdateHostStatusDTO {
  /** @example "Approved" */
  status: "Draft" | "Active" | "Blocked" | "Approved" | "Pending For Approval" | "Rejected";
}

export interface PropertyPagination {
  data: Property[];
  pagination: PaginationMeta;
}

export interface PropertyData {
  matched: Property[];
  matchedCount: number;
  others: Property[];
  othersCount: number;
}

export interface PropertyPaginationWithData {
  data: PropertyData;
  pagination: PaginationMeta;
}

export interface CreatePropertyDto {
  /** @example "Room" */
  type: string;
}

export interface UpdatePropertyDto {
  /** @example "Modern Family House" */
  name?: string;
  /** @example "House" */
  type?: string;
  /** @example "Los Angeles" */
  city?: string;
  /** @example "Downtown" */
  location?: string;
  /** @example "sqft" */
  areaUnit?: string;
  /** @example 20 */
  propertySize?: number;
  /** @example "USD" */
  currency: string;
  /** @example 500000 */
  rent?: number;
  /** @example 3 */
  bedrooms: number;
  /** @example 3 */
  kitchen: number;
  /** @example "Yes" */
  garage: string;
  /** @example 2 */
  bathrooms?: number;
  /** @example "A spacious and modern house with a beautiful garden." */
  description?: string;
  /** @example "New" */
  condition?: string;
}

export interface PatchPropertyStatus {
  /** @example "Approved" */
  status: "Draft" | "Approved" | "Rejected" | "Pending For Approval" | "Paused" | "Published";
}

export interface PropertyAvailabilityStatus {
  /** @example "Rented" */
  status: "Vacant" | "Rented";
}

export interface UpdatePhotosDto {
  photos?: File[];
}

export interface PhotoIdsDto {
  ids: string[];
}

export interface InterviewData {
  matched: Interview[];
  matchedCount: number;
  others: Interview[];
  othersCount: number;
}

export interface InterviewPagination {
  data: InterviewData;
  pagination: PaginationMeta;
}

export interface CreateInterviewDto {
  /** @example "2025-01-05T10:00:00Z" */
  interviewDate: string;
}

export interface LatestInterviewDto {
  interview: Interview | null;
}

export interface AreaDto {
  /** @example 5 */
  width: number;
  /** @example 5 */
  length: number;
  /** @example "square_feet" */
  unit: string;
}

export interface RentPriceDto {
  /** @example 5 */
  price: number;
  /** @example "usd" */
  currency: string;
  /** @example "day" */
  duration: string;
}

export interface RoomAttributesDto {
  /** @example "Drawing Room" */
  name: string;
  area: AreaDto;
  prices: RentPriceDto[];
  availabilityStatus: "Draft" | "Available" | "Occupied" | "Under Maintenance";
}

export interface FeaturesAndAmenitiesDTO {
  /** @example 4 */
  beds: number;
  /** @example "Yes" */
  has_AC: string;
  /** @example "Yes" */
  has_heater: string;
}

export interface AccessibilityAndComplianceDTO {
  /** @example "Yes" */
  wheelchairAccessibleWidths: string;
  /** @example "Yes" */
  elevatorAccess: string;
}

export interface Room {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  attributes: RoomAttributesDto;
  description: string;
  featuresAndAmenities: FeaturesAndAmenitiesDTO;
  accessibilityAndCompliance: AccessibilityAndComplianceDTO;
  photos: FileDto[];
  status: "Draft" | "Available" | "Occupied" | "Under Maintenance";
}

export interface RoomPagination {
  data: Room[];
  pagination: PaginationMeta;
}

export interface CreateRoomDto {
  attributes: RoomAttributesDto;
  propertyId: string;
}

export interface UpdateRoomDto {
  attributes?: RoomAttributesDto;
  /** @example "A well-furnished room with modern amenities, ensuring comfort and convenience for occupants." */
  description?: string;
  featuresAndAmenities?: FeaturesAndAmenitiesDTO;
  accessibilityAndCompliance?: AccessibilityAndComplianceDTO;
}

export interface Tenant {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  /** @format date-time */
  movingDate: string;
  duration: string;
  paymentStatus: "Paid" | "Unpaid";
  contract: string;
}

export interface TenantAuthenticatedDto {
  /** @example "Success Message!" */
  message?: string;
  accessToken?: string;
  user?: AuthUserDto;
  tenant: Tenant | null;
}

export type UpdateTenantDTO = object;

export interface Notification {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  sender: User;
  receiver: User;
  content: string;
  type: string;
  status: string;
}

export interface NotificationPagination {
  data: Notification;
  pagination: PaginationMeta;
}

export interface UpdateNotificationDto {
  /** @example "Read" */
  status?: string;
}

export interface Feedback {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  type: string;
  comment: string;
  user: User;
}

export interface FeedbackData {
  matched: Feedback[];
  matchedCount: number;
  others: Feedback[];
  othersCount: number;
}

export interface FeedbackPagination {
  data: FeedbackData;
  pagination: PaginationMeta;
}

export interface CreateFeedbackDto {
  /** @example "Feedback" */
  type: string;
  /** @example "lorem ipsum dolor sit " */
  comment: string;
}

export interface UpdateFeedbackDto {
  /** @example "Feedback" */
  type: string;
  /** @example "lorem ipsum dolor sit" */
  comment: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title MPA Coaching
 * @version 0.0.20
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags App
   * @name AppControllerIndex
   * @request GET:/
   */
  appControllerIndex = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  health = {
    /**
     * No description
     *
     * @tags App
     * @name AppControllerHelth
     * @request GET:/health
     */
    appControllerHelth: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health`,
        method: "GET",
        ...params,
      }),
  };
  permissions = {
    /**
     * No description
     *
     * @tags Permission
     * @name PermissionControllerIndex
     * @request GET:/permissions
     */
    permissionControllerIndex: (params: RequestParams = {}) =>
      this.request<PermissionGroup[], any>({
        path: `/permissions`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignUp
     * @request POST:/users/sign-up
     */
    userControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/users/sign-up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignIn
     * @request POST:/users/sign-in
     */
    userControllerSignIn: (data: SignInDto, params: RequestParams = {}) =>
      this.request<TokenWithMessageDto, any>({
        path: `/users/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignInWith2FaOtp
     * @request POST:/users/users/2fa-sign-in
     */
    userControllerSignInWith2FaOtp: (data: TwoFAOtpDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/users/users/2fa-sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyEmail
     * @request POST:/users/verify-email
     */
    userControllerVerifyEmail: (data: VerifyEmailDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/verify-email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUnlockAccount
     * @request POST:/users/users/unlock-account
     */
    userControllerUnlockAccount: (data: UnlockAccountDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/users/users/unlock-account`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSendOtp
     * @request POST:/users/send-otp
     */
    userControllerSendOtp: (data: SendOtpDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/send-otp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyOtp
     * @request PATCH:/users/verify-otp
     */
    userControllerVerifyOtp: (data: VerifyOtpDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/verify-otp`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerForgotPassword
     * @request POST:/users/forgot-password
     */
    userControllerForgotPassword: (data: ForgotPasswordDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/forgot-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerResetPassword
     * @request PATCH:/users/reset-password
     */
    userControllerResetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/reset-password`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerChangePassword
     * @request PATCH:/users/change-password
     * @secure
     */
    userControllerChangePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/change-password`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdateProfile
     * @request PATCH:/users/update-profile
     * @secure
     */
    userControllerUpdateProfile: (data: UpdateProfileDto, params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/users/update-profile`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerChangeAvatar
     * @request PATCH:/users/change-avatar
     * @secure
     */
    userControllerChangeAvatar: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<AuthUserDto, any>({
        path: `/users/change-avatar`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetAuth
     * @request GET:/users/auth
     * @secure
     */
    userControllerGetAuth: (params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/users/auth`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerRefreshToken
     * @request POST:/users/refresh-token
     */
    userControllerRefreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerToggleTwoFa
     * @request PATCH:/users/toggle-two-fa
     * @secure
     */
    userControllerToggleTwoFa: (params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/toggle-two-fa`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyTwoFa
     * @request PATCH:/users/two-fa-verification
     * @secure
     */
    userControllerVerifyTwoFa: (data: TwoFAOtpDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/users/two-fa-verification`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignWithGoogle
     * @request GET:/users/sign-in/google
     */
    userControllerSignWithGoogle: (params: RequestParams = {}) =>
      this.request<SocialLoginUrlDto, any>({
        path: `/users/sign-in/google`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGoogleCallBack
     * @request GET:/users/google/callback
     */
    userControllerGoogleCallBack: (
      query: {
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/users/google/callback`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignInWithFacebook
     * @request GET:/users/sign-in/facebook
     */
    userControllerSignInWithFacebook: (params: RequestParams = {}) =>
      this.request<SocialLoginUrlDto, any>({
        path: `/users/sign-in/facebook`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerFacebookCallBack
     * @request GET:/users/facebook/callback
     */
    userControllerFacebookCallBack: (
      query: {
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/users/facebook/callback`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  activityLogs = {
    /**
     * No description
     *
     * @tags Activity Log
     * @name ActivityLogControllerIndex
     * @request GET:/activity-logs
     * @secure
     */
    activityLogControllerIndex: (params: RequestParams = {}) =>
      this.request<ActivityLog[], any>({
        path: `/activity-logs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  admins = {
    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerPatchInterview
     * @request PATCH:/admins/interviews/{id}
     * @secure
     */
    adminControllerPatchInterview: (id: string, data: UpdateInterviewDto, params: RequestParams = {}) =>
      this.request<Interview, any>({
        path: `/admins/interviews/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  students = {
    /**
     * No description
     *
     * @tags Student
     * @name AuthStudentControllerSignUp
     * @request POST:/students/sign-up
     */
    authStudentControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/students/sign-up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name AuthStudentControllerLogin
     * @request POST:/students/sign-in
     */
    authStudentControllerLogin: (data: SignInDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/students/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerGetAuth
     * @request GET:/students/auth
     * @secure
     */
    studentControllerGetAuth: (params: RequestParams = {}) =>
      this.request<AuthStudent, any>({
        path: `/students/auth`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerIndex
     * @request GET:/students
     * @secure
     */
    studentControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        search?: string;
        /** @example [] */
        degrees?: string[];
        /** @example [] */
        jobTypes?: string[];
        /** @example [] */
        industries?: string[];
        /** @example [] */
        roles?: string[];
        /** Yes | No */
        handicapAccessibility?: string;
        /** Not Approved | Approved | Block | Active | InActive */
        status?: string;
        /** Paid | Unpaid */
        paymentStatus?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StudentPagination, any>({
        path: `/students`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerPatchStudent
     * @request PATCH:/students
     * @secure
     */
    studentControllerPatchStudent: (data: UpdateStudentDto, params: RequestParams = {}) =>
      this.request<Student, any>({
        path: `/students`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerIndexing
     * @request GET:/students/indexing
     * @secure
     */
    studentControllerIndexing: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        search?: string;
        /** @example [] */
        degrees?: string[];
        /** @example [] */
        jobTypes?: string[];
        /** @example [] */
        industries?: string[];
        /** @example [] */
        roles?: string[];
        /** Yes | No */
        handicapAccessibility?: string;
        /** Not Approved | Approved | Block | Active | InActive */
        status?: string;
        /** Paid | Unpaid */
        paymentStatus?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StudentDataPagination, any>({
        path: `/students/indexing`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerPatchPaymentInvoice
     * @request PATCH:/students/payment-invoice
     * @secure
     */
    studentControllerPatchPaymentInvoice: (params: RequestParams = {}) =>
      this.request<Student, any>({
        path: `/students/payment-invoice`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerGetStudent
     * @request GET:/students/{id}
     * @secure
     */
    studentControllerGetStudent: (id: string, params: RequestParams = {}) =>
      this.request<Student, any>({
        path: `/students/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerPatchStatus
     * @request PATCH:/students/{id}/statuses
     * @secure
     */
    studentControllerPatchStatus: (id: string, data: PatchStudentStatus, params: RequestParams = {}) =>
      this.request<Student, any>({
        path: `/students/${id}/statuses`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  educations = {
    /**
     * No description
     *
     * @tags Education
     * @name EducationControllerIndex
     * @request GET:/educations
     * @secure
     */
    educationControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        degree?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EducationPagination, any>({
        path: `/educations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name EducationControllerCreate
     * @request POST:/educations
     * @secure
     */
    educationControllerCreate: (data: CreateEducationDto, params: RequestParams = {}) =>
      this.request<Education, any>({
        path: `/educations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name EducationControllerShow
     * @request GET:/educations/{id}
     * @secure
     */
    educationControllerShow: (id: string, params: RequestParams = {}) =>
      this.request<Education, any>({
        path: `/educations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name EducationControllerPatch
     * @request PATCH:/educations/{id}
     * @secure
     */
    educationControllerPatch: (id: string, data: UpdateEducationDto, params: RequestParams = {}) =>
      this.request<Education, any>({
        path: `/educations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name EducationControllerDestroy
     * @request DELETE:/educations/{id}
     * @secure
     */
    educationControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Education, any>({
        path: `/educations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name EducationControllerDestroyDocuments
     * @request DELETE:/educations/{id}/documents
     * @secure
     */
    educationControllerDestroyDocuments: (id: string, data: DocumentIdsDto, params: RequestParams = {}) =>
      this.request<Education, any>({
        path: `/educations/${id}/documents`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  documents = {
    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsControllerIndex
     * @request GET:/documents
     * @secure
     */
    documentsControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentPagination, any>({
        path: `/documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsControllerCreate
     * @request POST:/documents
     * @secure
     */
    documentsControllerCreate: (data: CreateDocumentDto, params: RequestParams = {}) =>
      this.request<Document, any>({
        path: `/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsControllerShow
     * @request GET:/documents/{id}
     * @secure
     */
    documentsControllerShow: (id: string, params: RequestParams = {}) =>
      this.request<Document, any>({
        path: `/documents/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsControllerPatch
     * @request PATCH:/documents/{id}
     * @secure
     */
    documentsControllerPatch: (id: string, data: UpdateDocumentDto, params: RequestParams = {}) =>
      this.request<Document, any>({
        path: `/documents/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsControllerDestroy
     * @request DELETE:/documents/{id}
     * @secure
     */
    documentsControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Document, any>({
        path: `/documents/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  businesses = {
    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerMyBusinesses
     * @request GET:/businesses/my
     * @secure
     */
    businessControllerMyBusinesses: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        name?: string;
        isArchived?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BusinessPagination, any>({
        path: `/businesses/my`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerIndex
     * @request GET:/businesses
     * @secure
     */
    businessControllerIndex: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        name?: string;
        isArchived?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BusinessPagination, any>({
        path: `/businesses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerCreate
     * @request POST:/businesses
     * @secure
     */
    businessControllerCreate: (data: CreateBusinessDto, params: RequestParams = {}) =>
      this.request<SignedBusinessDto, any>({
        path: `/businesses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerBusinessTypes
     * @request GET:/businesses/types
     */
    businessControllerBusinessTypes: (params: RequestParams = {}) =>
      this.request<BusinessTypeDto, any>({
        path: `/businesses/types`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerRootSignIn
     * @request POST:/businesses/root/sign-in
     */
    businessControllerRootSignIn: (data: RootBusinessSignInDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/businesses/root/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerCodeBasedSignIn
     * @request POST:/businesses/code-based-sign-in
     */
    businessControllerCodeBasedSignIn: (data: CodeBasedSignInDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/businesses/code-based-sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerSigned
     * @request GET:/businesses/signed
     * @secure
     */
    businessControllerSigned: (params: RequestParams = {}) =>
      this.request<Business, any>({
        path: `/businesses/signed`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerSign
     * @request GET:/businesses/{id}/sign
     * @secure
     */
    businessControllerSign: (id: string, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/businesses/${id}/sign`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerUpdate
     * @request PATCH:/businesses/{id}
     * @secure
     */
    businessControllerUpdate: (id: string, data: UpdateBusinessDto, params: RequestParams = {}) =>
      this.request<Business, any>({
        path: `/businesses/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerShow
     * @request GET:/businesses/{id}
     * @secure
     */
    businessControllerShow: (id: string, params: RequestParams = {}) =>
      this.request<Business, any>({
        path: `/businesses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerDelete
     * @request DELETE:/businesses/{id}
     * @secure
     */
    businessControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Business, any>({
        path: `/businesses/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerPatchStatus
     * @request PATCH:/businesses/{id}/status
     * @secure
     */
    businessControllerPatchStatus: (id: string, data: UpdateBusinessStatusDTO, params: RequestParams = {}) =>
      this.request<Business, any>({
        path: `/businesses/${id}/status`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerArchive
     * @request PATCH:/businesses/{id}/archive
     * @secure
     */
    businessControllerArchive: (id: string, data: BusinessArchiveDto, params: RequestParams = {}) =>
      this.request<Business, any>({
        path: `/businesses/${id}/archive`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerGetJobs
     * @request GET:/businesses/{id}/jobs
     * @secure
     */
    businessControllerGetJobs: (id: string, params: RequestParams = {}) =>
      this.request<JobPagination, any>({
        path: `/businesses/${id}/jobs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  jobs = {
    /**
     * No description
     *
     * @tags Job
     * @name JobControllerIndex
     * @request GET:/jobs
     * @secure
     */
    jobControllerIndex: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        /** Search by Title or Description */
        search?: string;
        /** Science and Technology | Health and Medicine */
        industries?: string[];
        /** Sr. Fullstack Developer | UI/UX Designer */
        roles?: string[];
        /** Remote | On-site | Hybrid */
        jobTypes?: string[];
        /** @example "2024-12-21T13:17:56.615Z" */
        startDate?: string;
        /** @example "2025-01-24T13:17:56.615Z" */
        endDate?: string;
        isArchived?: boolean;
        businessId?: string;
        studentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JobPagination, any>({
        path: `/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerCreate
     * @request POST:/jobs
     * @secure
     */
    jobControllerCreate: (data: CreateJobDto, params: RequestParams = {}) =>
      this.request<Job, any>({
        path: `/jobs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerJobIndexing
     * @request GET:/jobs/indexing
     * @secure
     */
    jobControllerJobIndexing: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        /** Search by Title or Description */
        search?: string;
        /** Science and Technology | Health and Medicine */
        industries?: string[];
        /** Sr. Fullstack Developer | UI/UX Designer */
        roles?: string[];
        /** Remote | On-site | Hybrid */
        jobTypes?: string[];
        /** @example "2024-12-21T13:17:56.615Z" */
        startDate?: string;
        /** @example "2025-01-24T13:17:56.615Z" */
        endDate?: string;
        isArchived?: boolean;
        businessId?: string;
        studentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JobIndexDataPagination, any>({
        path: `/jobs/indexing`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerShow
     * @request GET:/jobs/{id}
     * @secure
     */
    jobControllerShow: (id: string, params: RequestParams = {}) =>
      this.request<Job, any>({
        path: `/jobs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerUpdate
     * @request PATCH:/jobs/{id}
     * @secure
     */
    jobControllerUpdate: (id: string, data: UpdateJobDto, params: RequestParams = {}) =>
      this.request<Job, any>({
        path: `/jobs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerRemove
     * @request DELETE:/jobs/{id}
     * @secure
     */
    jobControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<Job, any>({
        path: `/jobs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerPatchStatus
     * @request PATCH:/jobs/{id}/statuses
     * @secure
     */
    jobControllerPatchStatus: (id: string, data: UpdateJobStatusDTO, params: RequestParams = {}) =>
      this.request<Job, any>({
        path: `/jobs/${id}/statuses`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerGetApplications
     * @request GET:/jobs/{id}/applications
     * @secure
     */
    jobControllerGetApplications: (
      id: string,
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        /** @example "2024-12-21T13:17:56.912Z" */
        startDate?: string;
        /** @example "2025-01-24T13:17:56.912Z" */
        endDate?: string;
        /**
         * New
         *     | 1st Interview
         *     | 2nd Interview
         *     | Waiting for student
         *     | Pending for approval
         *     | Rejected
         *     | Approved
         */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApplicationPagination, any>({
        path: `/jobs/${id}/applications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerGetInvitations
     * @request GET:/jobs/{id}/invitations
     * @secure
     */
    jobControllerGetInvitations: (id: string, params: RequestParams = {}) =>
      this.request<InvitationPagination, any>({
        path: `/jobs/${id}/invitations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  applications = {
    /**
     * No description
     *
     * @tags Application
     * @name ApplicationControllerIndex
     * @request GET:/applications
     * @secure
     */
    applicationControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        /** @example "2024-12-21T13:17:56.912Z" */
        startDate?: string;
        /** @example "2025-01-24T13:17:56.912Z" */
        endDate?: string;
        /**
         * New
         *     | 1st Interview
         *     | 2nd Interview
         *     | Waiting for student
         *     | Pending for approval
         *     | Rejected
         *     | Approved
         */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApplicationPagination, any>({
        path: `/applications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Application
     * @name ApplicationControllerCreate
     * @request POST:/applications
     * @secure
     */
    applicationControllerCreate: (data: CreateApplicationDto, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Application
     * @name ApplicationControllerGet
     * @request GET:/applications/{id}
     * @secure
     */
    applicationControllerGet: (id: string, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Application
     * @name ApplicationControllerPatch
     * @request PATCH:/applications/{id}
     * @secure
     */
    applicationControllerPatch: (id: string, data: UpdateApplicationStatus, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Application
     * @name ApplicationControllerDestroy
     * @request DELETE:/applications/{id}
     * @secure
     */
    applicationControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  invitations = {
    /**
     * No description
     *
     * @tags Invitation
     * @name InvitationControllerIndex
     * @request GET:/invitations
     * @secure
     */
    invitationControllerIndex: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        status?: "Pending" | "Accepted" | "Rejected" | "Archived";
      },
      params: RequestParams = {},
    ) =>
      this.request<InvitationPagination, any>({
        path: `/invitations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invitation
     * @name InvitationControllerCreate
     * @request POST:/invitations
     * @secure
     */
    invitationControllerCreate: (data: CreateInvitationDTO, params: RequestParams = {}) =>
      this.request<Invitation, any>({
        path: `/invitations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invitation
     * @name InvitationControllerFind
     * @request GET:/invitations/{id}
     * @secure
     */
    invitationControllerFind: (id: string, params: RequestParams = {}) =>
      this.request<Invitation, any>({
        path: `/invitations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invitation
     * @name InvitationControllerPatch
     * @request PATCH:/invitations/{id}
     * @secure
     */
    invitationControllerPatch: (id: string, data: UpdateInvitationDTO, params: RequestParams = {}) =>
      this.request<Invitation, any>({
        path: `/invitations/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invitation
     * @name InvitationControllerDestroy
     * @request DELETE:/invitations/{id}
     * @secure
     */
    invitationControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Invitation, any>({
        path: `/invitations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  hosts = {
    /**
     * No description
     *
     * @tags Host
     * @name HostAuthControllerSignUp
     * @request POST:/hosts/sign-up
     */
    hostAuthControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<HostAuthenticatedDto, any>({
        path: `/hosts/sign-up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostAuthControllerLogin
     * @request POST:/hosts/sign-in
     */
    hostAuthControllerLogin: (data: SignInDto, params: RequestParams = {}) =>
      this.request<HostAuthenticatedDto, any>({
        path: `/hosts/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostAuthControllerGetAuthHost
     * @request GET:/hosts/auth
     * @secure
     */
    hostAuthControllerGetAuthHost: (params: RequestParams = {}) =>
      this.request<AuthHost, any>({
        path: `/hosts/auth`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostAuthControllerPatchDefaultHost
     * @request PATCH:/hosts/default
     * @secure
     */
    hostAuthControllerPatchDefaultHost: (data: UpdateHostDto, params: RequestParams = {}) =>
      this.request<Host, any>({
        path: `/hosts/default`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostControllerIndex
     * @request GET:/hosts
     * @secure
     */
    hostControllerIndex: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        search?: string;
        city?: string;
        ethnicities?: any[][];
        religions?: any[][];
        /** Self Catering | Half-Board | Full-Board */
        mealPlan?: string;
        acceptMeatEaters?: string;
        smokingAllowed?: string;
        hasPets?: string;
        status?: string;
        paymentStatus?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<HostPagination, any>({
        path: `/hosts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostControllerPatchStatus
     * @request PATCH:/hosts/{id}/statuses
     * @secure
     */
    hostControllerPatchStatus: (id: string, data: UpdateHostStatusDTO, params: RequestParams = {}) =>
      this.request<Host, any>({
        path: `/hosts/${id}/statuses`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostControllerGetProperties
     * @request GET:/hosts/{id}/properties
     * @secure
     */
    hostControllerGetProperties: (id: string, params: RequestParams = {}) =>
      this.request<PropertyPagination, any>({
        path: `/hosts/${id}/properties`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  properties = {
    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerIndex
     * @request GET:/properties
     * @secure
     */
    propertyControllerIndex: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        /** House | Flat | Lower Portion | Upper Portion | Room | Farm House | Guest House| Hostel| Pent House */
        types?: any[][];
        cities?: any[];
        minRent?: number;
        maxRent?: number;
        status?: string;
        availability?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PropertyPagination, any>({
        path: `/properties`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerCreate
     * @request POST:/properties
     * @secure
     */
    propertyControllerCreate: (data: CreatePropertyDto, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerIndexing
     * @request GET:/properties/indexing
     * @secure
     */
    propertyControllerIndexing: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        /** House | Flat | Lower Portion | Upper Portion | Room | Farm House | Guest House| Hostel| Pent House */
        types?: any[][];
        cities?: any[];
        minRent?: number;
        maxRent?: number;
        status?: string;
        availability?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PropertyPaginationWithData, any>({
        path: `/properties/indexing`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerFind
     * @request GET:/properties/{id}
     * @secure
     */
    propertyControllerFind: (id: string, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerPatch
     * @request PATCH:/properties/{id}
     * @secure
     */
    propertyControllerPatch: (id: string, data: UpdatePropertyDto, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerDelete
     * @request DELETE:/properties/{id}
     * @secure
     */
    propertyControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerGetPropertyHost
     * @request GET:/properties/{id}/hosts
     * @secure
     */
    propertyControllerGetPropertyHost: (id: string, params: RequestParams = {}) =>
      this.request<UpdateHostDto, any>({
        path: `/properties/${id}/hosts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerUpdateHost
     * @request PATCH:/properties/{id}/hosts
     * @secure
     */
    propertyControllerUpdateHost: (id: string, data: UpdateHostDto, params: RequestParams = {}) =>
      this.request<UpdateHostDto, any>({
        path: `/properties/${id}/hosts`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerPatchStatus
     * @request PATCH:/properties/{id}/statuses
     * @secure
     */
    propertyControllerPatchStatus: (id: string, data: PatchPropertyStatus, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties/${id}/statuses`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerPatchPaymentStatus
     * @request PATCH:/properties/{id}/payment-status
     * @secure
     */
    propertyControllerPatchPaymentStatus: (id: string, data: PropertyAvailabilityStatus, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties/${id}/payment-status`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerPatchImages
     * @request PATCH:/properties/{id}/photos
     * @secure
     */
    propertyControllerPatchImages: (id: string, data: UpdatePhotosDto, params: RequestParams = {}) =>
      this.request<Property, any>({
        path: `/properties/${id}/photos`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerDeletePhotos
     * @request DELETE:/properties/{id}/photos
     * @secure
     */
    propertyControllerDeletePhotos: (id: string, data: PhotoIdsDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/properties/${id}/photos`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  interviews = {
    /**
     * No description
     *
     * @tags Interview
     * @name InterviewControllerIndex
     * @request GET:/interviews
     * @secure
     */
    interviewControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        /** @example "2024-12-21T13:17:58.410Z" */
        startDate?: string;
        /** @example "2025-01-24T13:17:58.410Z" */
        endDate?: string;
        studentId?: string;
        businessId?: string;
        /**
         *
         *     | Scheduled
         *     | Postponed
         *     | Cancelled
         *     | Passed
         *     | Failed
         */
        status?: string;
        /** Admin | Student | Business */
        scheduledWith?: string;
        /** true | false */
        upcoming?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InterviewPagination, any>({
        path: `/interviews`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interview
     * @name InterviewControllerCreateStudentInterview
     * @request POST:/interviews
     * @secure
     */
    interviewControllerCreateStudentInterview: (data: CreateInterviewDto, params: RequestParams = {}) =>
      this.request<Interview, any>({
        path: `/interviews`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interview
     * @name InterviewControllerGetStudentInterview
     * @request GET:/interviews/latest
     * @secure
     */
    interviewControllerGetStudentInterview: (params: RequestParams = {}) =>
      this.request<LatestInterviewDto, any>({
        path: `/interviews/latest`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interview
     * @name InterviewControllerGet
     * @request GET:/interviews/{id}
     * @secure
     */
    interviewControllerGet: (id: string, params: RequestParams = {}) =>
      this.request<Interview, any>({
        path: `/interviews/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interview
     * @name InterviewControllerPatch
     * @request PATCH:/interviews/{id}
     * @secure
     */
    interviewControllerPatch: (id: string, data: UpdateInterviewDto, params: RequestParams = {}) =>
      this.request<Interview, any>({
        path: `/interviews/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Interview
     * @name InterviewControllerDestroy
     * @request DELETE:/interviews/{id}
     * @secure
     */
    interviewControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Interview, any>({
        path: `/interviews/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  rooms = {
    /**
     * No description
     *
     * @tags Room
     * @name RoomControllerIndex
     * @request GET:/rooms
     * @secure
     */
    roomControllerIndex: (
      query?: {
        /** @example 1 */
        page?: number;
        /** @example 10 */
        limit?: number;
        name?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RoomPagination, any>({
        path: `/rooms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Room
     * @name RoomControllerCreate
     * @request POST:/rooms
     * @secure
     */
    roomControllerCreate: (data: CreateRoomDto, params: RequestParams = {}) =>
      this.request<Room, any>({
        path: `/rooms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Room
     * @name RoomControllerGet
     * @request GET:/rooms/{id}
     * @secure
     */
    roomControllerGet: (id: string, params: RequestParams = {}) =>
      this.request<Room, any>({
        path: `/rooms/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Room
     * @name RoomControllerUpdate
     * @request PATCH:/rooms/{id}
     * @secure
     */
    roomControllerUpdate: (id: string, data: UpdateRoomDto, params: RequestParams = {}) =>
      this.request<Room, any>({
        path: `/rooms/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Room
     * @name RoomControllerPatchPhotos
     * @request PATCH:/rooms/{id}/photos
     * @secure
     */
    roomControllerPatchPhotos: (id: string, data: UpdatePhotosDto, params: RequestParams = {}) =>
      this.request<Room, any>({
        path: `/rooms/${id}/photos`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Room
     * @name RoomControllerDeletePhotos
     * @request DELETE:/rooms/{id}/photos
     * @secure
     */
    roomControllerDeletePhotos: (id: string, data: PhotoIdsDto, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/rooms/${id}/photos`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sandboxes = {
    /**
     * No description
     *
     * @tags Sandbox
     * @name SandboxControllerCreate
     * @request POST:/sandboxes/users
     */
    sandboxControllerCreate: (
      query: {
        /** @example "51QEkjgFT171SaOwuTOIIthE" */
        key: string;
      },
      data: SignUpDto,
      params: RequestParams = {},
    ) =>
      this.request<MessageDto, any>({
        path: `/sandboxes/users`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sandbox
     * @name SandboxControllerDestroy
     * @request DELETE:/sandboxes/users/{id}
     */
    sandboxControllerDestroy: (
      id: string,
      query: {
        /** @example "51QEkjgFT171SaOwuTOIIthE" */
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MessageDto, any>({
        path: `/sandboxes/users/${id}`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  tenants = {
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantAuthControllerSign
     * @request POST:/tenants/sign
     * @secure
     */
    tenantAuthControllerSign: (params: RequestParams = {}) =>
      this.request<TenantAuthenticatedDto, any>({
        path: `/tenants/sign`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenants
     * @name TenantControllerPatchDefault
     * @request PATCH:/tenants/default
     */
    tenantControllerPatchDefault: (data: UpdateTenantDTO, params: RequestParams = {}) =>
      this.request<Tenant, any>({
        path: `/tenants/default`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenants
     * @name TenantControllerGetDefaultHost
     * @request GET:/tenants/default
     */
    tenantControllerGetDefaultHost: (params: RequestParams = {}) =>
      this.request<Tenant, any>({
        path: `/tenants/default`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerIndex
     * @request GET:/notifications
     * @secure
     */
    notificationControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        startDate?: string;
        /** @example "2025-01-24T13:17:58.613Z" */
        endDate?: string;
        /** true | false */
        receiver?: string;
        /**
         * true | false
         * @example "true"
         */
        sender?: string;
        /** Read | Unread | Archived */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<NotificationPagination, any>({
        path: `/notifications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerGet
     * @request GET:/notifications/{id}
     * @secure
     */
    notificationControllerGet: (id: string, params: RequestParams = {}) =>
      this.request<Notification, any>({
        path: `/notifications/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerPatch
     * @request PATCH:/notifications/{id}
     * @secure
     */
    notificationControllerPatch: (id: string, data: UpdateNotificationDto, params: RequestParams = {}) =>
      this.request<Notification, any>({
        path: `/notifications/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerDestroy
     * @request DELETE:/notifications/{id}
     * @secure
     */
    notificationControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Notification, any>({
        path: `/notifications/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  feedback = {
    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerIndex
     * @request GET:/feedback
     * @secure
     */
    feedbackControllerIndex: (
      query: {
        /** @example 1 */
        page: number;
        /** @example 10 */
        limit: number;
        /** @example "2024-12-21T13:17:58.520Z" */
        startDate?: string;
        /** @example "2025-01-24T13:17:58.520Z" */
        endDate?: string;
        /** @example "Feedback" */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FeedbackPagination, any>({
        path: `/feedback`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerCreateStudentFeedback
     * @request POST:/feedback
     * @secure
     */
    feedbackControllerCreateStudentFeedback: (data: CreateFeedbackDto, params: RequestParams = {}) =>
      this.request<Feedback, any>({
        path: `/feedback`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerGet
     * @request GET:/feedback/{id}
     * @secure
     */
    feedbackControllerGet: (id: string, params: RequestParams = {}) =>
      this.request<Feedback, any>({
        path: `/feedback/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerPatch
     * @request PATCH:/feedback/{id}
     * @secure
     */
    feedbackControllerPatch: (id: string, data: UpdateFeedbackDto, params: RequestParams = {}) =>
      this.request<Feedback, any>({
        path: `/feedback/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feedback
     * @name FeedbackControllerDestroy
     * @request DELETE:/feedback/{id}
     * @secure
     */
    feedbackControllerDestroy: (id: string, params: RequestParams = {}) =>
      this.request<Feedback, any>({
        path: `/feedback/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
