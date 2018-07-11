const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UsersSchema= new Schema({
    name:String,
    password:String,
    number:String,
    email:String
    // inbox:string
});

const GroupsSchema= new Schema ({
    roles:String,
    users:[UsersSchema]
    // post:[postSchema]
});

const StoreSchema= new Schema({
    name:String,
    location:String,
    inventory:String,
    number:String,
    salesGoal:String,
    managerNotes:String,
    description:String,
    groups:[GroupsSchema] 
});


const  DayDailyForecastData= new Schema({
     cityName:String,
     cityID:String,
    byGeographicCoordinates:String,
    ZIPCode:String,
});

     



    const Forecast= mongoose.model('Forecast',DayDailyForecastData);
    const Stores= mongoose.model('Store', StoreSchema);
    const Groups=mongoose.model('Group', GroupsSchema);
    const Users=mongoose.model('Users',UsersSchema);
    
    



module.exports={
    Stores,Groups,Users,Forecast
    }
