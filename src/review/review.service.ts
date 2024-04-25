import { Injectable } from '@nestjs/common';
import { ReviewEntityDatabase } from './review.entity'; // Importa la interfaz o clase de entidad de revisión
import { DbRepository } from 'src/db/dbRepository';

@Injectable()
export class ReviewService {
  constructor(private readonly dbRepository: DbRepository) {} // Inyecta el dbRepository en el constructor

  async createReview(
    reviewData: ReviewEntityDatabase,
  ): Promise<ReviewEntityDatabase> {
    const {
      UserRut,
      Points,
      ReviewTypeId,
      ReviewPointTypeId,
      SpecialtyId,
      ProfessionalId,
      Comment,
    } = reviewData;

    const query = `
        insert into [dbo].[Review]
        (
            UserRut,
            Points,
            ReviewTypeId,
            ReviewPointTypeId,
            SpecialtyId,
            ProfessionalId,
            Comment
        ) 
        values 
        (
            @param0, 
            @param1, 
            @param2, 
            @param3, 
            @param4, 
            @param5,
            @param6
        )
    `;

    const values = [
      UserRut,
      Points,
      ReviewTypeId,
      ReviewPointTypeId,
      SpecialtyId,
      ProfessionalId,
      Comment,
    ];

    const result = await this.dbRepository.executeQueryRW(query, values);
    return result;
  }
}
