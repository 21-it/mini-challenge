import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class KonversisuhuService {
  konversiSuhu(nilaiParam: string, dariParam: string, keParam: string) {
    if (!nilaiParam || !dariParam || !keParam) {
      throw new BadRequestException('Query nilai, dari, dan ke wajib diisi');
    }

    const dari = dariParam.toLowerCase().trim();
    const ke = keParam.toLowerCase().trim();
    const satuanValid = ['celsius', 'fahrenheit', 'kelvin'];

    if (!satuanValid.includes(dari) || !satuanValid.includes(ke)) {
      throw new BadRequestException(
        'Satuan hanya boleh celsius, fahrenheit, atau kelvin',
      );
    }

    if (dari === ke) {
      throw new BadRequestException('Satuan asal dan tujuan tidak boleh sama');
    }

    const nilai = Number(nilaiParam);
    if (Number.isNaN(nilai)) {
      throw new BadRequestException('Nilai harus berupa angka');
    }
    if (dari === 'kelvin' && nilai < 0) {
      throw new BadRequestException('Nilai Kelvin tidak boleh kurang dari 0');
    }

    let tempCelsius = nilai;
    if (dari === 'fahrenheit') {
      tempCelsius = ((nilai - 32) * 5) / 9;
    } else if (dari === 'kelvin') {
      tempCelsius = nilai - 273.15;
    }

    let hasil = tempCelsius;
    if (ke === 'fahrenheit') {
      hasil = (tempCelsius * 9) / 5 + 32;
    } else if (ke === 'kelvin') {
      hasil = tempCelsius + 273.15;
    }
    hasil = Math.round(hasil * 100) / 100;
    return {
      nilaiAsal: nilai,
      satuanAsal: dari,
      hasil: hasil,
      satuanHasil: ke,
    };
  }
}
