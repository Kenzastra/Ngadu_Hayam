import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Tanggapan = db.define('tanggapan',{
    id_tanggapan : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    id_pengaduan : DataTypes.INTEGER,
    tgl_tanggapan : DataTypes.DATEONLY,
    tanggapan : DataTypes.STRING,
    id_petugas : DataTypes.INTEGER
},{
    freezeTableName : true
});

export default Tanggapan;

(async()=>{
    await db.sync();
}) ();