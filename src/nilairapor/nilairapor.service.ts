import { Injectable } from '@nestjs/common';
import { NilaiRaporDto } from './dto/nilairapor.dto.js';

@Injectable()
export class NilairaporService {
  hitungNilai(dto: NilaiRaporDto) {
    const { nama, tugas, uts, uas } = dto;
    const totalTugas = tugas.reduce((sum, val) => sum + val, 0);
    const rawRataTugas = totalTugas / tugas.length;
    const rataTugas = Math.round(rawRataTugas * 100) / 100;
    const rawNilaiAkhir = (0.3 * rawRataTugas) + (0.3 * uts) + (0.4 * uas);
    const nilaiAkhir = Math.round(rawNilaiAkhir * 100) / 100;

    let predikat = 'D';
    if (nilaiAkhir >= 90) {
      predikat = 'A';
    } else if (nilaiAkhir >= 80) {
      predikat = 'B';
    } else if (nilaiAkhir >= 70) {
      predikat = 'C';
    }
    const status = nilaiAkhir >= 75 ? 'Lulus' : 'Remedial';

    return {
      nama: nama.trim(),
      rataTugas,
      nilaiAkhir,
      predikat,
      status,
    };
  }
}
