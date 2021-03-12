import { CarDetailDto } from './carDetailDto';
import { ResponseModel } from './responseModel';

export interface carDetailDtoResponseModel extends ResponseModel {
    data: CarDetailDto[]

}