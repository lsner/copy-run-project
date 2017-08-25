import { toRcFormData } from '@pekon/utilities';

describe('toRcFormData Test', () => {
  let { assert } = require('chai');

  it('should convert nested data to rc-form compatible structure', () => {
    const x = {
      sn: 1,
      items: [
        {
          name: 1,
          spec: [
            {
              url: '1'
            }
          ]
        },
        {
          name: 2
        }
      ]
    };

    const y = {
      sn: {
        value: 1
      },
      'items[0].name': {
        value: 1
      },
      'items[0].spec[0].url': {
        value: "1"
      },
      'items[1].name': {
        value: 2
      },
    };

    const n = toRcFormData(x);

    assert.deepEqual(n, y);
  });
});

