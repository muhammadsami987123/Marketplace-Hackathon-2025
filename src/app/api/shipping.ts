// import Shippo from 'shippo';

// const shippo = new Shippo(process.env.SHIPPO_API_KEY);

// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         const { addressFrom, addressTo, parcel } = req.body;

//         const rates = await shippo.shipment.create({
//             address_from: addressFrom,
//             address_to: addressTo,
//             parcels: [parcel],
//             async: false
//         });

//         res.status(500).json({ message: 'Shipping rate error', error: (error as Error).message });
//     } catch (error) {
//         res.status(500).json({ message: 'Shipping rate error', error: error.message });
//     }
// }
