import 'dotenv/config';

export default {
    expo: {
        name: 'enVivo',
        slug: 'envivo-live-front',
        scheme: 'envivolive',
        extra: {
            TM_API_KEY: process.env.TM_API_KEY,
        },
    },
};