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

export interface SignInDto {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Admin@123" */
  password: string;
}

export interface FileDto {
  /** Id of the file */
  id: string;
  /** url of the file */
  url: string;
  /** path of the file */
  filePath: string;
  /** name of the file */
  name: string;
  /** type of the file */
  fileType: string;
}

export interface User {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  profileImage: FileDto;
  /**
   * Username of the user
   * @example "john_doe"
   */
  fullName: string;
  /**
   * Email address of the user
   * @example "john.doe@example.com"
   */
  email: string;
  /**
   * Password of the user (hidden)
   * @example "strong_password123"
   */
  password: string;
  /**
   * Role of the user
   * @example "Admin"
   */
  role: "Admin" | "District Officer" | "Recruiter" | "Candidate";
  /**
   * Timestamp when the user was created
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * Is Profile Completed
   * @example true
   */
  isActive: boolean;
  /**
   * Timestamp when the user was last updated
   * @format date-time
   * @example "2023-01-02T00:00:00.000Z"
   */
  updatedAt: string;
  /**
   * Version key (hidden)
   * @example 0
   */
  __v: number;
}

export interface AuthUserDto {
  user: User;
  accessToken: string;
}

export interface SignUpDto {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Admin@123" */
  password: string;
  /** @default "Admin@123" */
  confirmPassword: string;
  fullName: string;
}

export interface ForgotPasswordDTO {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Forgot Password" */
  type: string;
}

export interface VerifyOtpDTO {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Forgot Password" */
  type: string;
  /** @default 535443 */
  otp: string;
}

export type MessageDto = object;

export interface ResetPasswordDTO {
  /** @default "admin@example.com" */
  email: string;
  /** @default 535443 */
  otp: string;
  /** @default "Admin@123" */
  password: string;
  /** @default "Admin@123" */
  confirmPassword: string;
}

export interface CreateInquiryDto {
  username: string;
  email: string;
  query: string;
  subject: string;
  phone: string;
  type: string;
}

export interface UpdateInquiryDto {
  message: string;
}

export interface CreatePersonalInfoDto {
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  father_name: string;
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  district: string;
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  cnic: string;
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  gender: string;
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  marital_status: string;
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  religion: string;
}

export interface Address {
  /**
   * Permanent residential address
   * @example "House 123, Street 4, Lahore"
   */
  permanent: string;
  /**
   * Current living address
   * @example "Hostel Block B, Punjab University"
   */
  present: string;
}

export interface EmergencyContact {
  /**
   * Name of the emergency contact person
   * @example "Ahmed Khan"
   */
  name: string;
  /**
   * Relation to the candidate
   * @example "Brother"
   */
  relation: string;
  /**
   * Phone number of the emergency contact
   * @example "03001234567"
   */
  contact: string;
}

export interface Contact {
  /**
   * District of the candidate
   * @example "Multan"
   */
  district: string;
  /**
   * Phone number of the candidate
   * @example "03123456789"
   */
  phone: string;
  /** Emergency contact details */
  emergency_contact: EmergencyContact;
}

export interface EducationLevel {
  /**
   * Name of the examination board
   * @example "Lahore Board"
   */
  board: string;
  /**
   * Year of passing the exam
   * @example 2019
   */
  passing_year: number;
  /**
   * Percentage marks obtained
   * @example 85.5
   */
  marks_percentage: number;
}

export interface Education {
  matric: EducationLevel;
  intermediate: EducationLevel;
}

export interface Chest {
  /**
   * Unexpanded chest size in cm
   * @example 85
   */
  unexpanded: number;
  /**
   * Expanded chest size in cm
   * @example 90
   */
  expanded: number;
}

export interface PhysicalInfo {
  /**
   * Height in centimeters
   * @example 175
   */
  height_cm: number;
  /**
   * Weight in kilograms
   * @example 70
   */
  weight_kg: number;
  /** Chest measurements in cm */
  chest_cm: Chest;
  /**
   * Vision of the candidate
   * @example "6/6"
   */
  vision: string;
  /**
   * Blood group of the candidate
   * @example "B+"
   */
  blood_group: string;
}

