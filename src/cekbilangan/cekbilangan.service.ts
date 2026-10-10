import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CekbilanganService {
    cekBilangan(angkaParam: string) {
        if (!angkaParam || angkaParam.trim() === '') {
            throw new BadRequestException('Angka tidak boleh kosong');
        }

        const angka = Number(angkaParam);
        if (Number.isNaN(angka) || !Number.isInteger(angka) || angka < 1 || angka > 100) {
            throw new BadRequestException('Angka harus bilangan bulat antara 1 sampai 100');
        }

        const jenis = angka % 2 === 0 ? 'genap' : 'ganjil';
        const kuadrat = angka * angka;
        const kelipatanLima = angka % 5 === 0;

        return {
            angka: angka,
            jenis: jenis,
            kuadrat: kuadrat,
            kelipatanLima: kelipatanLima
        };
    }
}
