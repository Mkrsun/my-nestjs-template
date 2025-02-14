import { ReviewEntity } from '../../domain/review.entity';
import { reviewValidator } from '../../domain/review.validator';
import { reviewAdapter } from '../../domain/review.adapter';
import { ReviewService } from '../../application/review.service';
import { Body, Controller, Post, Res } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {} // Inyecta el servicio de revisión en el constructor
  entityName = 'Review';

  @Post('/')
  async createReview(@Body() data: ReviewEntity, @Res() res: any) {
    try {
      if (!reviewValidator(data)) {
        return res
          .status(400)
          .json({ success: false, message: `${this.entityName} is not valid` });
      }
      const adaptedData = reviewAdapter(data);
      const createdReview = await this.reviewService.createReview(adaptedData);
      return res.status(200).json({
        data: createdReview,
        message: `${this.entityName} created successfully`,
      });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({
        message: `An error occurred while creating the ${this.entityName}`,
      });
    }
  }
}
