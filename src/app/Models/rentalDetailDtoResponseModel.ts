import { RentalDetailDto } from './rentalDetailDto';
import { ResponseModel } from './responseModel';
export interface rentalDetailDtoResponseModel extends ResponseModel {
    data: RentalDetailDto[]

}