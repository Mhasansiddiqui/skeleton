import { Age, GenderType, HumanSystem, MedicalSpeciality, Radiology } from "@app/enum/investigation-enum";

export class UserModel {
    name : string;
    age : Age;
    gender  : GenderType;
    system  : HumanSystem;
    medicalSpeciality : MedicalSpeciality;
    radiology : Radiology;
}
