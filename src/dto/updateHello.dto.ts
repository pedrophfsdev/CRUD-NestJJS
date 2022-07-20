import { OmitType, PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { CreateHelloDTO } from "./CreateHello.dto";

export class UpdateHelloDTO extends PartialType (
    OmitType (CreateHelloDTO, [] as const),
) {}


