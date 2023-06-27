import {connect} from 'mongoose';

export const startConnection = async () => {
    try{
        const db = await connect("mongodb+srv://johanmg:DIGCE7hhrG132XGA@cluster0.zijz9as.mongodb.net/mevn-database");
        console.log(db.connection.name);
    }catch(error){
        console.error(error);
    }
}