export interface Documents {
  cnic: FileDto;
  matric_certificate: FileDto;
  inter_certificate: FileDto;
  domicile: FileDto;
  character_certificate: FileDto;
  medical_certificate: FileDto;
  photo: FileDto;
}

export interface Candidate {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Father's name of the candidate
   * @example "Rashid Khan"
   */
  father_name: string;
  /**
   * CNIC of the candidate
   * @example "35202-1234567-1"
   */
  cnic: string;
  /**
   * Date of birth
   * @format date-time
   * @example "2001-06-15"
   */
  dob: string;
  /**
   * Gender of the candidate
   * @example "Male"
   */
  gender: string;
  /**
   * Marital status
   * @example "Single"
   */
  marital_status: string;
  /**
   * Religion of the candidate
   * @example "Islam"
   */
  religion: string;
  /**
   * District of the candidate
   * @example "Multan"
   */
  district: string;
  address: Address;
  contact: Contact;
  education: Education;
  physical_info: PhysicalInfo;
  /** @default null */
  documents: Documents;
  /** Reference to the associated user account */
  user: User;
}

export interface CreateJobDto {
  /**
   * Job title
   * @example "Junior Constable"
   */
  title: string;
  /**
   * Job description
   * @example "Job description here..."
   */
  description?: string;
  /**
   * Number of vacancies
   * @example 1
   */
  vacancies: number;
  /**
   * BPS (Basic Pay Scale)
   * @example 7
   */
  bps: number;
  /** @example "male" */
  gender: "male" | "female";
  /**
   * Minimum age requirement
   * @example 18
   */
  age_min: number;
  /**
   * Maximum age requirement
   * @example 25
   */
  age_max: number;
  /**
   * Minimum height for male in cm
   * @example 170
   */
  height_male?: number;
  /**
   * Minimum height for female in cm
   * @example 158
   */
  height_female?: number;
  /**
   * Chest measurement for male
   * @example "33x34.5"
   */
  chest_male?: string;
  /**
   * Chest measurement for female
   * @example ""
   */
  chest_female?: string;
  /**
   * Minimum education requirement
   * @example "Matric"
   */
  education?: string;
  /**
   * Application deadline
   * @format date-time
   * @example "2025-12-31"
   */
  application_deadline?: string;
  /**
   * Posting date
   * @format date-time
   * @example "2025-05-18"
   */
  posting_date: string;
  /**
   * Application fee amount
   * @example 0
   */
  application_fee: number;
  /**
   * Terms and conditions
   * @example "Terms and conditions text"
   */
  terms_and_conditions?: string;
}

export interface Job {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Job title
   * @example "Junior Constable"
   */
  title: string;
  /**
   * Job description
   * @example "Job description here..."
   */
  description?: string;
  /**
   * Number of vacancies
   * @example 1
   */
  vacancies: number;
  /**
   * BPS (Basic Pay Scale)
   * @example 7
   */
  bps: number;
  /** @example "Male" */
  gender: string;
  /**
   * Minimum age requirement
   * @example 18
   */
  age_min: number;
  /**
   * Maximum age requirement
   * @example 25
   */
  age_max: number;
  /**
   * Minimum height for male in cm
   * @example 170
   */
  height_male?: number;
  /**
   * Minimum height for female in cm
   * @example 158
   */
  height_female?: number;
  /**
   * Chest measurement for male
   * @example "33x34.5"
   */
  chest_male?: string;
  /**
   * Chest measurement for female
   * @example ""
   */
  chest_female?: string;
  /**
   * Minimum education requirement
   * @example "Matric"
   */
  education?: string;
  /**
   * Application deadline
   * @format date-time
   * @example "2025-12-31"
   */
  application_deadline?: string;
  /**
   * Posting date
   * @format date-time
   * @example "2025-05-18"
   */
  posting_date: string;
  /**
   * Application fee amount
   * @example 0
   */
  application_fee: number;
  /**
   * Terms and conditions
   * @example "Terms and conditions text"
   */
  terms_and_conditions?: string;
}

