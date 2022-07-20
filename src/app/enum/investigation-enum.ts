import { APPCONSTANT } from "@app/constants/anatomy-constant";

export enum HumanSystem { Organ = APPCONSTANT.ANATOMY.ORGAN, Skeleton = APPCONSTANT.ANATOMY.SKELETON }
export enum MedicalSpeciality { Radiology = 1}
export enum Radiology {
    XRAY = 1, CT = 2, MRI = 3, ULTRASOUND = 4
} 
export enum GenderType {
    MALE = '1' , FEMALE = '2'
} 

export enum Age {
    Child  = 0,
    Adolescence = 1,
    Adult = 2,
    Senior_Adult = 3
}
