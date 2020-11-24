import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('mysql://root:masterkey@localhost:3306/pitu')

export default sequelize