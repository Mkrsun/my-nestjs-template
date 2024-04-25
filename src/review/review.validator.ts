import { ReviewEntity } from './review.entity';

export const reviewValidator = ({
  userId,
  points,
  reviewTypeId,
  reviewPointTypeId,
  specialtyId,
  professionalId,
}: Partial<ReviewEntity>): boolean => {
  if (
    userId &&
    points !== undefined &&
    reviewTypeId &&
    reviewPointTypeId &&
    specialtyId &&
    professionalId
  ) {
    return true;
  } else {
    return false;
  }
};
