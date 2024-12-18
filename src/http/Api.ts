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
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
}

export interface VerifyEmailDto {
  /** @default "example@example.com" */
  email?: string;
  otp: string;
  /** @example "Email Verification" */
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
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
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
}

export interface SendOtpDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example "Reset Password" */
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
}

export interface VerifyOtpDto {
  /** @default "example@example.com" */
  email?: string;
  /** @example 123456 */
  otp: string;
  /** @example "Email Verification" */
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
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
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
  password: string;
  confirm_password: string;
}

export interface ChangePasswordDto {
  oldPassowrd: string;
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
  type:
    | "Reset Password"
    | "Email Verification"
    | "Two Factor Authentication"
    | "Account Unlock";
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
}

export interface PaginationMeta {
  page: number;
  limit: number;
  pages: number;
  records: number;
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

export interface BusinessArchiveDto {
  /** @example true */
  archive: boolean;
}

export interface OfficeReportingDto {
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
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
}

export interface JobPagination {
  data: Job[];
  pagination: PaginationMeta;
}

export interface CreateJobDto {
  title: string;
  description: string;
  /** @example false */
  isFareIncluded: boolean;
  /** @example false */
  isLunchIncluded: boolean;
  whatTimeOfYearAreYouMostLikelyToRequireInterns: string[];
  daysOfWork: string[];
  dailyStartTime: string;
  dailyFinishTime: string;
  onWhichPlatform?: string;
  reportingInformation: OfficeReportingDto;
}

export interface UpdateJobDto {
  title?: string;
  description?: string;
  isFareIncluded?: boolean;
  isLunchIncluded?: boolean;
  whatTimeOfYearAreYouMostLikelyToRequireInterns?: string[];
  daysOfWork?: string[];
  dailyStartTime?: string;
  dailyFinishTime?: string;
  onWhichPlatform?: string;
  reportingInformation?: OfficeReportingDto;
  isArchived?: boolean;
}

export interface PersonalInformationDto {
  /** @example "Mr" */
  title: string;
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
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

export interface PetsAndHouseholdInformationDto {
  /**
   * @default null
   * @example "Yes"
   */
  hasPets: string;
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
  /**
   * @default false
   * @example false
   */
  fullyVaccinated: string;
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
  roomType: string[];
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
  smokingAllowed: string[];
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
   * @example "Flexible working hours"
   */
  preferredWorkingHoursOption: string;
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
  status: string;
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
  propertySize: number;
  areaUnit: string;
  propertyArea: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  condition: string;
  photos: IImage[];
  status: string;
  kitchen: number;
  garage: string;
  host: Host;
}

export interface IImage {
  fileId: string;
  url: string;
}

export interface PropertyPagination {
  data: Property[];
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
  /** @example 20 */
  propertySize?: number;
  /** @example "sqft" */
  areaUnit?: string;
  /** @example 500000 */
  price?: number;
  /** @example "Pk" */
  currency: string;
  /** @example 3 */
  bedrooms: number;
  /** @example 2 */
  bathrooms?: number;
  /** @example "A spacious and modern house with a beautiful garden." */
  description?: string;
  /** @example "New" */
  condition?: string;
  /** @example 2 */
  kitchen?: number;
  /** @example "Yes" */
  garage?: string;
}

export interface UpdatePhotosDto {
  photos?: File[];
}

export interface PhotoIdsDto {
  /** @example ["67541893e375273f6020bc49","67541892e375273f6020baea"] */
  ids: any[];
}

export interface ReferenceDto {
  /**
   * @default null
   * @example "John Doe"
   */
  fullName: string;
  /**
   * @default null
   * @example "+1-234-567-890"
   */
  mobileNumber: string;
  /**
   * @default null
   * @example "john.doe@example.com"
   */
  email: string;
}

export interface UpdateHostDto {
  personalInformation?: PersonalInformationDto;
  livingArrangements?: LivingInformationDto;
  lifeStyleAndBackground?: LifestyleAndBackgroundDto;
  petsAndHouseholdInformation?: PetsAndHouseholdInformationDto;
  hostFamilyAndReferrals?: HostFamilyAndReferralsDto;
  hostingPreference?: HostingPreferenceDto;
  references?: ReferenceDto;
  bankDetail?: BankDetailsDto;
  dataProtection?: DataProtectionDto;
}

export interface HostAuthenticatedDto {
  /** @example "Success Message!" */
  message?: string;
  accessToken?: string;
  user?: AuthUserDto;
  host: Host | null;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain"
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || ""
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
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
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
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

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {})
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
}

/**
 * @title MPA Coaching
 * @version 0.0.20
 * @contact
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
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
      ...params
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
        ...params
      })
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
        ...params
      })
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
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignInWith2FaOtp
     * @request POST:/users/users/2fa-sign-in
     */
    userControllerSignInWith2FaOtp: (
      data: TwoFAOtpDto,
      params: RequestParams = {}
    ) =>
      this.request<TokenDto, any>({
        path: `/users/users/2fa-sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyEmail
     * @request POST:/users/verify-email
     */
    userControllerVerifyEmail: (
      data: VerifyEmailDto,
      params: RequestParams = {}
    ) =>
      this.request<MessageDto, any>({
        path: `/users/verify-email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUnlockAccount
     * @request POST:/users/users/unlock-account
     */
    userControllerUnlockAccount: (
      data: UnlockAccountDto,
      params: RequestParams = {}
    ) =>
      this.request<TokenDto, any>({
        path: `/users/users/unlock-account`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerForgotPassword
     * @request POST:/users/forgot-password
     */
    userControllerForgotPassword: (
      data: ForgotPasswordDto,
      params: RequestParams = {}
    ) =>
      this.request<MessageDto, any>({
        path: `/users/forgot-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerResetPassword
     * @request PATCH:/users/reset-password
     */
    userControllerResetPassword: (
      data: ResetPasswordDto,
      params: RequestParams = {}
    ) =>
      this.request<MessageDto, any>({
        path: `/users/reset-password`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerChangePassword
     * @request PATCH:/users/change-password
     * @secure
     */
    userControllerChangePassword: (
      data: ChangePasswordDto,
      params: RequestParams = {}
    ) =>
      this.request<MessageDto, any>({
        path: `/users/change-password`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdateProfile
     * @request PATCH:/users/update-profile
     * @secure
     */
    userControllerUpdateProfile: (
      data: UpdateProfileDto,
      params: RequestParams = {}
    ) =>
      this.request<AuthUserDto, any>({
        path: `/users/update-profile`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
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
      params: RequestParams = {}
    ) =>
      this.request<AuthUserDto, any>({
        path: `/users/change-avatar`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerRefreshToken
     * @request POST:/users/refresh-token
     */
    userControllerRefreshToken: (
      data: RefreshTokenDto,
      params: RequestParams = {}
    ) =>
      this.request<MessageDto, any>({
        path: `/users/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyTwoFa
     * @request PATCH:/users/two-fa-verification
     * @secure
     */
    userControllerVerifyTwoFa: (
      data: TwoFAOtpDto,
      params: RequestParams = {}
    ) =>
      this.request<MessageDto, any>({
        path: `/users/two-fa-verification`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
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
      params: RequestParams = {}
    ) =>
      this.request<User, any>({
        path: `/users/google/callback`,
        method: "GET",
        query: query,
        format: "json",
        ...params
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
        ...params
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
      params: RequestParams = {}
    ) =>
      this.request<User, any>({
        path: `/users/facebook/callback`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      })
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
        ...params
      })
  };
  businesses = {
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
      params: RequestParams = {}
    ) =>
      this.request<BusinessPagination, any>({
        path: `/businesses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerCreate
     * @request POST:/businesses
     * @secure
     */
    businessControllerCreate: (
      data: CreateBusinessDto,
      params: RequestParams = {}
    ) =>
      this.request<SignedBusinessDto, any>({
        path: `/businesses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerRootSignIn
     * @request POST:/businesses/root/sign-in
     */
    businessControllerRootSignIn: (
      data: RootBusinessSignInDto,
      params: RequestParams = {}
    ) =>
      this.request<TokenDto, any>({
        path: `/businesses/root/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerCodeBasedSignIn
     * @request POST:/businesses/code-based-sign-in
     */
    businessControllerCodeBasedSignIn: (
      data: CodeBasedSignInDto,
      params: RequestParams = {}
    ) =>
      this.request<TokenDto, any>({
        path: `/businesses/code-based-sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerUpdate
     * @request PATCH:/businesses/{id}
     * @secure
     */
    businessControllerUpdate: (
      id: string,
      data: UpdateBusinessDto,
      params: RequestParams = {}
    ) =>
      this.request<Business, any>({
        path: `/businesses/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params
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
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Business
     * @name BusinessControllerArchive
     * @request PATCH:/businesses/{id}/archive
     * @secure
     */
    businessControllerArchive: (
      id: string,
      data: BusinessArchiveDto,
      params: RequestParams = {}
    ) =>
      this.request<Business, any>({
        path: `/businesses/${id}/archive`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      })
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
        search?: string;
        isArchived?: boolean;
        businessId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<JobPagination, any>({
        path: `/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
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
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Job
     * @name JobControllerUpdate
     * @request PATCH:/jobs/{id}
     * @secure
     */
    jobControllerUpdate: (
      id: string,
      data: UpdateJobDto,
      params: RequestParams = {}
    ) =>
      this.request<Job, any>({
        path: `/jobs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
      })
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
        name?: string;
        type?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PropertyPagination, any>({
        path: `/properties`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerCreate
     * @request POST:/properties
     * @secure
     */
    propertyControllerCreate: (
      data: CreatePropertyDto,
      params: RequestParams = {}
    ) =>
      this.request<Property, any>({
        path: `/properties`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerPatch
     * @request PATCH:/properties/{id}
     * @secure
     */
    propertyControllerPatch: (
      id: string,
      data: UpdatePropertyDto,
      params: RequestParams = {}
    ) =>
      this.request<Property, any>({
        path: `/properties/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerPatchImages
     * @request PATCH:/properties/{id}/photos
     * @secure
     */
    propertyControllerPatchImages: (
      id: string,
      data: UpdatePhotosDto,
      params: RequestParams = {}
    ) =>
      this.request<Property, any>({
        path: `/properties/${id}/photos`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerDeletePhotos
     * @request DELETE:/properties/{id}/photos
     * @secure
     */
    propertyControllerDeletePhotos: (
      id: string,
      data: PhotoIdsDto,
      params: RequestParams = {}
    ) =>
      this.request<Property, any>({
        path: `/properties/${id}/photos`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PropertyControllerUpdateHost
     * @request PATCH:/properties/{id}/host
     * @secure
     */
    propertyControllerUpdateHost: (
      id: string,
      data: UpdateHostDto,
      params: RequestParams = {}
    ) =>
      this.request<FileDto, any>({
        path: `/properties/${id}/host`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      })
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
        ...params
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
        ...params
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostAuthControllerSign
     * @request POST:/hosts/sign
     * @secure
     */
    hostAuthControllerSign: (params: RequestParams = {}) =>
      this.request<HostAuthenticatedDto, any>({
        path: `/hosts/sign`,
        method: "POST",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostControllerPatchDefault
     * @request PATCH:/hosts/default
     * @secure
     */
    hostControllerPatchDefault: (
      data: UpdateHostDto,
      params: RequestParams = {}
    ) =>
      this.request<Host, any>({
        path: `/hosts/default`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Host
     * @name HostControllerGetDefaultHost
     * @request GET:/hosts/default
     * @secure
     */
    hostControllerGetDefaultHost: (params: RequestParams = {}) =>
      this.request<Host, any>({
        path: `/hosts/default`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      })
  };
}
