import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  ValidatePassword: { input: any; output: any; }
  validateDate: { input: any; output: any; }
};

export type ActivityInstance = {
  __typename?: 'ActivityInstance';
  childActivityInstances?: Maybe<Array<ChildActivityInstance>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type AddAndRemoveGroupInput = {
  candidateGroupId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type AddAndRemoveRoleInput = {
  roleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AddTaskTrayToClasificationInput = {
  taskTrayId: Scalars['ID']['input'];
  trayClasificationId: Scalars['ID']['input'];
};

export type ApprovalTokenInput = {
  code: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AssignUserTaskTrayInput = {
  taskTrayId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type AssignUsersTaskTrayInput = {
  taskTrayId: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']>;
};

export type AtomLink = {
  __typename?: 'AtomLink';
  href?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  rel?: Maybe<Scalars['String']['output']>;
};

export enum AttachmentType {
  Base64 = 'Base64',
  Url = 'Url'
}

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type CalendarDataInput = {
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  dateAfter?: InputMaybe<Scalars['validateDate']['input']>;
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  dateBefore?: InputMaybe<Scalars['validateDate']['input']>;
  definitionKey: Scalars['String']['input'];
  filterType: FilterTypeCalendar;
};

export type CamundaCount = {
  __typename?: 'CamundaCount';
  currentPage?: Maybe<Scalars['Int']['output']>;
  itemsPerPage?: Maybe<Scalars['Int']['output']>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CamundaForm = {
  __typename?: 'CamundaForm';
  fieldResponse?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<CamundaFormLayout>;
  timeInterval?: Maybe<Scalars['Int']['output']>;
  timeLabel?: Maybe<Scalars['String']['output']>;
  timeSerializingFormat?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  use24h?: Maybe<Scalars['Boolean']['output']>;
  validate?: Maybe<CamundaFormValidate>;
  values?: Maybe<Array<CamundaFormOptions>>;
};

export type CamundaFormLayout = {
  __typename?: 'CamundaFormLayout';
  columns?: Maybe<Scalars['String']['output']>;
  row?: Maybe<Scalars['String']['output']>;
};

export type CamundaFormOptions = {
  __typename?: 'CamundaFormOptions';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CamundaFormValidate = {
  __typename?: 'CamundaFormValidate';
  max?: Maybe<Scalars['Int']['output']>;
  maxLength?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  minLength?: Maybe<Scalars['Int']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  validationType?: Maybe<Scalars['String']['output']>;
};

export type CandidateGroups = {
  __typename?: 'CandidateGroups';
  groupId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ChildActivityInstance = {
  __typename?: 'ChildActivityInstance';
  activityId?: Maybe<Scalars['String']['output']>;
  activityName?: Maybe<Scalars['String']['output']>;
  activityType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentActivityInstanceId?: Maybe<Scalars['String']['output']>;
};

export type CodeRecoverPasswordInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type ConnectionCredential = {
  __typename?: 'ConnectionCredential';
  apiKey: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateAndRemoveRoleFxInput = {
  permissions: Array<Scalars['String']['input']>;
  role: Scalars['ID']['input'];
};

export type CreateCommentTaskInput = {
  message: Scalars['String']['input'];
  taskListId: Scalars['ID']['input'];
};

export type CreateDummyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstField: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  secondField: Scalars['DateTime']['input'];
  thirdField: Scalars['Float']['input'];
};

export type CreateGroupInput = {
  name: Scalars['String']['input'];
  notificationConfigId?: InputMaybe<Scalars['ID']['input']>;
  type: Scalars['String']['input'];
};

export type CreateNotificationConfigInput = {
  emailDuplicateCode?: InputMaybe<Scalars['String']['input']>;
  emailPrincipalCode?: InputMaybe<Scalars['String']['input']>;
  hasEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsWss?: InputMaybe<Scalars['Boolean']['input']>;
  hasWss?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  profileId: Scalars['ID']['input'];
  smsBody?: InputMaybe<Scalars['String']['input']>;
  subtype: Scalars['String']['input'];
  type: NotificationType;
  wssCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNotificationGroupInput = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  metadata: Scalars['String']['input'];
  name: Scalars['String']['input'];
  notificationConfigId: Scalars['ID']['input'];
};

export type CreateNotificationInput = {
  emailAttachments?: InputMaybe<Array<EmailAttachment>>;
  emailRecipients?: InputMaybe<Array<EmailRecipient>>;
  metadata: Scalars['String']['input'];
  notificationGroupId?: InputMaybe<Scalars['ID']['input']>;
  smsRecipient?: InputMaybe<SmsRecipient>;
  subtypeConfig: Scalars['String']['input'];
  type: TypeNotification;
  typeConfig: NotificationType;
  userId?: InputMaybe<Scalars['ID']['input']>;
  wssRecipient?: InputMaybe<WssRecipient>;
};

export type CreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CreateProfileInput = {
  city: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  document: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  region: Scalars['Int']['input'];
};

export type CreateRoleInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateTaskTrayInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fileImageId: Scalars['ID']['input'];
  longTitle?: InputMaybe<Scalars['String']['input']>;
  processDefinitionId: Scalars['ID']['input'];
  shortTitle: Scalars['String']['input'];
};

export type CreateTemplateInput = {
  description: Scalars['String']['input'];
  fileInfoId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
  templateTypeId: Scalars['ID']['input'];
};

export type CreateTemplateTypeInput = {
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  type: TemplateTypes;
};

export type CreateTrayClasificationInput = {
  name: Scalars['String']['input'];
};

export type DateFilter = {
  _between?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  _eq?: InputMaybe<Scalars['DateTime']['input']>;
  _gt?: InputMaybe<Scalars['DateTime']['input']>;
  _gte?: InputMaybe<Scalars['DateTime']['input']>;
  _in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  _lt?: InputMaybe<Scalars['DateTime']['input']>;
  _lte?: InputMaybe<Scalars['DateTime']['input']>;
  _neq?: InputMaybe<Scalars['DateTime']['input']>;
  _notbetween?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Definition = {
  __typename?: 'Definition';
  category?: Maybe<Scalars['String']['output']>;
  deploymentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  diagram?: Maybe<Scalars['String']['output']>;
  historyTimeToLive?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  startableInTasklist?: Maybe<Scalars['Boolean']['output']>;
  suspended?: Maybe<Scalars['Boolean']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  versionTag?: Maybe<Scalars['String']['output']>;
};

export enum DelegationState {
  Pending = 'Pending',
  Resolved = 'Resolved'
}

export type Deployment = {
  __typename?: 'Deployment';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deployChangedOnly?: Maybe<Scalars['Boolean']['output']>;
  deploymentActivationTime?: Maybe<Scalars['String']['output']>;
  deploymentName?: Maybe<Scalars['String']['output']>;
  deploymentSource?: Maybe<Scalars['String']['output']>;
  enableDuplicateFiltering?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  tenantId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  version: Array<ProcessDefinitionVersion>;
};

export type Diagram = {
  __typename?: 'Diagram';
  bpmn20Xml?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Document = {
  __typename?: 'Document';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  documentData?: Maybe<DocumentData>;
  documentFile?: Maybe<FileInfo>;
  generatorSymbolId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  processInstanceId: Scalars['String']['output'];
  template?: Maybe<Template>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DocumentData = {
  __typename?: 'DocumentData';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DoubleVerificationInput = {
  code: Scalars['String']['input'];
  emailVerification?: InputMaybe<Scalars['Boolean']['input']>;
  phoneVerification?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Dummy = {
  __typename?: 'Dummy';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstField: Scalars['String']['output'];
  group?: Maybe<DummyGroup>;
  id: Scalars['ID']['output'];
  items: Array<DummyItem>;
  notification?: Maybe<Notification>;
  phone: Scalars['String']['output'];
  secondField: Scalars['DateTime']['output'];
  thirdField: Scalars['Float']['output'];
  type?: Maybe<DummyType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DummyFamily = {
  __typename?: 'DummyFamily';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DummyGroup = {
  __typename?: 'DummyGroup';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  family?: Maybe<DummyFamily>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DummyItem = {
  __typename?: 'DummyItem';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dummy: Dummy;
  firstField: Scalars['String']['output'];
  fourthField: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  secondField: Scalars['DateTime']['output'];
  thirdField: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DummyType = {
  __typename?: 'DummyType';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmailAttachment = {
  base64?: InputMaybe<Scalars['String']['input']>;
  extension: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: AttachmentType;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type EmailRecipient = {
  email: Scalars['String']['input'];
  type: RecipientType;
};

export type FileInfo = {
  __typename?: 'FileInfo';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  fileExtension: Scalars['String']['output'];
  fileMode: FileModes;
  fileMongoId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum FileModes {
  Buffer = 'buffer',
  Mongo = 'mongo',
  Url = 'url'
}

export type Filter = {
  and?: InputMaybe<Scalars['JSONObject']['input']>;
  like?: InputMaybe<Scalars['JSONObject']['input']>;
  or?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type FilterByClout = {
  end: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
};

export type FilterByProperties = {
  processInstanceId?: InputMaybe<Scalars['String']['input']>;
  /** By default, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.546+0200 */
  taskDueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** By default, the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.546+0200 */
  taskFollowUpDate?: InputMaybe<Scalars['DateTime']['input']>;
  taskName?: InputMaybe<Scalars['String']['input']>;
  taskOwner?: InputMaybe<Scalars['String']['input']>;
  taskPriority?: InputMaybe<Scalars['Int']['input']>;
};

export enum FilterTypeCalendar {
  DueDate = 'DueDate',
  FollowUp = 'FollowUp'
}

export enum FilterTypeGraphics {
  Daily = 'Daily',
  Monthly = 'Monthly',
  Weekly = 'Weekly',
  Yearly = 'Yearly'
}

export type FindDummyFamilyWhere = {
  _and?: InputMaybe<Array<FindDummyFamilyWhere>>;
  _or?: InputMaybe<Array<FindDummyFamilyWhere>>;
  description?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyGroupWhere = {
  _and?: InputMaybe<Array<FindDummyGroupWhere>>;
  _or?: InputMaybe<Array<FindDummyGroupWhere>>;
  family?: InputMaybe<FindDummyFamilyWhere>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyOrderBy = {
  firstField?: InputMaybe<OrderTypes>;
  secondField?: InputMaybe<OrderTypes>;
  thirdField?: InputMaybe<OrderTypes>;
};

export type FindDummyTypeWhere = {
  _and?: InputMaybe<Array<FindDummyTypeWhere>>;
  _or?: InputMaybe<Array<FindDummyTypeWhere>>;
  name?: InputMaybe<StringFilter>;
};

export type FindDummyWhere = {
  _and?: InputMaybe<Array<FindDummyWhere>>;
  _or?: InputMaybe<Array<FindDummyWhere>>;
  firstField?: InputMaybe<StringFilter>;
  group?: InputMaybe<FindDummyGroupWhere>;
  secondField?: InputMaybe<DateFilter>;
  thirdField?: InputMaybe<NumberFilter>;
  type?: InputMaybe<FindDummyTypeWhere>;
};

export type FindProcessDefinitionOrderBy = {
  camundaDefinitionKey?: InputMaybe<OrderTypes>;
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindProcessDefinitionWhere = {
  _and?: InputMaybe<Array<FindProcessDefinitionWhere>>;
  _or?: InputMaybe<Array<FindProcessDefinitionWhere>>;
  camundaDefinitionKey?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<StringFilter>;
};

export type FindStatusValueInput = {
  variableId: Scalars['String']['input'];
};

export type FindTemplateByOrganizationInput = {
  templateId: Scalars['ID']['input'];
};

export type FindTemplateTypeByOrganizationInput = {
  templateTypeId: Scalars['ID']['input'];
};

export type FindUsersOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
  email?: InputMaybe<OrderTypes>;
  name?: InputMaybe<OrderTypes>;
};

export type FindUsersWhere = {
  _and?: InputMaybe<Array<FindUsersWhere>>;
  _or?: InputMaybe<Array<FindUsersWhere>>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  type?: InputMaybe<Array<UserTypes>>;
};

export type FindVariablesByProcessDefinitionInput = {
  definitionKey: Scalars['String']['input'];
};

export type FrequencyPolygon = {
  __typename?: 'FrequencyPolygon';
  currentDate?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastDate?: Maybe<Scalars['Int']['output']>;
};

export type FrequencyPolygonGraphicInput = {
  currentDate: KeyFilterInput;
  definitionKey: Scalars['String']['input'];
  filterType: FilterTypeGraphics;
};

export type FunctionalityModel = {
  __typename?: 'FunctionalityModel';
  children?: Maybe<Array<FunctionalityModel>>;
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<FunctionalityTag>>;
};

export enum FunctionalityTag {
  Controller = 'CONTROLLER',
  Custom = 'CUSTOM',
  Method = 'METHOD',
  Module = 'MODULE',
  Parent = 'PARENT',
  Resolver = 'RESOLVER',
  Standard = 'STANDARD'
}

export type Group = {
  __typename?: 'Group';
  camundaId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  notificationConfig?: Maybe<NotificationConfig>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<User>>;
};

export type HistoricAnswers = {
  __typename?: 'HistoricAnswers';
  fieldId?: Maybe<Scalars['String']['output']>;
  fieldValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type HistoricProcessInstance = {
  __typename?: 'HistoricProcessInstance';
  Estado?: Maybe<Scalars['String']['output']>;
  deleteReason?: Maybe<Scalars['String']['output']>;
  durationInMillis?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processDefinitionKey?: Maybe<Scalars['String']['output']>;
  processDefinitionName?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type HistoricTaskList = {
  __typename?: 'HistoricTaskList';
  assignee?: Maybe<Scalars['String']['output']>;
  currentTask?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  followUp?: Maybe<Scalars['String']['output']>;
  historicAnswers?: Maybe<Array<HistoricAnswers>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
};

export type HistoricTaskListsByProcessInstanceInProgressInput = {
  instanceId: Scalars['ID']['input'];
};

export type History = {
  __typename?: 'History';
  newValue?: Maybe<Scalars['String']['output']>;
  operationType?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Incident = {
  __typename?: 'Incident';
  incidentCount?: Maybe<Scalars['Int']['output']>;
  incidentType?: Maybe<Scalars['String']['output']>;
};

export type InitialForm = {
  __typename?: 'InitialForm';
  files?: Maybe<Array<Document>>;
  variables?: Maybe<Array<VariablesInitialForm>>;
};

export type InitialFormEmpty = {
  __typename?: 'InitialFormEmpty';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Layout>;
  name?: Maybe<Scalars['String']['output']>;
  timeInterval?: Maybe<Scalars['Int']['output']>;
  timeLabel?: Maybe<Scalars['String']['output']>;
  timeSerializingFormat?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  use24h?: Maybe<Scalars['Boolean']['output']>;
  validate?: Maybe<CamundaFormValidate>;
  values?: Maybe<Array<CamundaFormOptions>>;
};

export type InitialFormEmptyInput = {
  definitionKey: Scalars['String']['input'];
};

export type KeyFilterInput = {
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  startedAfter?: InputMaybe<Scalars['validateDate']['input']>;
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  startedBefore?: InputMaybe<Scalars['validateDate']['input']>;
};

export type Layout = {
  __typename?: 'Layout';
  columns?: Maybe<Scalars['String']['output']>;
  row?: Maybe<Scalars['String']['output']>;
};

export enum MechanismTypes {
  Handlebars = 'Handlebars'
}

export type MetadataPagination = {
  __typename?: 'MetadataPagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  itemsPerPage?: Maybe<Scalars['Int']['output']>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCommentToTask: TaskListComment;
  addGroupTask: TaskList;
  addTaskTrayToClasification: TrayClasification;
  addUserRole: User;
  assignUserTaskTray: Scalars['String']['output'];
  assignUsersTaskTray: Scalars['String']['output'];
  createDefaultRoles: Array<Role>;
  createDummiesX: Array<Dummy>;
  createDummy: Dummy;
  createGroup: Group;
  createNotification: Notification;
  createNotificationConfig: NotificationConfig;
  createNotificationGroup: NotificationGroup;
  createOrganization: Organization;
  createProduct: Product;
  createProfile: Profile;
  createRole: Role;
  createRoleFx: Array<RoleFx>;
  createTaskTray: TaskTray;
  createTemplate: Template;
  createTemplateType: TemplateType;
  createTrayClasification: TrayClasification;
  enableAndDisableDoubleVerification: Scalars['String']['output'];
  i18nTest: Scalars['String']['output'];
  recoveryPassword: User;
  removeConnectionCredential: ConnectionCredential;
  removeDeployment: Deployment;
  removeDummy: Dummy;
  removeGroup: Group;
  removeGroupTask: TaskList;
  removeNotification: Notification;
  removeNotificationConfig: NotificationConfig;
  removeOrganization: Organization;
  removeProcessDefinitionVersion: ProcessDefinitionVersion;
  removeProcessInstance: Scalars['String']['output'];
  removeProduct: Product;
  removeProfile: Profile;
  removeRole: Role;
  removeRoleFx: Array<Scalars['String']['output']>;
  removeTaskTray: TaskTray;
  removeTaskTrayToClasification: Scalars['String']['output'];
  removeTemplate: Template;
  removeTemplateType: TemplateType;
  removeTrayClasification: TrayClasification;
  removeUser: User;
  removeUserRole: User;
  replaceAllRolesFx: Array<RoleFx>;
  resetConnectionCredential: ConnectionCredential;
  resetSuperAdmin: AuthResponse;
  resolveAndSubmitTask: Scalars['String']['output'];
  sendCodeDoubleVerification: Scalars['String']['output'];
  sendEmailRecoveryPassword: Scalars['String']['output'];
  signIn: AuthResponse;
  signUp: AuthResponse;
  startProcessInstance: ProcessInstanceModel;
  unassignUserTaskTray: Scalars['String']['output'];
  updateDummy: Dummy;
  updateGroup: Group;
  updateNotification: Notification;
  updateNotificationConfig: NotificationConfig;
  updateOrganization: Organization;
  updatePassword: User;
  updateProduct: Product;
  updateProfile: Profile;
  updateRole: Role;
  updateTaskList: TaskList;
  updateTaskTray: TaskTray;
  updateTemplate: Template;
  updateTemplateType: TemplateType;
  updateTrayClasification: TrayClasification;
  updateUserProfile: User;
  updateVariable: Variable;
};


export type MutationAddCommentToTaskArgs = {
  createCommentTaskInput: CreateCommentTaskInput;
};


export type MutationAddGroupTaskArgs = {
  addAndRemoveGroupInput: AddAndRemoveGroupInput;
};


export type MutationAddTaskTrayToClasificationArgs = {
  addTaskTrayToClasificationInput: AddTaskTrayToClasificationInput;
};


export type MutationAddUserRoleArgs = {
  addAndRemoveRoleInput: AddAndRemoveRoleInput;
};


export type MutationAssignUserTaskTrayArgs = {
  assignUserTaskTrayInput: AssignUserTaskTrayInput;
};


export type MutationAssignUsersTaskTrayArgs = {
  assignUsersTaskTrayInput: AssignUsersTaskTrayInput;
};


export type MutationCreateDummyArgs = {
  createInput: CreateDummyInput;
};


export type MutationCreateGroupArgs = {
  createInput: CreateGroupInput;
};


export type MutationCreateNotificationArgs = {
  createInput: CreateNotificationInput;
};


export type MutationCreateNotificationConfigArgs = {
  createInput: CreateNotificationConfigInput;
};


export type MutationCreateNotificationGroupArgs = {
  createInput: CreateNotificationGroupInput;
};


export type MutationCreateOrganizationArgs = {
  createInput: CreateOrganizationInput;
};


export type MutationCreateProductArgs = {
  createInput: CreateProductInput;
};


export type MutationCreateProfileArgs = {
  createInput: CreateProfileInput;
};


export type MutationCreateRoleArgs = {
  createInput: CreateRoleInput;
};


export type MutationCreateRoleFxArgs = {
  createRoleFxInput: CreateAndRemoveRoleFxInput;
};


export type MutationCreateTaskTrayArgs = {
  createInput: CreateTaskTrayInput;
};


export type MutationCreateTemplateArgs = {
  createInput: CreateTemplateInput;
};


export type MutationCreateTemplateTypeArgs = {
  createInput: CreateTemplateTypeInput;
};


export type MutationCreateTrayClasificationArgs = {
  createInput: CreateTrayClasificationInput;
};


export type MutationEnableAndDisableDoubleVerificationArgs = {
  doubleVerificationInput: DoubleVerificationInput;
};


export type MutationRecoveryPasswordArgs = {
  recoveryPasswordInput: RecoveryPasswordInput;
};


export type MutationRemoveConnectionCredentialArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveDeploymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveDummyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveGroupTaskArgs = {
  addAndRemoveGroupInput: AddAndRemoveGroupInput;
};


export type MutationRemoveNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveNotificationConfigArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProcessDefinitionVersionArgs = {
  RemoveProcessDefinitionVersionInput: RemoveProcessDefinitionVersionInput;
};


export type MutationRemoveProcessInstanceArgs = {
  processIntanceId: Scalars['String']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProfileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveRoleFxArgs = {
  removeRoleFxInput: CreateAndRemoveRoleFxInput;
};


export type MutationRemoveTaskTrayArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTaskTrayToClasificationArgs = {
  removeTaskTrayToClasificationInput: RemoveTaskTrayToClasificationInput;
};


export type MutationRemoveTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTemplateTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTrayClasificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserRoleArgs = {
  addAndRemoveRoleInput: AddAndRemoveRoleInput;
};


export type MutationReplaceAllRolesFxArgs = {
  replaceAllRoleFxInput: CreateAndRemoveRoleFxInput;
};


export type MutationResetConnectionCredentialArgs = {
  resetConnectionCredentialInput: ResetConnectionCredentialInput;
};


export type MutationResolveAndSubmitTaskArgs = {
  resolveAndSubmitTaskInput: ResolveAndSubmitTaskInput;
};


export type MutationSendCodeDoubleVerificationArgs = {
  sendDoubleVerificationInput: SendDoubleVerificationInput;
};


export type MutationSendEmailRecoveryPasswordArgs = {
  sendEmailRecoveryPasswordInput: SendEmailRecoveryPasswordInput;
};


export type MutationSignInArgs = {
  signInInput: SigninInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationStartProcessInstanceArgs = {
  startProcessInstanceInput: StartProcessInstanceInput;
};


export type MutationUnassignUserTaskTrayArgs = {
  unassignUserTaskTrayInput: UnassignUserTaskTrayInput;
};


export type MutationUpdateDummyArgs = {
  updateInput: UpdateDummyInput;
};


export type MutationUpdateGroupArgs = {
  updateInput: UpdateGroupInput;
};


export type MutationUpdateNotificationArgs = {
  updateInput: UpdateNotificationInput;
};


export type MutationUpdateNotificationConfigArgs = {
  updateInput: UpdateNotificationConfigInput;
};


export type MutationUpdateOrganizationArgs = {
  updateInput: UpdateOrganizationInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationUpdateProductArgs = {
  updateInput: UpdateProductInput;
};


export type MutationUpdateProfileArgs = {
  updateInput: UpdateProfileInput;
};


export type MutationUpdateRoleArgs = {
  updateInput: UpdateRoleInput;
};


export type MutationUpdateTaskListArgs = {
  updateTaskListInput: UpdateTaskListInput;
};


export type MutationUpdateTaskTrayArgs = {
  updateInput: UpdateTaskTrayInput;
};


export type MutationUpdateTemplateArgs = {
  updateInput: UpdateTemplateInput;
};


export type MutationUpdateTemplateTypeArgs = {
  updateInput: UpdateTemplateTypeInput;
};


export type MutationUpdateTrayClasificationArgs = {
  updateInput: UpdateTrayClasificationInput;
};


export type MutationUpdateUserProfileArgs = {
  updateUserProfileInput: UpdateUserProfileInput;
};


export type MutationUpdateVariableArgs = {
  updateVariable: UpdateVariableDataInput;
};

export type MyInitiatedInstanceInput = {
  id: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalMessage?: Maybe<Scalars['String']['output']>;
  hasPersistent: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  notificationConfig: NotificationConfig;
  notificationGroup?: Maybe<NotificationGroup>;
  persistentExpiration?: Maybe<Scalars['DateTime']['output']>;
  stateNotification: StateNotification;
  statePersistent?: Maybe<StatePersistent>;
  type: TypeNotification;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type NotificationConfig = {
  __typename?: 'NotificationConfig';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  emailDuplicateCode?: Maybe<Scalars['ID']['output']>;
  emailPrincipalCode?: Maybe<Scalars['ID']['output']>;
  hasEmail: Scalars['Boolean']['output'];
  hasPersistent: Scalars['Boolean']['output'];
  hasPush: Scalars['Boolean']['output'];
  hasSms: Scalars['Boolean']['output'];
  hasTwoStepsEmail: Scalars['Boolean']['output'];
  hasTwoStepsPush: Scalars['Boolean']['output'];
  hasTwoStepsSms: Scalars['Boolean']['output'];
  hasTwoStepsWss: Scalars['Boolean']['output'];
  hasWss: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  persistentExpiration?: Maybe<Scalars['DateTime']['output']>;
  persistentHtml?: Maybe<Scalars['String']['output']>;
  profile: Profile;
  smsBody?: Maybe<Scalars['String']['output']>;
  subtype: Scalars['String']['output'];
  type: NotificationType;
  updatedAt: Scalars['DateTime']['output'];
  wssCode?: Maybe<Scalars['ID']['output']>;
};

export type NotificationGroup = {
  __typename?: 'NotificationGroup';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  group: Group;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  notificationConfig: NotificationConfig;
  stateNotificationGroup: StateNotificationGroup;
  typeNotificationGroup: TypeNotificationGroup;
  updatedAt: Scalars['DateTime']['output'];
};

export enum NotificationType {
  General = 'General',
  Token = 'Token'
}

export type NumberFilter = {
  _between?: InputMaybe<Array<Scalars['Float']['input']>>;
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _notbetween?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export enum OrderTypes {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Organization = {
  __typename?: 'Organization';
  createdAt: Scalars['DateTime']['output'];
  credential?: Maybe<ConnectionCredential>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  identificationNumber?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Pagination = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type PastelGraphic = {
  __typename?: 'PastelGraphic';
  pastelGraphicAbsolute?: Maybe<PastelGraphicAbsolute>;
  pastelGraphicRelative?: Maybe<PastelGraphicRelative>;
};

export type PastelGraphicAbsolute = {
  __typename?: 'PastelGraphicAbsolute';
  expired?: Maybe<Scalars['Int']['output']>;
  inProgress?: Maybe<Scalars['Int']['output']>;
  resolved?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PastelGraphicInput = {
  definitionKey: Scalars['String']['input'];
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  startedAfter?: InputMaybe<Scalars['validateDate']['input']>;
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  startedBefore?: InputMaybe<Scalars['validateDate']['input']>;
};

export type PastelGraphicRelative = {
  __typename?: 'PastelGraphicRelative';
  expired?: Maybe<Scalars['String']['output']>;
  inProgress?: Maybe<Scalars['String']['output']>;
  resolved?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['String']['output']>;
};

export type PotencialUsersTaskTrayInput = {
  taskTrayId: Scalars['ID']['input'];
};

export type PreviousForm = {
  __typename?: 'PreviousForm';
  files?: Maybe<Array<Document>>;
  variables?: Maybe<Array<VariablesPreviusForm>>;
};

export type PreviousFormInput = {
  processInstanceId: Scalars['String']['input'];
  taskListId: Scalars['String']['input'];
};

export type ProcessDefinition = {
  __typename?: 'ProcessDefinition';
  camundaDefinitionKey?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  variables: Array<Variable>;
  version: Array<ProcessDefinitionVersion>;
};

export type ProcessDefinitionStadisticModel = {
  __typename?: 'ProcessDefinitionStadisticModel';
  definition?: Maybe<Definition>;
  failedJobs?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  incidents?: Maybe<Array<Incident>>;
  instances?: Maybe<Scalars['Int']['output']>;
};

export type ProcessDefinitionVersion = {
  __typename?: 'ProcessDefinitionVersion';
  camundaId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deployment: Deployment;
  id: Scalars['ID']['output'];
  processDefinition: ProcessDefinition;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProcessInstanceHistory = {
  __typename?: 'ProcessInstanceHistory';
  activityName?: Maybe<Scalars['String']['output']>;
  activityType?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentActivityInstanceId?: Maybe<Scalars['String']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processDefinitionKey?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
};

export type ProcessInstanceModel = {
  __typename?: 'ProcessInstanceModel';
  businessKey?: Maybe<Scalars['String']['output']>;
  caseInstanceId?: Maybe<Scalars['String']['output']>;
  definitionId?: Maybe<Scalars['String']['output']>;
  ended?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<AtomLink>>;
  suspended?: Maybe<Scalars['Boolean']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
};

export type ProcessInstanceSortOrderType = {
  BusinessKey?: InputMaybe<OrderTypes>;
  DefinitionId?: InputMaybe<OrderTypes>;
  DefinitionKey?: InputMaybe<OrderTypes>;
  InstanceId?: InputMaybe<OrderTypes>;
  TenantId?: InputMaybe<OrderTypes>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime']['output'];
  credential?: Maybe<ConnectionCredential>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  city: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  document: Scalars['String']['output'];
  email: Scalars['String']['output'];
  externalId: Scalars['ID']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  region: Scalars['Int']['output'];
  stateAws?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  NotificationGroup: NotificationGroup;
  NotificationGroups: Array<NotificationGroup>;
  NotificationGroupsCount: MetadataPagination;
  approvalJwt: AuthResponse;
  calendarData: Array<TaskListBase>;
  codeRecoverPassword: Scalars['String']['output'];
  decisionDefinitionCount: Scalars['Int']['output'];
  deployment: Deployment;
  deploymentCount: Scalars['Int']['output'];
  deployments: Array<Deployment>;
  deploymentsCount: MetadataPagination;
  document: Document;
  documentData: Array<DocumentData>;
  documentDataCount: MetadataPagination;
  documentDatum: DocumentData;
  documentProcessInstance: Array<Document>;
  documents: Array<Document>;
  documentsCount: MetadataPagination;
  dummies: Array<Dummy>;
  dummiesCount: MetadataPagination;
  dummy: Dummy;
  file: FileInfo;
  findStatusValueByVariable: Array<StatusValue>;
  findVariablesByProcessDefinition: Array<Variable>;
  frequencyPolygonGraphic: Array<FrequencyPolygon>;
  functionalities: FunctionalityModel;
  group: Group;
  groups: Array<Group>;
  groupsCount: MetadataPagination;
  historicTaskListsByProcessInstanceInProgress: Array<HistoricTaskList>;
  historyProcessInstance: Array<ProcessInstanceHistory>;
  initialForm: InitialForm;
  initialFormEmpty: Array<InitialFormEmpty>;
  myInitiatedInstance: HistoricProcessInstance;
  myInitiatedInstances: Array<HistoricProcessInstance>;
  myUserTaskTrays: Array<TaskTrayQuantity>;
  notification: Notification;
  notificationConfig: NotificationConfig;
  notificationConfigs: Array<NotificationConfig>;
  notificationConfigsCount: MetadataPagination;
  notifications: Array<Notification>;
  notificationsCount: MetadataPagination;
  organization: Organization;
  organizations: Array<Organization>;
  organizationsCount: MetadataPagination;
  pastelGraphic: PastelGraphic;
  potentialUsersTaskTray: Array<User>;
  previousFormTask: PreviousForm;
  processDefinition: ProcessDefinition;
  processDefinitionStadistics: Array<ProcessDefinitionStadisticModel>;
  processDefinitions: Array<ProcessDefinition>;
  processDefinitionsCount: MetadataPagination;
  processInstanceCount: CamundaCount;
  processInstanceStatus: Scalars['String']['output'];
  processInstances: Array<ProcessInstanceModel>;
  processInstancesById: ProcessInstanceModel;
  product: Product;
  products: Array<Product>;
  productsCount: MetadataPagination;
  profile: Profile;
  profiles: Array<Profile>;
  profilesCount: MetadataPagination;
  revalidate: AuthResponse;
  role: Role;
  roleFx: RoleFx;
  roles: Array<Role>;
  rolesCount: MetadataPagination;
  rolesFx: Array<RoleFx>;
  rolesFxCount: MetadataPagination;
  statistics: Statistics;
  statusValue: StatusValue;
  statusValues: Array<StatusValue>;
  statusValuesCount: MetadataPagination;
  taskList: TaskListPartialFields;
  taskListCount: Scalars['Int']['output'];
  taskLists: Array<TaskList>;
  taskListsByProcessDefinition: Array<TaskListVariables>;
  taskTray: TaskTray;
  taskTrays: Array<TaskTray>;
  taskTraysCount: MetadataPagination;
  template: Template;
  templateByOrganization: Template;
  templateType: TemplateType;
  templateTypeByOrganization: TemplateType;
  templateTypes: Array<TemplateType>;
  templateTypesByOrganization: Array<TemplateType>;
  templateTypesCount: MetadataPagination;
  templates: Array<Template>;
  templatesByOrganization: Array<Template>;
  templatesCount: MetadataPagination;
  trayClasification: TrayClasification;
  trayClasifications: Array<TrayClasification>;
  trayClasificationsCount: MetadataPagination;
  user: User;
  userTask: TaskListExtraFields;
  userTasks: Array<TaskList>;
  users: Array<User>;
  usersCount: MetadataPagination;
  usersTaskTrays: Array<User>;
  validateUserToken: User;
  variable: Variable;
  variables: Array<Variable>;
  variablesCount: MetadataPagination;
};


export type QueryNotificationGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationGroupsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationGroupsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryApprovalJwtArgs = {
  approvalTokenInput: ApprovalTokenInput;
};


export type QueryCalendarDataArgs = {
  calendarDataInput: CalendarDataInput;
};


export type QueryCodeRecoverPasswordArgs = {
  codeRecoverPasswordInput: CodeRecoverPasswordInput;
};


export type QueryDecisionDefinitionCountArgs = {
  latestVersion?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDeploymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeploymentsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDeploymentsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDocumentDataArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDocumentDataCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDocumentDatumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDocumentProcessInstanceArgs = {
  processInstanceId: Scalars['String']['input'];
};


export type QueryDocumentsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDocumentsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDummiesArgs = {
  orderBy?: InputMaybe<Array<FindDummyOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindDummyWhere>;
};


export type QueryDummiesCountArgs = {
  orderBy?: InputMaybe<Array<FindDummyOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindDummyWhere>;
};


export type QueryDummyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindStatusValueByVariableArgs = {
  findStatusValueInput: FindStatusValueInput;
};


export type QueryFindVariablesByProcessDefinitionArgs = {
  findVariablesByProcessDefinition: FindVariablesByProcessDefinitionInput;
};


export type QueryFrequencyPolygonGraphicArgs = {
  frequencyPolygonGraphicInput: FrequencyPolygonGraphicInput;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryGroupsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryHistoricTaskListsByProcessInstanceInProgressArgs = {
  historicTaskListsByProcessInstanceInProgressInput: HistoricTaskListsByProcessInstanceInProgressInput;
};


export type QueryHistoryProcessInstanceArgs = {
  processIntanceId: Scalars['String']['input'];
};


export type QueryInitialFormArgs = {
  processIntanceId: Scalars['String']['input'];
};


export type QueryInitialFormEmptyArgs = {
  initialFormEmptyInput: InitialFormEmptyInput;
};


export type QueryMyInitiatedInstanceArgs = {
  myInitiatedInstanceInput: MyInitiatedInstanceInput;
};


export type QueryNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationConfigArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationConfigsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationConfigsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrganizationsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryOrganizationsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryPastelGraphicArgs = {
  pastelGraphicInput: PastelGraphicInput;
};


export type QueryPotentialUsersTaskTrayArgs = {
  potencialUsersTaskTrayInput: PotencialUsersTaskTrayInput;
};


export type QueryPreviousFormTaskArgs = {
  previousFormInput: PreviousFormInput;
};


export type QueryProcessDefinitionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProcessDefinitionStadisticsArgs = {
  failedJobs?: InputMaybe<Scalars['Boolean']['input']>;
  incidents?: InputMaybe<Scalars['Boolean']['input']>;
  incidentsForType?: InputMaybe<Scalars['String']['input']>;
  rootIncidents?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProcessDefinitionsArgs = {
  orderBy?: InputMaybe<Array<FindProcessDefinitionOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindProcessDefinitionWhere>;
};


export type QueryProcessDefinitionsCountArgs = {
  orderBy?: InputMaybe<Array<FindProcessDefinitionOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindProcessDefinitionWhere>;
};


export type QueryProcessInstanceCountArgs = {
  pagination?: Pagination;
  processDefinitionKey?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProcessInstanceStatusArgs = {
  processIntanceId: Scalars['String']['input'];
};


export type QueryProcessInstancesArgs = {
  orderBy?: InputMaybe<Array<ProcessInstanceSortOrderType>>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryProcessInstancesByIdArgs = {
  processIntanceId: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryProductsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryProfileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProfilesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryProfilesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoleFxArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesFxArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesFxCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryStatisticsArgs = {
  statisticsInput: StatisticsInput;
};


export type QueryStatusValueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStatusValuesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryStatusValuesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTaskListArgs = {
  id: Scalars['String']['input'];
};


export type QueryTaskListCountArgs = {
  assigned?: InputMaybe<Scalars['Boolean']['input']>;
  unassigned?: InputMaybe<Scalars['Boolean']['input']>;
  unfinished?: InputMaybe<Scalars['Boolean']['input']>;
  withCandidateGroups?: InputMaybe<Scalars['Boolean']['input']>;
  withoutCandidateGroups?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTaskListsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTaskListsByProcessDefinitionArgs = {
  definitionKey: Scalars['String']['input'];
  filterByClout?: InputMaybe<FilterByClout>;
  filterByProperties?: InputMaybe<FilterByProperties>;
  filterByVariables?: InputMaybe<Filter>;
  hasObsoleteFields?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<OrderTypes>;
  pagination?: InputMaybe<Pagination>;
  unfinished?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTaskTrayArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskTraysArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTaskTraysCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTemplateByOrganizationArgs = {
  findTemplateByOrganizationInput: FindTemplateByOrganizationInput;
};


export type QueryTemplateTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTemplateTypeByOrganizationArgs = {
  findTemplateTypeByOrganizationInput: FindTemplateTypeByOrganizationInput;
};


export type QueryTemplateTypesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTemplateTypesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTemplatesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTemplatesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTrayClasificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTrayClasificationsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryTrayClasificationsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserTaskArgs = {
  userTaskId: Scalars['ID']['input'];
};


export type QueryUserTasksArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryUsersCountArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryUsersTaskTraysArgs = {
  taskTrayByIdInput: TaskTrayByIdInput;
};


export type QueryValidateUserTokenArgs = {
  validateTokenInput: ValidateTokenInput;
};


export type QueryVariableArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVariablesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryVariablesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};

export enum RecipientType {
  Bcc = 'Bcc',
  Cc = 'Cc',
  Destinatary = 'Destinatary'
}

export type RecoveryPasswordInput = {
  password: Scalars['ValidatePassword']['input'];
  passwordConfirm: Scalars['ValidatePassword']['input'];
  token: Scalars['String']['input'];
};

export type RemoveProcessDefinitionVersionInput = {
  processDefinitionVersionId: Scalars['ID']['input'];
};

export type RemoveTaskTrayToClasificationInput = {
  taskTrayId: Scalars['ID']['input'];
};

export type ResetConnectionCredentialInput = {
  id: Scalars['ID']['input'];
};

export type ResolveAndSubmitTaskInput = {
  formData: Array<VariablesResolveAndSubmitTaskInput>;
  taskListId: Scalars['ID']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  defaultForType?: Maybe<UserTypes>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  roleFx: Array<RoleFx>;
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<User>>;
};

export type RoleFx = {
  __typename?: 'RoleFx';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  permission: Scalars['String']['output'];
  role?: Maybe<Role>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SendDoubleVerificationInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type SendEmailRecoveryPasswordInput = {
  email: Scalars['String']['input'];
};

export type SignUpInput = {
  confirmationPassword: Scalars['String']['input'];
  dateIssue: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  hasCitizen?: InputMaybe<Scalars['Boolean']['input']>;
  identificationNumber: Scalars['String']['input'];
  identificationType: UserDocumentTypes;
  lastName: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['ValidatePassword']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type SigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['ValidatePassword']['input'];
  verificationTypes?: InputMaybe<VerificationTypes>;
};

export type SmsRecipient = {
  email?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type StartProcessInstanceInput = {
  definitionKey: Scalars['String']['input'];
  filesId?: InputMaybe<Array<Scalars['String']['input']>>;
  variables: Scalars['JSONObject']['input'];
};

export enum StateNotification {
  Complete = 'Complete',
  Draft = 'Draft',
  Error = 'Error'
}

export enum StateNotificationGroup {
  Complete = 'Complete',
  Draft = 'Draft',
  Error = 'Error',
  PartialComplete = 'PartialComplete',
  Process = 'Process'
}

export enum StatePersistent {
  NoPersistent = 'NoPersistent',
  Open = 'Open',
  Receive = 'Receive',
  Send = 'Send'
}

export type Statistics = {
  __typename?: 'Statistics';
  completedTask?: Maybe<Scalars['String']['output']>;
  deadlineCompliance?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  toExpire?: Maybe<Scalars['String']['output']>;
};

export type StatisticsInput = {
  definitionKey: Scalars['String']['input'];
};

export type StatusValue = {
  __typename?: 'StatusValue';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
  variable: Variable;
};

export type StringFilter = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _endswith?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _notcontains?: InputMaybe<Scalars['String']['input']>;
  _notendswith?: InputMaybe<Scalars['String']['input']>;
  _notlike?: InputMaybe<Scalars['String']['input']>;
  _notstartswith?: InputMaybe<Scalars['String']['input']>;
  _startswith?: InputMaybe<Scalars['String']['input']>;
};

export type TaskList = {
  __typename?: 'TaskList';
  assignee?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  delegationState?: Maybe<DelegationState>;
  description?: Maybe<Scalars['String']['output']>;
  due?: Maybe<Scalars['String']['output']>;
  followUp?: Maybe<Scalars['String']['output']>;
  formKey?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
};

export type TaskListBase = {
  __typename?: 'TaskListBase';
  assignee?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due?: Maybe<Scalars['String']['output']>;
  followUp?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
};

export type TaskListComment = {
  __typename?: 'TaskListComment';
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TaskListExtraFields = {
  __typename?: 'TaskListExtraFields';
  activityInstance?: Maybe<ActivityInstance>;
  assignee?: Maybe<Scalars['String']['output']>;
  candidateGroups?: Maybe<Array<CandidateGroups>>;
  comments?: Maybe<Array<TaskListComment>>;
  created?: Maybe<Scalars['String']['output']>;
  delegationState?: Maybe<DelegationState>;
  description?: Maybe<Scalars['String']['output']>;
  diagram?: Maybe<Diagram>;
  due?: Maybe<Scalars['String']['output']>;
  followUp?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Array<CamundaForm>>;
  formKey?: Maybe<Scalars['String']['output']>;
  history?: Maybe<Array<History>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taskTrayId?: Maybe<Scalars['String']['output']>;
};

export type TaskListPartialFields = {
  __typename?: 'TaskListPartialFields';
  activityInstance?: Maybe<ActivityInstance>;
  assignee?: Maybe<Scalars['String']['output']>;
  candidateGroups?: Maybe<Array<CandidateGroups>>;
  comments?: Maybe<Array<TaskListComment>>;
  description?: Maybe<Scalars['String']['output']>;
  diagram?: Maybe<Diagram>;
  due?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  followUp?: Maybe<Scalars['String']['output']>;
  form: Array<CamundaForm>;
  history?: Maybe<Array<History>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taskDefinitionKey?: Maybe<Scalars['String']['output']>;
  taskTrayId?: Maybe<Scalars['String']['output']>;
};

export type TaskListVariables = {
  __typename?: 'TaskListVariables';
  assignee?: Maybe<Scalars['String']['output']>;
  attachmentNumber?: Maybe<Scalars['Int']['output']>;
  clout?: Maybe<Scalars['Int']['output']>;
  commentsNumber?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  followUp?: Maybe<Scalars['String']['output']>;
  hasShowVariables?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  processDefinitionId?: Maybe<Scalars['String']['output']>;
  processDefinitionName?: Maybe<Scalars['String']['output']>;
  processInstanceId?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  taskTrayId?: Maybe<Scalars['String']['output']>;
  variablesValues?: Maybe<Scalars['JSONObject']['output']>;
};

export type TaskTray = {
  __typename?: 'TaskTray';
  createdAt: Scalars['DateTime']['output'];
  definitionKey: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileImage?: Maybe<FileInfo>;
  id: Scalars['ID']['output'];
  longTitle?: Maybe<Scalars['String']['output']>;
  shortTitle: Scalars['String']['output'];
  trayClasification?: Maybe<TrayClasification>;
  updatedAt: Scalars['DateTime']['output'];
  variables: Array<Variable>;
};

export type TaskTrayByIdInput = {
  hasCurrentUser?: InputMaybe<Scalars['Boolean']['input']>;
  taskTrayId: Scalars['ID']['input'];
};

export type TaskTrayQuantity = {
  __typename?: 'TaskTrayQuantity';
  createdAt: Scalars['DateTime']['output'];
  definitionKey?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileImage?: Maybe<FileInfo>;
  id: Scalars['ID']['output'];
  longTitle?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shortTitle: Scalars['String']['output'];
  trayClasification?: Maybe<TrayClasification>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Template = {
  __typename?: 'Template';
  camundaId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  fileInfo: FileInfo;
  id: Scalars['ID']['output'];
  mechanism: MechanismTypes;
  organization: Organization;
  templateType: TemplateType;
  updatedAt: Scalars['DateTime']['output'];
};

export type TemplateType = {
  __typename?: 'TemplateType';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  type: TemplateTypes;
  updatedAt: Scalars['DateTime']['output'];
};

export enum TemplateTypes {
  Document = 'Document'
}

export type TrayClasification = {
  __typename?: 'TrayClasification';
  children?: Maybe<Array<TrayClasification>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<TrayClasification>;
  taskTray?: Maybe<TaskTray>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum TypeNotification {
  Email = 'Email',
  Push = 'Push',
  Sms = 'Sms',
  Wss = 'Wss'
}

export enum TypeNotificationGroup {
  Automatic = 'Automatic',
  Manual = 'Manual'
}

export type UnassignUserTaskTrayInput = {
  taskTrayId: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']>;
};

export type UpdateDummyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstField?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  secondField?: InputMaybe<Scalars['DateTime']['input']>;
  thirdField?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateGroupInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  notificationConfigId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationConfigInput = {
  emailDuplicateCode?: InputMaybe<Scalars['String']['input']>;
  emailPrincipalCode?: InputMaybe<Scalars['String']['input']>;
  hasEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsWss?: InputMaybe<Scalars['Boolean']['input']>;
  hasWss?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['ID']['input']>;
  smsBody?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationType>;
  wssCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationInput = {
  emailAttachments?: InputMaybe<Array<EmailAttachment>>;
  emailRecipients?: InputMaybe<Array<EmailRecipient>>;
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  notificationGroupId?: InputMaybe<Scalars['ID']['input']>;
  smsRecipient?: InputMaybe<SmsRecipient>;
  subtypeConfig?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeNotification>;
  typeConfig?: InputMaybe<NotificationType>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  wssRecipient?: InputMaybe<WssRecipient>;
};

export type UpdateOrganizationInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  currentPassword: Scalars['ValidatePassword']['input'];
  newPassword: Scalars['ValidatePassword']['input'];
  newPasswordConfirm: Scalars['ValidatePassword']['input'];
};

export type UpdateProductInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateProfileInput = {
  city?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaskListInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** The date format is 2024-02-07T09:54:00.000-0500 */
  followUp?: InputMaybe<Scalars['validateDate']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTaskTrayInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fileImageId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  longTitle?: InputMaybe<Scalars['String']['input']>;
  processDefinitionId?: InputMaybe<Scalars['ID']['input']>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fileInfoId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  templateTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateTemplateTypeInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TemplateTypes>;
};

export type UpdateTrayClasificationInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  dateIssue?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  identificationNumber?: InputMaybe<Scalars['String']['input']>;
  identificationType?: InputMaybe<UserDocumentTypes>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariableDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type User = {
  __typename?: 'User';
  camundaId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dateIssue?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  emailVerification: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  hasExternalCreation?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  identificationNumber?: Maybe<Scalars['String']['output']>;
  identificationType?: Maybe<UserDocumentTypes>;
  lastName?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneVerification: Scalars['Boolean']['output'];
  status: UserStatusTypes;
  taskTrays?: Maybe<Array<TaskTray>>;
  type: UserTypes;
  updatedAt: Scalars['DateTime']['output'];
  userRoles: Array<Role>;
  userRolesFx: Array<RoleFx>;
};

export enum UserDocumentTypes {
  CitizenshipCard = 'CitizenshipCard',
  DiplomaticCard = 'DiplomaticCard',
  ForeignerIdentityCard = 'ForeignerIdentityCard',
  IdentityCard = 'IdentityCard',
  Nit = 'Nit',
  Passport = 'Passport',
  SafeConduct = 'SafeConduct',
  SpecialPermissionToStay = 'SpecialPermissionToStay',
  TemporaryProtectionPermit = 'TemporaryProtectionPermit'
}

export enum UserStatusTypes {
  Active = 'Active',
  Inactive = 'Inactive',
  PartlyActive = 'PartlyActive'
}

export enum UserTypes {
  Admin = 'Admin',
  Citizen = 'Citizen',
  Officer = 'Officer',
  SuperAdmin = 'SuperAdmin'
}

export type ValidateTokenInput = {
  token: Scalars['String']['input'];
};

export type Variable = {
  __typename?: 'Variable';
  createdAt: Scalars['DateTime']['output'];
  definitionKey: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  formId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  obsolete?: Maybe<Scalars['Boolean']['output']>;
  parameters?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type VariablesInitialForm = {
  __typename?: 'VariablesInitialForm';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type VariablesPreviusForm = {
  __typename?: 'VariablesPreviusForm';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type VariablesResolveAndSubmitTaskInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum VerificationTypes {
  Email = 'Email',
  Phone = 'Phone'
}

export type WssRecipient = {
  document?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  phonePrefix?: InputMaybe<Scalars['String']['input']>;
};

export type SignInMutationVariables = Exact<{
  signInInput: SigninInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, camundaId?: string | null, firstName?: string | null, lastName?: string | null, email: string, identificationType?: UserDocumentTypes | null, identificationNumber?: string | null, dateIssue?: any | null, phoneNumber?: string | null, status: UserStatusTypes, phoneVerification: boolean, emailVerification: boolean, type: UserTypes, fullName: string, organization?: { __typename?: 'Organization', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name: string } | null, userRoles: Array<{ __typename?: 'Role', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name: string, description: string, defaultForType?: UserTypes | null, users?: Array<{ __typename?: 'User', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, camundaId?: string | null, firstName?: string | null, lastName?: string | null, email: string, identificationType?: UserDocumentTypes | null, identificationNumber?: string | null, dateIssue?: any | null, phoneNumber?: string | null, status: UserStatusTypes, phoneVerification: boolean, emailVerification: boolean, type: UserTypes, fullName: string }> | null, roleFx: Array<{ __typename?: 'RoleFx', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, permission: string }> }>, userRolesFx: Array<{ __typename?: 'RoleFx', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, permission: string, role?: { __typename?: 'Role', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name: string, description: string, defaultForType?: UserTypes | null } | null }> } } };

export type UserFragmentFragment = { __typename?: 'User', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, camundaId?: string | null, firstName?: string | null, lastName?: string | null, email: string, identificationType?: UserDocumentTypes | null, identificationNumber?: string | null, dateIssue?: any | null, phoneNumber?: string | null, status: UserStatusTypes, phoneVerification: boolean, emailVerification: boolean, type: UserTypes, fullName: string, organization?: { __typename?: 'Organization', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name: string } | null, userRoles: Array<{ __typename?: 'Role', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name: string, description: string, defaultForType?: UserTypes | null, users?: Array<{ __typename?: 'User', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, camundaId?: string | null, firstName?: string | null, lastName?: string | null, email: string, identificationType?: UserDocumentTypes | null, identificationNumber?: string | null, dateIssue?: any | null, phoneNumber?: string | null, status: UserStatusTypes, phoneVerification: boolean, emailVerification: boolean, type: UserTypes, fullName: string }> | null, roleFx: Array<{ __typename?: 'RoleFx', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, permission: string }> }>, userRolesFx: Array<{ __typename?: 'RoleFx', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, permission: string, role?: { __typename?: 'Role', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name: string, description: string, defaultForType?: UserTypes | null } | null }> };


export const UserFragmentFragmentDoc = `
    fragment userFragment on User {
  id
  createdAt
  updatedAt
  deletedAt
  camundaId
  firstName
  lastName
  email
  identificationType
  identificationNumber
  dateIssue
  phoneNumber
  status
  phoneVerification
  emailVerification
  type
  organization {
    id
    createdAt
    updatedAt
    deletedAt
    name
  }
  userRoles {
    id
    createdAt
    updatedAt
    deletedAt
    name
    description
    defaultForType
    users {
      id
      createdAt
      updatedAt
      deletedAt
      camundaId
      firstName
      lastName
      email
      identificationType
      identificationNumber
      dateIssue
      phoneNumber
      status
      phoneVerification
      emailVerification
      type
      fullName
    }
    roleFx {
      id
      createdAt
      updatedAt
      deletedAt
      permission
    }
  }
  userRolesFx {
    id
    createdAt
    updatedAt
    deletedAt
    permission
    role {
      id
      createdAt
      updatedAt
      deletedAt
      name
      description
      defaultForType
    }
  }
  fullName
}
    `;
export const SignInDocument = `
    mutation SignIn($signInInput: SigninInput!) {
  signIn(signInInput: $signInInput) {
    token
    user {
      ...userFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;

export const useSignInMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SignInMutation, TError, SignInMutationVariables, TContext>) => {
    
    return useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
      {
    mutationKey: ['SignIn'],
    mutationFn: (variables?: SignInMutationVariables) => fetcher<SignInMutation, SignInMutationVariables>(SignInDocument, variables)(),
    ...options
  }
    )};


useSignInMutation.fetcher = (variables: SignInMutationVariables, options?: RequestInit['headers']) => fetcher<SignInMutation, SignInMutationVariables>(SignInDocument, variables, options);
