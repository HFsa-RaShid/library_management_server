// Enum for Membership Types
export enum MembershipType {
  BASIC = "BASIC",
  PREMIUM = "PREMIUM",
  STUDENT = "STUDENT",
  FACULTY = "FACULTY"
}

// Enum for Membership Status
export enum MembershipStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED"
}

export interface IMembership {
  id: string;
  userId: string;
  type: MembershipType; // Ab ye string ki jagah Enum use karega
  status: MembershipStatus; 
  startDate: Date;
  endDate?: Date | null;
  maxBooks: number;
  createdAt: Date;
  updatedAt: Date;
}