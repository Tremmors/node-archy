var test = require('tap').test;
var archy = require('../');

test(function (t) {
    var s = archy({
      label : 'beep',
      nodes : [
        'ity',
        {
          label : 'boop',
          nodes : [
            {
              label : 'o_O',
              nodes : [
                {
                  label : 'oh',
                  nodes : [ 'hello', 'puny' ]
                },
                'human'
              ]
            },
            'party!'
          ]
        }
      ]
    });
    t.equal(s, [
        'beep',
        '├── ity',
        '└─┬ boop',
        '  ├─┬ o_O',
        '  │ ├─┬ oh',
        '  │ │ ├── hello',
        '  │ │ └── puny',
        '  │ └── human',
        '  └── party!',
        ''
    ].join('\n'));
    t.end();
});
