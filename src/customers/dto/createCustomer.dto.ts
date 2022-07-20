import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreateCustomerDTO {

    @IsString()
    @IsNotEmpty()
    name:       string;  

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:      string;

    @IsString()
    @IsNotEmpty()
    password:   string;
    
    @IsString()
    @IsNotEmpty()
    cpf:        string;

    @IsMobilePhone('pt-BR')
    mobile:     string;

    //@IsPostalCode('BR')
    // zipCode: string;
}