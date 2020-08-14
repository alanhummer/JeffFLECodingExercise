import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let orders = [
      {
        id: 1,
        timestamp: '2018-11-11',
        total: '70',
        customer: 'Andre',
        items: [
          '1',
          '2'
        ]
      },
      {
        id: 2,
        timestamp: '2018-12-31',
        total: '60',
        customer: 'Andre',
        items: [
          '2',
          '3'
        ]
      },
      {
        id: 3,
        timestamp: '2019-01-15',
        total: '50',
        customer: 'Andre',
        items: [
          '3',
          '1'
        ]
      }
    ];

    let items = [
      {
        id: 1,
        title: 'Men\'s Pullover',
        price: '30'
      },
      {
        id: 2,
        title: 'Women\'s Dress',
        price: '40'
      },
      {
        id: 3,
        title: 'Women\'s Blouse',
        price: '20'
      }
    ];

    return { orders, items };
  }

}
