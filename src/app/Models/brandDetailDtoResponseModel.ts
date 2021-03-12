import { BrandDetailDto } from "./brandDetailDto";
import { ResponseModel } from "./responseModel";

export interface brandDetailDtoResponseModel extends ResponseModel {
    data: BrandDetailDto[]

}