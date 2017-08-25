import { mapDepth } from '../mapDepth';

describe('mapDepth Test', () => {
  let { assert } = require('chai');

  it('should pass', () => {
    const x = [
      {
        id: 1,
        children: [
          {
            id: 2
          },
          {
            id: 3,
            children: [
              {
                id: 4
              }
            ]
          }
        ]
      }
    ];

    const y = [
      {
        id: 1,
        depth: 1,
        children: [
          {
            id: 2,
            depth: 2
          },
          {
            id: 3,
            depth: 2,
            children: [
              {
                id: 4,
                depth: 3
              }
            ]
          }
        ]
      }
    ];

    const n = mapDepth(x);

    assert.deepEqual(n, y);
  });
});

