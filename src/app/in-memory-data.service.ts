import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";


@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const lstPerson = [
      { id: 1, FirstName: 'Eleven', LastName: '11', Birthday: '11-02-2012', Address: 'HaNoi', Sex: 'Nam' },
      { id: 2, FirstName: 'Twelve', LastName: '12', Birthday: '11-10-2012', Address: 'Hà nam', Sex: 'Nữ' },
      { id: 3, FirstName: 'Thirteen', LastName: '13', Birthday: '11-22-2012', Address: 'Hải Phòng', Sex: 'Nữ' },
      { id: 4, FirstName: 'FourTeen', LastName: '14', Birthday: '11-10-2012', Address: 'Thái Bình', Sex: 'Nam' },
      { id: 5, FirstName: 'Fifteen', LastName: '15', Birthday: '11-29-2012', Address: 'Quảng Nam', Sex: 'Nam' },
      { id: 6, FirstName: 'Sixteen', LastName: '16', Birthday:'2-10-2012', Address: 'Huế', Sex: 'Nam' },
      { id: 7, FirstName: 'Seventeen', LastName: '17', Birthday: '11-10-2012', Address: 'Sai Gòn', Sex: 'Nữ' },
      { id: 8, FirstName: 'Eighteen', LastName: '18', Birthday: '10-30-2012', Address: 'HaNoi', Sex: 'Nam' },
      { id: 9, FirstName: 'Nineteen', LastName: '19', Birthday: '11-10-2012', Address: 'nam định', Sex: 'Nữ' },
      { id: 10, FirstName: 'Twenty', LastName: '20', Birthday: '11-10-2012', Address: 'Lào', Sex: 'Nam' }
    ];
    return { lstPerson };

  }

}
