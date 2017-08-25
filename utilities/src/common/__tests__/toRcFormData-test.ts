import { findInMenu } from '../findInMenu';

describe('toRcFormData Test', () => {
  let { assert } = require('chai');

  it('should convert nested data to rc-form compatible structure', () => {
    const x = [{
      "name": "\u5206\u7c7b\u7ba1\u7406",
      "link": "",
      "icon": "fa-gift",
      "id": "1",
      "children": [{
        "name": "\u5206\u7c7b\u5217\u8868",
        "link": "\/weshop\/admin\/category\/list",
        "icon": "",
        "id": "11"
      }]
    }, {
      "name": "\u5546\u54c1\u7ba1\u7406",
      "link": "",
      "icon": "fa-gift",
      "id": "2",
      "children": [
        { "name": "\u5546\u54c1\u5e93", "link": "\/weshop\/admin\/goods\/list", "icon": "", "id": "11" }
      ]
    }];
    const n = findInMenu(x, "\/weshop\/admin\/category\/list");

    assert.deepEqual(n, { id: "11", pid: "1" });
  });
});

