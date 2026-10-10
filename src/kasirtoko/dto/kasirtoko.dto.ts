import { ArrayMaxSize, IsAlpha, IsArray, IsNotEmpty, IsNumber, IsPositive, MaxLength, Min } from "class-validator";

class Item {
    @IsNotEmpty()
    name: string

    @IsNumber()
    @Min(0, {message: 'Price must be more than 0...'})
    harga: number

    @IsNumber()
    @Min(0, {message: 'Quantity must be more than 0....'})
    qty: number
}

export class CreateKasirDTO {
    @IsArray()
    @IsNotEmpty({each: true})
    @ArrayMaxSize(10, {message: 'Maximum of 10 items allowed...'})
    @IsPositive()
    @Min(0)
    items: Item[];
}
