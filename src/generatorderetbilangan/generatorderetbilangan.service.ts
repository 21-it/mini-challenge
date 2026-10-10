import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class GeneratorderetbilanganService {
  generateDeret(jenisParam: string, jumlahParam: string, urutanParam?: string) {
    const jenisValid = ['ganjil', 'genap', 'kuadrat'];
    const jenis = jenisParam?.toLowerCase().trim();

    if (!jenisValid.includes(jenis)) {
      throw new BadRequestException('Jenis deret hanya boleh ganjil, genap, atau kuadrat');
    }

    if (!jumlahParam || jumlahParam.trim() === '') {
      throw new BadRequestException('Query jumlah wajib diisi');
    }

    const jumlah = Number(jumlahParam);
    if (Number.isNaN(jumlah) || !Number.isInteger(jumlah) || jumlah < 1 || jumlah > 20) {
      throw new BadRequestException('Jumlah harus berupa bilangan bulat antara 1 sampai 20');
    }

    const urutan = urutanParam ? urutanParam.toLowerCase().trim() : 'asc';
    if (!['asc', 'desc'].includes(urutan)) {
      throw new BadRequestException('Urutan hanya boleh asc atau desc');
    }

    const data: number[] = [];
    let total = 0;

    for (let i = 1; i <= jumlah; i++) {
      let nilai = 0;

      if (jenis === 'ganjil') {
        nilai = 2 * i - 1;
      } else if (jenis === 'genap') {
        nilai = 2 * i;
      } else if (jenis === 'kuadrat') {
        nilai = i * i;
      }
      data.push(nilai);
      total += nilai;
    }

    if (urutan === 'desc') {
      data.reverse();
    }

    return {
      jenis: jenis,
      jumlah: jumlah,
      data: data,
      total: total,
    };
  }
}
