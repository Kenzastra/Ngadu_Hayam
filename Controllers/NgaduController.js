import Masyarakat from "../models/MasyarakatModel.js";
import Pengaduan from "../models/NgaduModel.js";
import Petugas from "../models/PetugasModel.js";
import Tanggapan from "../models/TanggapanModel.js";
import path from "path";
import fs from "fs";

export const getPengaduan = async(req, res)=>{
    try {
        const response = await Pengaduan.findAll();
        res.json(response);
    } catch (error) {
        console.log (error.message);
    }
}

export const getPengaduanById = async(req, res)=>{
    try {
        const response = await Pengaduan.findOne({
            where: {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log (error.message);
    }
}

export const savePengaduan = async(req, res)=>{
    if(req.isi_laporan === null) return res.status(400).json({msg: "Tidak ada pengaduan yang terkirim"});
    const nik = req.body.nik;
    const isi_laporan = req.body.isi_laporan
    const foto = req.files.foto;
    const ext = path.extname(foto.name);
    const fotoName = foto.md5 + ext;
    const allowedType = ['.png','.jpg','.jpeg'];
    const status = req.body.status;

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Gambar Invalid"});
    
    foto.mv(`./public/images/${fotoName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Pengaduan.create({nik: nik, isi_laporan: isi_laporan, foto: fotoName, status: status});
            res.status(201).json({msg: "Pengaduan Sudah Terupload"});
        } catch (error) {
            
        }
    })
}

export const updatePengaduan = async(req, res)=>{

}

export const deletePengaduan = async(req, res)=>{

}
