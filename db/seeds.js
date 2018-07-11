require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, );
mongoose.Promise = global.Promise;
const { Stores, Groups, Users,Forecast } = require('./schema');

const db = mongoose.connection
const saved = async () => {

    await Stores.remove()
    await Groups.remove()
    await Users.remove()

    const Jill = new Users({ name: 'Jill', password: 'xyz', number: '404-519-4343', email: 'anything' })
    await Jill.save()
    const Tonny = new Users({ name: 'Tonny', password: 'beebo', number: '678-387-9547', email: 'anything' })
    await Tonny.save()
    const Momo = new Users({ name: 'Momo', password: 'Moe', number: '678-883-4427', email: 'anything' })
    await Momo.save()
    const Joesie = new Users({ name: 'Joesie', password: 'truelove', number: '770-516-1073', email: 'anything' })
    await Joesie.save()

    const manager = new Groups({ roles: 'manager', users: [Tonny, Jill] })
    await manager.save() 
    const orthodontist = new Groups({ roles: 'orthodontist', users: [Momo, Joesie] })
    orthodontist.save()

    const IHOP = new Stores({ name: 'IHOP', number:'(770) 507-1911', location: 'Stockbridge 138', inventory: 'Pancakes', salesGoal: '500,000', managerNotes: 'Table turn time is low, good job',description:'IHOP is an American multinational pancake house/diner-style table service restaurant chain that specializes in breakfast foods. ' ,groups: [manager] })
    await IHOP.save()

    const BestCareDental = new Stores({ name: 'Best Care Dental', number:'(404) 685-8605', location: 'Henry County, Georgia', inventory: 'dental tools', salesGoal: '5,000', managerNotes: 'No appointment today after noon, please make them calls ', description:'For general and cosmetic dentistry, including restorative dental care, rely on Best CAre Dental' ,groups: [orthodontist] })
    await BestCareDental.save()



    

    console.log('saved')
    db.close()
}
saved()

