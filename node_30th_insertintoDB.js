const dbConnect = require('./node_29th_dbConnect');

const insert = async () => {
    try {
        const db = await dbConnect();
        const result = await db.insertMany(
            [
                { name: 'max 1', brand: 'vivo', price: 320, category: 'mobile' },
                { name: 'max 2', brand: 'vivo', price: 420, category: 'mobile' },
                { name: 'max 3', brand: 'vivo', price: 520, category: 'mobile' }
            ]
        );

        if (result.acknowledged) {
            console.log('Data Inserted successfully');
        } else {
            console.log('Data insertion failed');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

insert();