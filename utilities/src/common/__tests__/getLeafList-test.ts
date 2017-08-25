import { getLeafList } from '../getLeafList';

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
    const y = [2, 4];
    const z = [1, 3];
    const n = getLeafList(x);

    assert.deepEqual(n, { leafList: y, oList: z });
  });
});

