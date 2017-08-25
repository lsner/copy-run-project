const SI = require('seamless-immutable').static;

describe('Sample Test', () => {
  let { assert } = require('chai');

  it('should pass a sample test', () => {

    const x = {
      a: {
        b: {
          c: 1,
          d: 2
        }
      },
      e: {
        f: 3,
        g: 4
      }
    };

    const y = {
      a: {
        b: {
          d: 3
        }
      }
    };

    const z = SI.merge(x, y, { deep: true });

    assert({
      a: {
        b: {
          c: 1,
          d: 4
        },
      },
      e: {
        f: 3,
        g: 4
      }
    }, SI.asMutable(z, { deep: true }));
  });
});
