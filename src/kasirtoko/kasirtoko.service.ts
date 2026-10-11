import { BadRequestException, Injectable } from '@nestjs/common';
import { KasirTokoDto } from './dto/kasirtoko.dto.js';

@Injectable()
export class KasirtokoService {
  checkout(memberParam: string, metodeParam: string, dto: KasirTokoDto) {
    const member = memberParam?.toLowerCase().trim();
    const metode = metodeParam?.toLowerCase().trim();

    const diskonMemberMap: Record<string, number> = {
      reguler: 0,
      silver: 5,
      gold: 10,
    };

    if (!member || !(member in diskonMemberMap)) {
      throw new BadRequestException('Member hanya boleh reguler, silver, atau gold');
    }
    if (!metode || !['tunai', 'qris'].includes(metode)) {
      throw new BadRequestException('Metode pembayaran hanya boleh tunai atau qris');
    }

    const rincian = [];
    let totalItem = 0;
    let subtotalKeseluruhan = 0;

    for (const item of dto.items) {
      const subtotalItem = item.harga * item.qty;
      totalItem += item.qty;
      subtotalKeseluruhan += subtotalItem;

      rincian.push({
        nama: item.nama.trim(),
        harga: item.harga,
        qty: item.qty,
        subtotal: subtotalItem,
      });
    }

    const persenDiskon = diskonMemberMap[member];
    const diskon = (subtotalKeseluruhan * persenDiskon) / 100;
    const subtotalSetelahDiskon = subtotalKeseluruhan - diskon;

    let biayaAdmin = 0;
    if (metode === 'qris') {
      biayaAdmin = (subtotalSetelahDiskon * 1) / 100;
    }
    const total = subtotalSetelahDiskon + biayaAdmin;

    return {
      member,
      metode,
      rincian,
      totalItem,
      subtotal: subtotalKeseluruhan,
      diskon,
      biayaAdmin,
      total,
    };
  }
}
