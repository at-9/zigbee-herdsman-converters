import * as tuya from '../lib/tuya';

const definitions: Definition[] = [
    {
        fingerprint: [{modelID: 'TS0505B', manufacturerName: '_TZ3210_mcm6m1ma'}],
        model: 'DL41-03-10-R-ZB',
        vendor: 'Oz Smart Things',
        description: 'Oz Smart RGBW Zigbee downlight 10w',
        extend: tuya.extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 500]}),
    },
];

module.exports = definitions;
