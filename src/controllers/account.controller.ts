import { Controller, Get, Post, Body, BadRequestException } from "@nestjs/common";
import { RegisterModel } from "../models/register.model";
import { ValidationPipe } from "../pipes/validation.pipe";

@Controller('api/account')
export class AccountController {

    @Post('register')
    register(@Body(new ValidationPipe()) body: RegisterModel) {
        return body;
    }

}