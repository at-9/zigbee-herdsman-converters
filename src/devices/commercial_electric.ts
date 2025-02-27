import extend from '../lib/extend';

const definitions: Definition[] = [
    {
        zigbeeModel: ['Zigbee CCT Downlight'],
        model: '53170161',
        vendor: 'Commercial Electric',
        description: 'Matte White Recessed Retrofit Smart Led Downlight - 4 Inch',
        extend: extend.light_onoff_brightness_colortemp({noConfigure: true}),
        configure: async (device, coordinatorEndpoint, logger) => {
            await extend.light_onoff_brightness_colortemp().configure(device, coordinatorEndpoint, logger);
            device.powerSource = 'Mains (single phase)';
            device.save();
        },
    },
];

module.exports = definitions;