export interface UpdateJobDto {
  /**
   * Job title
   * @example "Junior Constable"
   */
  title?: string;
  /**
   * Job description
   * @example "Job description here..."
   */
  description?: string;
  /**
   * Number of vacancies
   * @example 1
   */
  vacancies?: number;
  /**
   * BPS (Basic Pay Scale)
   * @example 7
   */
  bps?: number;
  /** @example "male" */
  gender?: "male" | "female";
  /**
   * Minimum age requirement
   * @example 18
   */
  age_min?: number;
  /**
   * Maximum age requirement
   * @example 25
   */
  age_max?: number;
  /**
   * Minimum height for male in cm
   * @example 170
   */
  height_male?: number;
  /**
   * Minimum height for female in cm
   * @example 158
   */
  height_female?: number;
  /**
   * Chest measurement for male
   * @example "33x34.5"
   */
  chest_male?: string;
  /**
   * Chest measurement for female
   * @example ""
   */
  chest_female?: string;
  /**
   * Minimum education requirement
   * @example "Matric"
   */
  education?: string;
  /**
   * Application deadline
   * @format date-time
   * @example "2025-12-31"
   */
  application_deadline?: string;
  /**
   * Posting date
   * @format date-time
   * @example "2025-05-18"
   */
  posting_date?: string;
  /**
   * Application fee amount
   * @example 0
   */
  application_fee?: number;
  /**
   * Terms and conditions
   * @example "Terms and conditions text"
   */
  terms_and_conditions?: string;
}

export interface CreateDistrictOfficerDto {
  /**
   * Phone number
   * @example "Sami"
   */
  name: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  email: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  phone: string;
  /**
   * CNIC number
   * @example "35202-1234567-8"
   */
  cnic: string;
  /**
   * Gender
   * @example "male"
   */
  gender: "male" | "female" | "other";
  /**
   * Address
   * @example "123 Street, City"
   */
  address?: string;
  /**
   * District
   * @example "Lahore"
   */
  district?: string;
  /**
   * Qualification
   * @example "Masters in Public Administration"
   */
  qualification?: string;
  /**
   * Experience
   * @example "5 years experience in law enforcement"
   */
  experience?: string;
}

export interface DistrictOfficer {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Contact phone number
   * @example "03001234567"
   */
  phone: string;
  /**
   * Unique CNIC number
   * @example "35202-1234567-8"
   */
  cnic: string;
  /**
   * Gender
   * @example "male"
   */
  gender: "male" | "female" | "other";
  /**
   * Residential address
   * @example "123 Street, Lahore"
   */
  address?: string;
  /**
   * District name
   * @example "Lahore"
   */
  district?: string;
  /**
   * Highest qualification
   * @example "Masters in Public Administration"
   */
  qualification?: string;
  /**
   * Experience details
   * @example "5 years in law enforcement"
   */
  experience?: string;
  /** Reference to the User who owns this */
  user: User;
}

export interface UpdateDistrictOfficerDto {
  /**
   * Phone number
   * @example "Sami"
   */
  name?: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  email?: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  phone?: string;
  /**
   * CNIC number
   * @example "35202-1234567-8"
   */
  cnic?: string;
  /**
   * Gender
   * @example "male"
   */
  gender?: "male" | "female" | "other";
  /**
   * Address
   * @example "123 Street, City"
   */
  address?: string;
  /**
   * District
   * @example "Lahore"
   */
  district?: string;
  /**
   * Qualification
   * @example "Masters in Public Administration"
   */
  qualification?: string;
  /**
   * Experience
   * @example "5 years experience in law enforcement"
   */
  experience?: string;
}

