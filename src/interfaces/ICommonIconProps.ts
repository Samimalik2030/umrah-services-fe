type ICommonIconProps = {
  size?: number;
  color?: string;
  fill?: string;
  withOutline?: boolean;
};

export default ICommonIconProps;

export enum Role {
  ADMIN = 'Admin',
  CITY_MANAGER = 'City Manager',
  CUSTOMER = 'Customer',
  SALESMAN = 'Salesman',
}
