import mongoose from 'mongoose';

class ConnectDb {
    static async conn (req, res) {
        try{
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }catch(err){
            return res.status(500).send({
                status: 'false',
                message: 'Server error'
            });
        }
    }
}

export default ConnectDb