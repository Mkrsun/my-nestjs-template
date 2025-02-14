export interface ReviewEntity {
  id?: number;
  userId: number;
  points: number;
  reviewTypeId: number;
  reviewPointTypeId: number;
  specialtyId: number;
  professionalId: string;
  comment: string;
}

export interface ReviewEntityDatabase {
  Id?: number;
  UserRut: number;
  Points: number;
  ReviewTypeId: number;
  ReviewPointTypeId: number;
  SpecialtyId: number;
  ProfessionalId: string;
  Comment: string;
}