export interface CreateRecruiterDto {
  /**
   * Phone number
   * @example "03001234567"
   */
  email: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  name: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  phone: string;
  /**
   * CNIC number
   * @example "35202-1234567-8"
   */
  cnic: string;
  /**
   * Gender
   * @example "male"
   */
  gender: "male" | "female" | "other";
  /**
   * Address
   * @example "123 Street, Lahore"
   */
  address: string;
  /**
   * Qualification
   * @example "Bachelor’s in Criminology"
   */
  qualification: string;
  /**
   * District
   * @example "Lahore"
   */
  district: string;
}

export interface Recruiter {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Phone number of the recruiter
   * @example "03001234567"
   */
  phone: string;
  /**
   * CNIC number
   * @example "35202-1234567-8"
   */
  cnic: string;
  /**
   * Gender
   * @example "male"
   */
  gender: "male" | "female" | "other";
  /**
   * Address of the recruiter
   * @example "123 Street, Lahore"
   */
  address?: string;
  /**
   * Educational qualification
   * @example "Bachelor’s in Criminology"
   */
  qualification?: string;
  /**
   * District assigned to the recruiter
   * @example "Lahore"
   */
  district?: string;
  /** Reference to the associated user account */
  user: User;
}

export interface CreateApplicationDto {
  candidate: string;
  job: string;
}

export interface Application {
  /**
   * Unique identifier of the job
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Status of the job
   * @example "Data Verification"
   */
  status: "Data Verification" | "Physical Test" | "Running" | "Written Test" | "Interview" | "Rejected" | "Selected";
  /** Reference to the candidate account */
  candidate: Candidate;
  /** Reference to the Job */
  job: Job;
}

