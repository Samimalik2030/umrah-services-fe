type ICommonIconProps = {
  size?: number;
  color?: string;
  fill?: string;
  withOutline?: boolean;
};

export default ICommonIconProps;

export enum Role {
  ADMIN = 'Admin',
  DISTRICT_OFFICER = 'District Officer',
  RECRUITER = 'Recruiter',
  CANDIDATE = 'Candidate',
}
