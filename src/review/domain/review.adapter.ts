import { ReviewEntity, ReviewEntityDatabase } from './review.entity';

export const reviewAdapter = ({
  userId,
  points,
  reviewTypeId,
  reviewPointTypeId,
  specialtyId,
  professionalId,
  comment,
}: Partial<ReviewEntity>): ReviewEntityDatabase => {
  return {
    UserRut: userId,
    Points: points,
    ReviewTypeId: reviewTypeId,
    ReviewPointTypeId: reviewPointTypeId,
    SpecialtyId: specialtyId,
    ProfessionalId: professionalId,
    Comment: comment ?? undefined,
  };
};