export interface ApplicationUpdateDto {
  status: string;
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
 * @title Punjab Police Job Portal API
 * @version 1.0
 * @contact
 *
 * API documentation for Punjab Police Job Portal
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags App
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  auth = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignIn
     * @request POST:/auth/sign-in
     */
    userControllerSignIn: (data: SignInDto, params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/auth/sign-in`,
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
     * @name UserControllerSignUp
     * @request POST:/auth/sign-up
     */
    userControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/auth/sign-up`,
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
     * @name UserControllerForgotPassword
     * @request POST:/auth/forgot-password
     */
    userControllerForgotPassword: (data: ForgotPasswordDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyOtp
     * @request POST:/auth/verify-otp
     */
    userControllerVerifyOtp: (data: VerifyOtpDTO, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/auth/verify-otp`,
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
     * @request POST:/auth/reset-password
     */
    userControllerResetPassword: (data: ResetPasswordDTO, params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/auth/reset-password`,
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
     * @name UserControllerAuthUser
     * @request GET:/auth/auth-user
     * @secure
     */
    userControllerAuthUser: (data: SignInDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/auth-user`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdateProfile
     * @request PATCH:/auth/update-profile/{id}
     */
    userControllerUpdateProfile: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/update-profile/${id}`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUploadImage
     * @request POST:/auth/upload
     */
    userControllerUploadImage: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/upload`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUploadProfileImage
     * @request POST:/auth/upload-profile
     */
    userControllerUploadProfileImage: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/upload-profile`,
        method: "POST",
        ...params,
      }),
  };
  inquiry = {
    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerCreateInquiry
     * @request POST:/inquiry
     */
    inquiryControllerCreateInquiry: (data: CreateInquiryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerGetInquiries
     * @request GET:/inquiry
     */
    inquiryControllerGetInquiries: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerGetInquiryById
     * @request GET:/inquiry/{id}
     */
    inquiryControllerGetInquiryById: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerUpdateInquiry
     * @request PATCH:/inquiry/{id}
     */
    inquiryControllerUpdateInquiry: (id: string, data: UpdateInquiryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerDeleteInquiry
     * @request DELETE:/inquiry/{id}
     */
    inquiryControllerDeleteInquiry: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  images = {
    /**
     * No description
     *
     * @tags Image
     * @name ImageControllerStore
     * @request POST:/images
     */
    imageControllerStore: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/images`,
        method: "POST",
        ...params,
      }),
  };
  candidates = {
    /**
     * No description
     *
     * @tags Candidates
     * @name CandidateControllerCreate
     * @summary Create a new candidate application
     * @request POST:/candidates
     * @secure
     */
    candidateControllerCreate: (data: CreatePersonalInfoDto, params: RequestParams = {}) =>
      this.request<Candidate, any>({
        path: `/candidates`,
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
     * @tags Candidates
     * @name CandidateControllerFindAll
     * @summary Get all candidates
     * @request GET:/candidates
     * @secure
     */
    candidateControllerFindAll: (params: RequestParams = {}) =>
      this.request<Candidate[], any>({
        path: `/candidates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Candidates
     * @name CandidateControllerFindOne
     * @summary Get a candidate by ID
     * @request GET:/candidates/{id}
     * @secure
     */
    candidateControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Candidate, void>({
        path: `/candidates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Candidates
     * @name CandidateControllerUpdate
     * @summary Update a candidate
     * @request PATCH:/candidates/{id}
     * @secure
     */
    candidateControllerUpdate: (id: string, data: Candidate, params: RequestParams = {}) =>
      this.request<Candidate, void>({
        path: `/candidates/${id}`,
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
     * @tags Candidates
     * @name CandidateControllerRemove
     * @summary Delete a candidate
     * @request DELETE:/candidates/{id}
     * @secure
     */
    candidateControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/candidates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Candidates
     * @name CandidateControllerByUser
     * @summary Get a Candidate  by user ID
     * @request GET:/candidates/user/{userId}
     * @secure
     */
    candidateControllerByUser: (userId: string, params: RequestParams = {}) =>
      this.request<Candidate, any>({
        path: `/candidates/user/${userId}`,
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
     * @tags jobs
     * @name JobsControllerCreate
     * @summary Create a new job posting
     * @request POST:/jobs
     */
    jobsControllerCreate: (data: CreateJobDto, params: RequestParams = {}) =>
      this.request<Job, any>({
        path: `/jobs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerFindAll
     * @summary Get all jobs or filter by title
     * @request GET:/jobs
     */
    jobsControllerFindAll: (
      query?: {
        /**
         * Filter jobs by title
         * @example "Junior Constable"
         */
        title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Job[], any>({
        path: `/jobs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerFindOne
     * @summary Get job by ID
     * @request GET:/jobs/{id}
     */
    jobsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Job, void>({
        path: `/jobs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerUpdate
     * @summary Update job by ID
     * @request PATCH:/jobs/{id}
     */
    jobsControllerUpdate: (id: string, data: UpdateJobDto, params: RequestParams = {}) =>
      this.request<Job, void>({
        path: `/jobs/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerRemove
     * @summary Delete job by ID
     * @request DELETE:/jobs/{id}
     */
    jobsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/jobs/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  districtOfficers = {
    /**
     * No description
     *
     * @tags District Officers
     * @name DistrictOfficerControllerCreate
     * @summary Create a new district officer
     * @request POST:/district-officers
     */
    districtOfficerControllerCreate: (data: CreateDistrictOfficerDto, params: RequestParams = {}) =>
      this.request<DistrictOfficer, any>({
        path: `/district-officers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags District Officers
     * @name DistrictOfficerControllerFindAll
     * @summary Get all district officers with optional filters
     * @request GET:/district-officers
     */
    districtOfficerControllerFindAll: (
      query?: {
        /**
         * CNIC number
         * @example "35202-1234567-8"
         */
        cnic?: string;
        /**
         * District name
         * @example "Multan"
         */
        district?: string;
        /**
         * Full name of the district officer
         * @example "Sami Ullah"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DistrictOfficer[], any>({
        path: `/district-officers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags District Officers
     * @name DistrictOfficerControllerFindOne
     * @summary Get a district officer by ID
     * @request GET:/district-officers/{id}
     */
    districtOfficerControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<DistrictOfficer, any>({
        path: `/district-officers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags District Officers
     * @name DistrictOfficerControllerUpdate
     * @summary Update a district officer by ID
     * @request PATCH:/district-officers/{id}
     */
    districtOfficerControllerUpdate: (id: string, data: UpdateDistrictOfficerDto, params: RequestParams = {}) =>
      this.request<DistrictOfficer, any>({
        path: `/district-officers/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags District Officers
     * @name DistrictOfficerControllerRemove
     * @summary Delete a district officer by ID
     * @request DELETE:/district-officers/{id}
     */
    districtOfficerControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/district-officers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags District Officers
     * @name DistrictOfficerControllerByUser
     * @summary Get a district officer  by user ID
     * @request GET:/district-officers/user/{userId}
     */
    districtOfficerControllerByUser: (userId: string, params: RequestParams = {}) =>
      this.request<DistrictOfficer, any>({
        path: `/district-officers/user/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  recruiters = {
    /**
     * No description
     *
     * @tags Recruiters
     * @name RecruiterControllerCreate
     * @summary Create a new recruiter
     * @request POST:/recruiters
     */
    recruiterControllerCreate: (data: CreateRecruiterDto, params: RequestParams = {}) =>
      this.request<Recruiter, any>({
        path: `/recruiters`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recruiters
     * @name RecruiterControllerGetAll
     * @summary Get all recruiters with optional filters
     * @request GET:/recruiters
     */
    recruiterControllerGetAll: (
      query?: {
        /**
         * District
         * @example "Lahore"
         */
        district?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Recruiter[], any>({
        path: `/recruiters`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recruiters
     * @name RecruiterControllerGetById
     * @summary Get a recruiter by ID
     * @request GET:/recruiters/{id}
     */
    recruiterControllerGetById: (id: string, params: RequestParams = {}) =>
      this.request<Recruiter, any>({
        path: `/recruiters/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recruiters
     * @name RecruiterControllerUpdate
     * @summary Update a recruiter by ID
     * @request PATCH:/recruiters/{id}
     */
    recruiterControllerUpdate: (id: string, data: CreateRecruiterDto, params: RequestParams = {}) =>
      this.request<Recruiter, any>({
        path: `/recruiters/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recruiters
     * @name RecruiterControllerDelete
     * @summary Delete a recruiter by ID
     * @request DELETE:/recruiters/{id}
     */
    recruiterControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/recruiters/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recruiters
     * @name RecruiterControllerGetRecruiterByUser
     * @summary Get a recruiter by user ID
     * @request GET:/recruiters/user/{userId}
     */
    recruiterControllerGetRecruiterByUser: (userId: string, params: RequestParams = {}) =>
      this.request<Recruiter, any>({
        path: `/recruiters/user/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  applications = {
    /**
     * No description
     *
     * @tags Applications
     * @name ApplicationControllerCreate
     * @summary Create a new application
     * @request POST:/applications
     */
    applicationControllerCreate: (data: CreateApplicationDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/applications`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Applications
     * @name ApplicationControllerFindAll
     * @summary Get all applications
     * @request GET:/applications
     */
    applicationControllerFindAll: (
      query?: {
        /** Filter applications by district */
        district?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Application[], any>({
        path: `/applications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Applications
     * @name ApplicationControllerFindOne
     * @summary Get application by ID
     * @request GET:/applications/{id}
     */
    applicationControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applications/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Applications
     * @name ApplicationControllerUpdate
     * @summary Update application by ID
     * @request PATCH:/applications/{id}
     */
    applicationControllerUpdate: (id: string, data: ApplicationUpdateDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applications/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Applications
     * @name ApplicationControllerRemove
     * @summary Delete application by ID
     * @request DELETE:/applications/{id}
     */
    applicationControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applications/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Applications
     * @name ApplicationControllerFindApplicationsByCandidate
     * @summary Get application by User Id
     * @request GET:/applications/candidate/{candidateId}
     */
    applicationControllerFindApplicationsByCandidate: (candidateId: string, params: RequestParams = {}) =>
      this.request<Application[], void>({
        path: `/applications/candidate/${candidateId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
